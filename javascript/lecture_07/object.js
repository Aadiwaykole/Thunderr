const customer  ={
    name:"aditya",
    age: 20 ,
    accountnum: 434236243,
    balance :40,
}

 const customerkeys =Object.keys(customer);
console.log(Object.values(customer))


// console.log(Object.entries(customer))
//instead of this you can do 
for(const ans of Object.entries(customer)){
    console.log(ans);
}


for(const key of customerkeys){
    console.log(key,customer[key])
}

