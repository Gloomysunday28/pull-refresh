(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PullRefresh"] = factory();
	else
		root["PullRefresh"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PullRefresh =\n/*#__PURE__*/\nfunction () {\n  function PullRefresh(el) {\n    _classCallCheck(this, PullRefresh);\n\n    if (typeof el === 'string') {\n      this.el = document.getElementById(el);\n    } else if (Object.prototype.toString.call(el) === \"[object HTMLDivElement]\") {\n      this.el = el;\n    }\n\n    this.initY = 100;\n    this.initPullContain(); // 初始化下拉刷新容器\n  }\n\n  _createClass(PullRefresh, [{\n    key: \"initPullContain\",\n    value: function initPullContain() {\n      this.el.style.position = \"absolute\";\n      this.el.style.left = \"0\";\n      this.el.style.top = \"0\";\n      this.el.style.right = \"0\";\n      this.el.style.bottom = \"-\".concat(this.initY, \"px\");\n      this.el.style.margin = \"auto\";\n      this.el.style.transform = \"translate3d(0, -\".concat(this.initY, \"px, 0)\");\n      this.initPullIcon();\n    }\n  }, {\n    key: \"initPullIcon\",\n    value: function initPullIcon() {\n      this.pullIcon = document.createElement('div');\n      this.pullIcon.style.background = 'red';\n      this.pullIcon.style.height = \"\".concat(this.initY, \"px\");\n      this.el.prepend(this.pullIcon);\n    }\n  }]);\n\n  return PullRefresh;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PullRefresh);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QdWxsUmVmcmVzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFB1bGxSZWZyZXNoIHtcclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKVxyXG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWwpID09PSBcIltvYmplY3QgSFRNTERpdkVsZW1lbnRdXCIpIHtcclxuICAgICAgdGhpcy5lbCA9IGVsXHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRZID0gMTAwXHJcbiAgICB0aGlzLmluaXRQdWxsQ29udGFpbigpIC8vIOWIneWni+WMluS4i+aLieWIt+aWsOWuueWZqFxyXG4gIH1cclxuICBpbml0UHVsbENvbnRhaW4oKSB7XHJcbiAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gYGFic29sdXRlYFxyXG4gICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gYDBgXHJcbiAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IGAwYFxyXG4gICAgdGhpcy5lbC5zdHlsZS5yaWdodCA9IGAwYFxyXG4gICAgdGhpcy5lbC5zdHlsZS5ib3R0b20gPSBgLSR7dGhpcy5pbml0WX1weGBcclxuICAgIHRoaXMuZWwuc3R5bGUubWFyZ2luID0gYGF1dG9gXHJcbiAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmluaXRZfXB4LCAwKWBcclxuICAgIHRoaXMuaW5pdFB1bGxJY29uKClcclxuICB9XHJcbiAgaW5pdFB1bGxJY29uKCkge1xyXG4gICAgdGhpcy5wdWxsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aGlzLnB1bGxJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmVkJ1xyXG4gICAgdGhpcy5wdWxsSWNvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmluaXRZfXB4YFxyXG4gICAgdGhpcy5lbC5wcmVwZW5kKHRoaXMucHVsbEljb24pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdWxsUmVmcmVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ })["default"];
});