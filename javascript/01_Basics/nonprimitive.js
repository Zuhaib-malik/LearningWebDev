/*
📦 1. Non-Primitive (Reference) Data Types

These are mutable and stored by reference.
Type	Example
Object	{ name: "Alice", age: 25 }
Array	[1, 2, 3]
Function	function greet() {}
Date, RegExp, etc.	(also objects)

✅ Characteristics of non-primitive types:

    Compared by reference, not value

    Stored in heap memory

    Mutable (changes affect all references)

Example:
*/
let person1 = { name: "John" };
let person2 = person1;

person2.name = "Alice";
console.log(person1.name); // "Alice" (same object in memory)

// 🔍 Comparison Example

let x = 100;
let y = 100;
console.log(x === y); // true (primitive values)

let obj1 = { value: 100 };
let obj2 = { value: 100 };
console.log(obj1 === obj2); // false (different references)

/*
Summary Table:
Feature	Primitive	Non-Primitive
Stored in	Stack	Heap
Stored by	Value	Reference
Mutable	❌ No	✅ Yes
Compared by	Value	Reference
Examples	String, Number	Object, Array 
*/