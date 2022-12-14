const display = document.querySelector('.display');
const digits = document.querySelectorAll('[data-number'); // grabs all buttons with a number
const operators = document.querySelectorAll('[data-operator]'); // grabs all button with not-a-number
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const commaBtn = document.getElementById('comma');
const equalsBtn = document.getElementById('equals');
const delimiter = '_';
const operatingArray = [];
let joinedArray;
let signArray = [];
function addDisplayNumber(number) {
	display.textContent += number;
}
function addDisplayOperator(sign) {
	display.textContent += sign;
	signArray.push(sign); // adds operator to an array that is evaluated in operate()
}
function clearDisplay() {
	if (display.textContent === '') return 0;
	else {
		display.textContent = '';
		operatingArray.length = 0;
	}
}
function deleteDigit() {
	display.textContent = display.textContent.toString().slice(0, -1);
	operatingArray.pop();
}
function keyboardInput(e) {
	if (e.key >= 0 && e.key <= 9) {
		addDisplayNumber(e.key);
		operatingArray.push(e.key); //necessary to read the key input from array
	}
	if (e.key === '.') {
		addDisplayOperator(e.key);
		operatingArray.push(e.key);
	}
	if (e.key === 'Escape') clearDisplay(e.key);
	if (e.key === 'Backspace') deleteDigit(e.key);
	if (e.key === 'x' || e.key === '-' || e.key === '+' || e.key === ':') {
		addDisplayOperator(e.key);
		operatingArray.push(delimiter);
	}
	if (e.key === '=' || e.key === 'Enter') operate();
}
function roundResult(number) {
	return Math.round(number * 1000) / 1000;
}
function operate() {
	joinedArray = operatingArray.join('');
	let justNumbers = joinedArray.split(delimiter).map((item) => parseFloat(item));
	let a = justNumbers[0];
	let b = justNumbers[1];
	if (signArray.includes('-')) {
		// identifies operator to perform specific function, enables negative numbers
		display.textContent = roundResult(subtract(a, b));
	} else if (signArray.includes('+')) {
		display.textContent = roundResult(add(a, b));
	} else if (signArray.includes('x')) {
		display.textContent = roundResult(multiply(a, b));
	} else if (signArray.includes(':')) {
		display.textContent = roundResult(divide(a, b));
	}
	operatingArray.length = 0;
	signArray.length = 0;
	operatingArray.push(display.textContent);
}
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
deleteBtn.addEventListener('click', deleteDigit);
window.addEventListener('keydown', keyboardInput);
clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', operate);
digits.forEach((digit) => {
	digit.addEventListener('click', () => {
		addDisplayNumber(digit.textContent); //show number on screen
		operatingArray.push(digit.textContent); //adds number to an array
	});
});
operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		addDisplayOperator(operator.textContent); //show number on screen
		operatingArray.push(delimiter); //adds number to an array
	});
});
commaBtn.addEventListener('click', function () {
	addDisplayOperator(commaBtn.textContent); //show number on screen
	operatingArray.push(commaBtn.textContent); //adds number to an array
});
