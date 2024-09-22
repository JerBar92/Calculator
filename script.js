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
  return num2 === 0 ? "ERROR" : num1 / num2;
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

function getNumberPad() {
  const numberArray = [
    btn0,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
  ];

  for (let i = 0; i < 10; i++) {
    numberArray[i]?.addEventListener("click", () => {
      tempNumber += String(i);
      display.textContent = tempNumber;
    });
  }
}

function multipleOperation() {
  if (operand.length === 2) {
    operate(operand[0], operand[1]);
    operand = [];
    operand.push(result);
    operand.push(Number(tempNumber));
    tempNumber = "";
  } else {
    operand.push(Number(tempNumber));
    tempNumber = "";
  }
}

getNumberPad();

btnAdd.addEventListener("click", () => {
  display.textContent = "+";
  operator = "+";
  multipleOperation();
});

btnSub.addEventListener("click", () => {
  display.textContent = "-";
  operator = "-";
  multipleOperation();
});

btnMult.addEventListener("click", () => {
  display.textContent = "*";
  operator = "*";
  multipleOperation();
});

btnDiv.addEventListener("click", () => {
  display.textContent = "/";
  operator = "/";
  multipleOperation();
});

btnEq.addEventListener("click", () => {
  if (operand.length === 2) {
    operate(operand[0], operand[1]);
    operand = [];
    operand.push(result);
    operand.push(Number(tempNumber));
    operate(operand[0], operand[1]);
    display.textContent = result;
    operand.splice(0, 2, result);
    tempNumber = "";
  } else {
    operand.push(Number(tempNumber));
    operate(operand[0], operand[1]);
    display.textContent = result;
    operand.splice(0, 2, result);
    tempNumber = "";
  }
});

btnAc?.addEventListener("click", () => reset());
