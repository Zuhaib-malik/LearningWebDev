// objects

let user = {
    username : "Zuhaib",
    password : 11111,
    email : "abc@gmail.com"
}

console.log(user);
console.log(typeof(user));

console.log(user.username , user.email);


console.table(user);


// Array

let arr = [2,3,4,5,"string",true];
let i = null;
for(i in arr){
    console.log(arr[i]);
    i++;
}