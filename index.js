function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if (b==0) {
        return "Error: Division by zero is undefined";
    } else {
        return a/b;
    }
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case '*':
            return mul(a,b);
        case '/':
            return div(a,b);
        default:
            return null;
    }
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let numButtons = document.getElementsByClassName("numButton");

for (let i=0; i<numButtons.length; i++){
    numButtons[i].addEventListener('click',function(){
        if (operator == ""){
            firstNumber += this.textContent;
            updateDisplay(firstNumber);
        }else{
            secondNumber +=  this.textContent;
            updateDisplay(firstNumber, operator, secondNumber);
        }
    })
}


let opButtons = document.getElementsByClassName("opButton");
for (let i=0; i<opButtons.length; i++){
    opButtons[i].addEventListener('click', function(){
        operator = this.textContent;
        updateDisplay(firstNumber, operator);
    })
}

let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener('click', function(){
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        updateDisplay(result);
    }
})

let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener('click', function(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    updateDisplay('');
})

// function updateDisplay(firstNumber){
//     let display = document.getElementById("display");
//     display.innerHTML = firstNumber;
// }

function updateDisplay(firstNum, op = '', secondNum = '') {
    let display = document.getElementById("display");
    display.innerHTML = firstNum + (op ? ' ' + op + ' ' : '') + secondNum;
}
