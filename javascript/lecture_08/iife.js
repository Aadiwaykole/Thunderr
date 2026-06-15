//IIFE FUNCTION 

(function hello(){
    console.log("hello");
})();


//js function ke ander kisi dusre functionko pass kr sakte ho 

//callback


function greet(){
    console.log("hello greet");

}

///callback = greet

function meet(callback){
    console.log("hello meeet")
    callback();
}
//hello meet , hello greet
meet(greet)
