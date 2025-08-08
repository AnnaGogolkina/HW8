 function startGame() {
      const secretNumber = Math.floor(Math.random() * 100) + 1;
      let guess = null;
      let attempts = 0;

      while (guess !== secretNumber) {
        const input = prompt("Угадайте число от 1 до 100:");

        if (input === null) {
          alert("Игра отменена.");
          break;
        }

        guess = Number(input);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
          alert("Пожалуйста, введите корректное число от 1 до 100.");
          continue;
        }

        if (guess < secretNumber) {
          alert("Загаданное число больше.");
        } else if (guess > secretNumber) {
          alert("Загаданное число меньше.");
        } else {
          alert(`Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
        }
      }
    }