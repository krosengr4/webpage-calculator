const equalsBtn = document.querySelector("#equals");
const zeroBtn = document.querySelector("#zero");
const screen = document.querySelector("#screen");
const clearBtn = document.querySelector("#clear");

let currentInput = "";
let previousInput = "";
let operator = "";
let justCalculated = false;

function clear() {
    screen.textContent = "0";
    currentInput = "";
    previousInput = "";
    operator = "";
    justCalculated = false;

    document
        .querySelectorAll(".operators")
        .forEach((btn) => btn.classList.remove("active"));
}

function handleNumClick(event) {
    if (currentInput.length >= 9) {
        return;
    }
    if (justCalculated) {
        currentInput = "";
        justCalculated = false;
    }
    let digit = event.target.textContent;

    if (currentInput === "") {
        currentInput = `${digit}`;
    } else {
        currentInput = currentInput + `${digit}`;
    }

    screen.textContent = currentInput;
}

function handleOperatorClick(event) {
    document
        .querySelectorAll(".operators")
        .forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (justCalculated || currentInput !== "") {
        previousInput = justCalculated ? previousInput : currentInput;
        currentInput = "";
        justCalculated = false;
    }

    operator = event.target.textContent;
}

function calculate(a, b, oper) {
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b == 0) {
                return "Err";
            } else {
                return a / b;
            }
    }
}

function handleEqualsClick() {
    if (previousInput == "" || operator == "") {
        return;
    }

    document
        .querySelectorAll(".operators")
        .forEach((btn) => btn.classList.remove("active"));

    const prevInputInt = Number(previousInput);
    const currInputInt = Number(currentInput);

    const result = calculate(prevInputInt, currInputInt, operator);
    justCalculated = true;

    screen.textContent = Number.isInteger(result)
        ? result
        : parseFloat(result.toFixed(4));

    // Set up for chaining
    previousInput = result;
    currentInput = "";
    operator = "";
}

clearBtn.addEventListener("click", clear);
equalsBtn.addEventListener("click", handleEqualsClick);

document.querySelectorAll(".numbers").forEach((btn) => {
    btn.addEventListener("click", handleNumClick);
});
zeroBtn.addEventListener("click", handleNumClick);

document.querySelectorAll(".operators").forEach((btn) => {
    btn.addEventListener("click", handleOperatorClick);
});
