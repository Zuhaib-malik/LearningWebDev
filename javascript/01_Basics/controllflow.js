
/* Basic Control Flow Structures in JavaScript
1. Conditional Statements

Used to make decisions in code.
if, else if, else
*/
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("Needs improvement");
}

// switch statement

// Better for multiple specific values.

let day = "Tuesday";

switch(day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
    console.log("Second day");
    break;
  default:
    console.log("Other day");
}
/*
2. Loops

Used to repeat code blocks.
for loop
*/
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

// while loop

let x = 0;
while (x < 5) {
  console.log("x =", x);
  x++;
}

// do...while loop

// Runs at least once before checking the condition.

let i = 0;
do {
  console.log("i =", i);
  i++;
} while (i < 5);

// for...of loop (for arrays, strings, etc.)

const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in loop (for objects)

const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(key + ":", person[key]);
}
/*
3. Control Keywords

    break – Exit a loop or switch early.

    continue – Skip the current loop iteration.

    return – Exit a function and return a value.
    */

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // Logs 0, 1, 2
}

// Ternary Operator

// Short form of if...else

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes "
