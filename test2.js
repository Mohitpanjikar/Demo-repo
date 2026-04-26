/**
 * This file contains 5 security issues for demonstration purposes.
 */

// 1. Hardcoded Password (Sensitive Information Leak)
const DB_CONFIG = {
    host: "localhost",
    user: "admin",
    password: "AdminPassword@123"
};

// 2. Hardcoded API Key (Sensitive Information Leak)
const MAPS_API_KEY = "AIzaSyA4_X8y9Z0w1V2u3T4s5R6q7P8o9N0m1L";

function processUserData(inputJson) {
    // 3. Insecure use of eval() (Potential Remote Code Execution)
    // Using eval to parse user input is extremely dangerous.
    const data = eval("(" + inputJson + ")");
    console.log("Processed user:", data.username);

    // 4. Logging Sensitive Data (Information Exposure)
    // Never log passwords or other sensitive credentials.
    console.log("Attempting login for user with password:", data.password);

    return data;
}

function generateSessionToken() {
    // 5. Insecure Randomness (Weak Token Generation)
    // Math.random() is not cryptographically secure and can be predicted.
    const token = Math.random().toString(36).substring(2);
    return `session_${token}`;
}

// Example usage
const sampleInput = '{"username": "guest", "password": "guestPassword123"}';
processUserData(sampleInput);
const session = generateSessionToken();
console.log("Session started:", session);
