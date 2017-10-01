function calcAll() {
  let inputA5 = document.querySelector('.form__input--a5');
  let inputA4 = document.querySelector('.form__input--a4');
  let inputA3 = document.querySelector('.form__input--a3');
  let inputA3plus = document.querySelector('.form__input--a3plus');
  let inputA2 = document.querySelector('.form__input--a2');
  let allInputs = document.querySelectorAll('[data-type]');

  let valueInputA5 = 0;
  let valueInputA4 = 0;
  let valueInputA3 = 0;
  let valueInputA3plus = 0;
  let valueInputA2 = 0;
// function sumAll() start
  function sumAll() {
    let sum = {
      A5: valueInputA5,
      A4: valueInputA4,
      A3: valueInputA3,
      A3plus: valueInputA3plus,
      A2: valueInputA2
    };
    let valueAll = sum.A5 + sum.A4 + sum.A3 + sum.A3plus + sum.A2;
    let inputSum = document.querySelector('.form__input--all');
    console.log(sum);
    inputSum.value = valueAll;
  };
// function sumAll() end
  allInputs.forEach(elem => {
    elem.addEventListener('change', e => {
      e.preventDefault();

      valueInputA5 = parseInt(inputA5.value);
      valueInputA4 = parseInt(inputA4.value);
      valueInputA3 = parseInt(inputA3.value);
      valueInputA3plus = parseInt(inputA3plus.value);
      valueInputA2 = parseInt(inputA2.value);

      if (inputA5.value == "") {
        inputA5.value = 0;
        valueInputA5 = 0;
        sumAll();
      }
      if (inputA4.value == "") {
        inputA4.value = 0;
        valueInputA4 = 0;
        sumAll();
      }

      if (inputA3.value == "") {
        inputA3.value = 0;
        valueInputA3 = 0;
        sumAll();
      }
      if (inputA3plus.value == "") {
        inputA3plus.value = 0;
        valueInputA3plus = 0;
        sumAll();
      }
      if (inputA2.value == "") {
        inputA2.value = 0;
        valueInputA2 = 0;
        sumAll();
      }
      else {
        sumAll();
      }
    })
  });
}
calcAll();
