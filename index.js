let input = document.getElementById("user_input");
let button = document.getElementById("btn");
let ul = document.querySelector("ul");

function input_length(){
    return input.value.length
}

function click(){
    if(input_length()>0)
    createElement()
}
function enter(event){
    if(input_length()>0 && event.keyCode === 13){
    createElement()

    }
}

function createElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value=""}

input.addEventListener("keypress",enter)

button.addEventListener("click",click);