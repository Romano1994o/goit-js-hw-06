const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const dataLength = input.getAttribute('data-length');
  const inputValue = input.value.length;
  
  if (inputValue === Number(dataLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});