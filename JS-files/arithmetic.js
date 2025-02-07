// declaration of variables based on classes and ids in arithematic calculator device
const rowList = keypad.querySelectorAll('.row');
const screen = document.querySelector('.screen');

// variables to store calculator state
let currVal = "";
let operator = "";
let buffer = "";
screen.innerText = "0";

// adding event listener for each button in each row
for (let row of rowList) {
    const btns = row.querySelectorAll('button');

    for (let btn of btns) {
        btn.addEventListener('click', (e) => {
            checkInput(e.target.innerText);
        })
    }
}

// keyboard reference values (key list map) for calculator functions
const keyMap = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "+", "-", "/", "*", "%", "Backspace", "Delete", "Enter"];

// event listtner to check if pressed key is a valid calculator key.
window.addEventListener('keydown', (k) => {
    for (let keyVal of keyMap) {
        if (k.key == keyVal) {
            checkInput(k.key);
        }
    }
})

// main function to check input and perform actions
function checkInput(val) {
    switch (val) {
        case '=':
        case "Enter":
            calOutput();
            break;

        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
            updateOperator(val);
            break;

        case "AC":
        case "Delete":
            clearAll();
            break;

        case "Backspace":
        case "C":
            clearLast();
            break;

        default:
            currVal += val;
            screen.innerText = currVal;
            break;
    }
}

// clears the last entered digit or resets after calculation
function clearLast() {
    if (currVal != "") {
        currVal = currVal.substring(0, currVal.length - 1);
    }
    else if (operator == "=") {
        clearAll();
        return;
    }
    else {
        operator = "";
        currVal = buffer;
        buffer = "";
    }

    screen.innerText = currVal;
}

// clears all values and resets calculator state
function clearAll() {
    operator = "";
    buffer = "";
    currVal = "";
    screen.innerText = "0";
}

// calculates and displays the final output
function calOutput() {
    performOperation();

    currVal = "";
    operator = "=";
    screen.innerText = buffer;
}

// performs arithmetic operation based on the operator
function performOperation() {
    let firstVal = parseFloat("0" + buffer);
    let secondVal = parseFloat("0" + currVal);

    switch (operator) {
        case "+":
            buffer = firstVal + secondVal;
            break;
        case "-":
            buffer = firstVal - secondVal;
            break;
        case "*":
            buffer = firstVal * secondVal;
            break;
        case "/":
            buffer = firstVal / secondVal;
            break;
        case "%":
            firstVal = firstVal * 100;
            buffer = firstVal / secondVal;
            break;
        default:
            buffer = (buffer == "" && currVal == "") ? "0" : ((buffer == "") ? currVal : buffer);
            break;
    }
}

// updates the operator and manages the transition between numbers
function updateOperator(oprtVal) {
    if (operator == "=") {
        if (currVal != "") {
            buffer = currVal;
            currVal = "";
        }
        operator = oprtVal;
    }
    else {

        if (operator == "") {
            buffer = currVal;
        }
        else if (operator != "" && currVal == "") {
            operator = oprtVal;
        }
        else {
            performOperation();
        }
        operator = oprtVal;
        currVal = "";
        screen.innerText = buffer;
    }
}