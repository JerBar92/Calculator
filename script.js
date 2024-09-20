let result = 0;
let operator = "";
let tempNumbers = [];

const display = document.getElementById("onScreen");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnAdd = document.getElementById("btnAdd");
const btnEq = document.getElementById("btnEq");

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

btn1.addEventListener("click", () => {
  display.textContent = "1";
  tempNumbers.push(Number(display.textContent));
});

btn2.addEventListener("click", () => {
  display.textContent = "2";
  tempNumbers.push(Number(display.textContent));
});

btnAdd.addEventListener("click", () => {
  display.textContent = "+";
  operator = "+";
});

btnEq.addEventListener("click", () => {
  operate(tempNumbers[0], tempNumbers[1]);
  display.textContent = result;
});
