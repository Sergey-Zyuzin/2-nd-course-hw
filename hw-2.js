// Задание 1. Проверка пароля
{
    let password = 'skypro123';
    let enteredPassword = prompt('Введите пароль');

    if (enteredPassword === password) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
    }
}

// Задание 2. Число между 0 и 10
{
    let c = 2;

    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// Задание 3. Хотя бы одно число больше 100
{
    let d = 150;
    let e = 50;

    if (d > 100 || e > 100) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

// Задание 4. Преобразование строк в числа
{
    let a = '2';
    let b = '3';

    alert(Number(a) + Number(b));
}

// Задание 5. Определение сезона
{
    let monthNumber = 12;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;

        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;

        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;

        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;

        default:
            console.log('Введите номер месяца от 1 до 12');
    }
}

// Дополнительное задание 1. Чётность числа
{
    let input = prompt('Пожалуйста, введите любое число');

    if (input === null || input.trim() === '') {
        alert('Вы не ввели число');
    } else {
        let number = Number(input);

        if (!Number.isFinite(number)) {
            alert('Введите корректное число');
        } else if (!Number.isInteger(number)) {
            alert('Для проверки чётности введите целое число');
        } else if (number % 2 === 0) {
            alert('Число четное');
        } else {
            alert('Число нечетное');
        }
    }
}

// Дополнительное задание 2. Операционная система
{
    let clientOS = 0;

    if (clientOS === 0) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else if (clientOS === 1) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Неизвестная операционная система');
    }
}

// Дополнительное задание 3. ОС и год устройства
{
    let clientOS = 0;
    let clientDeviceYear = 2015;

    if (clientOS === 0) {
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            console.log('Установите версию приложения для iOS по ссылке');
        }
    } else if (clientOS === 1) {
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для Android по ссылке');
        } else {
            console.log('Установите версию приложения для Android по ссылке');
        }
    } else {
        console.log('Неизвестная операционная система');
    }
}