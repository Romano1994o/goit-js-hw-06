function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesElements = document.querySelector('#boxes');
const inputElement = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputElement.value;
  destroyBoxes();

  let size = 30;

  for (let i = 0; i < amount; i+=1) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxesElements.appendChild(boxElement);
    
    size += 10; 
  }
}

function destroyBoxes() {
  boxesElements.innerHTML = '';
  inputElement.value = '';
}

