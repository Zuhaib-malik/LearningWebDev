const Person = {

    name: "zuhaib",

    great(){
        console.log(`thsi is my name ${this.name}`);
        
    },
};

person.great();

const greatfunction = person.great();
greatfunction();

const boundGreet = person.great.bind({ name: "malik"});
boundGreet();

//bind call and apply for exploring more