const generateResultButton = document.querySelector('.generate-result-button');
const heightInputValue = document.querySelector('#height-input');
const weightInputValue = document.querySelector('#weight-input');

function generateResultButtonClick() {
  console.log('test');
  console.log(heightInputValue.value);
  console.log(weightInputValue);
}

generateResultButton.addEventListener(
  'click',
  generateResultButtonClick,
  false
);
