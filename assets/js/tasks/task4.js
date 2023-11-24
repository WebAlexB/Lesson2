const number = 12345;

// Функция разбитие чисел через пробел использую %
function getNumber(number) {
    const digit5 = number % 10;
    const digit4 = Math.floor(number / 10) % 10;
    const digit3 = Math.floor(number / 100) % 10;
    const digit2 = Math.floor(number / 1000) % 10;
    const digit1 = Math.floor(number / 10000);
    alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);

}

getNumber(number);