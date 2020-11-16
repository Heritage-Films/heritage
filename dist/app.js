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
/*! export initMiddleware [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/initMiddleware.js .default */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMiddleware\": () => /* reexport safe */ _initMiddleware__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _initMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMiddleware */ \"./src/initMiddleware.js\");\n;\n\n\n//# sourceURL=webpack://HeritageSegment/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction initMiddleware() {\n  analytics.addSourceMiddleware( /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n      var payload, next, integrations, ajs_user_traits, ajs_user_id, url, response, person;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              payload = _ref.payload, next = _ref.next, integrations = _ref.integrations;\n              ajs_user_traits = JSON.parse(localStorage.getItem('ajs_user_traits'));\n              ajs_user_id = localStorage.getItem('ajs_user_id');\n              console.log(payload.type());\n\n              if (!ajs_user_traits.email) {\n                _context.next = 21;\n                break;\n              }\n\n              console.log('ajs_user_traits.email exists.');\n              console.log(ajs_user_traits.email);\n\n              if (!(ajs_user_id === 'null' || ajs_user_id.length !== 24)) {\n                _context.next = 19;\n                break;\n              }\n\n              console.log('ajs_user_id ' + ajs_user_id + ' is invalid. Fetch from database.');\n              url = 'https://api.movieschangepeople.com/api/people/identify/' + encodeURIComponent(ajs_user_traits.email);\n              _context.next = 12;\n              return fetch(url);\n\n            case 12:\n              response = _context.sent;\n              _context.next = 15;\n              return response.json();\n\n            case 15:\n              person = _context.sent;\n              console.log(person); // $.ajax({\n              //   url: url,\n              //   type: 'GET',\n              //   dataType: 'json',\n              //   success: function(data, textStatus, jqXHR) {\n              //     //console.log('Successfully fetched user_id from database.')\n              //     //analytics.identify(data._id, {email: ajs_user_traits.email})\n              //     //next(payload)\n              //     //return\n              //     if(payload.type() === 'identify') {\n              //       console.log(data)\n              //       analytics.identify(data._id, {email: ajs_user_traits.email})\n              //     } else {\n              //       next(payload)\n              //     }\n              //   }\n              // })\n\n              _context.next = 21;\n              break;\n\n            case 19:\n              console.log('ajs_user_id is valid. call next.');\n              next(payload);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMiddleware);\n\n//# sourceURL=webpack://HeritageSegment/./src/initMiddleware.js?");

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