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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_FaceMess__ = __webpack_require__(2);


let canvas = __WEBPACK_IMPORTED_MODULE_0__js_FaceMess__["a" /* default */].createWithImage('image', 'images/cham11ng.jpg');
// canvas.extractFacialFeature();

// let duplicate = canvas.cloneNode(true);

// let imagePixels = [];
// ImageProcessor.rgb2gray(duplicate);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(4);



class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.featureCanvas = this.canvas.cloneNode(true);
    this.grayScaleContext = this.grayScaleCanvas.getContext('2d');
    this.featureContext = this.featureCanvas.getContext('2d');
    this.height = this.canvas.height;
    this.width = this.canvas.width;
  }

  static createById(id) {
    return new FaceMess(document.getElementById(id));
  }

  static createWithImage(id, src) {
    let canvasObject = FaceMess.createById(id);
    canvasObject.drawImage(src);

    return canvasObject;
  }

  drawImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      this.context.drawImage(image, 0, 0, this.height, this.width);
      this.grayScaleContext.drawImage(this.canvas, 0, 0);
      this.featureContext.drawImage(this.grayScaleCanvas, 0, 0);
      this.extractFacialFeature();
    };
  }

  extractFacialFeature() {
    let imageData = __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__["a" /* default */].getImageData(this.canvas);
    let grayScaleImageData = __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__["a" /* default */].getImageData(this.grayScaleCanvas);
    grayScaleImageData = __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__["a" /* default */].rgb2gray(grayScaleImageData);
    let data = imageData.data;

    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let coordinate = Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["e" /* getCoordinate */])(this.width, i / 4);
      if (coordinate.x === 0 || coordinate.y === 0 || coordinate.x === this.width - 1 || coordinate.y === this.height - 1) {
        continue;
      }
      // console.log(coordinate);
      data[i] = data[i + 1] = data[i + 2] = this.getLBPOfPixel(grayScaleImageData.data, __WEBPACK_IMPORTED_MODULE_1__Utils__["b" /* POINT_8 */], __WEBPACK_IMPORTED_MODULE_1__Utils__["c" /* RADIUS_1 */], i / 4);
    }
    this.context.putImageData(imageData, 0, 0);
  }

  getLBPOfPixel(data, p, r, centerPosition) {
    let sum = 0;
    for (let i = 0; i < p; i++) {
      let difference = data[this.getNeighbourPosition(p, r, centerPosition, i) * 4] - data[centerPosition];
      sum += Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["f" /* unitStep */])(difference) * Math.pow(2, (p - i - 1) % p);
    }

    return sum;
  }

  getNeighbourPosition(p, r, centerPosition, point) {
    let coordinate = Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["e" /* getCoordinate */])(this.width, centerPosition);

    return Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["d" /* get1DPosition */])(this.width, coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* NEIGHBOUR_SHIFT */]) / p))), coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* NEIGHBOUR_SHIFT */]) / p))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FaceMess);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImageProcessor {
  static getImageData(canvas) {
    return canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
  }

  static rgb2gray(imageData) {
    let data = imageData.data;
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    }

    return imageData;
  }

  static getPixelValue(imageData, position) {
    return imageData.data[position * 4];
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageProcessor);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = unitStep;
/* harmony export (immutable) */ __webpack_exports__["d"] = get1DPosition;
/* harmony export (immutable) */ __webpack_exports__["e"] = getCoordinate;
const POINT_8 = 8;
/* harmony export (immutable) */ __webpack_exports__["b"] = POINT_8;

const RADIUS_1 = 1;
/* harmony export (immutable) */ __webpack_exports__["c"] = RADIUS_1;

const NEIGHBOUR_SHIFT = 3;
/* harmony export (immutable) */ __webpack_exports__["a"] = NEIGHBOUR_SHIFT;

const UNIFORM_BINARY_PATTERN = [0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];
/* unused harmony export UNIFORM_BINARY_PATTERN */


function unitStep(n) {
  if (n < 0) {
    return 0;
  } else if (n >= 0) {
    return 1;
  }
}

function get1DPosition(colLength, x, y) {
  return x + y * colLength;
}

function getCoordinate(colLength, position) {
  return {
    x: position % colLength,
    y: Math.floor(position / colLength)
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map