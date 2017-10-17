/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_main_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_main_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_form_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_form_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_js_form_js__);





/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// global variables
let entryFields = document.querySelectorAll('.calc__input');
let sumField = document.querySelector('.calc__input--sum');
let price = [];

// function get total quantity of packs in object
function getTotalQuantity() {

    let quantity = {};
    let inputA5 = document.querySelector('.calc__input--a5');
    let inputA4 = document.querySelector('.calc__input--a4');
    let inputA3 = document.querySelector('.calc__input--a3');
    let inputA3plus = document.querySelector('.calc__input--a3plus');
    let inputA2 = document.querySelector('.calc__input--a2');
    quantity.a5 = parseInt(inputA5.value);
    quantity.a4 = parseInt(inputA4.value);
    quantity.a3 = parseInt(inputA3.value);
    quantity.a3plus = parseInt(inputA3plus.value);
    quantity.a2 = parseInt(inputA2.value);
    return quantity;
}

// function calc sum from object all quantity of packs
function calcTotalQuantity(order) {

    const totalQuantity = order => Object.values(order).reduce((a, b) => a + b);
    return totalQuantity(order);
}

// function get tariff dependent on total amount of pucks
function getTariff(totalAmount) {
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

// function do calculations
function reCalc() {
    let order = getTotalQuantity();
    let totalAmount = calcTotalQuantity(order);
    let tarif = getTariff(totalAmount);

    showPayment(tarif, order, totalAmount);
    sumField.value = totalAmount;
    document.querySelector('.computation__bill').value = +(order.total).toFixed(2);
}

// function get format tarif
function getFormatTarif(format) {
    for (let i = 0, len = price.length; i < len; i++) {
        if (price[i].name === format) {
            return price[i];
        }
    }
}

// function show payment info
function showPayment(tarif, order) {

    let allPayments = document.querySelectorAll('.computation__box');
    order.total = 0;

    allPayments.forEach(function (elem) {
        let format = elem.dataset.type;
        let formatTarif = getFormatTarif(format);
        let formatAmount = order[format];
        let curentTariff = formatTarif[tarif]/100;

        let totalSum;
        totalSum = +(formatAmount * curentTariff).toFixed(2);

        elem.querySelector('.computation__amount').innerText = formatAmount;
        elem.querySelector('.computation__price').innerText = curentTariff;
        elem.querySelector('.computation__total').innerText = totalSum;
        order.total = order.total + totalSum;
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
    document.querySelector('[data-price-a3plus="price3"]').innerText = (pricesA3plus.price3) / 100;

    document.querySelector('[data-price-a2="price1"]').innerText = (pricesA2.price1) / 100;
    document.querySelector('[data-price-a2="price2"]').innerText = (pricesA2.price2) / 100;
    document.querySelector('[data-price-a2="price3"]').innerText = (pricesA2.price3) / 100;
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function sendForm() {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let data = {};
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        data.name = document.querySelector('.form__input--name').value;
        data.city = document.querySelector('.form__input--city').value;
        data.address = document.querySelector('.form__input--address').value;
        data.phone = document.querySelector('.form__input--phone').value;
        data.a5 = document.querySelector('.calc__input--a5').value;
        data.a4 = document.querySelector('.calc__input--a4').value;
        data.a3 = document.querySelector('.calc__input--a3').value;
        data.a3plus = document.querySelector('.calc__input--a3plus').value;
        data.a2 = document.querySelector('.calc__input--a2').value;
        data.bill = document.querySelector('.computation__bill').value;


        fetch('/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            })
            .then(function (res) {
                return res.text();
            })
            .then(function (data) {
                alert(data)
            })
    });
}
sendForm();

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map