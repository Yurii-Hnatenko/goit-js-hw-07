function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes() {
  const amountInput = document.getElementById('amountInput');
  const amount = parseInt(amountInput.value);

  if (amount >= 1 && amount <= 100) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box-item');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);

      size += 10;
    }

    amountInput.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.getElementById('createButton').addEventListener('click', createBoxes);
document.getElementById('destroyButton').addEventListener('click', destroyBoxes);
