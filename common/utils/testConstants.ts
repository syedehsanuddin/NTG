import * as fs from "fs";
import * as path from "path";

const TEST_CONSTANTS_FILE = path.join(process.cwd(), "common", "repository", "testConstants.json");

interface TestConstants {
    [project: string]: {
        [key: string]: string;
    };
}

let cachedConstants: TestConstants | null = null;

/**
 * Gets a test constant value for a specific project
 * @param key - The constant key (e.g., "branchId")
 * @param project - The project name (e.g., "ntg-rms")
 * @returns The constant value or undefined if not found
 */
export function getTestConstant(key: string, project: string = "ntg-rms"): string | undefined {
    try {
        if (!cachedConstants) {
            if (!fs.existsSync(TEST_CONSTANTS_FILE)) {
                console.warn(`Test constants file not found: ${TEST_CONSTANTS_FILE}`);
                return undefined;
            }
            const content = fs.readFileSync(TEST_CONSTANTS_FILE, "utf-8");
            cachedConstants = JSON.parse(content);
        }
        
        return cachedConstants?.[project]?.[key];
    } catch (error) {
        console.warn(`Warning: Could not read test constants:`, error);
        return undefined;
    }
}

/**
 * Gets the branch ID for a specific project
 * @param project - The project name (e.g., "ntg-rms")
 * @returns The branch ID or undefined if not found
 */
export function getBranchId(project: string = "ntg-rms"): string | undefined {
    return getTestConstant("branchId", project);
}

