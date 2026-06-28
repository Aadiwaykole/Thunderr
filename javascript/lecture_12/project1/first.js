const parent = document.getElementById("root");
const body = document.querySelector("body");


const color = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

parent.addEventListener('dbclick',(e)=>{
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id; 
})


parent.addEventListener("click", function(e){
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id; 
})
