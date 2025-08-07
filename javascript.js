function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2, operator){
    if (operator == "+"){
        return  add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "*"){
        return multiply(num1, num2);
    } else if (operator == "/"){
        return divide(num1, num2);
    }
    
    
}

let firstNumber = "";
let secondNumber = "";
let total = 0;
let operator = "";
let result = 0;

////////NUMBER BUTTONS//////////
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "0";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "0";
      console.log("Second Number :" + secondNumber);
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (()=> {
    if (operator == ""){
        firstNumber += "1";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "1";
    console.log("Second Number :" + secondNumber);
    
}));

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "2";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "2";
       console.log("Second Number :" + secondNumber);
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "3";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "3";
      console.log("Second Number :" + secondNumber);
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "4";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "4";
      console.log("Second Number :" + secondNumber);
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "5";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "5";
      console.log("Second Number :" + secondNumber);
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "6";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "6";
      console.log("Second Number :" + secondNumber);
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "7";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "7";
      console.log("Second Number :" + secondNumber);
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "8";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "8";
      console.log("Second Number :" + secondNumber);
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "9";
    console.log("First Number :" + firstNumber);
    } else secondNumber += "9";
      console.log("Second Number :" + secondNumber);
});


/////////////////OPERATOR BUTTONS///////////////////////

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "+";
    console.log(operator);
}
});

const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "-";
    console.log(operator);
}
});

const btnMultiply = document.querySelector("#multiply");
btnMultiply.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "*";
    console.log(operator);
}
});

const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "/";
    console.log(operator);
}
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", ()=>{
    operator = "";
    firstNumber = "";
    secondNumber = "";
    total = 0;
});


const equal = document.querySelector("#equal");
equal.addEventListener("click", ()=>{
    total = operate(+firstNumber, +secondNumber, operator);    
    operator = "";
    firstNumber = "";
    secondNumber = "";
    return console.log(total);
    
}); 