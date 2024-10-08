const drink = prompt("Оберіть напій: Кава, Чай, Сік");
switch (drink) {
    case "Кава":
        alert("Ви обрали каву!");
        break;
    case "Чай":
        alert("Ви обрали чай!");
        break;
    case "Сік":
        alert("Ви обрали сік!");
        break;
    default:
        alert("Будь ласка, оберіть Кава, Чай або Сік.");
}

const day = prompt("Введіть день тижня:");
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        alert("Це робочий день.");
        break;
    case "субота":
    case "неділя":
        alert("Це вихідний день.");
        break;
    default:
        alert("Неправильний день тижня.");
}

const month = parseInt(prompt("Введіть номер місяця (1-12):"));
switch (month) {
    case 12:
    case 1:
    case 2:
        alert("Це зима.");
        break;
    case 3:
    case 4:
    case 5:
        alert("Це весна.");
        break;
    case 6:
    case 7:
    case 8:
        alert("Це літо.");
        break;
    case 9:
    case 10:
    case 11:
        alert("Це осінь.");
        break;
    default:
        alert("Неправильний номер місяця.");
}

const monthDays = parseInt(prompt("Введіть номер місяця (1-12):"));
switch (monthDays) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        alert("Цей місяць має 31 день.");
        break;
    case 4: case 6: case 9: case 11:
        alert("Цей місяць має 30 днів.");
        break;
    case 2:
        alert("Цей місяць має 28 або 29 днів.");
        break;
    default:
        alert("Неправильний номер місяця.");
}

const color = prompt("Введіть назву кольору (червоний, зелений, жовтий):");
switch (color) {
    case "червоний":
        alert("Стоп");
        break;
    case "зелений":
        alert("Йти");
        break;
    case "жовтий":
        alert("Чекати");
        break;
    default:
        alert("Невідомий колір.");
}

const number1 = parseFloat(prompt("Введіть перше число:"));
const number2 = parseFloat(prompt("Введіть друге число:"));
const operation = prompt("Оберіть операцію: +, -, *, /");
switch (operation) {
    case "+":
        alert(`Результат: ${number1 + number2}`);
        break;
    case "-":
        alert(`Результат: ${number1 - number2}`);
        break;
    case "*":
        alert(`Результат: ${number1 * number2}`);
        break;
    case "/":
        if (number2 === 0) {
            alert("Помилка: ділення на нуль!");
        } else {
            alert(`Результат: ${number1 / number2}`);
        }
        break;
    default:
        alert("Невідома операція.");
}
