/* eslint-disable @typescript-eslint/no-explicit-any */
import "dotenv/config";
import devEnvironment from "../environments/dev-env";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const apiEndPoints = require("../repository/apiEndPoints.json");

interface ApiApplication {
    project?: string;
    apiName: string;
    baseUrl?: string;
    apiVersion?: string;
    resources: any[];
}

let cachedToken: Record<string, string> = {};
let cachedCookie: Record<string, string> = {};
let tokenFetchedAt: Record<string, number> = {};

function getBaseUrlForProject(project?: string): string {
    const apiEndpoints = apiEndPoints as { applications: ApiApplication[] };
    
    if (project) {
        const application = apiEndpoints.applications.find((app) => app.project === project);
        if (application && application.baseUrl) {
            return application.baseUrl as string;
        }
    }
    
    // Fallback to devEnvironment
    return devEnvironment.baseUrl || "http://localhost:4000";
}

export async function getAuthToken(project?: string): Promise<string> {
    const projectKey = project || "default";
    
    if (cachedToken[projectKey] && tokenFetchedAt[projectKey] && Date.now() - tokenFetchedAt[projectKey] < 50 * 60 * 1000) {
        return cachedToken[projectKey];
    }

    const email = process.env.NTG_AUTH_EMAIL || "";
    const password = process.env.NTG_AUTH_PASSWORD || "";
    
    if (!email || !password) {
        throw new Error("Missing NTG_AUTH_EMAIL or NTG_AUTH_PASSWORD in environment");
    }

    const baseUrl = getBaseUrlForProject(project);
    const url = `${baseUrl}/api/v1/auth/login`;

    // Use Playwright request API for consistency
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { request } = require("@playwright/test");
    const context = await request.newContext();

    let setCookieHeader: string | undefined;
    try {
        // NTG-RMS and NTG-SMS don't use activeRole; NTG-Ticket does
        const loginPayload: any = { email, password };
        if (project !== "ntg-rms" && project !== "ntg-sms") {
            loginPayload.activeRole = "ADMIN";
        }
        
        const response = await context.post(url, {
            data: loginPayload,
            headers: {
                "Content-Type": "application/json"
            }
        });

        const cookies = response.headers()["set-cookie"];
        if (cookies) {
            const cookieArray = Array.isArray(cookies) ? cookies : [cookies];
            setCookieHeader = cookieArray.map((c: string) => c.split(";")[0]).join("; ");
        }

        const data = await response.json();
        
        // Extract token - handle different response formats:
        // NTG-Ticket format: { data: { access_token: "..." } }
        // NTG-RMS format: { accessToken: "...", refreshToken: "...", user: {...} }
        let accessToken: string | undefined;
        
        if (data?.data?.access_token) {
            // NTG-Ticket format
            accessToken = data.data.access_token;
        } else if (data?.accessToken) {
            // NTG-RMS format
            accessToken = data.accessToken;
        }
        
        if (!accessToken) {
            throw new Error("Auth token not found in response");
        }
        
        await context.dispose();
        
        cachedToken[projectKey] = accessToken;
        cachedCookie[projectKey] = setCookieHeader || "";
        tokenFetchedAt[projectKey] = Date.now();
        return accessToken;
    } catch (err: any) {
        await context.dispose();
        throw err;
    }
}

export async function getAuthHeaders(project?: string): Promise<Record<string, string>> {
    const projectKey = project || "default";
    try {
        const token = await getAuthToken(project);
        return { Authorization: `Bearer ${token}`, Accept: "application/json" };
    } catch (err: any) {
        // Fallback: if cookie was set, return Cookie header
        if (cachedCookie[projectKey]) {
            return { Cookie: cachedCookie[projectKey], Accept: "application/json" };
        }
        throw new Error("Unable to acquire auth headers");
    }
}


