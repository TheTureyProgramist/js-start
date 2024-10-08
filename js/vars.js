// let mydimasage = 13; 
// console.log(mydimasage); 
// // My age
// let mydmutroname = "Діма";
// console.log(mydmutroname);
// // My name
// let ITDimaStudent = true;
// console.log(ITDimaStudent);
// // I am ITStudent
// let SadStudent = false; 
// console.log(SadStudent);
// // I am not sad student
// let mySecretandChitate = "Добре,добре моі улюблені передачі це Дизель Шоу, Баранчик Шон, Міа та я, Нікому не кажіть"; // Заміни на свою улюблену цитату
// console.log(mySecretandChitate);
// // Мій секрет і моя цитата :)
// let myNumber = 9 - 3 * 4 / 2; 
// myNumber = myNumber + 10; 
// console.log(myNumber);
// // Джава скрипт арифметика і алгебра
// let myNull = null;
// console.log(myNull);
// // Порожнеча
// let userName = prompt("Введіть своє ім'я та прізвище. Далі: введіть пароль від банківської карти та пароль від аккауту");
// alert("Вітаю, " + userName + "Компанія Діма та індики взламала вас!");
// // Мій міні жарт
// let userResponse = confirm("Ви впевнені що погоджуєтеся з моєю пропозицією?");
// if (userResponse) {
//   alert("Дякую за підтвердження за інформацію про вас. Мої індики взламали вас!");
// } else {
//   alert("Дію відмінено і компютер вірус не підхопить :)");
// }
// // Ну як жарт
// alert("Увага! Ця дія може бути небезпечною для вашого компютера.");
// let userSurprise = confirm("Ви впевнені, що хочете продовжити бо вороття не буде?");
// if (userSurprise) {
//   alert("Дякую за підтвердження! На вашому аккауні вірус і Гугл заблокує його на 2 тижні задля безпеки інших коритувачів");
// } else {
//   alert("Дію відмінено і аккаунт не потрапить на карантин!");
// }
// Перевірка, чи обидва текстові поля заповнені
const textField1 = prompt('Введіть перше текстове поле:');
const textField2 = prompt('Введіть друге текстове поле:');

if (textField1 && textField2) {
    alert('Обидва поля заповнені');
} else {
    alert('Не всі поля заповнені');
}

const numberField1 = parseFloat(prompt('Введіть перше число:'));
const numberField2 = parseFloat(prompt('Введіть друге число:'));

if (numberField1 + numberField2 > 10) {
    alert('Сума більша за 10');
} else {
    alert('Сума менша або дорівнює 10');
}

const textInput = prompt('Введіть текст:');

if (textInput.includes('JavaScript')) {
    alert('Текст містить слово JavaScript');
} else {
    alert('Текст не містить слово JavaScript');
}

const numberInRange = parseFloat(prompt('Введіть число:'));

if (numberInRange > 10 && numberInRange < 20) {
    alert('Число входить в діапазон від 10 до 20');
} else {
    alert('Число не входить в діапазон від 10 до 20');
}

const nameInput = prompt('Введіть ваше ім\'я:');
const emailInput = prompt('Введіть ваш email:');
const passwordInput = prompt('Введіть ваш пароль:');

if (nameInput.length >= 3 && emailInput.includes('@') && emailInput.includes('.') && passwordInput.length >= 6) {
    alert('Дані заповнені правильно. Ви будете перенаправлені на іншу сторінку.');
} else {
    alert('Помилка: дані заповнені неправильно.');
}
