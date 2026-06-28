class person {
    constructor(name, age, city){

        this.name = name; 
        this.age = age;
        this.city = city;
    }
    increase(){
        this.age++;
    }
}

const user1 = new person ("aditya", 22, "pune");
const user2 = new person ("rahul", 25, "mumbai");

console.log(user1.name); // Output: aditya
console.log(user2.name); // Output: rahul

console.log(user1.age); // Output: 22

console.log(typeof person); // Output: function

// class and object

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.x = 10;
    }

    greet(){
        console.log(`Hi ${this.name}`)
    }
};


const user1 = new Person("Rohit",20);
const user2 = new Person("Sohan",10);

console.log(user1);
console.log(user2);

// user1.greet();

const user3 = {
    name: "Mayank",
    age: 72,
    greet: function(){
        console.log(`Hi ${this.name}`)
    }
}

console.log(user3);


const arr = [10,20,30];

console.log(arr);