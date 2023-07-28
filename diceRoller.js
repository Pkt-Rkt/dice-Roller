function roll(){
let x = document.getElementById("number").value;
document.getElementById("input").innerHTML = "Your number is:"
let result = Math.floor(Math.random()* x + 1)
document.getElementById("numb").innerHTML = result;
}