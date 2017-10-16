let entryFields = document.querySelectorAll('.calc__input');
let sumField = document.querySelector('.calc__input--sum');
let price = [];



function sumAll() {
    let aa = {};


    let inputA5 = document.querySelector('.calc__input--a5');
    let inputA4 = document.querySelector('.calc__input--a4');
    let inputA3 = document.querySelector('.calc__input--a3');
    let inputA3plus = document.querySelector('.calc__input--a3plus');
    let inputA2 = document.querySelector('.calc__input--a2');
    aa.a5 = parseInt(inputA5.value);
    aa.a4 = parseInt(inputA4.value);
    aa.a3 = parseInt(inputA3.value);
    aa.a3plus = parseInt(inputA3plus.value);
    aa.a2 = parseInt(inputA2.value);

    return aa;
}

function sumAllFormats(zakaz) {
    const sumValues = zakaz => Object.values(zakaz).reduce((a, b) => a + b);

    return sumValues(zakaz);
}

function getTarif(totalAmount) {

    // let totalAmount = sumValues(totalAmount);
    switch (true) {
        case (totalAmount < 50) :
            return 'price1';
        case (totalAmount >= 50 && totalAmount < 100) :
            return 'price2';
        case (totalAmount >= 100) :
            return 'price3';
        default :
            return 'price1';
    }
}

function reCalc() {
    let zakaz = sumAll();
    let totalAmount = sumAllFormats(zakaz);
    let tarif = getTarif(totalAmount);

    printPayment(tarif, zakaz, totalAmount);
    sumField.value = totalAmount;
    document.querySelector('.computation__bill').innerText = zakaz.total;

}



function getFormatTarif(format) {
    for (let i = 0, len = price.length; i < len; i++) {
        if (price[i].name === format) {
            return price[i];
        }
    }
}

function printPayment(tarif, zakaz, totalAmount) {
    let allPayments = document.querySelectorAll('.computation__box');


    zakaz.total = 0;

    allPayments.forEach(function (elem) {
        let format = elem.dataset.type;
        let formatTarif = getFormatTarif(format);
        let formatAmount = zakaz[format];
        let curentTariff = formatTarif[tarif]/100;

        elem.querySelector('.computation__price').innerText = formatAmount;
        elem.querySelector('.computation__amount').innerText = curentTariff;
        elem.querySelector('.computation__total').innerText = formatAmount * curentTariff;
        let totalSum;
        totalSum = formatAmount * curentTariff;

        zakaz.total = zakaz.total + totalSum;
        console.log(zakaz);

    })

}


entryFields.forEach(function (elem) {
    let computationAmount = document.querySelector(`[data-amount="${elem.name}"]`);

    computationAmount.innerText = elem.value;
    elem.addEventListener('input', () => {
        if (elem.value === '') {
            elem.value = 0;
        }

        computationAmount.innerText = elem.value;
        reCalc();
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
        .then(function (response) {
            return response.json();
        })
        .then(function (prices) {
            price = prices;
            printPrices();
        })
}

getPrices();

function printPrices() {

    let arrPrices = price;
    let pricesA5 = arrPrices[0];
    let pricesA4 = arrPrices[1];
    let pricesA3 = arrPrices[2];
    let pricesA3plus = arrPrices[3];
    let pricesA2 = arrPrices[4];

    document.querySelector('[data-price-a5="price1"]').innerText = (pricesA5.price1) / 100;
    document.querySelector('[data-price-a5="price2"]').innerText = (pricesA5.price2) / 100;
    document.querySelector('[data-price-a5="price3"]').innerText = (pricesA5.price3) / 100;


    document.querySelector('[data-price-a4="price1"]').innerText = (pricesA4.price1) / 100;
    document.querySelector('[data-price-a4="price2"]').innerText = (pricesA4.price2) / 100;
    document.querySelector('[data-price-a4="price3"]').innerText = (pricesA4.price3) / 100;


    document.querySelector('[data-price-a3="price1"]').innerText = (pricesA3.price1) / 100;
    document.querySelector('[data-price-a3="price2"]').innerText = (pricesA3.price2) / 100;
    document.querySelector('[data-price-a3="price3"]').innerText = (pricesA3.price3) / 100;


    document.querySelector('[data-price-a3plus="price1"]').innerText = (pricesA3plus.price1) / 100;
    document.querySelector('[data-price-a3plus="price2"]').innerText = (pricesA3plus.price2) / 100;
    document.querySelector('[data-price-a3plus="price3"]').innerText = (pricesA3.price3) / 100;

    document.querySelector('[data-price-a2="price1"]').innerText = (pricesA2.price1) / 100;
    document.querySelector('[data-price-a2="price2"]').innerText = (pricesA2.price2) / 100;
    document.querySelector('[data-price-a2="price3"]').innerText = (pricesA2.price3) / 100;
}
