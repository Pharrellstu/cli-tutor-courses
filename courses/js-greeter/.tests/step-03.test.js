const path = require("path");
const { execFileSync } = require("child_process");

const script = path.join(__dirname, "..", "workspace", "greet.js");

function run(args) {
  return execFileSync(process.execPath, [script, ...args], { encoding: "utf8" }).trim();
}

function expect(actual, expected, label) {
  if (actual !== expected) {
    console.error(`✗ ${label}\n  expected: ${JSON.stringify(expected)}\n  received: ${JSON.stringify(actual)}`);
    process.exit(1);
  }
  console.log(`✓ ${label}`);
}

expect(run(["Ada"]), "Hello, Ada!", 'node greet.js Ada prints "Hello, Ada!"');
expect(run([]), "Hello, world!", 'node greet.js prints "Hello, world!"');
console.log("All checks passed.");
