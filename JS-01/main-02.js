console.log("2. Условия и функции");

// Проверка возраста
function checkAge(age) {
    // Во второй проверке достаточно "age < 60", так как значения "age < 18" уже отсечены первой веткой.
    if (age < 18) {
        return "доступ запрещён";
    }
    else if (age < 60) {
        return "доступ разрешён";
    }
    else {
        return "доступ разрешён с особыми привилегиями";
    }
}

// Проверка размера скидки
function getDiscount(totalAmount) {
    // Во второй проверке <= 5000, чтобы 5000 входило в диапазон 5%, а 5001 уже попадало в 10%.
    if (totalAmount < 1000) {
        return 0;
    }
    else if (totalAmount <= 5000) {
        return 5;
    }
    else {
        return 10;
    }
}

// Приветствие с проверкой возраста
function greetUser(name, age) {
    const status = checkAge(age);
    return `Здравствуйте, ${name}! Ваш возраст: ${age}. Ваш статус: ${status}.`;
}

//Проверка границ значений возраста
console.log("Возраст - 17:", checkAge(17)); // до 18 -> запрещён
console.log("Возраст - 18:", checkAge(18)); // ровно 18 -> разрешён
console.log("Возраст - 59:", checkAge(59)); // верхняя граница обычного доступа
console.log("Возраст - 60:", checkAge(60)); // с 60 -> особые привилегии

//Проверка границ значений суммы
console.log("Сумма - 999:", getDiscount(999));   // меньше 1000 -> 0
console.log("Сумма - 1000:", getDiscount(1000)); // ровно 1000 -> 5
console.log("Сумма - 5000:", getDiscount(5000)); // ровно 5000 -> 5
console.log("Сумма - 5001:", getDiscount(5001)); // больше 5000 -> 10

console.log(greetUser("Ольга", 48));