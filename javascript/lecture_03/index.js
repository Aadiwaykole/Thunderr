//
let a = 10;
let b = 10; 

console.log(a==b);

//non primitive data compare on the basis of reference 

let obj ={
    name :"aditya",
    age :30
}

let obj2 = obj;
console.log(obj2);

let obj3 = {
    name : "aditya",
    city:"pune "
}

obj3.name = "bhaiyya"


console.log(obj3)


// immutable =  no one can change it 
//mutable = changeable data 

