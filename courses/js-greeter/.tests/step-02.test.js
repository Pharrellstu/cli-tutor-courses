const path = require("path");
const { greet } = require(path.join(__dirname, "..", "workspace", "greet.js"));

function expect(actual, expected, label) {
  if (actual !== expected) {
    console.error(`✗ ${label}\n  expected: ${JSON.stringify(expected)}\n  received: ${JSON.stringify(actual)}`);
    process.exit(1);
  }
  console.log(`✓ ${label}`);
}

expect(greet("Ada"), "Hello, Ada!", 'greet("Ada") still returns "Hello, Ada!"');
expect(greet(), "Hello, world!", 'greet() with no argument returns "Hello, world!"');
console.log("All checks passed.");
