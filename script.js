const display = document.querySelector('.display');

const digits = document.querySelectorAll('[data-number'); // grabs all buttons with a number
const operators = document.querySelectorAll('[data-operator]'); // grabs all button with not-a-number
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const commaBtn = document.getElementById('comma');
const equalsBtn = document.getElementById('equals');
const delimiter = '_';
const operatingArray = [];
const ongoingArray = [];
let joinedArray;
let newJoinedArray;

function addDisplayNumber(number) {
	display.textContent += number;
}
function addDisplayOperator(sign) {
	display.textContent += sign;
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

deleteBtn.addEventListener('click', deleteDigit);

window.addEventListener('keydown', keyboardInput);

function keyboardInput(e) {
	if (e.key >= 0 && e.key <= 9) addDisplayNumber(e.key);
}

digits.forEach((digit) => {
	digit.addEventListener('click', function () {
		addDisplayNumber(digit.textContent); //show number on screen
		operatingArray.push(digit.textContent); //adds number to an array
	});
});
operators.forEach((operator) => {
	operator.addEventListener('click', function () {
		addDisplayOperator(operator.textContent); //show number on screen
		operatingArray.push(delimiter); //adds number to an array
	});
});
clearBtn.addEventListener('click', clearDisplay);

function operate() {
	joinedArray = operatingArray.join('');
	let justNumbers = joinedArray.split(delimiter).map((item) => parseInt(item));
	let a = justNumbers[0];
	let b = justNumbers[1];

	if (display.textContent.includes(' - ')) {
		display.textContent = a - b;
	} else if (display.textContent.includes(' + ')) {
		display.textContent = a + b;
	} else if (display.textContent.includes(' x ')) {
		display.textContent = a * b;
	} else if (display.textContent.includes(' / ')) {
		display.textContent = a / b;
	}

	operatingArray.length = 0;
	operatingArray.push(display.textContent);

	// while (display.textContent === true) {
	// 	digits.forEach((digit) => {
	// 		digit.addEventListener('click', function () {
	// 			addDisplayNumber(digit.textContent); //show number on screen
	// 			ongoingArray.push(digit.textContent); //adds number to an array
	// 			newJoinedArray = ongoingArray.join('');
	// 			console.log(newJoinedArray);
	// 		});
	// 	});
	// 	operators.forEach((operator) => {
	// 		operator.addEventListener('click', function () {
	// 			addDisplayOperator(operator.textContent); //show number on screen
	// 			ongoingArray.push(delimiter); //adds number to an array
	// 			console.log(ongoingArray);
	// 		});
	// 	});

	// 	let newNumbers = newJoinedArray.split(delimiter).map((item) => parseInt(item));
	// 	let x = newNumbers[0];
	// 	let y = newNumbers[1];

	// 	if (display.textContent.includes(' - ')) {
	// 		display.textContent = x - y;
	// 		ongoingArray.push(display.textContent);
	// 	} else if (display.textContent.includes(' + ')) {
	// 		display.textContent = x + y;
	// 	} else if (display.textContent.includes(' x ')) {
	// 		display.textContent = x * y;
	// 	} else if (display.textContent.includes(' / ')) {
	// 		display.textContent = x / y;
	// 	}

	// while (display.textContent === true)

	// addDisplayOperator

	// ongoingArray.push(display.textContent);
}

equalsBtn.addEventListener('click', operate);

// function operate(operator, a, b) {
// a = Number(a);
// b = Number(b);
// switch (operator) {
// 	case '+':
// 		return add(a, b);
// 	case '-':
// 		return subtract(a, b);
// 	case '*':
// 		return multiply(a, b);
// 	case '/':
// 		return divide(a, b);
// 	default:
// 		return null;
// }
// }

// function add(a, b) {
// 	return a + b;
// }

// function subtract(a, b) {
// 	return a - b;
// }

// function multiply(a, b) {
// 	return a * b;
// }

// function divide(a, b) {
// 	return a / b;
// }
