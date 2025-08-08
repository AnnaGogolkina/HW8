 function startMathGame() {
      const operations = ['+', '-', '*', '/'];
      let score = 0;

      for (let i = 0; i < 5; i++) { // 5 задач
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let question, correctAnswer;

        switch (operation) {
          case '+':
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
          case '-':
            question = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
          case '*':
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
          case '/':
            // Чтобы деление было без остатка
            const a = num1 * num2;
            question = `${a} / ${num2}`;
            correctAnswer = a / num2;
            break;
        }

        const userInput = prompt(`Решите: ${question}`);
        if (userInput === null) {
          alert("Игра завершена.");
          return;
        }

        const userAnswer = Number(userInput);

        if (isNaN(userAnswer)) {
          alert("Это не число! Ответ не засчитывается.");
        } else if (userAnswer === correctAnswer) {
          alert("Правильно!");
          score++;
        } else {
          alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
      }

      alert(`Игра окончена. Ваш результат: ${score} из 5.`);
    }