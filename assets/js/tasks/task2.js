const numberFirst = prompt('Enter the first number');
const calculation = prompt('Enter the calculation sign');
const numberSecond = prompt('Enter the second number');


// Функция проверка и получение данных
function getNumber(calculation, numberFirst, numberSecond) {
    if (isNaN(numberFirst) || isNaN(numberSecond)) {
        alert('Enter valid numbers');
        return;
    }
    if (calculation === '+') {
        alert('result' + '=' + (Number(numberFirst) + Number(numberSecond)));
    } else if (calculation === '-') {
        alert('result' + '=' + (Number(numberFirst) - Number(numberSecond)));
    } else if (calculation === '*') {
        alert('result' + '=' + (Number(numberFirst) * Number(numberSecond)));
    } else if (calculation === '/') {
        if (Number(numberSecond) === 0) {
            alert('Division by zero is not allowed');
        } else {
            alert('result' + '=' + (Number(numberFirst) / Number(numberSecond)));
        }
    } else {
        alert('Invalid calculation sign');
    }
}

// Проверяем, были ли введены значения
function fieldValidation(calculation, numberFirst, numberSecond) {
    if (!calculation || !numberFirst || !numberSecond) {
        alert('Field is canceled or empty');
    }
}

getNumber(calculation, numberFirst, numberSecond);
fieldValidation(calculation, numberFirst, numberSecond);