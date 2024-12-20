// script.js
let currentInput = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}

function appendValue(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}
