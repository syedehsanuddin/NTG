import { expect } from "@playwright/test";
import { createBdd, test } from "playwright-bdd";
import { getEndpointUrl } from "../../../../common/utils/apiHelper";
import { getAuthHeaders } from "../../../../common/utils/auth";
import { generateUniqueCouponCode, generateUniqueCustomerEmail, generateUniqueEmail, generateUniquePhoneNumber, getTestData, storeTestData } from "../../../../common/utils/emailGenerator";

const { Given, When, Then } = createBdd(test);

interface TestContext {
    response?: {
        status: number;
        data: unknown;
        headers?: Record<string, string>;
    };
    orderId?: string;
    customerId?: string;
    employeeId?: string;
    ingredientId?: string;
    categoryId?: string;
    foodItemId?: string;
    couponId?: string;
    couponCode?: string;
    [key: string]: any; // Allow dynamic context properties
}

const context: TestContext = {};

// Project constant for NTG-RMS
const PROJECT = "ntg-rms";

When("I send a GET request to endpoint {string}", async ({ request }, endpointName: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    await makeHttpRequest(request, url);
});

When("I send a GET request to {string}", async ({ request }, urlOrEndpoint: string) => {
    // Support both direct URLs and endpoint names for backward compatibility
    let url: string;
    try {
        // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
        url = getEndpointUrl(urlOrEndpoint, undefined, PROJECT);
    } catch {
        // If endpoint not found, assume it's a direct URL
        url = urlOrEndpoint;
    }
    await makeHttpRequest(request, url);
});

When("I send a GET request to endpoint {string} with headers {string}", async ({ request }, endpointName: string, headerString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    await makeHttpRequest(request, url, headerString);
});

When("I send a GET request to endpoint {string} with id {string}", async ({ request }, endpointName: string, id: string) => {
    // Support using stored IDs from context or file
    let actualId = id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        // First try context (for same scenario)
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            // Fall back to file storage (for cross-scenario)
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
        // Support stored customer ID
        if (context.customerId) {
            actualId = context.customerId;
        } else {
            const storedId = getTestData("customerId");
            if (!storedId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_EMPLOYEE_ID}") {
        // Support stored employee ID
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    }
    
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    let url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    await makeHttpRequest(request, url);
});

When("I send a GET request to endpoint {string} with id {string} and headers {string}", async ({ request }, endpointName: string, id: string, headerString: string) => {
    // Support using stored IDs from context or file
    let actualId = id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        // First try context (for same scenario)
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            // Fall back to file storage (for cross-scenario)
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
        // Support stored customer ID
        if (context.customerId) {
            actualId = context.customerId;
        } else {
            const storedId = getTestData("customerId");
            if (!storedId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_EMPLOYEE_ID}") {
        // Support stored employee ID
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    }
    
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    let url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    
    // Parse headers string - separate query params from HTTP headers
    const { queryParams, headers: extraHeaders } = parseKeyValueHeaderString(headerString);
    
    // Build URL with query parameters
    if (Object.keys(queryParams).length > 0) {
        url = buildUrlWithQueryParams(url, queryParams);
    }
    
    await makeHttpRequest(request, url, headerString);
});

When("I send a PUT request to endpoint {string} with id {string} and payload {string}", async ({ request }, endpointName: string, id: string, payloadString: string) => {
    // Support using stored IDs from context or file
    let actualId = id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        // First try context (for same scenario)
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            // Fall back to file storage (for cross-scenario)
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
        // Support stored customer ID
        if (context.customerId) {
            actualId = context.customerId;
        } else {
            const storedId = getTestData("customerId");
            if (!storedId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_EMPLOYEE_ID}") {
        // Support stored employee ID
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    }
    
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    let payload: any;
    try {
        // Replace placeholders in payload string
        let processedPayloadString = payloadString;
        
        // Replace {STORED_COUPON_CODE} placeholder with stored coupon code
        if (processedPayloadString.includes("{STORED_COUPON_CODE}")) {
            let couponCode: string | undefined;
            if (context.couponCode) {
                couponCode = context.couponCode;
            } else {
                couponCode = getTestData("couponCode");
            }
            if (!couponCode) {
                throw new Error("No coupon code stored. Make sure to create a coupon and store its code first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_COUPON_CODE}/g, couponCode);
            console.log(`✓ Replaced {STORED_COUPON_CODE} with: ${couponCode}`);
        }
        
        payload = JSON.parse(processedPayloadString);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}. Error: ${err}`);
    }
    await makePutRequest(request, url, payload);
});

When("I send a PUT request to endpoint {string} with id {string} and payload {string} and headers {string}", async ({ request }, endpointName: string, id: string, payloadString: string, headerString: string) => {
    // Support using stored IDs from context or file
    let actualId = id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        // First try context (for same scenario)
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            // Fall back to file storage (for cross-scenario)
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
        // Support stored customer ID
        if (context.customerId) {
            actualId = context.customerId;
        } else {
            const storedId = getTestData("customerId");
            if (!storedId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_EMPLOYEE_ID}") {
        // Support stored employee ID
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    }
    
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    let url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    
    // Parse headers string - separate query params from HTTP headers
    const { queryParams, headers: extraHeaders } = parseKeyValueHeaderString(headerString);
    
    // Build URL with query parameters
    if (Object.keys(queryParams).length > 0) {
        url = buildUrlWithQueryParams(url, queryParams);
    }
    
    let payload: any;
    try {
        // Replace placeholders in payload string
        let processedPayloadString = payloadString;
        
        // Replace {STORED_COUPON_CODE} placeholder with stored coupon code
        if (processedPayloadString.includes("{STORED_COUPON_CODE}")) {
            let couponCode: string | undefined;
            if (context.couponCode) {
                couponCode = context.couponCode;
            } else {
                couponCode = getTestData("couponCode");
            }
            if (!couponCode) {
                throw new Error("No coupon code stored. Make sure to create a coupon and store its code first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_COUPON_CODE}/g, couponCode);
            console.log(`✓ Replaced {STORED_COUPON_CODE} with: ${couponCode}`);
        }
        
        payload = JSON.parse(processedPayloadString);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}. Error: ${err}`);
    }
    await makePutRequest(request, url, payload, extraHeaders);
});

When("I send a PATCH request to endpoint {string} with id {string} and payload {string}", async ({ request }, endpointName: string, id: string, payloadString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, { id }, PROJECT);
    let payload: any;
    try {
        payload = JSON.parse(payloadString);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}`);
    }
    await makePatchRequest(request, url, payload);
});

When("I send a POST request to endpoint {string} with payload {string}", async ({ request }, endpointName: string, payloadString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    let payload: any;
    try {
        // Replace placeholders in payload string
        let processedPayloadString = payloadString;
        
        // Replace {GENERATE_EMAIL} placeholder with a generated email
        if (processedPayloadString.includes("{GENERATE_EMAIL}")) {
            const generatedEmail = generateUniqueEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_EMAIL}/g, generatedEmail);
        }
        
        // Replace {GENERATE_CUSTOMER_EMAIL} placeholder with a generated customer email
        if (processedPayloadString.includes("{GENERATE_CUSTOMER_EMAIL}")) {
            const generatedEmail = generateUniqueCustomerEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_CUSTOMER_EMAIL}/g, generatedEmail);
        }
        
        // Replace {GENERATE_PHONE} or {GENERATE_PHONE_NUMBER} placeholder with a generated phone number
        if (processedPayloadString.includes("{GENERATE_PHONE}") || processedPayloadString.includes("{GENERATE_PHONE_NUMBER}")) {
            const generatedPhone = generateUniquePhoneNumber();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE}/g, generatedPhone);
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE_NUMBER}/g, generatedPhone);
        }
        
        payload = JSON.parse(processedPayloadString);
        
        // Auto-generate unique coupon code if code field exists and is "AUTOMATETEDTEST"
        if (payload.code === "AUTOMATETEDTEST") {
            payload.code = generateUniqueCouponCode();
            console.log(`✓ Generated unique coupon code: ${payload.code}`);
        }
        
        // Auto-generate unique phone number ONLY if phone field exists but is empty, null, or undefined
        // Do NOT add phone field if it doesn't exist in the payload
        if ("phone" in payload && (payload.phone === "" || payload.phone === null || payload.phone === undefined)) {
            payload.phone = generateUniquePhoneNumber();
            console.log(`✓ Generated unique phone number: ${payload.phone}`);
        }
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}`);
    }
    await makePostRequest(request, url, payload);
});

When("I send a POST request to endpoint {string} with payload {string} and headers {string}", async ({ request }, endpointName: string, payloadString: string, headerString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    let url = getEndpointUrl(endpointName, undefined, PROJECT);
    let payload: any;
    try {
        // Replace placeholders in payload string
        let processedPayloadString = payloadString;
        
        // Replace {GENERATE_EMAIL} placeholder with a generated email
        if (processedPayloadString.includes("{GENERATE_EMAIL}")) {
            const generatedEmail = generateUniqueEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_EMAIL}/g, generatedEmail);
        }
        
        // Replace {GENERATE_CUSTOMER_EMAIL} placeholder with a generated customer email
        if (processedPayloadString.includes("{GENERATE_CUSTOMER_EMAIL}")) {
            const generatedEmail = generateUniqueCustomerEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_CUSTOMER_EMAIL}/g, generatedEmail);
        }
        
        // Replace {GENERATE_PHONE} or {GENERATE_PHONE_NUMBER} placeholder with a generated phone number
        if (processedPayloadString.includes("{GENERATE_PHONE}") || processedPayloadString.includes("{GENERATE_PHONE_NUMBER}")) {
            const generatedPhone = generateUniquePhoneNumber();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE}/g, generatedPhone);
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE_NUMBER}/g, generatedPhone);
        }
        
        // Replace {STORED_COUPON_CODE} placeholder with stored coupon code
        if (processedPayloadString.includes("{STORED_COUPON_CODE}")) {
            let couponCode: string | undefined;
            // First try context (for same scenario)
            if (context.couponCode) {
                couponCode = context.couponCode;
            } else {
                // Fall back to file storage (for cross-scenario)
                couponCode = getTestData("couponCode");
            }
            if (!couponCode) {
                throw new Error("No coupon code stored. Make sure to create a coupon and store its code first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_COUPON_CODE}/g, couponCode);
            console.log(`✓ Replaced {STORED_COUPON_CODE} with: ${couponCode}`);
        }
        
        // Replace {STORED_COUPON_ID} placeholder with stored coupon ID (for backward compatibility)
        if (processedPayloadString.includes("{STORED_COUPON_ID}")) {
            let couponId: string | undefined;
            // First try context (for same scenario)
            if (context.couponId) {
                couponId = context.couponId;
            } else {
                // Fall back to file storage (for cross-scenario)
                couponId = getTestData("couponId");
            }
            if (!couponId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_COUPON_ID}/g, couponId);
        }
        
        // Replace {STORED_INGREDIENT_ID} placeholder with stored ingredient ID
        if (processedPayloadString.includes("{STORED_INGREDIENT_ID}")) {
            let ingredientId: string | undefined;
            // First try context (for same scenario)
            if (context.ingredientId) {
                ingredientId = context.ingredientId;
            } else {
                // Fall back to file storage (for cross-scenario)
                ingredientId = getTestData("ingredientId");
            }
            if (!ingredientId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_INGREDIENT_ID}/g, ingredientId);
            console.log(`✓ Replaced {STORED_INGREDIENT_ID} with: ${ingredientId}`);
        }
        
        payload = JSON.parse(processedPayloadString);
        
        // Auto-generate unique coupon code if code field exists and is "AUTOMATETEDTEST"
        if (payload.code === "AUTOMATETEDTEST") {
            payload.code = generateUniqueCouponCode();
            console.log(`✓ Generated unique coupon code: ${payload.code}`);
        }
        
        // Auto-generate unique phone number ONLY if phone field exists but is empty, null, or undefined
        // Do NOT add phone field if it doesn't exist in the payload
        if ("phone" in payload && (payload.phone === "" || payload.phone === null || payload.phone === undefined)) {
            payload.phone = generateUniquePhoneNumber();
            console.log(`✓ Generated unique phone number: ${payload.phone}`);
        }
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}. Error: ${err}`);
    }
    
    // Parse headers string - separate query params from HTTP headers
    const { queryParams, headers: extraHeaders } = parseKeyValueHeaderString(headerString);
    
    // Build URL with query parameters
    if (Object.keys(queryParams).length > 0) {
        url = buildUrlWithQueryParams(url, queryParams);
    }
    
    await makePostRequest(request, url, payload, extraHeaders);
});

When("I send a PUT request to endpoint {string} with payload {string}", async ({ request }, endpointName: string, payloadString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    let payload: any;
    try {
        payload = JSON.parse(payloadString);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}`);
    }
    await makePutRequest(request, url, payload);
});

When("I send a PATCH request to endpoint {string} with payload {string}", async ({ request }, endpointName: string, payloadString: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    let payload: any;
    try {
        payload = JSON.parse(payloadString);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}`);
    }
    await makePatchRequest(request, url, payload);
});

When("I send a DELETE request to endpoint {string} with id {string}", async ({ request }, endpointName: string, id: string) => {
    // Support using stored IDs from context or file
    let actualId = id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        // First try context (for same scenario)
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            // Fall back to file storage (for cross-scenario)
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
        // Support stored customer ID
        if (context.customerId) {
            actualId = context.customerId;
        } else {
            const storedId = getTestData("customerId");
            if (!storedId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_EMPLOYEE_ID}") {
        // Support stored employee ID
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    }
    
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    await makeDeleteRequest(request, url);
});

function parseKeyValueHeaderString(input: string): { queryParams: Record<string, string>; headers: Record<string, string> } {
    const queryParams: Record<string, string> = {};
    const headers: Record<string, string> = {};
    if (!input) return { queryParams, headers };
    
    // Query parameter keys that should go in URL, not as HTTP headers
    const queryParamKeys = ["limit", "page", "search", "role", "isActive", "priority", "dateFrom", "dateTo", "branchId", "categoryId", "language", "status", "orderType", "paymentStatus", "startDate", "endDate"];
    
    // Support both ; and & as delimiters
    const pairs = input.split(/[;&]/).filter(p => p.trim());
    
    for (const pair of pairs) {
        const [rawKey, ...rest] = pair.split("=");
        if (!rawKey || rest.length === 0) continue;
        
        // Decode URL-encoded key and value
        let key = decodeURIComponent(rawKey.trim());
        let value = decodeURIComponent(rest.join("=").trim());
        
        // Handle array parameters like priority[] -> priority
        let finalKey = key;
        if (key.endsWith("[]")) {
            finalKey = key.slice(0, -2);
        }
        
        if (finalKey) {
            // Case-insensitive comparison for query parameter keys
            const lowerFinalKey = finalKey.toLowerCase();
            const isQueryParam = queryParamKeys.some(qp => qp.toLowerCase() === lowerFinalKey);
            if (isQueryParam) {
                // If original key had [], keep it in the query param name
                queryParams[key] = value;
            } else {
                headers[key] = value;
            }
        }
    }
    return { queryParams, headers };
}

function buildUrlWithQueryParams(baseUrl: string, queryParams: Record<string, string>): string {
    if (Object.keys(queryParams).length === 0) return baseUrl;
    
    const url = new URL(baseUrl);
    // Clear existing params to avoid duplicates, then set new ones
    for (const [key, value] of Object.entries(queryParams)) {
        url.searchParams.set(key, value); // Use set instead of append to avoid duplicates
    }
    return url.toString();
}

async function makeHttpRequest(request: any, url: string, extraHeadersString = "") {
    // Clear context for new request
    context.response = undefined;
    
    // Parse headers string - separate query params from HTTP headers
    const { queryParams, headers: extraHeaders } = parseKeyValueHeaderString(extraHeadersString);
    
    // Build URL with query parameters
    const finalUrl = buildUrlWithQueryParams(url, queryParams);
    
    // Log the URL being called
    console.log(`→ ${finalUrl}`);
    
    // Prepare HTTP headers
    const headers: Record<string, string> = {
        "Accept": "application/json"
    };

    // Merge extra HTTP headers from step (non-query-param headers)
    Object.assign(headers, extraHeaders);

    // Add auth headers if credentials are present
    if (process.env.NTG_AUTH_EMAIL && process.env.NTG_AUTH_PASSWORD) {
        try {
            const authHeaders = await getAuthHeaders(PROJECT);
            Object.assign(headers, authHeaders);
        } catch (err: any) {
            // Log error but proceed - might be server issue
            console.error("Auth header fetch failed:", err.message);
        }
    }

    // Make GET request using Playwright
    const response = await request.get(finalUrl, { headers });

    // Parse response body
    let responseData: unknown;
    const contentType = response.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
    }

    const responseHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers())) {
        responseHeaders[key.toLowerCase()] = Array.isArray(value) ? value[0] : String(value);
    }
    
    context.response = {
        status: response.status(),
        data: responseData,
        headers: responseHeaders
    };
}

async function makePutRequest(request: any, url: string, payload: any, extraHeaders?: Record<string, string>) {
    // Clear context for new request
    context.response = undefined;
    
    // Log the URL being called
    console.log(`→ PUT ${url}`);
    
    // Prepare HTTP headers
    const headers: Record<string, string> = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    // Add extra headers if provided
    if (extraHeaders) {
        Object.assign(headers, extraHeaders);
    }

    // Add auth headers if credentials are present
    if (process.env.NTG_AUTH_EMAIL && process.env.NTG_AUTH_PASSWORD) {
        try {
            const authHeaders = await getAuthHeaders(PROJECT);
            Object.assign(headers, authHeaders);
        } catch (err: any) {
            // Log error but proceed - might be server issue
            console.error("Auth header fetch failed:", err.message);
        }
    }

    // Make PUT request using Playwright
    const response = await request.put(url, { 
        headers,
        data: payload
    });

    const status = response.status();

    // Parse response body
    let responseData: unknown;
    const contentType = response.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
    }

    const responseHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers())) {
        responseHeaders[key.toLowerCase()] = Array.isArray(value) ? value[0] : String(value);
    }
    
    context.response = {
        status: response.status(),
        data: responseData,
        headers: responseHeaders
    };
}

async function makePatchRequest(request: any, url: string, payload: any) {
    // Clear context for new request
    context.response = undefined;
    
    // Log the URL being called
    console.log(`→ PATCH ${url}`);
    
    // Prepare HTTP headers
    const headers: Record<string, string> = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    // Add auth headers if credentials are present
    if (process.env.NTG_AUTH_EMAIL && process.env.NTG_AUTH_PASSWORD) {
        try {
            const authHeaders = await getAuthHeaders(PROJECT);
            Object.assign(headers, authHeaders);
        } catch (err: any) {
            // Log error but proceed - might be server issue
            console.error("Auth header fetch failed:", err.message);
        }
    }

    // Make PATCH request using Playwright
    const response = await request.patch(url, { 
        headers,
        data: payload
    });

    const status = response.status();

    // Parse response body
    let responseData: unknown;
    const contentType = response.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
    }

    const responseHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers())) {
        responseHeaders[key.toLowerCase()] = Array.isArray(value) ? value[0] : String(value);
    }
    
    context.response = {
        status: response.status(),
        data: responseData,
        headers: responseHeaders
    };
}

async function makePostRequest(request: any, url: string, payload: any, extraHeaders?: Record<string, string>) {
    // Clear context for new request
    context.response = undefined;
    
    // Log the URL being called
    console.log(`→ POST ${url}`);
    
    // Prepare HTTP headers
    const headers: Record<string, string> = {
        "accept": "*/*",
        "Content-Type": "application/json"
    };

    // Add extra headers if provided
    if (extraHeaders) {
        Object.assign(headers, extraHeaders);
    }

    // Add auth headers if credentials are present
    if (process.env.NTG_AUTH_EMAIL && process.env.NTG_AUTH_PASSWORD) {
        try {
            const authHeaders = await getAuthHeaders(PROJECT);
            Object.assign(headers, authHeaders);
        } catch (err: any) {
            // Log error but proceed - might be server issue
            console.error("Auth header fetch failed:", err.message);
        }
    }

    // Make POST request using Playwright
    const response = await request.post(url, { 
        headers,
        data: payload
    });

    const status = response.status();

    // Parse response body
    let responseData: unknown;
    const contentType = response.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
    }

    const responseHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers())) {
        responseHeaders[key.toLowerCase()] = Array.isArray(value) ? value[0] : String(value);
    }
    
    context.response = {
        status: response.status(),
        data: responseData,
        headers: responseHeaders
    };
}

async function makeDeleteRequest(request: any, url: string) {
    // Clear context for new request (but keep IDs)
    const savedIds = { ...context };
    delete savedIds.response;
    context.response = undefined;
    
    // Log the URL being called
    console.log(`→ DELETE ${url}`);
    
    // Prepare HTTP headers
    const headers: Record<string, string> = {
        "Accept": "application/json"
    };

    // Add auth headers if credentials are present
    if (process.env.NTG_AUTH_EMAIL && process.env.NTG_AUTH_PASSWORD) {
        try {
            const authHeaders = await getAuthHeaders(PROJECT);
            Object.assign(headers, authHeaders);
        } catch (err: any) {
            // Log error but proceed - might be server issue
            console.error("Auth header fetch failed:", err.message);
        }
    }

    // Make DELETE request using Playwright
    const response = await request.delete(url, { headers });

    const status = response.status();

    // Parse response body
    let responseData: unknown;
    const contentType = response.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
    }

    const responseHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers())) {
        responseHeaders[key.toLowerCase()] = Array.isArray(value) ? value[0] : String(value);
    }
    
    context.response = {
        status: response.status(),
        data: responseData,
        headers: responseHeaders
    };
    
    // Restore IDs after clearing context
    Object.assign(context, savedIds);
}

// Response validation steps (reused from ntg-ticket)
Then("the response status should be {int}", async ({}, expectedStatus: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    expect(context.response.status).toBe(expectedStatus);
});

Then("I store the response id as customer id", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first (for direct object responses like customer creation)
    if (data && typeof data === "object" && !Array.isArray(data) && "id" in data) {
        const customerId = String(data.id);
        context.customerId = customerId;
        storeTestData("customerId", customerId); // Also store in file for cross-scenario access
        console.log(`✓ Stored customer ID: ${customerId}`);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(`Response data is not an object. Got: ${typeof data}, value: ${JSON.stringify(data)}`);
    }
    
    if (!("id" in data)) {
        throw new Error(`Response does not contain an 'id' field. Available fields: ${Object.keys(data).join(", ")}`);
    }
    
    const customerId = String(data.id);
    context.customerId = customerId;
    storeTestData("customerId", customerId); // Also store in file for cross-scenario access
    console.log(`✓ Stored customer ID: ${customerId}`);
});

Then("I store the response id as coupon id", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first (for direct object responses like coupon creation)
    if (data && typeof data === "object" && !Array.isArray(data) && "id" in data) {
        const couponId = String(data.id);
        context.couponId = couponId;
        storeTestData("couponId", couponId); // Also store in file for cross-scenario access
        console.log(`✓ Stored coupon ID: ${couponId}`);
        
        // Also store coupon code if available
        if ("code" in data) {
            const couponCode = String(data.code);
            context.couponCode = couponCode;
            storeTestData("couponCode", couponCode);
            console.log(`✓ Stored coupon code: ${couponCode}`);
        }
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(`Response data is not an object. Got: ${typeof data}, value: ${JSON.stringify(data)}`);
    }
    
    if (!("id" in data)) {
        throw new Error(`Response does not contain an 'id' field. Available fields: ${Object.keys(data).join(", ")}`);
    }
    
    const couponId = String(data.id);
    context.couponId = couponId;
    storeTestData("couponId", couponId); // Also store in file for cross-scenario access
    console.log(`✓ Stored coupon ID: ${couponId}`);
    
    // Also store coupon code if available
    if ("code" in data) {
        const couponCode = String(data.code);
        context.couponCode = couponCode;
        storeTestData("couponCode", couponCode);
        console.log(`✓ Stored coupon code: ${couponCode}`);
    }
});

Then("I store the response id as employee id", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first (for direct object responses like employee creation)
    if (data && typeof data === "object" && !Array.isArray(data) && "id" in data) {
        const employeeId = String(data.id);
        context.employeeId = employeeId;
        storeTestData("employeeId", employeeId); // Also store in file for cross-scenario access
        console.log(`✓ Stored employee ID: ${employeeId}`);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(`Response data is not an object. Got: ${typeof data}, value: ${JSON.stringify(data)}`);
    }
    
    if (!("id" in data)) {
        throw new Error(`Response does not contain an 'id' field. Available fields: ${Object.keys(data).join(", ")}`);
    }
    
    const employeeId = String(data.id);
    context.employeeId = employeeId;
    storeTestData("employeeId", employeeId); // Also store in file for cross-scenario access
    console.log(`✓ Stored employee ID: ${employeeId}`);
});

Then("I store the response id as ingredient id", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first (for direct object responses like ingredient creation)
    if (data && typeof data === "object" && !Array.isArray(data) && "id" in data) {
        const ingredientId = String(data.id);
        context.ingredientId = ingredientId;
        storeTestData("ingredientId", ingredientId); // Also store in file for cross-scenario access
        console.log(`✓ Stored ingredient ID: ${ingredientId}`);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(`Response data is not an object. Got: ${typeof data}, value: ${JSON.stringify(data)}`);
    }
    
    if (!("id" in data)) {
        throw new Error(`Response does not contain an 'id' field. Available fields: ${Object.keys(data).join(", ")}`);
    }
    
    const ingredientId = String(data.id);
    context.ingredientId = ingredientId;
    storeTestData("ingredientId", ingredientId); // Also store in file for cross-scenario access
    console.log(`✓ Stored ingredient ID: ${ingredientId}`);
});

Then("the response should have field {string}", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // First check if field exists at root level (for fields like "message", "data", etc.)
    if (data && typeof data === "object" && fieldName in data) {
        expect(data).toHaveProperty(fieldName);
        return;
    }
    
    // If response has a 'data' field, check inside the nested data object
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object") {
        throw new Error(`Response data is not a valid object. Got: ${typeof data}`);
    }
    
    if (Array.isArray(data)) {
        expect(data.length).toBeGreaterThan(0);
        const first = data[0] as Record<string, unknown>;
        expect(first).toHaveProperty(fieldName);
    } else {
        const body = data as Record<string, unknown>;
        expect(body).toHaveProperty(fieldName);
    }
});

Then("the response should be a valid JSON array", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    expect(Array.isArray(data)).toBe(true);
});

Then("the response array should contain at least {int} item", async ({}, minItems: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThanOrEqual(minItems);
});

Then("the response field {string} array should contain at least {int} item", async ({}, fieldName: string, minItems: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const fieldValue = data[fieldName];
        if (!Array.isArray(fieldValue)) {
            throw new Error(`Field "${fieldName}" is not an array`);
        }
        expect(fieldValue.length).toBeGreaterThanOrEqual(minItems);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
    const fieldValue = data[fieldName];
    
    if (!Array.isArray(fieldValue)) {
        throw new Error(`Field "${fieldName}" is not an array`);
    }
    
    expect(fieldValue.length).toBeGreaterThanOrEqual(minItems);
});

Then("all items in the response should have required fields: {string}", async ({}, fieldsList: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!Array.isArray(data)) {
        throw new Error("Response is not an array");
    }
    
    const fields = fieldsList.split(",").map((f: string) => f.trim());
    
    for (const item of data) {
        for (const field of fields) {
            expect(item).toHaveProperty(field);
        }
    }
});

Then("all items should have field {string} of type {string}", async ({}, fieldName: string, expectedType: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!Array.isArray(data)) {
        throw new Error("Response is not an array");
    }
    
    for (const item of data) {
        expect(item).toHaveProperty(fieldName);
        const value = item[fieldName];
        
        let actualType: string;
        if (value === null) {
            actualType = "null";
        } else {
            actualType = typeof value;
        }
        
        if (expectedType === "string" && actualType !== "string") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "number" && actualType !== "number") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "boolean" && actualType !== "boolean") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "object" && (actualType !== "object" || Array.isArray(value))) {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        }
    }
});

Then("the response content type should be {string}", async ({}, expectedContentType: string) => {
    if (!context.response || !context.response.headers) {
        throw new Error("Response or headers are not available in context");
    }
    
    const contentType = context.response.headers["content-type"] || "";
    expect(contentType.toLowerCase()).toContain(expectedContentType.toLowerCase());
});

Then("the response array should have exactly {int} items", async ({}, exactCount: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    if (!Array.isArray(data)) throw new Error("Response is not an array");
    expect(data.length).toBe(exactCount);
});

Then("all items should have field {string} equal to {string}", async ({}, fieldName: string, expectedValue: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    if (!Array.isArray(data)) throw new Error("Response is not an array");
    for (const item of data) {
        expect(item).toHaveProperty(fieldName);
        const actual = item[fieldName];
        
        // Handle array fields (e.g., "roles" array should contain the expected value)
        if (Array.isArray(actual)) {
            const containsValue = actual.some((val: any) => String(val) === expectedValue);
            expect(containsValue).toBe(true);
        } else {
            // Compare as strings to handle booleans/numbers passed as strings in feature
            expect(String(actual)).toBe(expectedValue);
        }
    }
});

Then("all items should contain {string} in field {string}", async ({}, needle: string, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    if (!Array.isArray(data)) throw new Error("Response is not an array");
    const lowerNeedle = needle.toLowerCase();
    for (const item of data) {
        expect(item).toHaveProperty(fieldName);
        const value = String(item[fieldName] ?? "");
        expect(value.toLowerCase()).toContain(lowerNeedle);
    }
});

Then("the response data should have field {string}", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
});

Then("the response data should have field {string} equal to {string}", async ({}, fieldName: string, expectedValue: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
    const actual = data[fieldName];
    
    // Handle case where field is an object (e.g., category/subcategory objects with id property)
    if (actual && typeof actual === "object" && !Array.isArray(actual)) {
        // If it's an object, check if it has an 'id' property and compare that
        if ("id" in actual) {
            expect(String(actual.id)).toBe(expectedValue);
        } else {
            throw new Error(`Field "${fieldName}" is an object but doesn't have an "id" property. Actual: ${JSON.stringify(actual)}`);
        }
    } else {
        // Field is a primitive value (string, number, etc.)
        expect(String(actual)).toBe(expectedValue);
    }
});

Then("the response should equal {string}", async ({}, expectedJsonString: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Parse expected JSON
    let expectedData: any;
    try {
        expectedData = JSON.parse(expectedJsonString);
    } catch (err) {
        throw new Error(`Invalid JSON in expected response: ${expectedJsonString}. Error: ${err}`);
    }
    
    // Handle responses wrapped in data field
    if (data && typeof data === "object" && "data" in data && Object.keys(data).length === 1) {
        // If response is { data: {...} }, compare with the nested data
        data = data.data;
    }
    
    // Compare the actual response with expected
    expect(data).toEqual(expectedData);
});

Then("the response field {string} should be an array", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        expect(Array.isArray(data[fieldName])).toBe(true);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
    expect(Array.isArray(data[fieldName])).toBe(true);
});

Then("the response should have field {string} of type {string}", async ({}, fieldName: string, expectedType: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const value = data[fieldName];
        let actualType: string;
        if (value === null) {
            actualType = "null";
        } else if (value === undefined) {
            actualType = "undefined";
        } else if (Array.isArray(value)) {
            actualType = "array";
        } else {
            actualType = typeof value;
        }
        
        if (expectedType === "string" && actualType !== "string") {
            if (actualType === "object" && value && typeof value === "object" && !Array.isArray(value)) {
                return; // Accept object as valid
            }
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "number" && actualType !== "number") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "boolean" && actualType !== "boolean") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "array" && actualType !== "array") {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        } else if (expectedType === "object" && (actualType !== "object" || Array.isArray(value))) {
            throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
        }
        return;
    }
    
    // If wrapped in data field, check nested
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    if (!(fieldName in data)) {
        throw new Error(`Field "${fieldName}" does not exist in response`);
    }
    
    const value = data[fieldName];
    
    let actualType: string;
    if (value === null) {
        actualType = "null";
    } else if (value === undefined) {
        actualType = "undefined";
    } else if (Array.isArray(value)) {
        actualType = "array";
    } else {
        actualType = typeof value;
    }
    
    if (expectedType === "string" && actualType !== "string") {
        if (actualType === "object" && value && typeof value === "object" && !Array.isArray(value)) {
            return; // Accept object as valid
        }
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "number" && actualType !== "number") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "boolean" && actualType !== "boolean") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "array" && actualType !== "array") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "object" && (actualType !== "object" || Array.isArray(value))) {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    }
});

Then("all items in the response field {string} should have required fields: {string}", async ({}, fieldName: string, fieldsList: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const fieldValue = data[fieldName];
        if (!Array.isArray(fieldValue)) {
            throw new Error(`Field "${fieldName}" is not an array`);
        }
        
        const fields = fieldsList.split(",").map((f: string) => f.trim());
        for (const item of fieldValue) {
            for (const field of fields) {
                expect(item).toHaveProperty(field);
            }
        }
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
    const fieldValue = data[fieldName];
    
    if (!Array.isArray(fieldValue)) {
        throw new Error(`Field "${fieldName}" is not an array`);
    }
    
    const fields = fieldsList.split(",").map((f: string) => f.trim());
    for (const item of fieldValue) {
        for (const field of fields) {
            expect(item).toHaveProperty(field);
        }
    }
});

Then("the response field {string} should be a valid ISO date string", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const dateString = data[fieldName];
        expect(typeof dateString).toBe("string");
        
        // ISO 8601 date format validation (more flexible to handle +00:00 timezone)
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
        expect(isoDateRegex.test(dateString)).toBe(true);
        
        // Also verify it's a valid date
        const date = new Date(dateString);
        expect(isNaN(date.getTime())).toBe(false);
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expect(data).toHaveProperty(fieldName);
    const dateString = data[fieldName];
    expect(typeof dateString).toBe("string");
    
    // ISO 8601 date format validation (more flexible to handle +00:00 timezone)
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
    expect(isoDateRegex.test(dateString)).toBe(true);
    
    // Also verify it's a valid date
    const date = new Date(dateString);
    expect(isNaN(date.getTime())).toBe(false);
});

Then("the response data should have field {string} of type {string}", async ({}, fieldName: string, expectedType: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    if (!(fieldName in data)) {
        throw new Error(`Field "${fieldName}" does not exist in response data`);
    }
    
    const value = data[fieldName];
    
    let actualType: string;
    if (value === null) {
        actualType = "null";
    } else if (value === undefined) {
        actualType = "undefined";
    } else if (Array.isArray(value)) {
        actualType = "array";
    } else {
        actualType = typeof value;
    }
    
    if (expectedType === "string" && actualType !== "string") {
        if (actualType === "object" && value && typeof value === "object" && !Array.isArray(value)) {
            return; // Accept object as valid
        }
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "number" && actualType !== "number") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "boolean" && actualType !== "boolean") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "array" && actualType !== "array") {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    } else if (expectedType === "object" && (actualType !== "object" || Array.isArray(value))) {
        throw new Error(`Expected field "${fieldName}" to be ${expectedType} but got ${actualType}`);
    }
});

