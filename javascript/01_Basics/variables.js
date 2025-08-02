/*
***********Difference between var and let **********
✅ let (introduced in ES6, 2015)

    Block-scoped: limited to the {} block where it's declared.

    Cannot be re-declared in the same scope.

    Recommended for modern JavaScript.
        
        if (true) {
            let x = 10;
            }
        console.log(x); // ❌ ReferenceError: x is not defined



    🕰️ var (older, pre-ES6)

    Function-scoped: accessible anywhere inside the function where it's declared.

    Can be re-declared in the same scope.

    Gets hoisted (declared at the top of the function scope, but not initialized).

    if (true) {
    var y = 20;
    }
    console.log(y); // ✅ 20 (not block-scoped!)



    With var, the variable is hoisted and initialized with undefined.
With let, it's hoisted too—but stays in a "temporal dead zone" until it's assigned.
Summary
Feature	var	let
Scope	Function	Block
Re-declaration	Allowed	Not allowed
Hoisting	Yes (initialized as undefined)	Yes (but not initialized)
Temporal Dead Zone	❌ No	✅ Yes
Modern Usage	❌ Avoid	✅ Use this

🔑 Rule of thumb:
Always use let (or const if the value doesn’t change). Avoid var unless you really need function-scoping.

Want a quick code quiz to test yourself on this?

    */


var user = "zuhaib"; //avoid to use var 
console.log(user);

let password = 4;
console.log(password);
