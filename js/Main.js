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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n/* harmony import */ var _DOMSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMSystem */ \"./src/DOMSystem.ts\");\n\r\n\r\n\r\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n        var _this = this;\r\n        this.UpdateSettings = function (size) {\r\n            _this.size = size;\r\n            Object(_DOMSystem__WEBPACK_IMPORTED_MODULE_2__[\"SetSize\"])(_this.canvas, size);\r\n            _this.canvas.width = size.x;\r\n            _this.canvas.height = size.y;\r\n            _this.context.imageSmoothingEnabled = false;\r\n            _this.context.font = '16px custom';\r\n        };\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.context = this.canvas.getContext(\"2d\");\r\n        this.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth, window.innerHeight));\r\n        this.clsColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](33, 37, 43);\r\n        this.canvas.style.backgroundColor = this.clsColor.GetRGB();\r\n        document.body.appendChild(this.canvas);\r\n        /// Graphics settings\r\n        this.context.imageSmoothingEnabled = false;\r\n    }\r\n    Canvas.prototype.Rect = function (from, to, color) {\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        this.context.fillStyle = color.GetRGB();\r\n        this.context.fillRect(from.x, from.y, to.x - from.x, to.y - from.y);\r\n    };\r\n    Canvas.prototype.Polygon = function (points, color) {\r\n        var _this = this;\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        var temp = points[0];\r\n        points.splice(0, 1);\r\n        this.context.beginPath();\r\n        this.context.moveTo(temp.x, temp.y);\r\n        this.context.fillStyle = color.GetRGBA();\r\n        points.forEach(function (point) {\r\n            _this.context.lineTo(point.x, point.y);\r\n        });\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.Arc = function (position, from, to, angle, radius, color) {\r\n        if (angle === void 0) { angle = 0; }\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        angle *= Math.PI / 180;\r\n        this.context.fillStyle = color.GetRGBA();\r\n        this.context.beginPath();\r\n        this.context.moveTo(position.x, position.y);\r\n        this.context.lineTo(position.x + radius * Math.cos(angle), position.y + radius * Math.sin(angle));\r\n        this.context.arc(position.x, position.y, radius, from + angle, to + angle);\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.Line = function (points, color) {\r\n        var _this = this;\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        var temp = points[0];\r\n        points.splice(0, 1);\r\n        this.context.beginPath();\r\n        this.context.moveTo(temp.x, temp.y);\r\n        this.context.strokeStyle = color.GetRGBA();\r\n        points.forEach(function (point) {\r\n            _this.context.lineTo(point.x, point.y);\r\n        });\r\n        this.context.closePath();\r\n        this.context.stroke();\r\n    };\r\n    Canvas.prototype.Text = function (text, position, size, color, align) {\r\n        if (size === void 0) { size = 16; }\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, 0, 0); }\r\n        if (align === void 0) { align = null; }\r\n        align != null ? this.context.textAlign = align : null;\r\n        this.context.fillStyle = color.GetRGBA();\r\n        this.context.font = size.toString() + \"px custom\";\r\n        this.context.fillText(text, Math.floor(position.x), Math.floor(position.y));\r\n    };\r\n    Canvas.prototype.Gradient = function (points, color, truePoints) {\r\n        var _this = this;\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        var pointA, pointB;\r\n        if (truePoints != null) {\r\n            pointA = truePoints[0].averange(truePoints[1]);\r\n            pointB = truePoints[2].averange(truePoints[3]);\r\n        }\r\n        else {\r\n            pointA = points[0].averange(points[1]);\r\n            pointB = points[2].averange(points[3]);\r\n        }\r\n        var gradient = this.context.createLinearGradient(pointA.x, pointA.y, pointB.x, pointB.y);\r\n        gradient.addColorStop(0, color.GetRGBA());\r\n        gradient.addColorStop(1, new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](color.r, color.g, color.b, 0).GetRGBA());\r\n        var temp = points[0];\r\n        points.splice(0, 1);\r\n        this.context.beginPath();\r\n        this.context.moveTo(temp.x, temp.y);\r\n        this.context.fillStyle = gradient;\r\n        points.forEach(function (point) {\r\n            _this.context.lineTo(point.x, point.y);\r\n        });\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.GradientArc = function (position, from, to, angle, radius, color) {\r\n        if (angle === void 0) { angle = 0; }\r\n        if (color === void 0) { color = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255); }\r\n        angle *= Math.PI / 180;\r\n        var gradient = this.context.createRadialGradient(position.x, position.y, 0, position.x, position.y, radius);\r\n        gradient.addColorStop(0, color.GetRGBA());\r\n        gradient.addColorStop(1, new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](color.r, color.g, color.b, 0).GetRGBA());\r\n        this.context.fillStyle = gradient;\r\n        this.context.beginPath();\r\n        this.context.moveTo(position.x, position.y);\r\n        this.context.lineTo(position.x + radius * Math.cos(angle), position.y + radius * Math.sin(angle));\r\n        this.context.arc(position.x, position.y, radius, from + angle, to + angle);\r\n        this.context.closePath();\r\n        this.context.fill();\r\n    };\r\n    Canvas.prototype.Cls = function () {\r\n        this.context.clearRect(0, 0, this.size.x, this.size.y);\r\n    };\r\n    return Canvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Canvas.ts?");

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

/***/ "./src/Indicators.ts":
/*!***************************!*\
  !*** ./src/Indicators.ts ***!
  \***************************/
/*! exports provided: Indicator, Indicators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicators\", function() { return Indicators; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./System */ \"./src/System.ts\");\n\r\n\r\n\r\nvar Indicator = /** @class */ (function () {\r\n    function Indicator(value, timer, position) {\r\n        this.value = value;\r\n        this.maxTimer = timer;\r\n        this.timer = timer;\r\n        this.position = position;\r\n    }\r\n    Indicator.prototype.Update = function (delta) {\r\n        this.timer -= delta;\r\n        if (this.timer <= 0)\r\n            return -1;\r\n        else {\r\n            return this.timer / this.maxTimer;\r\n        }\r\n    };\r\n    Indicator.prototype.GetValue = function () {\r\n        return this.value;\r\n    };\r\n    Indicator.prototype.GetPosition = function () {\r\n        return this.position;\r\n    };\r\n    return Indicator;\r\n}());\r\n\r\nvar Indicators = /** @class */ (function () {\r\n    function Indicators(ref) {\r\n        this.indicators = new Array();\r\n        this.ref = ref;\r\n    }\r\n    Indicators.prototype.Add = function (value) {\r\n        if (value > 0)\r\n            this.indicators.push(new Indicator(value, 0.4, new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2 + 250)));\r\n    };\r\n    Indicators.prototype.Update = function (delta) {\r\n        for (var i = this.indicators.length - 1; i >= 0; i--) {\r\n            var f = this.indicators[i].Update(delta);\r\n            if (f == -1)\r\n                this.indicators.splice(i, 1);\r\n            else {\r\n                this.ref.canvas.Text(\"+\" + _System__WEBPACK_IMPORTED_MODULE_2__[\"System\"].Gap(this.indicators[i].GetValue()), new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](this.indicators[i].GetPosition().x, this.indicators[i].GetPosition().y - (1 - f) * 200), 150 * f, new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](34, 37, 43), \"center\");\r\n            }\r\n        }\r\n    };\r\n    return Indicators;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Indicators.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mouse */ \"./src/Mouse.ts\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Polygon */ \"./src/Polygon.ts\");\n/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stats */ \"./src/Stats.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n/* harmony import */ var _Indicators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Indicators */ \"./src/Indicators.ts\");\n/* harmony import */ var _Particles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Particles */ \"./src/Particles.ts\");\n/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./System */ \"./src/System.ts\");\n/* harmony import */ var _Shake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shake */ \"./src/Shake.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        var _this = this;\r\n        this.CalcDelta = function () {\r\n            _this.delta = (Date.now() - _this.lastDelta) / 1000;\r\n            _this.lastDelta = Date.now();\r\n        };\r\n        this.Loop = function () {\r\n            /* Calculations */\r\n            _this.CalcDelta();\r\n            _this.shake.Update(_this.delta);\r\n            /* Polygon */\r\n            _this.polygon.Rotate();\r\n            _this.polygon.Update(_this.delta);\r\n            /* Draw polygons */\r\n            _this.canvas.Cls();\r\n            if (_this.polygon.GetVertexes() > 99) {\r\n                var x = window.innerWidth / 2;\r\n                var y = window.innerHeight / 2;\r\n                _this.canvas.Arc(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](x - _this.shake.Get().x, y - _this.shake.Get().y), 0, 2 * Math.PI, _this.polygon.GetBaseSize() + _this.polygon.GetDynamicSize() * 1.6 + 60, 0, new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](40, 44, 52, 0.25));\r\n                _this.canvas.Arc(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](x - _this.shake.Get().x, y - _this.shake.Get().y), 0, 2 * Math.PI, _this.polygon.GetBaseSize() + _this.polygon.GetDynamicSize() * 1.6 + 30, 0, new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](90, 108, 136, 0.25));\r\n                _this.particles.Update(_this.delta);\r\n                _this.canvas.GradientArc(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](x - _this.shake.Get().x, y - _this.shake.Get().y), 0, 2 * Math.PI * (_this.polygon.GetPart() / _this.polygon.GetVertexes()), _this.polygon.GetRotation(), _this.polygon.GetBaseSize() + 400 + _this.polygon.GetDynamicSize(), new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](_this.polygon.progressColor.r, _this.polygon.progressColor.g, _this.polygon.progressColor.b, 0.1));\r\n                _this.canvas.Arc(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](x - _this.shake.Get().x, y - _this.shake.Get().y), 0, 2 * Math.PI * (_this.polygon.GetPart() / _this.polygon.GetVertexes()), _this.polygon.GetRotation(), _this.polygon.GetBaseSize() + 60 + _this.polygon.GetDynamicSize(), _this.polygon.progressColor);\r\n                _this.canvas.Arc(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](x - _this.shake.Get().x, y - _this.shake.Get().y), 0, 2 * Math.PI, _this.polygon.GetRotation(), _this.polygon.GetBaseSize() + _this.polygon.GetDynamicSize(), _this.polygon.baseColor);\r\n            }\r\n            /* Switch to draw circle above 100 */\r\n            else {\r\n                _this.canvas.Polygon(_this.polygon.GetPoints(_this.polygon.GetDynamicSize() * 1.6 + 60, true), new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](40, 44, 52, 0.25));\r\n                _this.canvas.Polygon(_this.polygon.GetPoints(_this.polygon.GetDynamicSize() * 1.6 + 30, true), new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](90, 108, 136, 0.25));\r\n                _this.particles.Update(_this.delta);\r\n                _this.canvas.Polygon(_this.polygon.GetPoints(0, true), _this.polygon.baseColor);\r\n                for (var i = 0; i < _this.polygon.GetPart(); i++) {\r\n                    _this.canvas.Gradient(_this.polygon.GetPartPoint(i, 400, 30, true, true), new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](_this.polygon.progressColor.r, _this.polygon.progressColor.g, _this.polygon.progressColor.b, 0.1), _this.polygon.GetPartPoint(i, 400, 0, true, false));\r\n                    _this.canvas.Polygon(_this.polygon.GetPartPoint(i, 60, -1, true, true), _this.polygon.progressColor);\r\n                    _this.canvas.Line(_this.polygon.GetPartPoint(i, 60, -1, true, true), _this.polygon.progressColor);\r\n                }\r\n            }\r\n            /* Text */\r\n            _this.canvas.Text(_this.polygon.GetVertexes().toString(), new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth / 2 - _this.shake.Get().x, window.innerHeight / 2 - _this.shake.Get().y), 130 + _this.polygon.GetDynamicSize(), new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](34, 34, 34), \"center\");\r\n            _this.canvas.Text(_System__WEBPACK_IMPORTED_MODULE_8__[\"System\"].Gap(_this.stats.GetPoints()) + \" POINTS\", new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth / 2 - _this.shake.Get().x, window.innerHeight / 2 + 20 + _this.polygon.GetDynamicSize() / 5 - _this.shake.Get().y), 20 + _this.polygon.GetDynamicSize() / 5, new _Color__WEBPACK_IMPORTED_MODULE_5__[\"Color\"](34, 34, 34), \"center\");\r\n            _this.indicators.Update(_this.delta);\r\n            /* Loop */\r\n            requestAnimationFrame(_this.Loop);\r\n        };\r\n        this.Clicked = function () {\r\n            _this.polygon.Enlarge(10);\r\n        };\r\n        this.canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__[\"Canvas\"]();\r\n        this.stats = new _Stats__WEBPACK_IMPORTED_MODULE_4__[\"Stats\"]();\r\n        this.indicators = new _Indicators__WEBPACK_IMPORTED_MODULE_6__[\"Indicators\"](this);\r\n        this.particles = new _Particles__WEBPACK_IMPORTED_MODULE_7__[\"Particles\"](this);\r\n        this.polygon = new _Polygon__WEBPACK_IMPORTED_MODULE_3__[\"Polygon\"](this);\r\n        this.shake = new _Shake__WEBPACK_IMPORTED_MODULE_9__[\"Shake\"]();\r\n        this.mouse = new _Mouse__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"](this);\r\n        this.debug = false;\r\n        this.lastDelta = Date.now();\r\n        this.Loop();\r\n        window.onresize = function () {\r\n            _this.canvas.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth, window.innerHeight));\r\n            _this.polygon.UpdateSettings(new _Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2));\r\n        };\r\n    }\r\n    return Main;\r\n}());\r\n\r\nwindow.onload = function () {\r\n    var main = new Main;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ }),

/***/ "./src/Mouse.ts":
/*!**********************!*\
  !*** ./src/Mouse.ts ***!
  \**********************/
/*! exports provided: Mouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mouse\", function() { return Mouse; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n\r\nvar Mouse = /** @class */ (function () {\r\n    function Mouse(ref) {\r\n        var _this = this;\r\n        this.ref = ref;\r\n        this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n        /*\r\n        this.dvDebug = <HTMLDivElement>document.createElement(\"div\");\r\n        this.dvDebug.setAttribute(\"class\", \"debug\");\r\n        document.body.appendChild(this.dvDebug);\r\n        */\r\n        window.onmousemove = function (e) {\r\n            _this.position.set(e.pageX, e.pageY);\r\n            /*\r\n            this.dvDebug.innerHTML = this.position.x + \", \" + this.position.y;\r\n            SetPosXY(this.dvDebug, this.position.x, this.position.y + 20);\r\n            */\r\n        };\r\n        window.onclick = function (e) {\r\n            _this.ref.polygon.Enlarge(50);\r\n        };\r\n    }\r\n    return Mouse;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Mouse.ts?");

/***/ }),

/***/ "./src/Particles.ts":
/*!**************************!*\
  !*** ./src/Particles.ts ***!
  \**************************/
/*! exports provided: Particle, Particles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return Particle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Particles\", function() { return Particles; });\n/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./System */ \"./src/System.ts\");\n\r\nvar Particle = /** @class */ (function () {\r\n    function Particle(position, size, color, timer, speed, angle, angularMove, rotation, rotate, shrink, disapear) {\r\n        this.position = position;\r\n        this.size = size;\r\n        this.color = color;\r\n        this.maxTimer = timer;\r\n        this.timer = timer;\r\n        this.speed = speed;\r\n        this.angle = angle;\r\n        this.angularMove = angularMove;\r\n        this.rotation = rotation;\r\n        this.rotate = rotate;\r\n        this.shrink = shrink;\r\n        this.disapear = disapear;\r\n    }\r\n    Particle.prototype.Update = function (delta) {\r\n        this.timer -= delta;\r\n        if (this.timer <= 0)\r\n            return -1;\r\n        else {\r\n            this.position.x += Math.cos(this.angle) * this.speed * delta;\r\n            this.position.y += Math.sin(this.angle) * this.speed * delta;\r\n            this.rotate != 0 ? this.rotation += this.rotate * delta : null;\r\n            this.angularMove != 0 ? this.angle += this.angularMove * delta : null;\r\n            return this.timer / this.maxTimer;\r\n        }\r\n    };\r\n    return Particle;\r\n}());\r\n\r\nvar Particles = /** @class */ (function () {\r\n    function Particles(ref) {\r\n        this.particles = new Array();\r\n        this.ref = ref;\r\n    }\r\n    Particles.prototype.Add = function (position, size, color, timer, speed, angle, angularMove, rotation, rotate, shrink, disapear) {\r\n        if (angularMove === void 0) { angularMove = 0; }\r\n        if (rotation === void 0) { rotation = _System__WEBPACK_IMPORTED_MODULE_0__[\"System\"].RandomAngle(); }\r\n        if (rotate === void 0) { rotate = 0; }\r\n        if (shrink === void 0) { shrink = true; }\r\n        if (disapear === void 0) { disapear = true; }\r\n        this.particles.push(new Particle(position, size, color, timer, speed, angle, angularMove, rotation, rotate, shrink, disapear));\r\n    };\r\n    Particles.prototype.Update = function (delta) {\r\n        for (var i = this.particles.length - 1; i >= 0; i--) {\r\n            var f = this.particles[i].Update(delta);\r\n            if (f == -1)\r\n                this.particles.splice(i, 1);\r\n            else {\r\n                var size = this.particles[i].shrink ? this.particles[i].size * f : this.particles[i].size;\r\n                var angle = this.particles[i].rotation;\r\n                var x = Math.floor(this.particles[i].position.x - this.ref.shake.Get().x);\r\n                var y = Math.floor(this.particles[i].position.y - this.ref.shake.Get().x);\r\n                this.ref.canvas.context.translate(x, y);\r\n                this.ref.canvas.context.rotate(angle);\r\n                this.ref.canvas.context.fillStyle = this.particles[i].color.GetRGBA();\r\n                this.ref.canvas.context.fillRect(0, 0, size, size);\r\n                this.ref.canvas.context.rotate(-angle);\r\n                this.ref.canvas.context.translate(-x, -y);\r\n            }\r\n        }\r\n    };\r\n    return Particles;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Particles.ts?");

/***/ }),

/***/ "./src/Polygon.ts":
/*!************************!*\
  !*** ./src/Polygon.ts ***!
  \************************/
/*! exports provided: Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Polygon\", function() { return Polygon; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ \"./src/Color.ts\");\n/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./System */ \"./src/System.ts\");\n\r\n\r\n\r\nvar Polygon = /** @class */ (function () {\r\n    function Polygon(ref) {\r\n        var _this = this;\r\n        this.GetVertexes = function () {\r\n            return _this.vertexes;\r\n        };\r\n        this.GetPart = function () {\r\n            return _this.part;\r\n        };\r\n        this.ProgressColor = function () {\r\n            var i = _this.vertexes % 300;\r\n            var j = _this.vertexes;\r\n            if (i < 50)\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, 255, 255 - i * 5);\r\n            else if (i < 100) {\r\n                i -= 50;\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](i * 5, 255, 0);\r\n            }\r\n            else if (i < 150) {\r\n                i -= 100;\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255 - i * 5, 0);\r\n            }\r\n            else if (i < 200) {\r\n                i -= 150;\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 0, i * 5);\r\n            }\r\n            else if (i < 250) {\r\n                i -= 200;\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255 - i * 5, 0, 255);\r\n            }\r\n            else if (i < 300) {\r\n                i -= 250;\r\n                _this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, i * 5, 255);\r\n            }\r\n            if (j < 300) {\r\n                _this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255);\r\n            }\r\n            else if (j >= 300 && j <= 555) {\r\n                j -= 300;\r\n                _this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255 - j * 1);\r\n            }\r\n            else if (j >= 600 && j <= 855) {\r\n                j -= 600;\r\n                _this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255 - j * 1, 0);\r\n            }\r\n            else\r\n                _this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 0, 0);\r\n        };\r\n        this.CheckIfFull = function () {\r\n            if (_this.part >= _this.vertexes) {\r\n                var pts = _this.vertexes * (_this.vertexes - 3) / 2;\r\n                _this.ref.stats.AddPoints(pts);\r\n                _this.ref.indicators.Add(pts);\r\n                _this.vertexes++;\r\n                _this.part = 0;\r\n                _this.dynamicSize = _this.size * 2.5;\r\n                _this.dynamicRotationSpeed += 22;\r\n                _this.ProgressColor();\r\n                _this.ref.shake.Do(2);\r\n                for (var i = 0; i < 100; i++)\r\n                    _this.ref.particles.Add(new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2), Math.round(Math.random() * 4) + 1, _this.progressColor, Math.random() * 4 + 3, Math.random() * 350 + 250, _System__WEBPACK_IMPORTED_MODULE_2__[\"System\"].RandomAngle(), (_System__WEBPACK_IMPORTED_MODULE_2__[\"System\"].RandomAngle() - _System__WEBPACK_IMPORTED_MODULE_2__[\"System\"].RandomAngle()) / 5);\r\n            }\r\n            else {\r\n                var angle = 360 / _this.vertexes;\r\n                for (var i = 0; i < 15; i++)\r\n                    _this.ref.particles.Add(new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2), Math.round(Math.random() * 5) + 1, _this.progressColor, Math.random() * 4 + 3, Math.random() * 50 + 250, (_this.rotation + angle / 2 - _this.part * angle + Math.random() * (angle - 20) + Math.random() * 20) * Math.PI / 180);\r\n                for (var i = 0; i < 6; i++)\r\n                    _this.ref.particles.Add(new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2), Math.round(Math.random() * 5) + 1, _this.progressColor, Math.random() * 4 + 3, Math.random() * 50 + 250, _System__WEBPACK_IMPORTED_MODULE_2__[\"System\"].RandomAngle());\r\n                _this.part += _this.clickPower;\r\n                if (_this.part > _this.vertexes)\r\n                    _this.part = _this.vertexes;\r\n            }\r\n        };\r\n        this.UpdateSettings = function (pos) {\r\n            _this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pos.x, pos.y);\r\n            _this.size = pos.x > 200 && pos.y > 200 ? 200 : (pos.x + pos.y) / 4;\r\n        };\r\n        this.Enlarge = function (size) {\r\n            _this.dynamicSize += size;\r\n            _this.dynamicRotationSpeed += 1;\r\n            _this.drawNewPartTimer = 0;\r\n            _this.CheckIfFull();\r\n        };\r\n        this.Update = function (delta) {\r\n            if (_this.dynamicSize != 0) {\r\n                if (_this.dynamicSize > 0)\r\n                    _this.dynamicSize -= delta * (_this.dynamicSize + 1) * 12;\r\n                if (_this.dynamicSize < 0)\r\n                    _this.dynamicSize = 0;\r\n            }\r\n            if (_this.dynamicRotationSpeed != 0) {\r\n                if (_this.dynamicRotationSpeed > 0)\r\n                    _this.dynamicRotationSpeed -= delta * _this.dynamicRotationSpeed * 8;\r\n                if (_this.dynamicRotationSpeed < 0)\r\n                    _this.dynamicRotationSpeed = 0;\r\n            }\r\n            if (_this.drawNewPartTimer != 1) {\r\n                if (_this.drawNewPartTimer < 1)\r\n                    _this.drawNewPartTimer += delta * 12;\r\n                if (_this.drawNewPartTimer > 1)\r\n                    _this.drawNewPartTimer = 1;\r\n            }\r\n        };\r\n        this.GetPartPoint = function (part, size, offset, withShake, drawDynamic) {\r\n            if (part === void 0) { part = 0; }\r\n            if (size === void 0) { size = 0; }\r\n            if (offset === void 0) { offset = 0; }\r\n            if (withShake === void 0) { withShake = false; }\r\n            if (drawDynamic === void 0) { drawDynamic = false; }\r\n            var points = new Array();\r\n            var shake = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n            shake.x = withShake ? _this.ref.shake.Get().x : 0;\r\n            shake.y = withShake ? _this.ref.shake.Get().y : 0;\r\n            var angle = -360 / _this.vertexes;\r\n            var radiansA = (_this.rotation + ((part - 1) * angle)) / 180 * Math.PI;\r\n            var radiansB = (_this.rotation + (part * angle)) / 180 * Math.PI;\r\n            var pointA_Near = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansA) * (_this.dynamicSize + _this.size + offset) + _this.position.x + shake.x, Math.sin(radiansA) * (_this.dynamicSize + _this.size + offset) + _this.position.y + shake.y);\r\n            var pointB_Near = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansB) * (_this.dynamicSize + _this.size + offset) + _this.position.x + shake.x, Math.sin(radiansB) * (_this.dynamicSize + _this.size + offset) + _this.position.y + shake.y);\r\n            var pointB_Far = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansB) * (_this.dynamicSize + _this.size + offset + size) + _this.position.x + shake.x, Math.sin(radiansB) * (_this.dynamicSize + _this.size + offset + size) + _this.position.y + shake.y);\r\n            var pointA_Far = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radiansA) * (_this.dynamicSize + _this.size + offset + size) + _this.position.x + shake.x, Math.sin(radiansA) * (_this.dynamicSize + _this.size + offset + size) + _this.position.y + shake.y);\r\n            if (drawDynamic == true && _this.part - 1 == part) {\r\n                var deltaNear = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pointB_Near.x, pointB_Near.y).substract(pointA_Near);\r\n                var deltaFar = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](pointB_Far.x, pointB_Far.y).substract(pointA_Far);\r\n                var pointC_Near = deltaNear.multiply(_this.drawNewPartTimer).add(pointA_Near);\r\n                var pointC_Far = deltaFar.multiply(_this.drawNewPartTimer).add(pointA_Far);\r\n                points.push(pointA_Near);\r\n                points.push(pointC_Near);\r\n                points.push(pointC_Far);\r\n                points.push(pointA_Far);\r\n            }\r\n            else {\r\n                points.push(pointA_Near);\r\n                points.push(pointB_Near);\r\n                points.push(pointB_Far);\r\n                points.push(pointA_Far);\r\n            }\r\n            return points;\r\n        };\r\n        this.GetPoints = function (size, withShake) {\r\n            if (size === void 0) { size = 0; }\r\n            if (withShake === void 0) { withShake = false; }\r\n            var points = new Array();\r\n            var shake = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n            shake.x = withShake ? _this.ref.shake.Get().x : 0;\r\n            shake.y = withShake ? _this.ref.shake.Get().y : 0;\r\n            for (var i = 0; i < _this.vertexes; i++) {\r\n                var angle = 360 / _this.vertexes;\r\n                var radians = (_this.rotation + (i * angle)) / 180 * Math.PI;\r\n                var temp = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.cos(radians) * (_this.dynamicSize + _this.size + size) + _this.position.x + shake.x, Math.sin(radians) * (_this.dynamicSize + _this.size + size) + _this.position.y + shake.y);\r\n                points.push(temp);\r\n            }\r\n            return points;\r\n        };\r\n        this.GetRotation = function () {\r\n            return _this.rotation;\r\n        };\r\n        this.GetBaseSize = function () {\r\n            return _this.size;\r\n        };\r\n        this.GetDynamicSize = function () {\r\n            return _this.dynamicSize;\r\n        };\r\n        this.Rotate = function () {\r\n            _this.rotation += _this.baseRotationSpeed + _this.dynamicRotationSpeed;\r\n        };\r\n        this.ref = ref;\r\n        this.vertexes = 3;\r\n        this.part = 0;\r\n        this.size = 200;\r\n        this.dynamicSize = 0;\r\n        this.rotation = 0;\r\n        this.dynamicRotationSpeed = 0;\r\n        this.baseRotationSpeed = 0.5;\r\n        this.baseColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](255, 255, 255);\r\n        this.progressColor = new _Color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, 255, 255);\r\n        this.position = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](window.innerWidth / 2, window.innerHeight / 2);\r\n        this.clickPower = 1;\r\n    }\r\n    return Polygon;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Polygon.ts?");

/***/ }),

/***/ "./src/Shake.ts":
/*!**********************!*\
  !*** ./src/Shake.ts ***!
  \**********************/
/*! exports provided: Shake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shake\", function() { return Shake; });\n/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ \"./src/Vector2.ts\");\n\r\nvar Shake = /** @class */ (function () {\r\n    function Shake() {\r\n        this.length = 25;\r\n        this.offset = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n    }\r\n    Shake.prototype.Do = function (power) {\r\n        this.power = power;\r\n    };\r\n    Shake.prototype.Update = function (delta) {\r\n        var _this = this;\r\n        if (this.power > 0) {\r\n            this.power -= this.power * 3.2 * delta;\r\n            this.offset = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](Math.sin(this.power * 234) * this.length * Math.cos(this.power * 123) * this.power, Math.sin(this.power * 123) * this.length * this.power * Math.cos(this.power * 234));\r\n            this.power < 0 ? this.power = 0 : function () {\r\n                _this.offset = new _Vector2__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\r\n            };\r\n        }\r\n    };\r\n    Shake.prototype.Get = function () {\r\n        return this.offset;\r\n    };\r\n    return Shake;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Shake.ts?");

/***/ }),

/***/ "./src/Stats.ts":
/*!**********************!*\
  !*** ./src/Stats.ts ***!
  \**********************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stats\", function() { return Stats; });\nvar Stats = /** @class */ (function () {\r\n    function Stats() {\r\n        this.points = 0;\r\n    }\r\n    Stats.prototype.AddPoints = function (v) {\r\n        this.points += v;\r\n    };\r\n    Stats.prototype.GetPoints = function () {\r\n        return this.points;\r\n    };\r\n    return Stats;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Stats.ts?");

/***/ }),

/***/ "./src/System.ts":
/*!***********************!*\
  !*** ./src/System.ts ***!
  \***********************/
/*! exports provided: System */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"System\", function() { return System; });\nvar System = /** @class */ (function () {\r\n    function System() {\r\n    }\r\n    System.Gap = function (value) {\r\n        return value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\r\n    };\r\n    System.RandomAngle = function () {\r\n        return Math.random() * 2 * Math.PI;\r\n    };\r\n    return System;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/System.ts?");

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