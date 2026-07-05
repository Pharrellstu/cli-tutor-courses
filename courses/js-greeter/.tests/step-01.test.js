const path = require("path");
const { greet } = require(path.join(__dirname, "..", "workspace", "greet.js"));

function expect(actual, expected, label) {
  if (actual !== expected) {
    console.error(`✗ ${label}\n  expected: ${JSON.stringify(expected)}\n  received: ${JSON.stringify(actual)}`);
    process.exit(1);
  }
  console.log(`✓ ${label}`);
}

if (typeof greet !== "function") {
  console.error("✗ greet.js must export a function named greet");
  process.exit(1);
}
expect(greet("Ada"), "Hello, Ada!", 'greet("Ada") returns "Hello, Ada!"');
expect(greet("Grace"), "Hello, Grace!", 'greet("Grace") returns "Hello, Grace!"');
console.log("All checks passed.");
