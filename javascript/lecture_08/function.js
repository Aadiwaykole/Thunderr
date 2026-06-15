//function 

// function add (){
//     console.log("a+b")
// }

// add ();


// function addsum (num1, num2, num3){
//     return num1+num2+num3
// }

// console.log(addsum(5,4,5))

//instead of above you can do one thing num3 =0 
//then it will give a ans without 
function addsum (num1, num2, num3=0){
    return num1+num2+num3
}

console.log(addsum(5,4,))



const arr = [5,4,5,6,555,4,6,343,4,64]

function Addnum (...arr){    //rest operator  
    let sum = 0 ;

    for(const num of arr){
        sum+=num ;
    }
    return sum ; 
}

console.log(Addnum)



//second method of create array

// const greet = function (){
//     console.log("heello ji")
//     return 10; 
// }
// const ans = greet();
// console.log(ans );


// const addNumber = function (num1, num2){
//     return num1+num2;

// }
// console.log(addNumber(5,5))



//third type of create function 
const greet =()=>{
    console.log("hello ")
    return 1;  
}
console.log(greet)

const addNumber = (num1, num2)=>num1+num2;
//when you have only one parameter , no need to use {}

console.log(addNumber(4,3))



const user = ()=>({name: "adi",age:21})//one obj is direclty return 

console.log(user());

 