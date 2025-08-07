// this is the demo of clouser function which remembers the previous valuse
function outer(){
    let x = 2;
    return function inner(){
        console.log("this is ", x);
        x++;
        return x;
    }
        
    
}
let u = outer();
console.log(u());
console.log(u());
console.log(u());
console.log(u());
console.log(u());
