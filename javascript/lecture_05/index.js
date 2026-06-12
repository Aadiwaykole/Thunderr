//this lecture based on arrays only

//array  = what is an array in javascript
// 5 students = 30,40,56,78,65

let marks1 = 30;

let marks2 = 40;
let marks3 = 65;
let marks4= 78;
let marks5 = 65;

//5 variable create : 100 students ke marks

// let mark = [54,3,6,4,2,54];
// console.log(mark);

// //find the number of emelent in the array
// console.log(mark.length)

//what if i have to find the individual element from the array

// arr = [4,5,4,5,6]

// console.log(arr[1])

// for(let i= 0; i<=arr.length; i ++){  //more that count 
//     console.log(arr[i])
// }

// arr 2  = [true, ]


//can i update the value inside the array

user = ["abc", "adity", true, 43];
user[0]="shra"

console.log(user)



//push(insert element in teh array at the end )
//pop (delete element from the end of array 

let num = [43,5,3,2,54]
num.push(48)
console.log(num );
num.pop();
console.log(num)

//add and delete element at the start of an array
num.unshift(40,50);
console.log(num )
num.shift();
console.log(num)


//for of loop ka use bhut karte hia 
let nums =[5,6,4,3,9]
for(let x of nums){
    console.log(x )
};



//slice and splice
// let count = [43,2,98,43,23,98];
// const a = count.slice(1,4)  //it gives you the value from 1 to 3
//2 to not 4 only 3 
// console.log(a)
 
// console.log(count);//there is no changes in main arrray


//splice 

let count = [43,2,98,43,23,98];
const a  = count.splice (1,3); //second index. total 3 element from  1
console.log(count);//changes in main array
//splice return a new array from perticular index, 
//second :total elemnet 


//starting element : splice:Delete, insert karane ke liye kr sakte hia 
//if have to to delete 30 from the array
arr4 = [12,3,30,56,7,5]
arr4.splice(2,1);
console.log(arr4) 

// arr = arr2 it follows the object 
//so that whatever changes in arr2 it woul dbe change in arr

//..