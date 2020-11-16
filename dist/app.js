/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HeritageSegment"] = factory();
	else
		root["HeritageSegment"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _initMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMiddleware */ \"./src/initMiddleware.js\");\n;\nvar index = {\n  initMiddleware: _initMiddleware__WEBPACK_IMPORTED_MODULE_0__.default\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n//# sourceURL=webpack://HeritageSegment/./src/index.js?");

/***/ }),

/***/ "./src/initMiddleware.js":
/*!*******************************!*\
  !*** ./src/initMiddleware.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction initMiddleware() {\n  analytics.addSourceMiddleware(function (_ref) {\n    var payload = _ref.payload,\n        next = _ref.next,\n        integrations = _ref.integrations;\n    var ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'));\n    var ajs_user_id = localStorage.getItem('ajs_user_id');\n    console.log(payload.type());\n\n    if (ajs_user_traits.email) {\n      console.log('ajs_user_traits.email exists.');\n      console.log(ajs_user_traits.email);\n\n      if (ajs_user_id === 'null' || ajs_user_id.length !== 24) {\n        console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.');\n        var url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email);\n        $.ajax({\n          url: url,\n          type: 'GET',\n          dataType: 'json',\n          success: function success(data, textStatus, jqXHR) {\n            //console.log('Successfully fetched user_id from database.')\n            //analytics.identify(data._id, {email: ajs_user_traits.email})\n            //next(payload)\n            //return\n            if (payload.type() === 'identify') {\n              console.log(data);\n              analytics.identify(data._id, {\n                email: ajs_user_traits.email\n              });\n            } else {\n              next(payload);\n            }\n          }\n        });\n      } else {\n        console.log('ajs_user_id is valid. call next.');\n        next(payload);\n      }\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMiddleware);\n\n//# sourceURL=webpack://HeritageSegment/./src/initMiddleware.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});