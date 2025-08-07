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
        return  toFixed10(add(num1, num2));
    } else if (operator == "-"){
        return toFixed10(subtract(num1, num2));
    } else if (operator == "*"){
        return toFixed10(multiply(num1, num2));
    } else if (operator == "/"){
        return toFixed10(divide(num1, num2));
        
    }   
}

function toFixed10(num){
    if (!Number.isInteger(num) && num.toString().length > 12){
        // String(num).length > 10
        return num.toFixed(10);
    } else return num;
   
}


const display = document.querySelector("#display");

function displayText(text){
    display.textContent = "";
    display.textContent += text;
}

function displayError(){
    display.textContent = "";
    display.textContent += "ERROR";
    firstNumber = "";
        operator = "";
        total = "";
        secondNumber = "";
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
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "0";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (()=> {
    if (operator == ""){
        firstNumber += "1";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "1";
        displayText(secondNumber);
    }
    console.log("Second Number :" + secondNumber);
    
}));

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "2";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "2";
        displayText(secondNumber);
    }
       console.log("Second Number :" + secondNumber);
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "3";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "3";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "4";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "4";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "5";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "5";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "6";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "6";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "7";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "7";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "8";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "8";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", ()=> {
    if (operator == ""){
        firstNumber += "9";
        displayText(firstNumber);
    console.log("First Number :" + firstNumber);
    } else {
        secondNumber += "9";
        displayText(secondNumber);
    }
      console.log("Second Number :" + secondNumber);
});


/////////////////OPERATOR BUTTONS///////////////////////

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "+";
    console.log(operator);
}
if (operator == "/" && +secondNumber==0){
        displayError();
        
    } else {
    if(!firstNumber== "" && !secondNumber==""){
        total = toFixed10(operate(+firstNumber, +secondNumber, operator));
        // toFixed10(total);
        console.log(total);
        displayText(total);
        firstNumber = total;
        secondNumber = "";
        operator = "+";
    }}
});

const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "-";
    console.log(operator);
}
if (operator == "/" && +secondNumber==0){
        displayError();
        
    } else {
    if(!firstNumber== "" && !secondNumber==""){
        total = operate(+firstNumber, +secondNumber, operator);
        console.log(total);
        displayText(total);
        firstNumber = total;
        secondNumber = "";
        operator = "-";
    }}
});

const btnMultiply = document.querySelector("#multiply");
btnMultiply.addEventListener("click", ()=>{
    if (operator === ""){
    operator = "*";
    console.log(operator);
}
if (operator == "/" && +secondNumber==0){
        displayError();
        
    } else {
    if(!firstNumber== "" && !secondNumber==""){
        total = operate(+firstNumber, +secondNumber, operator);
        console.log(total);
        displayText(total);
        firstNumber = total;
        secondNumber = "";
        operator = "*";
    }}
});

const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", ()=>{
    
    if (operator === ""){
    operator = "/";
    console.log(operator);
}
if (operator == "/" && +secondNumber==='0'){
        displayError();
        
    } else {
    if(!firstNumber== "" && !secondNumber==""){
        total = operate(+firstNumber, +secondNumber, operator);
        console.log(total);
        displayText(total);
        firstNumber = total;
        secondNumber = "";
        operator = "/";
    }}
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", ()=>{
    operator = "";
    firstNumber = "";
    secondNumber = "";
    total = 0;
    displayText(total);
});


const equal = document.querySelector("#equal");
equal.addEventListener("click", ()=>{
   
    if (operator == "/" && +secondNumber==0){
        displayError();
        
    }else if (firstNumber=="" || secondNumber==""){
        displayText(total);
    } else {
        total = operate(+firstNumber, +secondNumber, operator); 
    displayText(total);   
    
    }
    operator = "";
    firstNumber = total;
    secondNumber = "";
    
    return console.log(`TOTAL: ${total} \nFIRST NUMBER: ${firstNumber} \nSECOND NUMBER: ${secondNumber} \nOPERATOR: ${operator}`);
    
}); 