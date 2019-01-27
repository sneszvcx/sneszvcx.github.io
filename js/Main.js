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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n/* harmony import */ var _DOMSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMSystem */ \"./src/DOMSystem.ts\");\n\r\n\r\n\r\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n        var _this = this;\r\n        this.UpdateSettings = function (size) {\r\n            _this.size = size;\r\n            Object(_DOMSystem__WEBPACK_IMPORTED_MODULE_2__[\"SetSize\"])(_this.canvas, size);\r\n            _this.canvas.width = size.x;\r\n            _this.canvas.height = size.y;\r\n        };\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.context = this.canvas.getContext(\"2d\");\r\n        this.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth, window.innerHeight));\r\n        this.clsColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](33, 37, 43);\r\n        this.canvas.style.backgroundColor = this.clsColor.GetRGB();\r\n        document.body.appendChild(this.canvas);\r\n        /// Graphics settings\r\n        this.context.imageSmoothingEnabled = false;\r\n    }\r\n    Canvas.prototype.Rect = function (from, to, color) {\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        this.context.fillStyle = color.GetRGB();\r\n        this.context.fillRect(from.x, from.y, to.x - from.x, to.y - from.y);\r\n    };\r\n    Canvas.prototype.Polygon = function (points, color) {\r\n        var _this = this;\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        var temp = points[0];\r\n        points.splice(0, 1);\r\n        this.context.beginPath();\r\n        this.context.moveTo(temp.x, temp.y);\r\n        this.context.fillStyle = color.GetRGBA();\r\n        points.forEach(function (point) {\r\n            _this.context.lineTo(point.x, point.y);\r\n        });\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.Gradient = function (points, color) {\r\n        var _this = this;\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        var pointA = points[0].averange(points[1]);\r\n        var pointB = points[2].averange(points[3]);\r\n        var gradient = this.context.createLinearGradient(pointA.x, pointA.y, pointB.x, pointB.y);\r\n        gradient.addColorStop(0, color.GetRGBA());\r\n        gradient.addColorStop(1, new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](color.r, color.g, color.b, 0).GetRGBA());\r\n        var temp = points[0];\r\n        points.splice(0, 1);\r\n        this.context.beginPath();\r\n        this.context.moveTo(temp.x, temp.y);\r\n        this.context.fillStyle = gradient;\r\n        points.forEach(function (point) {\r\n            _this.context.lineTo(point.x, point.y);\r\n        });\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.Cls = function () {\r\n        this.context.clearRect(0, 0, this.size.x, this.size.y);\r\n    };\r\n    return Canvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Canvas.ts?");

/***/ }),

/***/ "./src/Color.ts":
/*!**********************!*\
  !*** ./src/Color.ts ***!
  \**********************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\nvar Color = /** @class */ (function () {\r\n    function Color(r, g, b, a) {\r\n        if (r === void 0) { r = 0; }\r\n        if (g === void 0) { g = 0; }\r\n        if (b === void 0) { b = 0; }\r\n        if (a === void 0) { a = 1; }\r\n        var _this = this;\r\n        this.Invert = function () {\r\n            _this.r = 255 - _this.r;\r\n            _this.g = 255 - _this.g;\r\n            _this.b = 255 - _this.b;\r\n        };\r\n        this.SetAlpha = function (a) {\r\n            _this.a = a;\r\n            return _this;\r\n        };\r\n        this.GetRGB = function () {\r\n            return \"rgb(\" + _this.r + \",\" + _this.g + \",\" + _this.b + \")\";\r\n        };\r\n        this.GetRGBA = function () {\r\n            return \"rgb(\" + _this.r + \",\" + _this.g + \",\" + _this.b + \",\" + _this.a + \")\";\r\n        };\r\n        this.r = r;\r\n        this.g = g;\r\n        this.b = b;\r\n        this.a = a;\r\n    }\r\n    return Color;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Color.ts?");

/***/ }),

/***/ "./src/DOMSystem.ts":
/*!**************************!*\
  !*** ./src/DOMSystem.ts ***!
  \**************************/
/*! exports provided: SetPos, SetPosXY, SetSize, SetSizeXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetPos\", function() { return SetPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetPosXY\", function() { return SetPosXY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetSize\", function() { return SetSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetSizeXY\", function() { return SetSizeXY; });\nfunction SetPos(element, pos) {\r\n    element.style.left = pos.x + \"px\";\r\n    element.style.top = pos.y + \"px\";\r\n}\r\nfunction SetPosXY(element, x, y) {\r\n    element.style.left = x + \"px\";\r\n    element.style.top = y + \"px\";\r\n}\r\nfunction SetSize(element, size) {\r\n    element.style.width = size.x + \"px\";\r\n    element.style.height = size.y + \"px\";\r\n}\r\nfunction SetSizeXY(element, x, y) {\r\n    element.style.width = x + \"px\";\r\n    element.style.height = y + \"px\";\r\n}\r\n\n\n//# sourceURL=webpack:///./src/DOMSystem.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mouse */ \"./src/Mouse.ts\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Polygon */ \"./src/Polygon.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n\r\n\r\n\r\n\r\n\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        var _this = this;\r\n        this.CalcDelta = function () {\r\n            _this.delta = (Date.now() - _this.lastDelta) / 1000;\r\n            _this.lastDelta = Date.now();\r\n        };\r\n        this.Loop = function () {\r\n            /// Calculations\r\n            _this.CalcDelta();\r\n            /// Polygon\r\n            _this._polygon.Rotate();\r\n            _this._polygon.Update(_this.delta);\r\n            /// Display\r\n            _this._canvas.Cls();\r\n            for (var i = 0; i < _this._polygon.GetVertexes(); i++) {\r\n                _this._canvas.Polygon(_this._polygon.GetPartPoint(i, 20), new _Color__WEBPACK_IMPORTED_MODULE_4__[\"Color\"](40, 44, 52));\r\n                _this._canvas.Polygon(_this._polygon.GetPartPoint(i, 10), new _Color__WEBPACK_IMPORTED_MODULE_4__[\"Color\"](90, 108, 136));\r\n            }\r\n            for (var i = 0; i < _this._polygon.GetPart(); i++) {\r\n                _this._canvas.Gradient(_this._polygon.GetPartPoint(i, 800, 200, true), new _Color__WEBPACK_IMPORTED_MODULE_4__[\"Color\"](_this._polygon.progressColor.r, _this._polygon.progressColor.g, _this._polygon.progressColor.b, 0.2));\r\n                _this._canvas.Gradient(_this._polygon.GetPartPoint(i, 50, 0, true), new _Color__WEBPACK_IMPORTED_MODULE_4__[\"Color\"](_this._polygon.progressColor.r, _this._polygon.progressColor.g, _this._polygon.progressColor.b, 1));\r\n                _this._canvas.Polygon(_this._polygon.GetPartPoint(i, 40, 0, true), _this._polygon.progressColor);\r\n            }\r\n            _this._canvas.Polygon(_this._polygon.GetPoints(), _this._polygon.baseColor);\r\n            requestAnimationFrame(_this.Loop);\r\n        };\r\n        this.Clicked = function () {\r\n            _this._polygon.Enlarge(10);\r\n        };\r\n        this._canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__[\"Canvas\"]();\r\n        this._polygon = new _Polygon__WEBPACK_IMPORTED_MODULE_3__[\"Polygon\"]();\r\n        this._mouse = new _Mouse__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"](this);\r\n        this.debug = false;\r\n        this.lastDelta = Date.now();\r\n        this.Loop();\r\n        window.onresize = function () {\r\n            _this._canvas.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth, window.innerHeight));\r\n            _this._polygon.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2));\r\n        };\r\n    }\r\n    return Main;\r\n}());\r\n\r\nwindow.onload = function () {\r\n    var main = new Main;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ }),

/***/ "./src/Mouse.ts":
/*!**********************!*\
  !*** ./src/Mouse.ts ***!
  \**********************/
/*! exports provided: Mouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mouse\", function() { return Mouse; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n\r\nvar Mouse = /** @class */ (function () {\r\n    function Mouse(ref) {\r\n        var _this = this;\r\n        this.ref = ref;\r\n        this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n        /*\r\n        this.dvDebug = <HTMLDivElement>document.createElement(\"div\");\r\n        this.dvDebug.setAttribute(\"class\", \"debug\");\r\n        document.body.appendChild(this.dvDebug);\r\n        */\r\n        window.onmousemove = function (e) {\r\n            _this.position.set(e.pageX, e.pageY);\r\n            //this.dvDebug.innerHTML = this.position.x + \", \" + this.position.y;\r\n            //SetPosXY(this.dvDebug, this.position.x, this.position.y + 20);\r\n        };\r\n        window.onclick = function (e) {\r\n            _this.ref._polygon.Enlarge(50);\r\n        };\r\n    }\r\n    return Mouse;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Mouse.ts?");

/***/ }),

/***/ "./src/Polygon.ts":
/*!************************!*\
  !*** ./src/Polygon.ts ***!
  \************************/
/*! exports provided: Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Polygon\", function() { return Polygon; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n\r\n\r\nvar Polygon = /** @class */ (function () {\r\n    function Polygon() {\r\n        var _this = this;\r\n        this.GetVertexes = function () {\r\n            return _this.vertexes;\r\n        };\r\n        this.GetPart = function () {\r\n            return _this.part;\r\n        };\r\n        this.CheckIfFull = function () {\r\n            if (_this.part++ >= _this.vertexes) {\r\n                _this.vertexes++;\r\n                _this.part = 0;\r\n                _this.dynamicSize = _this.size * 1.3;\r\n                _this.dynamicRotationSpeed += 5;\r\n            }\r\n        };\r\n        this.UpdateSettings = function (pos) {\r\n            _this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pos.x, pos.y);\r\n            _this.size = pos.x > 200 && pos.y > 200 ? 200 : (pos.x + pos.y) / 4;\r\n        };\r\n        this.Enlarge = function (size) {\r\n            _this.dynamicSize += size;\r\n            _this.dynamicRotationSpeed += 1;\r\n            _this.drawNewPartTimer = 0;\r\n            _this.CheckIfFull();\r\n        };\r\n        this.Update = function (delta) {\r\n            if (_this.dynamicSize != 0) {\r\n                if (_this.dynamicSize > 0)\r\n                    _this.dynamicSize -= delta * _this.dynamicSize * 7;\r\n                if (_this.dynamicSize < 0)\r\n                    _this.dynamicSize = 0;\r\n            }\r\n            if (_this.dynamicRotationSpeed != 0) {\r\n                if (_this.dynamicRotationSpeed > 0)\r\n                    _this.dynamicRotationSpeed -= delta * _this.dynamicRotationSpeed * 4;\r\n                if (_this.dynamicRotationSpeed < 0)\r\n                    _this.dynamicRotationSpeed = 0;\r\n            }\r\n            if (_this.drawNewPartTimer != 1) {\r\n                if (_this.drawNewPartTimer < 1)\r\n                    _this.drawNewPartTimer += delta * 15;\r\n                if (_this.drawNewPartTimer > 1)\r\n                    _this.drawNewPartTimer = 1;\r\n            }\r\n        };\r\n        this.GetPartPoint = function (part, size, offset, drawDynamic) {\r\n            if (part === void 0) { part = 0; }\r\n            if (size === void 0) { size = 0; }\r\n            if (offset === void 0) { offset = 0; }\r\n            if (drawDynamic === void 0) { drawDynamic = false; }\r\n            var points = new Array();\r\n            var angle = -360 / _this.vertexes;\r\n            var radiansA = (_this.rotation + ((part - 1) * angle)) / 180 * Math.PI;\r\n            var radiansB = (_this.rotation + (part * angle)) / 180 * Math.PI;\r\n            var pointA_Near = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansA) * (_this.dynamicSize + _this.size + offset) + _this.position.x, Math.sin(radiansA) * (_this.dynamicSize + _this.size + offset) + _this.position.y);\r\n            var pointB_Near = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansB) * (_this.dynamicSize + _this.size + offset) + _this.position.x, Math.sin(radiansB) * (_this.dynamicSize + _this.size + offset) + _this.position.y);\r\n            var pointB_Far = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansB) * (_this.dynamicSize + _this.size + offset + size) + _this.position.x, Math.sin(radiansB) * (_this.dynamicSize + _this.size + offset + size) + _this.position.y);\r\n            var pointA_Far = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansA) * (_this.dynamicSize + _this.size + offset + size) + _this.position.x, Math.sin(radiansA) * (_this.dynamicSize + _this.size + offset + size) + _this.position.y);\r\n            if (drawDynamic == true && _this.part - 1 == part) {\r\n                var deltaNear = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pointB_Near.x, pointB_Near.y).substract(pointA_Near);\r\n                var deltaFar = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pointB_Far.x, pointB_Far.y).substract(pointA_Far);\r\n                var pointC_Near = deltaNear.multiply(_this.drawNewPartTimer).add(pointA_Near);\r\n                var pointC_Far = deltaFar.multiply(_this.drawNewPartTimer).add(pointA_Far);\r\n                points.push(pointA_Near);\r\n                points.push(pointC_Near);\r\n                points.push(pointC_Far);\r\n                points.push(pointA_Far);\r\n            }\r\n            else {\r\n                points.push(pointA_Near);\r\n                points.push(pointB_Near);\r\n                points.push(pointB_Far);\r\n                points.push(pointA_Far);\r\n            }\r\n            return points;\r\n        };\r\n        this.GetPoints = function (size) {\r\n            if (size === void 0) { size = 0; }\r\n            var points = new Array();\r\n            for (var i = 0; i < _this.vertexes; i++) {\r\n                var angle = 360 / _this.vertexes;\r\n                var radians = (_this.rotation + (i * angle)) / 180 * Math.PI;\r\n                var temp = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radians) * (_this.dynamicSize + _this.size + size) + _this.position.x, Math.sin(radians) * (_this.dynamicSize + _this.size + size) + _this.position.y);\r\n                points.push(temp);\r\n            }\r\n            return points;\r\n        };\r\n        this.Rotate = function () {\r\n            _this.rotation += _this.baseRotationSpeed + _this.dynamicRotationSpeed;\r\n        };\r\n        this.vertexes = 3;\r\n        this.part = 0;\r\n        this.size = 200;\r\n        this.dynamicSize = 0;\r\n        this.rotation = 0;\r\n        this.dynamicRotationSpeed = 0;\r\n        this.baseRotationSpeed = 0.5;\r\n        this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255);\r\n        this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, 255, 255);\r\n        this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2);\r\n    }\r\n    return Polygon;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Polygon.ts?");

/***/ }),

/***/ "./src/Vector2.ts":
/*!************************!*\
  !*** ./src/Vector2.ts ***!
  \************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector2\", function() { return Vector2; });\nvar Vector2 = /** @class */ (function () {\r\n    function Vector2(x, y) {\r\n        if (x === void 0) { x = 0; }\r\n        if (y === void 0) { y = 0; }\r\n        var _this = this;\r\n        this.set = function (x, y) {\r\n            _this.x = x;\r\n            _this.y = y;\r\n        };\r\n        this.distance = function (p) {\r\n            return Math.sqrt(Math.pow(_this.x + p.x, 2) + Math.pow(_this.y + p.y, 2));\r\n        };\r\n        this.averange = function (p) {\r\n            return new Vector2((_this.x + p.x) / 2, (_this.y + p.y) / 2);\r\n        };\r\n        this.add = function (p) {\r\n            var temp = new Vector2(_this.x + p.x, _this.y + p.y);\r\n            _this.x += p.x;\r\n            _this.y += p.y;\r\n            return temp;\r\n        };\r\n        this.substract = function (p) {\r\n            var temp = new Vector2(_this.x - p.x, _this.y - p.y);\r\n            _this.x -= p.x;\r\n            _this.y -= p.y;\r\n            return temp;\r\n        };\r\n        this.multiply = function (m) {\r\n            var temp = new Vector2(_this.x * m, _this.y * m);\r\n            _this.x *= m;\r\n            _this.y *= m;\r\n            return temp;\r\n        };\r\n        this.inverse = function () {\r\n            var temp = new Vector2(-_this.x, -_this.y);\r\n            _this.x = -_this.x;\r\n            _this.y = -_this.y;\r\n            return temp;\r\n        };\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return Vector2;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Vector2.ts?");

/***/ })

/******/ });