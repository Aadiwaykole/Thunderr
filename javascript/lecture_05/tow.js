//1d 2d 3d array

// const num1 = [4,6,5,75,7,6]
// const num2 = [55,6,5,4,5,6]

// const num = num1.concat (num2);


// console.log(num);

//ans
// //[
//   4,  6, 5, 75, 7,
//   6, 55, 6,  5, 4,
//   5,  6
// ]

//spread operation 

// const num1 = [43,5,4,23]
// const num2 = [32,43,65,3]
// const num3 = [473,53,46,2]

// const num = [...num1, ...num2, ...num3]
// console.log(num )


// const nums = [num1, num2, num3]
// //if you do this so here array goes into array
// console.log(nums);

//[ [ 43, 5, 4, 23 ], [ 32, 43, 65, 3 ], [ 473, 53, 46, 2 ] ]


const num = [10,20,30,40,50]

// const first = num[0];
// const second = num[1];

const [first, second]= num ;

console.log(first , second )

//remaining array : rest operator:(...)
const [fir, sec, ...remaining] = num ;
console.log(fir,sec,remaining) 
