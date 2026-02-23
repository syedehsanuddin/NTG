import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";

const EMAILS_FILE = path.join(process.cwd(), "Emails.md");
const TEST_DATA_FILE = path.join(process.cwd(), ".test-data.json");

/**
 * Generates a unique email address using a GUID/UUID appended to @mailinator.com
 * @returns A unique email address in format: {GUID}@mailinator.com
 */
export function generateUniqueEmail(): string {
    // Generate a UUID and remove hyphens, take first 8 characters for shorter email
    const guid = randomUUID().replace(/-/g, "").substring(0, 8).toUpperCase();
    const email = `${guid}@mailinator.com`;
    
    // Append to Emails.md file
    appendEmailToFile(email);
    
    return email;
}

/**
 * Generates a unique email address for customers (marked as customer email in Emails.md)
 * @returns A unique email address in format: {GUID}@mailinator.com
 */
export function generateUniqueCustomerEmail(): string {
    // Generate a UUID and remove hyphens, take first 8 characters for shorter email
    const guid = randomUUID().replace(/-/g, "").substring(0, 8).toUpperCase();
    const email = `${guid}@mailinator.com`;
    
    // Append to Emails.md file with customer tag
    appendEmailToFile(email, "customer");
    
    return email;
}

/**
 * Appends an email to the Emails.md file
 * @param email - The email address to append
 * @param type - Optional type tag (e.g., "customer") to categorize the email
 */
function appendEmailToFile(email: string, type?: string): void {
    const timestamp = new Date().toISOString();
    const typeTag = type ? ` [${type}]` : "";
    const entry = `- ${email}${typeTag} (Generated: ${timestamp})\n`;
    
    try {
        // Check if file exists, if not create it with header
        if (!fs.existsSync(EMAILS_FILE)) {
            const header = `# Generated Test Emails\n\nThis file contains all email addresses generated during test execution.\n\n## Emails\n\n`;
            fs.writeFileSync(EMAILS_FILE, header, "utf-8");
        }
        
        // Append the email entry
        fs.appendFileSync(EMAILS_FILE, entry, "utf-8");
    } catch (error) {
        // Silently fail if file write fails (don't break tests)
        console.warn(`Warning: Could not write email to ${EMAILS_FILE}:`, error);
    }
}

/**
 * Gets all emails from the Emails.md file
 * @returns Array of email addresses
 */
export function getAllGeneratedEmails(): string[] {
    if (!fs.existsSync(EMAILS_FILE)) {
        return [];
    }
    
    try {
        const content = fs.readFileSync(EMAILS_FILE, "utf-8");
        const emailRegex = /- ([^\s]+@mailinator\.com)/g;
        const emails: string[] = [];
        let match;
        
        while ((match = emailRegex.exec(content)) !== null) {
            emails.push(match[1]);
        }
        
        return emails;
    } catch (error) {
        console.warn(`Warning: Could not read emails from ${EMAILS_FILE}:`, error);
        return [];
    }
}

/**
 * Stores test data (like IDs) that need to persist across scenarios
 */
export function storeTestData(key: string, value: string): void {
    try {
        let testData: Record<string, string> = {};
        if (fs.existsSync(TEST_DATA_FILE)) {
            const content = fs.readFileSync(TEST_DATA_FILE, "utf-8");
            testData = JSON.parse(content);
        }
        testData[key] = value;
        fs.writeFileSync(TEST_DATA_FILE, JSON.stringify(testData, null, 2), "utf-8");
    } catch (error) {
        console.warn(`Warning: Could not store test data:`, error);
    }
}

/**
 * Retrieves test data that was stored previously
 */
export function getTestData(key: string): string | undefined {
    try {
        if (!fs.existsSync(TEST_DATA_FILE)) {
            return undefined;
        }
        const content = fs.readFileSync(TEST_DATA_FILE, "utf-8");
        const testData: Record<string, string> = JSON.parse(content);
        return testData[key];
    } catch (error) {
        console.warn(`Warning: Could not read test data:`, error);
        return undefined;
    }
}

/**
 * Generates a unique coupon code by appending a GUID to a base code
 * @param baseCode - Base code to append GUID to (default: "AUTOMATETEDTEST")
 * @returns A unique coupon code in format: {BASE_CODE}_{GUID}
 */
export function generateUniqueCouponCode(baseCode: string = "AUTOMATETEDTEST"): string {
    // Generate a UUID and remove hyphens, take first 8 characters for shorter code
    const guid = randomUUID().replace(/-/g, "").substring(0, 8).toUpperCase();
    return `${baseCode}_${guid}`;
}

/**
 * Generates a unique phone number
 * @returns A unique phone number in format: +923XXXXXXXXX (Pakistan format)
 */
export function generateUniquePhoneNumber(): string {
    // Generate a UUID and remove hyphens, take first 9 digits
    const digits = randomUUID().replace(/-/g, "").replace(/[^0-9]/g, "").substring(0, 9);
    // Ensure we have 9 digits, pad with random if needed
    const phoneDigits = digits.padEnd(9, Math.floor(Math.random() * 10).toString());
    return `+923${phoneDigits}`;
}

/**
 * Generates a unique ingredient name
 * @param baseName - Base name to append GUID to (default: "Automatest Test Ingredient")
 * @returns A unique ingredient name in format: {BASE_NAME}_{GUID}
 */
export function generateUniqueIngredientName(baseName: string = "Automatest Test Ingredient"): string {
    // Generate a UUID and remove hyphens, take first 8 characters for shorter name
    const guid = randomUUID().replace(/-/g, "").substring(0, 8).toUpperCase();
    return `${baseName}_${guid}`;
}

