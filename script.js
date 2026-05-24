const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const screen = document.querySelector("#screen");
const clearBtn = document.querySelector("#clear");

let currentInput = "0";
let previousInput = "";
let operator = "";

function clear() {
    screen.textContent = "00";
    currentInput = "";
}

function numberClicked(event) {
    if (currentInput.length >= 9) {
        return;
    }
    let digit = event.target.textContent;

    if (currentInput === "0") {
        currentInput = `${digit}`;
    } else {
        currentInput = currentInput + `${digit}`;
    }

    screen.textContent = currentInput;
}

clearBtn.addEventListener("click", clear);

document.querySelectorAll(".numbers").forEach((btn) => {
    btn.addEventListener("click", numberClicked);
});
