// Задание 1
{
    let a = 10;
    alert(a);
    a = 20;
    alert(a);
}

// Задание 2
const firstIPhoneYear = 2007;
alert(firstIPhoneYear);

// Задание 3
const javaScriptCreator = 'Брендан Айк';
alert(javaScriptCreator);

// Задание 4
{
    const a = 10;
    const b = 2;

    alert(a + b);
    alert(a - b);
    alert(a * b);
    alert(a / b);
}

// Задание 5
const result = 2 ** 5;
alert(result);

// Задание 6
{
    const a = 9;
    const b = 2;

    alert(a % b);
}

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
const age = prompt('Сколько вам лет?');
alert(age);

// Задание 9
const user = {
    name: 'Сергей',
    age: 30,
    isAdmin: false
};

// Задание 10
const userName = prompt('Как вас зовут?');
if (userName !== null) {
    alert(`Привет, ${userName}!`);
}


// Дополнительное задание
const number = prompt('Загадайте любое число');

if (number !== null && number.trim() !== '') {
    const originalNumber = Number(number);

    if (Number.isFinite(originalNumber)) {
        const doubled = originalNumber * 2;
        alert(doubled);

        const increased = doubled + 10;
        alert(increased);

        const halved = increased / 2;
        alert(halved);

        const difference = halved - originalNumber;
        alert(difference);

        alert('Ответ равен 5.');
    } else {
        alert('Введите число.');
    }
}