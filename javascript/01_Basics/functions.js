/* Functions in JavaScript are reusable blocks of code that perform a specific task. They can take inputs (called parameters) and can return a value. Here's a quick overview of how functions work in JavaScript, including the main types.
 1. Function Declaration */

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

// 2. Function Expression

const add = function (a, b) {
  return a + b;
};

console.log(add(3, 4)); // 7

// 3. Arrow Function (ES6)

const multiply = (x, y) => x * y;

console.log(multiply(2, 5)); // 10

// If there’s only one parameter, you can skip parentheses:

const square = x => x * x;

// For multiple statements, use curly braces and return:

const divide = (a, b) => {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
};

/*  4. Immediately Invoked Function Expression (IIFE)

Runs immediately after being defined: */

(function () {
  console.log('IIFE ran!');
})();

//  5. Function with Default Parameters

function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

//  6. Rest Parameters

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//  7. Callback Functions

// Functions passed as arguments:

function processUserInput(callback) {
  const name = 'Alice';
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}`);
});