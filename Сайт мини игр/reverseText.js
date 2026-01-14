function reverseText() {
      const input = prompt("Введите текст, который нужно перевернуть:");

      if (input === null) {
        alert("Отмена.");
        return;
      }

      const reversed = input.split('').reverse().join('');
      alert(`Перевёрнутый текст: ${reversed}`);
    }