# Destructuring

## Destructuring With Object

### Without Defaults

```js

const obj = {
  a: 01,
  b: 02,
  c: 03,
  d: 04
}

const { a } = obj // a: 01

const { b, d: dd } = obj 
console.log( b, dd ) // b: 02, dd: 04

```
### With Defaults

```js
const obj = {
  a: 01,
  b: 02,
  c: 03,
  d: 04
}

const { f = false } = obj
console.log(f) // false

const { a: aa, b = 10 } = obj
console.log(aa, b) // aa: 01, b: 02

```

## Destructuring With Array

```js

const arr = [ 4, 6, 'javaScript', false]

const [f] = arr
const ff = arr[0]


console.log(f) // 1

const [, r] = arr
const rr = arr[1] 

console.log(r) // 6

const [,,third] =  arr
const thirdd = arr[2] 

```