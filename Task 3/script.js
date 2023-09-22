const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let currentInput = "";
let currentOperator = "";
let firstOperand = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value.match(/[0-9]/)) {
            // If the button clicked is a number, add it to the currentInput.
            currentInput += value;
        } else if (value.match(/[+\-*/]/)) {
            // If the button clicked is an operator, set it as the currentOperator
            // and store the currentInput as the firstOperand.
            currentOperator = value;
            firstOperand = currentInput;
            currentInput = "";
        }
        display.value = currentInput;
    });
});


clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    firstOperand = "";
    display.value = "";
});

equalButton.addEventListener("click", () => {
    console.log("Current Input:", currentInput);
    console.log("First Operand:", firstOperand);
    console.log("Current Operator:", currentOperator);

    if (currentInput && firstOperand && currentOperator) {
        var secondOperand=currentInput;
        switch (currentOperator) {
            case "+":
                currentInput = String(parseFloat(firstOperand) + parseFloat(secondOperand));
                break;
            case "-":
                currentInput = String(parseFloat(firstOperand) - parseFloat(secondOperand));
                break;
            case "*":
                currentInput = String(parseFloat(firstOperand) * parseFloat(secondOperand));
                break;
            case "/":
                if (parseFloat(secondOperand) !== 0) {
                    currentInput = String(parseFloat(firstOperand) / parseFloat(secondOperand));
                } else {
                    currentInput = "Error: Division by zero";
                }
                break;
        }
        display.value = currentInput;
        firstOperand = currentInput;
        currentOperator = "";
        currentInput = "";
    }
});
