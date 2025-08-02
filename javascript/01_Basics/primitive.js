/*🧱 1. Primitive Data Types

These are immutable (cannot be changed) and are stored by value.
Type	Example

String	"Hello"
Number	42, 3.14
Boolean	true, false
null	null
undefined	undefined
Symbol	Symbol('id')
BigInt	12345678901234567890n

✅ Characteristics of primitive types:

    Compared by value

    Stored in stack memory

    Immutable (e.g., changing a string creates a new string)

Example:*/

let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (a stays the same)




