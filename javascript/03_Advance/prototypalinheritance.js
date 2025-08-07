function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hellow! I am ${this.name}`);
    
}

let u = new Person("zuhaib");
console.log(u);
u.greet();