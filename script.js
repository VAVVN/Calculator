//1.
// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
// add
function add(a, b) {
    return a + b;
}
// subtract
function subtract(a, b) {
    return a - b;
}
// multiply
function multiply(a, b) {
    return a * b;
}
// divide  
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

//2.
// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.


//3.
// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}


//4.
// Create a basic HTML calculator with buttons for each digit and operator (including =).
// Don’t worry about making them functional just yet.
// There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
// Add a “clear” button.

//5.
// Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.
    let firstNumber = null;
    let operator = null;
    let secondNumber = null;
    function appendToDisplay(value) {
        const display = document.getElementById('display');
        display.value += value; // Append the clicked digit to the display
        // firstNumber = parseFloat(display.value); 
        // console.log(firstNumber); // Log the first number
    }
// Create a function that clears the display and stores the value of the operator in a variable for use in the next step when an operator (/ * - +) is clicked
    function setOperator(value) {
        const display = document.getElementById('display');
        operator = value; // Store the operator
        firstNumber = parseFloat(display.value); // Store the first number
        display.value = ''; // Clear the display for the next number
        // console.log(firstNumber); // Log the first number
        // console.log(operator); // Log the first number
    }
// Add event listeners to the operator buttons
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            setOperator(button.textContent); // Clear the display for the next number
            // button.dataset.firstNumber = firstNumber; // Store the first number in the button's dataset
            // button.dataset.operator = operator; // Store the operator in the button's dataset
        });
    });

//Operate and display the result when the equals button is clicked
// This function will be called when the equals button is clicked
// It will take the operator and the two numbers, call the operate function, and display the result
// The function will also reset the first number, operator, and second number to null
    function operateAndDisplay() {
        const display = document.getElementById('display');
        secondNumber = parseFloat(display.value); // Store the second number
        const result = operate(operator, firstNumber, secondNumber); // Call the operate function
        display.value = result; // Update the display with the result
        firstNumber = null; // Reset first number
        operator = null; // Reset operator
        secondNumber = null; // Reset second number
    }
// Add event listener to the equals button
    const equalsButton = document.getElementById('equals'); 
    equalsButton.addEventListener('click', () => {
        operateAndDisplay(); // Call the operate function and update the display
    });
// Add event listener to the clear button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        const display = document.getElementById('display');
        display.value = ''; // Clear the display
        firstNumber = null; // Reset first number
        operator = null; // Reset operator
        secondNumber = null; // Reset second number
    });