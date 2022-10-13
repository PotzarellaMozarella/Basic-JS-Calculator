let num1= 5
let num2 = 8

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("result-el")

function add() {
    let sum= num1+num2;
   // console.log(result);
   result.textContent = "result: " + sum;
}

function subtract() {
    let difference= num1-num2;
   // console.log(result);
   result.textContent = "result: " + difference;
}

function divide() {
    let dividend= num1/num2;
   // console.log(result);
    result.textContent = "result: " + dividend;
}

function multiply() {
    let multiplication= num1*num2;
   // console.log(result);
   result.textContent = "result: " + multiplication;
}