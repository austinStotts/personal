module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/click.js":
/*!*****************************!*\
  !*** ./components/click.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Austin/Desktop/personal/components/click.js";




var click = function click(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3373297674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3373297674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3373297674",
    css: "a.jsx-3373297674{font-family:\"arial\";font-size:17px;}a.jsx-3373297674:hover{color:red;}div.jsx-3373297674{display:inline-block;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BdXN0aW4vRGVza3RvcC9wZXJzb25hbC9jb21wb25lbnRzL2NsaWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9rQixBQUcrQixBQUlWLEFBR1csVUFGdkIsVUFKaUIsQ0FPRyxjQU5wQixJQU9BIiwiZmlsZSI6Ii9Vc2Vycy9BdXN0aW4vRGVza3RvcC9wZXJzb25hbC9jb21wb25lbnRzL2NsaWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgY2xpY2sgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cbiAgICAgIDxhPntwcm9wcy50ZXh0fTwvYT5cbiAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImFyaWFsXCI7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGljazsiXX0= */\n/*@ sourceURL=/Users/Austin/Desktop/personal/components/click.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (click);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click */ "./components/click.js");
var _jsxFileName = "/Users/Austin/Desktop/personal/components/header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_click__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'home',
    link: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_click__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'about',
    link: '/about',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _jsxFileName = "/Users/Austin/Desktop/personal/components/layout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid black',
  borderRadius: '5px'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
var _jsxFileName = "/Users/Austin/Desktop/personal/pages/about.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "This is the about page"));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map