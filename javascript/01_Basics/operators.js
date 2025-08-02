// 1. Arithmetic Operators (Examples)

let a = 10;
let b = 3;

console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1   (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation - 10^3)

a++; // a becomes 11 (Post-increment)
console.log(a);

b--; // b becomes 2 (Post-decrement)
console.log(b);

// 2. Logical Operators (Examples)

let x = true;
let y = false;

console.log(x && y); // false (AND - both must be true)
console.log(x || y); // true  (OR - at least one true)
console.log(!x); // false (NOT - reverses true to false)
console.log(!y); // true  (NOT - reverses false to true)

// With expressions:
let age = 20;
console.log(age >= 18 && age < 30); // true
console.log(age < 18 || age > 65); // false

//  3. Assignment Operators (Examples)

let num = 5;

num += 3; // num = num + 3 => 8
console.log(num);

num -= 2; // num = num - 2 => 6
console.log(num);

num *= 4; // num = num * 4 => 24
console.log(num);

num /= 6; // num = num / 6 => 4
console.log(num);

num %= 3; // num = num % 3 => 1
console.log(num);

num **= 3; // num = num ** 3 => 1
console.log(num);
