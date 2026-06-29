function addTodo(){
    const value = document.querySelector("input").value; 
    // const newTodoDivEl =document.createElement("div");
    // newTodoDivEl.innerHTML = value;
    // document.querySelector('body').appendChild(newTodoDivEl);

    const spanEl = document.createElement("span");
    const buttonel = document.createElement("button");
    spanEl.innerHTML = value;
    buttonel.innerHTML = "Delete";

    ///
    const divEl = document.createElement ("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonel);

    ///
    const bodyEl = document.querySelector('body');
    bodyEl.appendChild(divEl);

}