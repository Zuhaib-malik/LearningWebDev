/* A higher-order function in JavaScript is a function that either:

    Takes one or more functions as arguments, or

    Returns a function as its result (or both).

In short, functions that operate on other functions.
✅ Why are higher-order functions useful?

They let you write flexible, reusable, and cleaner code — especially when working with collections (arrays, objects) or asynchronous operations.
💡 Common Examples:
1. Passing functions as arguments */

function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet); // Output: "Hello, Alice"

/* Here, processUserInput is a higher-order function because it takes another function (greet) as an argument.
2. Returning a function */

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

/* Here, multiplier is a higher-order function because it returns a new function.
3. Array methods like map, filter, reduce

These are built-in higher-order functions in JavaScript. */

const numbers = [1, 2, 3, 4];

// map: transforms each item
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

// filter: filters items based on condition
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce: combines values into one
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

/* 
A higher-order function:

    Works with other functions (takes them as input or returns them).

    Is common in functional programming.

    Makes your code more modular and expressive. */