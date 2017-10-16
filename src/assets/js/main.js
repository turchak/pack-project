let entryFields = document.querySelectorAll('.calc__input');
let sumField    = document.querySelector('.calc__input--sum');
let price = [];


function sumAll() {
    let aa = {};


    let inputA5     = document.querySelector('.calc__input--a5');
    let inputA4     = document.querySelector('.calc__input--a4');
    let inputA3     = document.querySelector('.calc__input--a3');
    let inputA3plus = document.querySelector('.calc__input--a3plus');
    let inputA2     = document.querySelector('.calc__input--a2');
    aa.valueA5     = parseInt(inputA5.value);
    aa.valueA4     = parseInt(inputA4.value);
    aa.valueA3     = parseInt(inputA3.value);
    aa.valueA3plus = parseInt(inputA3plus.value);
    aa.valueA2     = parseInt(inputA2.value);

    // return valueA5 + valueA4 + valueA3 + valueA3plus + valueA2;

    return aa;
}

function getTarif(zakaz) {
    const sumValues = zakaz => Object.values(zakaz).reduce((a, b) => a + b);
    switch (sumValues(zakaz)) {
        case
    }
}

function reCalc() {
   let zakaz = sumAll();
    getTarif(zakaz);


}







entryFields.forEach(function (elem) {
    let computationAmount = document.querySelector(`[data-amount="${elem.name}"]`);

    computationAmount.innerText = elem.value;
    elem.addEventListener('input', () => {
        if (elem.value === '') {
            elem.value = 0;
            sumField.value = sumAll();
        } else {
            sumField.value = sumAll();
        }
        computationAmount.innerText = elem.value;
        reCalc();

        console.log(price);
    });
    elem.addEventListener('focus', () => {
        if (elem.value == 0) {
            elem.value = '';
        }
    });
    elem.addEventListener('blur', () => {
        if (elem.value === '') {
            elem.value = 0;
        }
    })
});


function getPrices() {
    fetch('/prices')
        .then(function(response) {
            return response.json();
        })
        .then(function(prices) {
            price = prices;
            printPrices();
        })
}

getPrices();

function printPrices() {

    let arrPrices = price;
    let pricesA5     = arrPrices[0];
    let pricesA4     = arrPrices[1];
    let pricesA3     = arrPrices[2];
    let pricesA3plus = arrPrices[3];
    let pricesA2     = arrPrices[4];

    document.querySelector('[data-price-a5="price1"]').innerText = (pricesA5.price1)/100;
    document.querySelector('[data-price-a5="price2"]').innerText = (pricesA5.price2)/100;
    document.querySelector('[data-price-a5="price3"]').innerText = (pricesA5.price3)/100;


    document.querySelector('[data-price-a4="price1"]').innerText = (pricesA4.price1)/100;
    document.querySelector('[data-price-a4="price2"]').innerText = (pricesA4.price2)/100;
    document.querySelector('[data-price-a4="price3"]').innerText = (pricesA4.price3)/100;


    document.querySelector('[data-price-a3="price1"]').innerText = (pricesA3.price1)/100;
    document.querySelector('[data-price-a3="price2"]').innerText = (pricesA3.price2)/100;
    document.querySelector('[data-price-a3="price3"]').innerText = (pricesA3.price3)/100;


    document.querySelector('[data-price-a3plus="price1"]').innerText = (pricesA3plus.price1)/100;
    document.querySelector('[data-price-a3plus="price2"]').innerText = (pricesA3plus.price2)/100;
    document.querySelector('[data-price-a3plus="price3"]').innerText = (pricesA3.price3)/100;

    document.querySelector('[data-price-a2="price1"]').innerText = (pricesA2.price1)/100;
    document.querySelector('[data-price-a2="price2"]').innerText = (pricesA2.price2)/100;
    document.querySelector('[data-price-a2="price3"]').innerText = (pricesA2.price3)/100;
}