# Sensible defaults

What happens if someone calls `greet()` with no name at all? Right now you'd get `Hello, undefined!` — not a great look.

JavaScript lets a parameter declare a **default value**, used whenever the caller doesn't provide one:

```js
function area(width, height = width) {
  return width * height;
}
area(3); // → 9
```

> **Your task**
> Update `greet` so that calling it with no argument returns `Hello, world!`, while `greet("Ada")` still returns `Hello, Ada!`.
