# Your first function

Every program is built from **functions** — reusable blocks of code that take input and produce output.

Your greeter needs one core function: `greet`. It takes a name and returns a greeting string.

```js
greet("Ada"); // → "Hello, Ada!"
```

In JavaScript, a function looks like this:

```js
function shout(word) {
  return word.toUpperCase() + "!";
}
```

Note the `return` keyword — it's how a function hands its result back to whoever called it.

> **Your task**
> Open `greet.js`. Write a function `greet(name)` that returns the string `Hello, <name>!` — for example `greet("Ada")` returns `Hello, Ada!`. Keep the `module.exports` line at the bottom so the tests can see your function.
