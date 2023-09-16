document.addEventListener("DOMContentLoaded", function () {
  const screen1 = document.getElementById("screen1");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const multiplys = document.getElementById("multiplys");
  const divide = document.getElementById("divide");
  const seven = document.getElementById("seven");
  const eight = document.getElementById("eight");
  const nine = document.getElementById("nine");
  const four = document.getElementById("four");
  const five = document.getElementById("five");
  const six = document.getElementById("six");
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");
  const zero1 = document.getElementById("zero1");
  const point = document.getElementById("point");
  const ac = document.getElementById("ac");
  const equals = document.getElementById("equals");

  let pointClicked = false;
  let screenValue = "";
  let screenValue2 = 0;
  let operator = "";

  function updateScreen() {
    screen1.innerText = screenValue;
  }

  function calculate() {
    const num1 = screenValue2;
    const num2 = parseFloat(screenValue);

    if (!isNaN(num2)) {
      switch (operator) {
        case "plus":
          screenValue = (num1 + num2).toString();
          break;
        case "minus":
          screenValue = (num1 - num2).toString();
          break;
        case "multiply":
          screenValue = (num1 * num2).toString();
          break;
        case "divide":
          if (num2 === 0) {
            screenValue = "Error";
          } else {
            screenValue = (num1 / num2).toString();
          }
          break;
        default:
          break;
      }
    } else {
      screenValue = "Error";
    }

    screenValue2 = 0;
    operator = "";
    updateScreen();
  }

  seven.addEventListener("click", () => {
    screenValue += "7";
    updateScreen();
  });
  eight.addEventListener("click", () => {
    screenValue += "8";
    updateScreen();
  });
  nine.addEventListener("click", () => {
    screenValue += "9";
    updateScreen();
  });
  four.addEventListener("click", () => {
    screenValue += "4";
    updateScreen();
  });
  five.addEventListener("click", () => {
    screenValue += "5";
    updateScreen();
  });
  six.addEventListener("click", () => {
    screenValue += "6";
    updateScreen();
  });
  one.addEventListener("click", () => {
    screenValue += "1";
    updateScreen();
  });
  two.addEventListener("click", () => {
    screenValue += "2";
    updateScreen();
  });
  three.addEventListener("click", () => {
    screenValue += "3";
    updateScreen();
  });
  zero1.addEventListener("click", () => {
    screenValue += "0";
    updateScreen();
  });

  equals.addEventListener("click", () => {
    calculate();
  });

  point.addEventListener("click", () => {
    if (!pointClicked) {
      screenValue += ".";
      pointClicked = true;
      updateScreen();
    }
  });

  ac.addEventListener("click", () => {
    screenValue = "";
    screenValue2 = 0;
    operator = "";
    screen1.innerText = "";
    pointClicked = false;
  });

  plus.addEventListener("click", () => {
    if (screenValue !== "") {
      screenValue2 = parseFloat(screenValue);
      operator = "plus";
      screenValue = "";
      pointClicked = false;
    }
  });

  minus.addEventListener("click", () => {
    if (screenValue !== "") {
      screenValue2 = parseFloat(screenValue);
      operator = "minus";
      screenValue = "";
      pointClicked = false;
    }
  });

  multiplys.addEventListener("click", () => {
    if (screenValue !== "") {
      screenValue2 = parseFloat(screenValue);
      operator = "multiply";
      screenValue = "";
      pointClicked = false;
    }
  });

  divide.addEventListener("click", () => {
    if (screenValue !== "") {
      screenValue2 = parseFloat(screenValue);
      operator = "divide";
      screenValue = "";
      pointClicked = false;
    }
  });
});
