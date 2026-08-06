import { expect } from "@playwright/test";
import { createBdd, test } from "playwright-bdd";
import { getEndpointUrl } from "../../../../common/utils/apiHelper";
import { getAuthHeaders } from "../../../../common/utils/auth";
import { generateUniqueCouponCode, generateUniqueCustomerEmail, generateUniqueEmail, generateUniqueIngredientName, generateUniquePhoneNumber, getTestData, storeTestData } from "../../../../common/utils/emailGenerator";
import { getBranchId } from "../../../../common/utils/testConstants";

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
    ingredientName?: string;
    categoryId?: string;
    foodItemId?: string;
    couponId?: string;
    couponCode?: string;
    [key: string]: any; // Allow dynamic context properties
}

const context: TestContext = {};

// Project for API routing (RMS default; NTG-SMS shim sets NTG_API_TEST_PROJECT before loading this file)
const PROJECT = process.env.NTG_API_TEST_PROJECT || "ntg-rms";

function labelToContextIdKey(label: string): string {
    const parts = label
        .trim()
        .split(/\s+/)
        .map((p) => p.toLowerCase())
        .filter(Boolean);
    const camel = parts[0] + parts.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
    return camel + "Id";
}

function storedPlaceholderToContextIdKey(token: string): string | null {
    const m = token.match(/^\{STORED_([A-Z0-9_]+)_ID\}$/);
    if (!m) return null;
    const parts = m[1].split("_").filter(Boolean);
    const lower = parts.map((p) => p.toLowerCase());
    const camel = lower[0] + lower.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
    return camel + "Id";
}

function resolveStoredEntityIdToken(token: string): string | undefined {
    if (token === "{STORED_ID}") {
        if (context.couponId) return String(context.couponId);
        return getTestData("couponId");
    }
    const key = storedPlaceholderToContextIdKey(token);
    if (!key) return undefined;
    const fromCtx = (context as any)[key];
    if (fromCtx) return String(fromCtx);
    return getTestData(key);
}

function extractCreatedEntityWithId(responseData: any): { id: string; entity: Record<string, unknown> } | null {
    let data = responseData;
    if (data && typeof data === "object" && !Array.isArray(data) && "id" in data) {
        if (!("data" in data)) {
            return { id: String((data as any).id), entity: data as Record<string, unknown> };
        }
        const inner = (data as any).data;
        if (inner && typeof inner === "object" && !Array.isArray(inner) && "id" in inner) {
            return { id: String(inner.id), entity: inner as Record<string, unknown> };
        }
    }
    return null;
}

/**
 * Replaces placeholders in a string with actual values from test constants
 * @param input - The input string that may contain placeholders
 * @returns The string with placeholders replaced
 */
function replacePlaceholders(input: string): string {
    if (!input) return input;
    
    // Replace {BRANCH_ID} with actual branch ID from config
    if (input.includes("{BRANCH_ID}")) {
        const branchId = getBranchId(PROJECT);
        if (!branchId) {
            throw new Error(`Branch ID not found in test constants for project: ${PROJECT}`);
        }
        input = input.replace(/{BRANCH_ID}/g, branchId);
    }
    
    return input;
}

/**
 * Recursively replaces placeholders in a parsed JSON object
 * This is a safety measure in case any placeholders weren't replaced in the string
 * @param obj - The object to process
 * @returns The object with placeholders replaced
 */
function replacePlaceholdersInObject(obj: any): any {
    if (typeof obj === "string") {
        if (obj === "{BRANCH_ID}") {
            const branchId = getBranchId(PROJECT);
            if (!branchId) {
                throw new Error(`Branch ID not found in test constants for project: ${PROJECT}`);
            }
            return branchId;
        } else if (obj === "{STORED_INGREDIENT_ID}") {
            let ingredientId: string | undefined;
            if (context.ingredientId) {
                ingredientId = context.ingredientId;
            } else {
                ingredientId = getTestData("ingredientId");
            }
            if (!ingredientId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
            }
            return ingredientId;
        } else if (obj === "{STORED_INGREDIENT_NAME}") {
            let ingredientName: string | undefined;
            if (context.ingredientName) {
                ingredientName = context.ingredientName;
            } else {
                ingredientName = getTestData("ingredientName");
            }
            if (!ingredientName) {
                throw new Error("No ingredient name stored. Make sure to create an ingredient and store its name first.");
            }
            return ingredientName;
        } else if (obj === "{STORED_COUPON_ID}" || obj === "{STORED_ID}") {
            let couponId: string | undefined;
            if (context.couponId) {
                couponId = context.couponId;
            } else {
                couponId = getTestData("couponId");
            }
            if (!couponId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            return couponId;
        } else if (obj === "{STORED_CUSTOMER_ID}") {
            let customerId: string | undefined;
            if (context.customerId) {
                customerId = context.customerId;
            } else {
                customerId = getTestData("customerId");
            }
            if (!customerId) {
                throw new Error("No customer ID stored. Make sure to create a customer and store its ID first.");
            }
            return customerId;
        } else if (obj === "{STORED_EMPLOYEE_ID}") {
            let employeeId: string | undefined;
            if (context.employeeId) {
                employeeId = context.employeeId;
            } else {
                employeeId = getTestData("employeeId");
            }
            if (!employeeId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            return employeeId;
        } else {
            const genericStored = resolveStoredEntityIdToken(obj);
            if (genericStored) return genericStored;
            return obj;
        }
    } else if (Array.isArray(obj)) {
        return obj.map(item => replacePlaceholdersInObject(item));
    } else if (obj && typeof obj === "object") {
        const result: any = {};
        for (const key in obj) {
            result[key] = replacePlaceholdersInObject(obj[key]);
        }
        return result;
    }
    return obj;
}

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
    let actualId = resolveStoredEntityIdToken(id) ?? id;
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
    } else if (id === "{STORED_INGREDIENT_ID}") {
        // Support stored ingredient ID
        if (context.ingredientId) {
            actualId = context.ingredientId;
        } else {
            const storedId = getTestData("ingredientId");
            if (!storedId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
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
    let actualId = resolveStoredEntityIdToken(id) ?? id;
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
    } else if (id === "{STORED_INGREDIENT_ID}") {
        // Support stored ingredient ID
        if (context.ingredientId) {
            actualId = context.ingredientId;
        } else {
            const storedId = getTestData("ingredientId");
            if (!storedId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
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
    let actualId = resolveStoredEntityIdToken(id) ?? id;
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
    } else if (id === "{STORED_INGREDIENT_ID}") {
        // Support stored ingredient ID
        if (context.ingredientId) {
            actualId = context.ingredientId;
        } else {
            const storedId = getTestData("ingredientId");
            if (!storedId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
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
        
        // Replace {STORED_INGREDIENT_NAME} placeholder with stored ingredient name
        if (processedPayloadString.includes("{STORED_INGREDIENT_NAME}")) {
            let ingredientName: string | undefined;
            // First try context (for same scenario)
            if (context.ingredientName) {
                ingredientName = context.ingredientName;
            } else {
                // Fall back to file storage (for cross-scenario)
                ingredientName = getTestData("ingredientName");
            }
            if (!ingredientName) {
                throw new Error("No ingredient name stored. Make sure to create an ingredient and store its name first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_INGREDIENT_NAME}/g, ingredientName);
            console.log(`✓ Replaced {STORED_INGREDIENT_NAME} with: ${ingredientName}`);
        }
        
        // Replace {BRANCH_ID} placeholder with branch ID from test constants
        processedPayloadString = replacePlaceholders(processedPayloadString);
        
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
        
        // TEMPORARY: Print payload for debugging
        console.log("📤 PUT Payload:", JSON.stringify(payload, null, 2));
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}. Error: ${err}`);
    }
    await makePutRequest(request, url, payload);
});

When("I send a PUT request to endpoint {string} with id {string} and payload {string} and headers {string}", async ({ request }, endpointName: string, id: string, payloadString: string, headerString: string) => {
    // Support using stored IDs from context or file
    let actualId = resolveStoredEntityIdToken(id) ?? id;
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
        
        // Replace {BRANCH_ID} placeholder with branch ID from test constants
        processedPayloadString = replacePlaceholders(processedPayloadString);
        
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
        
        // TEMPORARY: Print payload for debugging
        console.log("📤 PUT Payload:", JSON.stringify(payload, null, 2));
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
        // Replace placeholders in payload string
        let processedPayloadString = replacePlaceholders(payloadString);
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
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
        
        // Replace {GENERATE_INGREDIENT_NAME} placeholder with a generated ingredient name
        if (processedPayloadString.includes("{GENERATE_INGREDIENT_NAME}")) {
            const generatedName = generateUniqueIngredientName();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_INGREDIENT_NAME}/g, generatedName);
        }
        
        // Replace {STORED_INGREDIENT_NAME} placeholder with stored ingredient name
        if (processedPayloadString.includes("{STORED_INGREDIENT_NAME}")) {
            let ingredientName: string | undefined;
            // First try context (for same scenario)
            if (context.ingredientName) {
                ingredientName = context.ingredientName;
            } else {
                // Fall back to file storage (for cross-scenario)
                ingredientName = getTestData("ingredientName");
            }
            if (!ingredientName) {
                throw new Error("No ingredient name stored. Make sure to create an ingredient and store its name first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_INGREDIENT_NAME}/g, ingredientName);
            console.log(`✓ Replaced {STORED_INGREDIENT_NAME} with: ${ingredientName}`);
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
        
        // Replace {BRANCH_ID} placeholder with branch ID from test constants
        processedPayloadString = replacePlaceholders(processedPayloadString);
        
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
        
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
        
        // Replace {GENERATE_INGREDIENT_NAME} placeholder with a generated ingredient name
        if (processedPayloadString.includes("{GENERATE_INGREDIENT_NAME}")) {
            const generatedName = generateUniqueIngredientName();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_INGREDIENT_NAME}/g, generatedName);
        }
        
        // Replace {STORED_INGREDIENT_NAME} placeholder with stored ingredient name
        if (processedPayloadString.includes("{STORED_INGREDIENT_NAME}")) {
            let ingredientName: string | undefined;
            // First try context (for same scenario)
            if (context.ingredientName) {
                ingredientName = context.ingredientName;
            } else {
                // Fall back to file storage (for cross-scenario)
                ingredientName = getTestData("ingredientName");
            }
            if (!ingredientName) {
                throw new Error("No ingredient name stored. Make sure to create an ingredient and store its name first.");
            }
            processedPayloadString = processedPayloadString.replace(/{STORED_INGREDIENT_NAME}/g, ingredientName);
            console.log(`✓ Replaced {STORED_INGREDIENT_NAME} with: ${ingredientName}`);
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
        
        // Replace {BRANCH_ID} placeholder with branch ID from test constants
        processedPayloadString = replacePlaceholders(processedPayloadString);
        
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
        
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
        // Replace placeholders in payload string
        let processedPayloadString = replacePlaceholders(payloadString);
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
        
        // TEMPORARY: Print payload for debugging
        console.log("📤 PUT Payload:", JSON.stringify(payload, null, 2));
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
        // Replace placeholders in payload string
        let processedPayloadString = replacePlaceholders(payloadString);
        payload = JSON.parse(processedPayloadString);
        
        // Safety: Replace any remaining placeholders in the parsed object (handles nested cases)
        payload = replacePlaceholdersInObject(payload);
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}`);
    }
    await makePatchRequest(request, url, payload);
});

When("I send a POST request to endpoint {string} with id {string} and payload {string}", async ({ request }, endpointName: string, id: string, payloadString: string) => {
    let actualId = resolveStoredEntityIdToken(id) ?? id;
    if (id === "{STORED_COUPON_ID}" || id === "{STORED_ID}") {
        if (context.couponId) {
            actualId = context.couponId;
        } else {
            const storedId = getTestData("couponId");
            if (!storedId) {
                throw new Error("No coupon ID stored. Make sure to create a coupon and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_CUSTOMER_ID}") {
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
        if (context.employeeId) {
            actualId = context.employeeId;
        } else {
            const storedId = getTestData("employeeId");
            if (!storedId) {
                throw new Error("No employee ID stored. Make sure to create an employee and store its ID first.");
            }
            actualId = storedId;
        }
    } else if (id === "{STORED_INGREDIENT_ID}") {
        if (context.ingredientId) {
            actualId = context.ingredientId;
        } else {
            const storedId = getTestData("ingredientId");
            if (!storedId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
            }
            actualId = storedId;
        }
    }

    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, { id: actualId }, PROJECT);
    let payload: any;
    try {
        let processedPayloadString = payloadString;
        if (processedPayloadString.includes("{GENERATE_EMAIL}")) {
            const generatedEmail = generateUniqueEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_EMAIL}/g, generatedEmail);
        }
        if (processedPayloadString.includes("{GENERATE_CUSTOMER_EMAIL}")) {
            const generatedEmail = generateUniqueCustomerEmail();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_CUSTOMER_EMAIL}/g, generatedEmail);
        }
        if (processedPayloadString.includes("{GENERATE_PHONE}") || processedPayloadString.includes("{GENERATE_PHONE_NUMBER}")) {
            const generatedPhone = generateUniquePhoneNumber();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE}/g, generatedPhone);
            processedPayloadString = processedPayloadString.replace(/{GENERATE_PHONE_NUMBER}/g, generatedPhone);
        }
        if (processedPayloadString.includes("{GENERATE_INGREDIENT_NAME}")) {
            const generatedName = generateUniqueIngredientName();
            processedPayloadString = processedPayloadString.replace(/{GENERATE_INGREDIENT_NAME}/g, generatedName);
        }
        processedPayloadString = replacePlaceholders(processedPayloadString);
        payload = JSON.parse(processedPayloadString);
        payload = replacePlaceholdersInObject(payload);
        if (payload && typeof payload === "object" && payload.code === "AUTOMATETEDTEST") {
            payload.code = generateUniqueCouponCode();
        }
    } catch (err) {
        throw new Error(`Invalid JSON payload: ${payloadString}. Error: ${err}`);
    }
    await makePostRequest(request, url, payload);
});

When("I send a DELETE request to endpoint {string}", async ({ request }, endpointName: string) => {
    // @ts-ignore - getEndpointUrl accepts 3 params: endpointName, params?, project?
    const url = getEndpointUrl(endpointName, undefined, PROJECT);
    await makeDeleteRequest(request, url);
});

When("I send a DELETE request to endpoint {string} with id {string}", async ({ request }, endpointName: string, id: string) => {
    // Support using stored IDs from context or file
    let actualId = resolveStoredEntityIdToken(id) ?? id;
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
    } else if (id === "{STORED_INGREDIENT_ID}") {
        // Support stored ingredient ID
        if (context.ingredientId) {
            actualId = context.ingredientId;
        } else {
            const storedId = getTestData("ingredientId");
            if (!storedId) {
                throw new Error("No ingredient ID stored. Make sure to create an ingredient and store its ID first.");
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
    
    // Replace placeholders first
    input = replacePlaceholders(input);
    
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

/**
 * Helper function to print response details when an assertion fails
 */
function printResponseOnFailure(error: Error, assertionName: string): never {
    if (context.response) {
        console.error("\n❌ Test Assertion Failed:", assertionName);
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.error("Response Status:", context.response.status);
        console.error("Response Headers:", JSON.stringify(context.response.headers, null, 2));
        console.error("Response Body:", JSON.stringify(context.response.data, null, 2));
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    }
    throw error;
}

/**
 * Wrapper for expect that prints response on failure
 */
function expectWithResponse<T>(actual: T, matcher: (actual: T) => void, assertionName: string): void {
    try {
        matcher(actual);
    } catch (error) {
        printResponseOnFailure(error as Error, assertionName);
    }
}

// Response validation steps (reused from ntg-ticket)
Then("the response status should be {int}", async ({}, expectedStatus: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    expectWithResponse(
        context.response.status,
        (status) => expect(status).toBe(expectedStatus),
        `Expected status ${expectedStatus} but got ${context.response.status}`
    );
});

Then(/^I store the response id as (.+) id$/, async ({}, label: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    const extracted = extractCreatedEntityWithId(context.response.data);
    if (!extracted) {
        throw new Error(
            `Response does not contain an id to store. Label: "${label}". Body: ${JSON.stringify(context.response.data)}`
        );
    }
    const { id: idVal, entity } = extracted;
    const key = labelToContextIdKey(label);
    (context as any)[key] = idVal;
    storeTestData(key, idVal);
    console.log(`✓ Stored ${key}: ${idVal}`);

    const low = label.trim().toLowerCase();
    if (low === "coupon" && "code" in entity) {
        const couponCode = String(entity.code);
        context.couponCode = couponCode;
        storeTestData("couponCode", couponCode);
        console.log(`✓ Stored coupon code: ${couponCode}`);
    }
    if (low === "ingredient" && "name" in entity) {
        const ingredientName = String(entity.name);
        context.ingredientName = ingredientName;
        storeTestData("ingredientName", ingredientName);
        console.log(`✓ Stored ingredient name: ${ingredientName}`);
    }
});

Then("the response should have field {string}", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    // First check if field exists at root level (for fields like "message", "data", etc.)
    if (data && typeof data === "object" && fieldName in data) {
        expectWithResponse(
            data,
            (d) => expect(d).toHaveProperty(fieldName),
            `Expected response to have field "${fieldName}"`
        );
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
        expectWithResponse(
            data.length,
            (len) => expect(len).toBeGreaterThan(0),
            `Expected response array to have at least 1 item`
        );
        const first = data[0] as Record<string, unknown>;
        expectWithResponse(
            first,
            (f) => expect(f).toHaveProperty(fieldName),
            `Expected response array items to have field "${fieldName}"`
        );
    } else {
        const body = data as Record<string, unknown>;
        expectWithResponse(
            body,
            (b) => expect(b).toHaveProperty(fieldName),
            `Expected response to have field "${fieldName}"`
        );
    }
});

Then("the response should be a valid JSON array", async ({}) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    expectWithResponse(
        Array.isArray(data),
        (isArray) => expect(isArray).toBe(true),
        `Expected response to be an array but got ${typeof data}`
    );
});

Then("the response array should contain at least {int} item", async ({}, minItems: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    expectWithResponse(
        Array.isArray(data),
        (isArray) => expect(isArray).toBe(true),
        `Expected response to be an array but got ${typeof data}`
    );
    expectWithResponse(
        data.length,
        (len) => expect(len).toBeGreaterThanOrEqual(minItems),
        `Expected array to have at least ${minItems} items but got ${data.length}`
    );
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
        expectWithResponse(
            fieldValue.length,
            (len) => expect(len).toBeGreaterThanOrEqual(minItems),
            `Expected field "${fieldName}" array to have at least ${minItems} items but got ${fieldValue.length}`
        );
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
    expectWithResponse(
        data,
        (d) => expect(d).toHaveProperty(fieldName),
        `Expected response to have field "${fieldName}"`
    );
    const fieldValue = data[fieldName];
    
    if (!Array.isArray(fieldValue)) {
        throw new Error(`Field "${fieldName}" is not an array`);
    }
    
    expectWithResponse(
        fieldValue.length,
        (len) => expect(len).toBeGreaterThanOrEqual(minItems),
        `Expected field "${fieldName}" array to have at least ${minItems} items but got ${fieldValue.length}`
    );
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
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        for (const field of fields) {
            try {
            expect(item).toHaveProperty(field);
            } catch (error) {
                printResponseOnFailure(
                    error as Error,
                    `Expected item at index ${i} to have field "${field}"`
                );
            }
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
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        try {
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
        } catch (error) {
            printResponseOnFailure(
                error as Error,
                `Expected item at index ${i} to have field "${fieldName}" of type "${expectedType}"`
            );
        }
    }
});

Then("the response content type should be {string}", async ({}, expectedContentType: string) => {
    if (!context.response || !context.response.headers) {
        throw new Error("Response or headers are not available in context");
    }
    
    const contentType = context.response.headers["content-type"] || "";
    expectWithResponse(
        contentType.toLowerCase(),
        (ct) => expect(ct).toContain(expectedContentType.toLowerCase()),
        `Expected content type to contain "${expectedContentType}" but got "${contentType}"`
    );
});

Then("the response array should have exactly {int} items", async ({}, exactCount: number) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    if (!Array.isArray(data)) throw new Error("Response is not an array");
    expectWithResponse(
        data.length,
        (len) => expect(len).toBe(exactCount),
        `Expected array to have exactly ${exactCount} items but got ${data.length}`
    );
});

Then("all items should have field {string} equal to {string}", async ({}, fieldName: string, expectedValue: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    if (!Array.isArray(data)) throw new Error("Response is not an array");
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        try {
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
        } catch (error) {
            printResponseOnFailure(
                error as Error,
                `Expected item at index ${i} to have field "${fieldName}" equal to "${expectedValue}"`
            );
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
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        try {
        expect(item).toHaveProperty(fieldName);
        const value = String(item[fieldName] ?? "");
        expect(value.toLowerCase()).toContain(lowerNeedle);
        } catch (error) {
            printResponseOnFailure(
                error as Error,
                `Expected item at index ${i} to contain "${needle}" in field "${fieldName}"`
            );
        }
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
    
    expectWithResponse(
        data,
        (d) => expect(d).toHaveProperty(fieldName),
        `Expected response data to have field "${fieldName}"`
    );
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
    
    try {
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
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response data field "${fieldName}" to equal "${expectedValue}"`
        );
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
    try {
    expect(data).toEqual(expectedData);
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response to equal ${expectedJsonString}`
        );
    }
});

Then("the response field {string} should be an array", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    try {
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
            expectWithResponse(
                Array.isArray(data[fieldName]),
                (isArray) => expect(isArray).toBe(true),
                `Expected field "${fieldName}" to be an array`
            );
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
        expectWithResponse(
            data,
            (d) => expect(d).toHaveProperty(fieldName),
            `Expected response to have field "${fieldName}"`
        );
        expectWithResponse(
            Array.isArray(data[fieldName]),
            (isArray) => expect(isArray).toBe(true),
            `Expected field "${fieldName}" to be an array`
        );
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response field "${fieldName}" to be an array`
        );
    }
});

Then("the response should have field {string} of type {string}", async ({}, fieldName: string, expectedType: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    try {
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
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response field "${fieldName}" to be of type "${expectedType}"`
        );
    }
});

Then("all items in the response field {string} should have required fields: {string}", async ({}, fieldName: string, fieldsList: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    try {
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const fieldValue = data[fieldName];
        if (!Array.isArray(fieldValue)) {
            throw new Error(`Field "${fieldName}" is not an array`);
        }
        
        const fields = fieldsList.split(",").map((f: string) => f.trim());
            for (let i = 0; i < fieldValue.length; i++) {
                const item = fieldValue[i];
            for (const field of fields) {
                    try {
                expect(item).toHaveProperty(field);
                    } catch (error) {
                        printResponseOnFailure(
                            error as Error,
                            `Expected item at index ${i} in field "${fieldName}" to have field "${field}"`
                        );
                    }
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
    
        expectWithResponse(
            data,
            (d) => expect(d).toHaveProperty(fieldName),
            `Expected response to have field "${fieldName}"`
        );
    const fieldValue = data[fieldName];
    
    if (!Array.isArray(fieldValue)) {
        throw new Error(`Field "${fieldName}" is not an array`);
    }
    
    const fields = fieldsList.split(",").map((f: string) => f.trim());
        for (let i = 0; i < fieldValue.length; i++) {
            const item = fieldValue[i];
        for (const field of fields) {
                try {
            expect(item).toHaveProperty(field);
                } catch (error) {
                    printResponseOnFailure(
                        error as Error,
                        `Expected item at index ${i} in field "${fieldName}" to have field "${field}"`
                    );
                }
            }
        }
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected all items in response field "${fieldName}" to have required fields: ${fieldsList}`
        );
    }
});

Then("the response field {string} should be a valid ISO date string", async ({}, fieldName: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    try {
    // Check root level first
    if (data && typeof data === "object" && fieldName in data) {
        const dateString = data[fieldName];
            expectWithResponse(
                typeof dateString,
                (type) => expect(type).toBe("string"),
                `Expected field "${fieldName}" to be a string`
            );
        
        // ISO 8601 date format validation (more flexible to handle +00:00 timezone)
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
            expectWithResponse(
                isoDateRegex.test(dateString),
                (isValid) => expect(isValid).toBe(true),
                `Expected field "${fieldName}" to be a valid ISO date string`
            );
        
        // Also verify it's a valid date
        const date = new Date(dateString);
            expectWithResponse(
                isNaN(date.getTime()),
                (isNaN) => expect(isNaN).toBe(false),
                `Expected field "${fieldName}" to be a valid date`
            );
        return;
    }
    
    // If wrapped in data field
    if (data && typeof data === "object" && "data" in data) {
        data = data.data;
    }
    
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("Response data is not an object");
    }
    
        expectWithResponse(
            data,
            (d) => expect(d).toHaveProperty(fieldName),
            `Expected response to have field "${fieldName}"`
        );
    const dateString = data[fieldName];
        expectWithResponse(
            typeof dateString,
            (type) => expect(type).toBe("string"),
            `Expected field "${fieldName}" to be a string`
        );
    
    // ISO 8601 date format validation (more flexible to handle +00:00 timezone)
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
        expectWithResponse(
            isoDateRegex.test(dateString),
            (isValid) => expect(isValid).toBe(true),
            `Expected field "${fieldName}" to be a valid ISO date string`
        );
    
    // Also verify it's a valid date
    const date = new Date(dateString);
        expectWithResponse(
            isNaN(date.getTime()),
            (isNaN) => expect(isNaN).toBe(false),
            `Expected field "${fieldName}" to be a valid date`
        );
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response field "${fieldName}" to be a valid ISO date string`
        );
    }
});

Then("the response data should have field {string} of type {string}", async ({}, fieldName: string, expectedType: string) => {
    if (!context.response) throw new Error("Response is not available in context");
    let data = context.response.data as any;
    
    try {
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
    } catch (error) {
        printResponseOnFailure(
            error as Error,
            `Expected response data field "${fieldName}" to be of type "${expectedType}"`
        );
    }
});

