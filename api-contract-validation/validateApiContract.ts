#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface Endpoint {
    path: string;
    methods: string[];
}

interface Baseline {
    timestamp: string;
    swaggerUrl: string;
    totalEndpoints: number;
    endpoints: Endpoint[];
}

interface Config {
    swaggerUrl: string;
    description?: string;
    options?: {
        updateBaselineOnMatch?: boolean;
        failOnMismatch?: boolean;
        ignoreDeprecated?: boolean;
    };
}

interface SwaggerSpec {
    paths: {
        [path: string]: {
            [method: string]: any;
        };
    };
}

class ApiContractValidator {
    private configPath: string;
    private baselinePath: string;
    private config: Config;
    private baseline: Baseline;

    constructor() {
        const scriptDir = path.dirname(__filename);
        this.configPath = path.join(scriptDir, 'api-contract.config.json');
        this.baselinePath = path.join(scriptDir, 'api-contract-baseline.json');
        this.config = this.loadConfig();
        this.baseline = this.loadBaseline();
    }

    private loadConfig(): Config {
        try {
            const configContent = fs.readFileSync(this.configPath, 'utf-8');
            return JSON.parse(configContent);
        } catch (error) {
            console.error(`❌ Error loading config: ${error}`);
            process.exit(1);
        }
    }

    private loadBaseline(): Baseline {
        try {
            const baselineContent = fs.readFileSync(this.baselinePath, 'utf-8');
            const baseline = JSON.parse(baselineContent);
            // Return empty baseline if not initialized
            if (!baseline.timestamp || baseline.totalEndpoints === 0) {
                return {
                    timestamp: '',
                    swaggerUrl: '',
                    totalEndpoints: 0,
                    endpoints: []
                };
            }
            return baseline;
        } catch (error) {
            return {
                timestamp: '',
                swaggerUrl: '',
                totalEndpoints: 0,
                endpoints: []
            };
        }
    }

    private async fetchSwaggerSpec(url: string): Promise<SwaggerSpec> {
        try {
            console.log(`📡 Fetching Swagger spec from: ${url}`);
            
            // Try to use axios if available, otherwise use fetch
            let response: any;
            let data: any;

            try {
                // Try axios first (more reliable)
                const axios = require('axios');
                response = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                data = response.data;
            } catch (axiosError: any) {
                // Fallback to fetch if axios not available
                if (axiosError.code === 'MODULE_NOT_FOUND') {
                    // Try fetch (Node.js 18+)
                    if (typeof fetch !== 'undefined') {
                        const fetchResponse = await fetch(url);
                        if (!fetchResponse.ok) {
                            throw new Error(`HTTP error! status: ${fetchResponse.status}`);
                        }
                        data = await fetchResponse.json();
                    } else {
                        throw new Error('Neither axios nor fetch is available. Please install axios: npm install axios');
                    }
                } else {
                    throw axiosError;
                }
            }

            return data as SwaggerSpec;
        } catch (error: any) {
            console.error(`❌ Error fetching Swagger spec: ${error.message}`);
            if (error.code === 'MODULE_NOT_FOUND') {
                console.error('   💡 Install axios: npm install axios');
            }
            throw error;
        }
    }

    private extractEndpoints(swaggerSpec: SwaggerSpec): Endpoint[] {
        const endpoints: Endpoint[] = [];
        const paths = swaggerSpec.paths || {};

        for (const [path, pathItem] of Object.entries(paths)) {
            const methods: string[] = [];
            const httpMethods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];

            for (const method of httpMethods) {
                if (pathItem[method]) {
                    // Check if deprecated
                    const isDeprecated = pathItem[method].deprecated === true;
                    if (this.config.options?.ignoreDeprecated && isDeprecated) {
                        continue;
                    }
                    methods.push(method.toUpperCase());
                }
            }

            if (methods.length > 0) {
                endpoints.push({
                    path: path,
                    methods: methods.sort()
                });
            }
        }

        return endpoints.sort((a, b) => a.path.localeCompare(b.path));
    }

    private compareEndpoints(current: Endpoint[], baseline: Endpoint[]): {
        missing: Endpoint[];
        added: Endpoint[];
        changed: Array<{ path: string; baselineMethods: string[]; currentMethods: string[] }>;
    } {
        const missing: Endpoint[] = [];
        const added: Endpoint[] = [];
        const changed: Array<{ path: string; baselineMethods: string[]; currentMethods: string[] }> = [];

        // Create maps for easier lookup
        const baselineMap = new Map<string, Endpoint>();
        baseline.forEach(ep => baselineMap.set(ep.path, ep));

        const currentMap = new Map<string, Endpoint>();
        current.forEach(ep => currentMap.set(ep.path, ep));

        // Find missing (in baseline but not in current)
        baseline.forEach(baselineEp => {
            const currentEp = currentMap.get(baselineEp.path);
            if (!currentEp) {
                missing.push(baselineEp);
            } else {
                // Check if methods changed
                const baselineMethods = baselineEp.methods.sort().join(',');
                const currentMethods = currentEp.methods.sort().join(',');
                if (baselineMethods !== currentMethods) {
                    changed.push({
                        path: baselineEp.path,
                        baselineMethods: baselineEp.methods,
                        currentMethods: currentEp.methods
                    });
                }
            }
        });

        // Find added (in current but not in baseline)
        current.forEach(currentEp => {
            if (!baselineMap.has(currentEp.path)) {
                added.push(currentEp);
            }
        });

        return { missing, added, changed };
    }

    private saveBaseline(endpoints: Endpoint[], swaggerUrl: string): void {
        const baseline: Baseline = {
            timestamp: new Date().toISOString(),
            swaggerUrl: swaggerUrl,
            totalEndpoints: endpoints.length,
            endpoints: endpoints
        };

        fs.writeFileSync(this.baselinePath, JSON.stringify(baseline, null, 2));
        console.log(`✅ Baseline saved to: ${this.baselinePath}`);
    }

    private printResults(
        currentEndpoints: Endpoint[],
        comparison: {
            missing: Endpoint[];
            added: Endpoint[];
            changed: Array<{ path: string; baselineMethods: string[]; currentMethods: string[] }>;
        }
    ): void {
        console.log('\n' + '='.repeat(80));
        console.log('📊 API Contract Validation Results');
        console.log('='.repeat(80));

        // Count comparison
        console.log(`\n📈 Endpoint Count:`);
        console.log(`   Baseline: ${this.baseline.totalEndpoints}`);
        console.log(`   Current:  ${currentEndpoints.length}`);
        
        if (this.baseline.totalEndpoints === currentEndpoints.length) {
            console.log(`   ✅ Count matches!`);
        } else {
            console.log(`   ⚠️  Count mismatch! Difference: ${currentEndpoints.length - this.baseline.totalEndpoints}`);
        }

        // Missing endpoints
        if (comparison.missing.length > 0) {
            console.log(`\n❌ Missing Endpoints (${comparison.missing.length}):`);
            comparison.missing.forEach(ep => {
                console.log(`   - ${ep.path} [${ep.methods.join(', ')}]`);
            });
        }

        // Added endpoints
        if (comparison.added.length > 0) {
            console.log(`\n➕ New Endpoints (${comparison.added.length}):`);
            comparison.added.forEach(ep => {
                console.log(`   + ${ep.path} [${ep.methods.join(', ')}]`);
            });
        }

        // Changed endpoints
        if (comparison.changed.length > 0) {
            console.log(`\n🔄 Changed Endpoints (${comparison.changed.length}):`);
            comparison.changed.forEach(change => {
                console.log(`   ~ ${change.path}`);
                console.log(`     Baseline: [${change.baselineMethods.join(', ')}]`);
                console.log(`     Current:  [${change.currentMethods.join(', ')}]`);
            });
        }

        // Summary
        const hasChanges = comparison.missing.length > 0 || 
                          comparison.added.length > 0 || 
                          comparison.changed.length > 0;

        console.log('\n' + '='.repeat(80));
        if (!hasChanges && this.baseline.totalEndpoints === currentEndpoints.length) {
            console.log('✅ All endpoints match! API contract is consistent.');
            console.log('='.repeat(80) + '\n');
        } else {
            console.log('⚠️  API contract changes detected!');
            console.log('='.repeat(80) + '\n');
        }
    }

    async validate(updateBaseline: boolean = false): Promise<boolean> {
        const swaggerUrl = this.config.swaggerUrl || process.argv[2];

        if (!swaggerUrl) {
            console.error('❌ Swagger URL is required!');
            console.error('   Set it in api-contract.config.json or pass as argument:');
            console.error('   npm run validate-api <swagger-url>');
            process.exit(1);
        }

        try {
            // Fetch Swagger spec
            const swaggerSpec = await this.fetchSwaggerSpec(swaggerUrl);

            // Extract endpoints
            const currentEndpoints = this.extractEndpoints(swaggerSpec);
            console.log(`✅ Extracted ${currentEndpoints.length} endpoints`);

            // Check if baseline exists
            const isBaselineEmpty = !this.baseline.timestamp || this.baseline.totalEndpoints === 0;

            if (isBaselineEmpty || updateBaseline) {
                console.log('\n📝 Creating/Updating baseline...');
                this.saveBaseline(currentEndpoints, swaggerUrl);
                console.log('✅ Baseline created/updated successfully!\n');
                return true;
            }

            // Compare with baseline
            const comparison = this.compareEndpoints(currentEndpoints, this.baseline.endpoints);

            // Print results
            this.printResults(currentEndpoints, comparison);

            // Check if validation passed
            const hasChanges = comparison.missing.length > 0 || 
                              comparison.added.length > 0 || 
                              comparison.changed.length > 0;
            const countMatches = this.baseline.totalEndpoints === currentEndpoints.length;

            const isValid = !hasChanges && countMatches;

            if (!isValid && this.config.options?.failOnMismatch) {
                console.error('❌ Validation failed! API contract has changed.');
                process.exit(1);
            }

            return isValid;
        } catch (error) {
            console.error(`❌ Validation error: ${error}`);
            process.exit(1);
        }
    }
}

// Main execution
const args = process.argv.slice(2);
const updateBaseline = args.includes('--update') || args.includes('-u');

const validator = new ApiContractValidator();
validator.validate(updateBaseline).catch(error => {
    console.error(`❌ Fatal error: ${error}`);
    process.exit(1);
});

