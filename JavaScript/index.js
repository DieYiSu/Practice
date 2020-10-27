// ESLint+prettier: Airbnb-coding-style

// todo
// view - result card
// value - input value check

const generateResultButton = document.querySelector('.generate-result-button');
const buttonResult = document.querySelector('.result');
const headerResultDescription = document.querySelector(
  '.headerResultDescription'
);
console.log(headerResultDescription);
const buttonResetButton = document.querySelector('.resetButton');

function setLocalStorage(bmiObject) {
  const getLocalStorage = JSON.parse(localStorage.getItem('bmiObject')) || [];
  getLocalStorage.push(bmiObject);
  localStorage.setItem('bmiObject', JSON.stringify(getLocalStorage));
}

function BmiDetermination(BMIresultValue) {
  console.log(BMIresultValue);
  if (BMIresultValue < 18.5) {
    return '過輕';
  }
  if (BMIresultValue >= 18.5 && BMIresultValue < 24) {
    return '理想';
  }
  if (BMIresultValue >= 24 && BMIresultValue < 27) {
    return '過重';
  }
  if (BMIresultValue >= 27 && BMIresultValue < 30) {
    return '輕度肥胖';
  }
  if (BMIresultValue >= 30 && BMIresultValue < 35) {
    return '中度肥胖';
  }
  if (BMIresultValue >= 35) {
    return '重度肥胖';
  }
}

function createCard(bmiObject) {
  console.log(bmiObject);
  const ulResult = document.querySelector('.main-content ul.result');

  const ulResultString = ``;
  switch (bmiObject.determinationDescription) {
    case '理想':
      break;
    case '過輕':
      break;
    case '過重':
      break;
    case '輕度肥胖':
      break;
    case '中度肥胖':
      break;
    case '重度肥胖':
      break;
    // no default
  }
}

function generateResultButtonClick() {
  const heightInputValue = document.querySelector('#height-input').value;
  const weightInputValue = document.querySelector('#weight-input').value;
  const BMIresultValue = (
    weightInputValue /
    (((heightInputValue / 100) * heightInputValue) / 100)
  ).toFixed(2);
  const dateTimeDescription = `${new Date().getMonth()}-${new Date().getDay()}-${new Date().getFullYear()}`;
  const BmiDeterminationDescription = BmiDetermination(BMIresultValue);
  const bmiObject = {
    datetime: dateTimeDescription,
    height: heightInputValue,
    weight: weightInputValue,
    BMIresult: BMIresultValue,
    determinationDescription: BmiDeterminationDescription,
  };

  generateResultButton.classList.add('displayNone');
  buttonResult.classList.remove('displayNone');
  buttonResetButton.classList.remove('displayNone');
  buttonResetButton.classList.add('flex');
  headerResultDescription.classList.remove('displayNone');
}

function resetButton() {
  generateResultButton.classList.remove('displayNone');
  buttonResult.classList.add('displayNone');
  buttonResetButton.classList.add('displayNone');
  buttonResetButton.classList.remove('flex');
  headerResultDescription.classList.add('displayNone');
}

generateResultButton.addEventListener(
  'click',
  generateResultButtonClick,
  false
);

buttonResetButton.addEventListener('click', resetButton, false);
