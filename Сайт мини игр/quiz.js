
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа (2 - это "Синий")
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2 // номер правильного ответа (2 - это "Семь")
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2 // номер правильного ответа (2 - это "Пять")
    }
];

let correctCount = 0; // Переменная для подсчета правильных ответов

// Проходим по каждому вопросу
function startQuiz() {
    quiz.forEach((q) => {
        // Отображаем вопрос и варианты ответа с помощью prompt
        let userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);

        // Проверяем, совпадает ли ответ пользователя с правильным
        if (parseInt(userAnswer) === q.correctAnswer) {
            correctCount++; // Увеличиваем счетчик правильных ответов
        }
    });

    // Выводим количество правильных ответов
    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов!`);
}

const quizButtons = document.querySelectorAll('.quiz__button');
quizButtons.forEach(button => {
  button.addEventListener('click', startQuiz);
});