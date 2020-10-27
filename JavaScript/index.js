// ESLint+prettier: Airbnb-coding-style

// todo
// view - button change
// view - result card
// value - input value check

const generateResultButton = document.querySelector('.generate-result-button');

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

  setLocalStorage(bmiObject);
}

generateResultButton.addEventListener(
  'click',
  generateResultButtonClick,
  false
);
