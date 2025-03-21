// Массив возможных вариантов
const options = ["камень", "ножницы", "бумага"];

// Запрашиваем выбор пользователя
let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

// Проверка на правильность ввода
if (!options.includes(userChoice)) {
  alert("Неверный выбор! Пожалуйста, выберите камень, ножницы или бумага.");
} else {
  // Генерация случайного выбора для компьютера
  let computerChoice = options[Math.floor(Math.random() * options.length)];

  // Выводим выборы
  alert(`Вы выбрали: ${userChoice}`);
  alert(`Компьютер выбрал: ${computerChoice}`);

  // Определение победителя
  if (userChoice === computerChoice) {
    alert("Ничья!");
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    alert("Вы победили!");
  } else {
    alert("Вы проиграли!");
  }
}

<script>
  // Массив с возможными выборами
  const options = ["камень", "ножницы", "бумага"];

  // Функция для запуска игры
  function playGame() {
    // Запрашиваем выбор пользователя
    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    // Проверяем, если введен неверный выбор
    if (!options.includes(userChoice)) {
      alert("Некорректный выбор. Пожалуйста, выберите 'камень', 'ножницы' или 'бумага'.");
      return; // Прерываем выполнение игры, если выбор неправильный
    }

    // Генерируем случайный выбор компьютера
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    // Определяем победителя
    let result;
    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы победили!";
    } else {
      result = "Вы проиграли!";
    }

    // Выводим результат
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
  }

  // Добавляем обработчик события для кнопки
  document.getElementById('playButton').addEventListener('click', playGame);
</script>