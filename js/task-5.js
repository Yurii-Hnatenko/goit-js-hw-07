function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    document.addEventListener('DOMContentLoaded', function () {
      const bodyElement = document.body;
      const colorSpan = document.querySelector('.color');
      const changeColorButton = document.querySelector('.change-color');

      changeColorButton.addEventListener('click', function () {
        const randomColor = getRandomHexColor();
        
        // Зміна кольору фону елемента <body>
        bodyElement.style.backgroundColor = randomColor;

        // Оновлення текстового вмісту для span.color
        colorSpan.textContent = randomColor;
      });
    });


    