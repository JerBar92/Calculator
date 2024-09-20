let result = 0;
let operator = "";
let operand = [];
let tempNumber = "";

const display = document.getElementById("onScreen");
const btn = document.querySelectorAll(".number");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnAdd = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const btnMult = document.getElementById("btnMult");
const btnDiv = document.getElementById("btnDiv");
const btnEq = document.getElementById("btnEq");
const btnAc = document.getElementById("btnAc");
const btnC = document.getElementById("btnC");
const btnDel = document.getElementById("btnDel");
const btnNeg = document.getElementById("btnNeg");
const btnFloat = document.getElementById("btnFloat");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "You cannot divide by 0" : num1 / num2;
}

function operate(num1, num2) {
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
}

function reset() {
  result = 0;
  operator = "";
  operand = [];
  tempNumber = "";
  display.textContent = "0";
}
btn0.addEventListener("click", () => {
  tempNumber += "0";
  display.textContent = tempNumber;
});

btn1.addEventListener("click", () => {
  tempNumber += "1";
  display.textContent = tempNumber;
});

btn2.addEventListener("click", () => {
  tempNumber += "2";
  display.textContent = tempNumber;
});

btn3.addEventListener("click", () => {
  tempNumber += "3";
  display.textContent = tempNumber;
});

btn4.addEventListener("click", () => {
  tempNumber += "4";
  display.textContent = tempNumber;
});

btn5.addEventListener("click", () => {
  tempNumber += "5";
  display.textContent = tempNumber;
});

btn6.addEventListener("click", () => {
  tempNumber += "6";
  display.textContent = tempNumber;
});

btn7.addEventListener("click", () => {
  tempNumber += "7";
  display.textContent = tempNumber;
});

btn8.addEventListener("click", () => {
  tempNumber += "8";
  display.textContent = tempNumber;
});

btn9.addEventListener("click", () => {
  tempNumber += "9";
  display.textContent = tempNumber;
});

btnAdd.addEventListener("click", () => {
  operand.push(Number(tempNumber));
  display.textContent = "+";
  operator = "+";
  tempNumber = "";
});

btnSub.addEventListener("click", () => {
  operand.push(Number(tempNumber));
  display.textContent = "-";
  operator = "-";
  tempNumber = "";
});

btnMult.addEventListener("click", () => {
  operand.push(Number(tempNumber));
  display.textContent = "*";
  operator = "*";
  tempNumber = "";
});

btnDiv.addEventListener("click", () => {
  operand.push(Number(tempNumber));
  display.textContent = "/";
  operator = "/";
  tempNumber = "";
});

btnEq.addEventListener("click", () => {
  operand.push(Number(tempNumber));
  operate(operand[0], operand[1]);
  display.textContent = result;
  operand.splice(0, 2, result);
});

btnAc?.addEventListener("click", () => reset());
