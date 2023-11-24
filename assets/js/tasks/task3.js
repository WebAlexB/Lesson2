const numFirst = prompt('Enter the first number');
const numSecond = prompt('Enter the second number');

// Функция проверка на равенство чисел
function checkNumber(numFirst, numSecond) {
    if (Number(numFirst) === Number(numSecond)) {
        alert(true);
    } else {
        alert(false);
    }
}

checkNumber(numFirst, numSecond);