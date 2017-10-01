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




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);