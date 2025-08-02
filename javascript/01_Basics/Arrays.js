/* Arrays in JavaScript are ordered collections of values. They can store multiple data types, including numbers, strings, objects, and even other arrays.
 Creating Arrays */

let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
console.log(fruits);
console.log(numbers);
console.log(mixed);

// You can also create an array using the constructor:

let arr = new Array(3); // [empty × 3]
let names = new Array("Alice", "Bob"); // ["Alice", "Bob"]
console.log(arr);
console.log(names);


/* 
📏 Accessing Elements

    Indexing starts at 0
 */
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

// Update a value

colors[1] = "yellow"; // ["red", "yellow", "blue"]

/* Array Methods
📌 Add/Remove Elements
Method	Description
push()	Add to end
pop()	Remove from end
unshift()	Add to start
shift()	Remove from start */

let num = [1, 2, 3];
num.push(4);      // [1, 2, 3, 4]
num.pop();        // [1, 2, 3]
num.unshift(0);   // [0, 1, 2, 3]
num.shift();      // [1, 2, 3]

//  Looping Through Arrays
// for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of

for (const fruit of fruits) {
  console.log(fruit);
}

// forEach()

fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});
/* 
 Useful Array Methods
Method	Description
length	Number of elements
includes()	Check if value exists
indexOf()	Find index of a value
slice()	Extract part of array
splice()	Add/remove elements
join()	Convert array to string
concat()	Combine arrays
reverse()	Reverse the array
sort()	Sort elements
map()	Transform array
filter()	Filter based on condition

Example: */

let nums = [10, 20, 30, 40];

let doubled = nums.map(n => n * 2);      // [20, 40, 60, 80]
let filtered = nums.filter(n => n > 20); // [30, 40]

// 🧪 Checking Array Type

Array.isArray(fruits); // true
typeof fruits;         // "object"


