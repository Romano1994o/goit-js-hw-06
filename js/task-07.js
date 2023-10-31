const text = document.querySelector("#text");
const fontSizeControl = document.querySelector("#font-size-control");


fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px'; 
  text.style.fontSize = fontSize; 
});