# Talk to the command line

Time to make this a real CLI. When you run `node greet.js Ada`, Node exposes the arguments through `process.argv` — an array where index `0` is the node binary, index `1` is your script path, and index `2` onwards are the actual arguments.

```js
// node greet.js Ada
process.argv[2]; // → "Ada"
```

> **Your task**
> Add code to the bottom of `greet.js` (below `module.exports`) that reads the first command-line argument and **prints** the greeting with `console.log`. Running `node greet.js Ada` must print `Hello, Ada!`, and plain `node greet.js` must print `Hello, world!`.
