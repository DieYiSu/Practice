// ESLint+prettier: Airbnb-coding-style

// todo
// view - result card
// value - input value check

const generateResultButton = document.querySelector('.generateResultButton');
const buttonResult = document.querySelector('.resultCircle');
const headerResultDescription = document.querySelector(
  '.headerResultDescription'
);
console.log(headerResultDescription.classList);
const buttonResetButton = document.querySelector('.resetButton');
const getLocalStorage = JSON.parse(localStorage.getItem('bmiObject')) || [];
const ulResult = document.querySelector('.main-content ul.result');
const resultCircleValue = document.querySelector('.resultCircleValue');
const resultCircle = document.querySelector('.resultCircle');

function setLocalStorage(bmiObject) {
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

function createEmyptAlert() {
  console.log('test');
  const ulResultString = `
    <h3 class="emptyAlert">你還沒有任何記錄！</h3>
    <h3 class="emptyAlert">快去測量BMI！</h3>
  `;
  ulResult.innerHTML = ulResultString;
}

function createCard() {
  let ulResultString = ``;
  Object.keys(getLocalStorage).forEach((index) => {
    switch (getLocalStorage[index].determinationDescription) {
      case '理想':
        ulResultString += `
          <li class="result-card result-card-Normal">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      case '過輕':
        ulResultString += `
          <li class="result-card result-card-Underweight">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      case '過重':
        ulResultString += `
          <li class="result-card result-card-Overweight">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      case '輕度肥胖':
        ulResultString += `
          <li class="result-card result-card-Moderately-obese">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      case '中度肥胖':
        ulResultString += `
          <li class="result-card result-card-Severely-obese">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      case '重度肥胖':
        ulResultString += `
          <li class="result-card result-card-Very-severely-obese">
            <h3>${getLocalStorage[index].determinationDescription}</h3>
            <ul class="result-card-param">
              <li>
                <p class="result-card-param-description">BMI</p>
                <p class="result-card-param-value">${getLocalStorage[index].BMIresult}</p>
              </li>
              <li>
                <p class="result-card-param-description">weight</p>
                <p class="result-card-param-value">${getLocalStorage[index].weight}kg</p>
              </li>
              <li>
                <p class="result-card-param-description">height</p>
                <p class="result-card-param-value">${getLocalStorage[index].height}cm</p>
              </li>
            </ul>
            <p class="date">${getLocalStorage[index].datetime}</p>
          </li>
        `;
        break;
      // no default
    }
  });
  ulResult.innerHTML = ulResultString;
}

function headerCircleSetting(BmiDeterminationDescription) {
  switch (BmiDeterminationDescription) {
    case '理想':
      headerResultDescription.innerHTML = `理想`;
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line dot-notation
      headerResultDescription.style['color'] = '#86D73F';
      console.log(buttonResetButton);

      break;
    case '過輕':
      headerResultDescription.innerHTML = `過輕`;
      headerResultDescription.style.color = '#86D73F';
      break;
    case '過重':
      headerResultDescription.innerHTML = `過重`;
      headerResultDescription.style.color = '#86D73F';
      break;
    case '輕度肥胖':
      headerResultDescription.innerHTML = `輕度肥胖`;
      headerResultDescription.style.color = '#86D73F';
      break;
    case '中度肥胖':
      headerResultDescription.innerHTML = `中度肥胖`;
      headerResultDescription.style.color = '#86D73F';
      break;
    case '重度肥胖':
      headerResultDescription.innerHTML = `重度肥胖`;
      // console.log(headerResultDescription.style);
      headerResultDescription.style.color = '#86D73F';
      // console.log(buttonResetButton.style.background);
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

  // eslint-disable-next-line no-unused-expressions
  if (BMIresultValue === 'NaN') {
    window.alert(`Input has to be the number type`);
    return;
  }
  resultCircleValue.innerHTML = `${BMIresultValue}`;
  generateResultButton.classList.add('displayNone');
  buttonResult.classList.remove('displayNone');
  buttonResetButton.classList.remove('displayNone');
  buttonResetButton.classList.add('flex');
  headerResultDescription.classList.remove('displayNone');
  setLocalStorage(bmiObject);
  headerCircleSetting(BmiDeterminationDescription);
  createCard();
}

function resetButton() {
  generateResultButton.classList.remove('displayNone');
  buttonResult.classList.add('displayNone');
  buttonResetButton.classList.add('displayNone');
  buttonResetButton.classList.remove('flex');
  headerResultDescription.classList.add('displayNone');
}

window.addEventListener(
  'DOMContentLoaded',
  function () {
    // eslint-disable-next-line no-unused-expressions
    getLocalStorage.length === 0 ? createEmyptAlert() : createCard();
  },
  false
);

generateResultButton.addEventListener(
  'click',
  generateResultButtonClick,
  false
);

buttonResetButton.addEventListener('click', resetButton, false);
