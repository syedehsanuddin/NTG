/* eslint-disable @typescript-eslint/no-explicit-any */
import "dotenv/config";
import devEnvironment from "../environments/dev-env";

let cachedToken: string | null = null;
let cachedCookie: string | null = null;
let tokenFetchedAt: number | null = null;

export async function getAuthToken(): Promise<string> {
    if (cachedToken && tokenFetchedAt && Date.now() - tokenFetchedAt < 50 * 60 * 1000) {
        return cachedToken;
    }

    const email = process.env.NTG_AUTH_EMAIL || "";
    const password = process.env.NTG_AUTH_PASSWORD || "";
    if (!email || !password) {
        throw new Error("Missing NTG_AUTH_EMAIL or NTG_AUTH_PASSWORD in environment");
    }

    const url = `${devEnvironment.baseUrl}/api/v1/auth/login`;

    // Use Playwright request API for consistency
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { request } = require("@playwright/test");
    const context = await request.newContext();

    let setCookieHeader: string | undefined;
    try {
        const response = await context.post(url, {
            data: { email, password, "activeRole":"ADMIN" },
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
        // Extract token from response.data.access_token
        const accessToken: string | undefined = data?.data?.access_token;
        if (!accessToken) {
            throw new Error("Auth token not found in response");
        }
        
        await context.dispose();
        
        cachedToken = accessToken;
        cachedCookie = setCookieHeader || null;
        tokenFetchedAt = Date.now();
        return accessToken;
    } catch (err: any) {
        await context.dispose();
        throw err;
    }
}

export async function getAuthHeaders(): Promise<Record<string, string>> {
    try {
        const token = await getAuthToken();
        return { Authorization: `Bearer ${token}`, Accept: "application/json" };
    } catch {
        // Fallback: if cookie was set, return Cookie header
        if (cachedCookie) {
            return { Cookie: cachedCookie, Accept: "application/json" };
        }
        throw new Error("Unable to acquire auth headers");
    }
}


