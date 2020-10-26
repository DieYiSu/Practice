// ESLint+prettier: Airbnb-coding-style

const generateResultButton = document.querySelector('.generate-result-button');

function generateResultButtonClick() {
  const heightInputValue = document.querySelector('#height-input').value;
  const weightInputValue = document.querySelector('#weight-input').value;

  const bmiObject = {
    datetime: new Date().toLocaleString(),
    BMIresult:
      weightInputValue / (((heightInputValue / 100) * heightInputValue) / 100),
  };

  console.log(bmiObject);
}

generateResultButton.addEventListener(
  'click',
  generateResultButtonClick,
  false
);
