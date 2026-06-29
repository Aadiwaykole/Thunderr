//it indirectly return a promise


// function setTimeoutPromisified (duration) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);  
//     })
// };
async function solve (){  
    await setTimeoutPromisified(1000);
    console.log('hi');
    await setTimeoutPromisified(3000);
    console.log('hello');
    await setTimeoutPromisified(2000);
    console.log('hi there ');
};
solve();
console.log('bye');