let inputElementObj = document.getElementById("calc__inner--top__input");
let inputOne = document.getElementById("calc__inner--result__valOne");
let inputTwo = document.getElementById("calc__inner--result__valTwo");
let operator = document.getElementById("calc__inner--bottom");
let displayOperator = document.getElementById("calc__inner--result__operator");
let displayAnswer = document.getElementById("calc__inner--result__answer");
let numberOne;
let numberTwo;
const answerDisplay = (result, operator) => {
  displayAnswer.innerHTML = result;
  displayOperator.innerHTML = operator;
};

inputElementObj.addEventListener("keyup", (event) => {
  if (event.key == "Enter" || event.keycode == 13) {
    let tempVal = inputElementObj.value;
    inputElementObj.value = "";
    if (!isNaN(tempVal)) {
      tempVal = parseInt(tempVal);
      if (numberOne == undefined) {
        numberOne = tempVal;
        inputOne.innerHTML = tempVal;
      } else if (numberTwo == undefined) {
        numberTwo = tempVal;
        inputTwo.innerHTML = tempVal;
      } else {
        tempVal = undefined;
        numberOne = undefined;
        numberTwo = undefined;
        inputOne.innerHTML = "_";
        inputTwo.innerHTML = "_";
        answerDisplay("?", "_");
      }
    }
  }
});

operator.addEventListener("click", (event) => {
  let operatorMark = event.srcElement.innerHTML;

  if (!numberOne && !numberTwo) {
    alert("Please insert numbers");
    return;
  } else if (numberOne == undefined || numberTwo == undefined) {
    alert("Please insert numbers");
    return;
  } else {
    switch (operatorMark) {
      case "+":
        answerDisplay(numberOne + numberTwo, operatorMark);
        break;
      case "-":
        answerDisplay(numberOne - numberTwo, operatorMark);
        break;
      case "/":
        answerDisplay((numberOne / numberTwo).toFixed(2), operatorMark);
        break;
      case "*":
        answerDisplay(numberOne * numberTwo, operatorMark);
        break;
      case "%":
        answerDisplay(numberOne % numberTwo, operatorMark);
        break;
      default:
        displayOperator.innerHTML = "_";
        displayAnswer.innerHTML = "?";
        break;
    }
  }
});
