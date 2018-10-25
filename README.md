# Destructuring

## Destructuring With Object
```js

const obj = {
  a: 01,
  b: 02,
  c: 03,
  d: 04
}

const { b, d: 'hi' } = obj 

console.log({ b, d: 'hi' }) // b: 02, d: 'hi'

```
## Destructuring With Array

```js

const arr = [ 4, 6, 'javaScript', false]

const [f] = arr

console.log([f]) // 1

console.log([, x]) // 6


```