console.log("5. Что копируется при присваивании");

console.log("Изначальный пример");
{
    // Переменная firstStudent хранит ссылку на созданный объект, а не сами данные
    const firstStudent = { score: 3 }; 
    
    // Присваивание ссылки: secondStudent указывает на тот же объект
    const secondStudent = firstStudent;
    secondStudent.score++;

    let firstScore = 3;

    // secondScore получил независимую копию
    let secondScore = firstScore;
    secondScore++;

    // Значения: 4 3
    // firstStudent.score стал 4 (общий объект),
    // firstScore остался 3 (независимая копия числа).
    console.log(firstStudent.score, firstScore);
}

console.log("\nИзменённый пример");
{
    const firstStudent = { score: 3 };

    // { ...firstStudent } создал новый объект и скопировал в него свойства верхнего уровня. 
    // Теперь firstStudent и secondStudent — два разных объекта в памяти.
    const secondStudent = { ...firstStudent };

    // Меняю score только у нового объекта
    secondStudent.score++;

    let firstScore = 3;
    let secondScore = firstScore;
    secondScore++;

    // Значения: 3 3
    // firstStudent.score остался 3, потому что объекты разные.
    // Первое число в выводе изменилось с 4 на 3, так как ссылки на общий объект больше нет.
    console.log(firstStudent.score, firstScore);
}