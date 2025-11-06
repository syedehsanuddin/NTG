import devEnvironment from "../environments/dev-env";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const apiEndPoints = require("../repository/apiEndPoints.json");

interface ApiResource {
    name: string;
    path: string;
}

interface ApiApplication {
    apiName: string;
    resources: ApiResource[];
}

export function getEndpointUrl(endpointName: string, params?: Record<string, string>): string {
    const env = devEnvironment;
    const apiEndpoints = apiEndPoints as { applications: ApiApplication[] };

    // Find the endpoint across all applications
    for (const application of apiEndpoints.applications) {
        const resource = application.resources.find((r) => r.name === endpointName);
        if (resource) {
            let url = resource.path;

            // Replace {apiVersion} with actual version from environment
            if (url.includes("{apiVersion}")) {
                url = url.replace("{apiVersion}", env.apiVersion || "v1");
            }

            // Replace any other path parameters
            if (params) {
                Object.keys(params).forEach((key) => {
                    url = url.replace(`{${key}}`, params[key]);
                });
            }

            // Combine base URL with path (ensure proper slash)
            const baseUrl = env.baseUrl?.endsWith("/") ? env.baseUrl.slice(0, -1) : env.baseUrl;
            const path = url.startsWith("/") ? url : `/${url}`;
            return `${baseUrl}${path}`;
        }
    }

    throw new Error(`Endpoint '${endpointName}' not found in apiEndPoints.json`);
}

