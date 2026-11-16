console.log("4. Вложенные данные студента");

// Данные о студенте
const student = {
  name: "Анастасия",
  age: 23,
  address: {
    city: "Зеленоград",
    street: "Старое Крюкого",
  },
  grades: {
    physics: 5,
    javascript: 5,
  },
};

// Вывод данных о студенте
console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Город:", student.address.city);
console.log("Улица:", student.address.street);
console.log("Оценка по дисциплине Физика:", student.grades.physics);
console.log("Оценка по дисциплине JavaScript:", student.grades.javascript);

// Меняю город через вложенное свойство
student.address.city = "Москва";

// Проверяю изменение
console.log("Новый город:", student.address.city);