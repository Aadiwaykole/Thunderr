//funnction ke ander function is called callback

function add (num1, num2){
    return num1+num2;
}

function sub (num1, num2){
    return num1-num2;
}

function mul (num1, num2){
    return num1*num2;
}


function calculator(num1, num2, callback){
    console.log("calculation = ");
    const result = callback(num1,num2);
    console.log(`your result ${result}`);
}


calculator(3,5,add);