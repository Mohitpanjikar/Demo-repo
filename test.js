console.log("testing");
console.log("testing2 with winsec");

const dbUrl = process.env.DB_URL || "";

if (!dbUrl) {
	console.warn("DB_URL is not set.");
}

console.log("Database URL configured:", Boolean(dbUrl));

console.log("This is a test file for secure code scanning.");

console.log("End of test file.");