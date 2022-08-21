const display = document.querySelector('.display');

const digits = document.querySelectorAll('[data-number'); // grabs all buttons with a number
const operators = document.querySelectorAll('[data-operator]'); // grabs all button with not-a-number
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const commaBtn = document.getElementById('comma');
const equalsBtn = document.getElementById('equals');

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '/':
			return divide(a, b);
		default:
			return null;
	}
}
