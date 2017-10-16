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

throw new Error("Module parse failed: C:\\home\\heroku-test\\heroku-test\\src\\assets\\js\\main.js Unexpected token (30:4)\nYou may need an appropriate loader to handle this file type.\n|     switch (sumValues(zakaz)) {\r\n|         case\r\n|     }\r\n| }\r\n| \r");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function sendForm() {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let body = new Object();
        body.name = document.querySelector('.form__input--name').value;
        body.city = document.querySelector('.form__input--city').value;
        body.address = document.querySelector('.form__input--address').value;
        body.phone = document.querySelector('.form__input--phone').value;

        fetch('/send',
            {
                method: "POST",
                body: body
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