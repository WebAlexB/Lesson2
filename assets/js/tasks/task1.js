const userName = prompt('What is your name?');

// Функция получение именни
function getUserName(userName) {
    if (userName === null) {
        alert('Name is canceled');
    } else if (userName === '') {
        alert('Enter your name');
    } else if (Number(userName)) {
        alert('Use letters');
    } else {
        alert('Hello,' + userName + ' How are you?');
    }
}

getUserName(userName);