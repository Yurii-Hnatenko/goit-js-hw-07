const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateGreeting);

    function updateGreeting() {
      nameInput.value.trim();

      if (inputText === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = inputText;
      }
    }