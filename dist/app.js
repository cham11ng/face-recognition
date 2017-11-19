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
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_FaceMess__ = __webpack_require__(10);


let canvas = __WEBPACK_IMPORTED_MODULE_0__js_FaceMess__["a" /* default */].createWithImage('image', 'images/cham11ng.jpg');
canvas.extractFacialFeature();

// let duplicate = canvas.cloneNode(true);

// let imagePixels = [];
// ImageProcessor.rgb2gray(duplicate);

/*
function greyscaleImage(context) {
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data; // object.assign
  let imagePixels = [];

  for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
    let brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = brightness; // red
    data[i + 1] = brightness; // green
    data[i + 2] = brightness; // blue
    imagePixels[i % 4] = brightness;
  }
  context.putImageData(imageData, 0, 0);

  return imagePixels;
}

function getLBPFeature(data, P, R, centerX, centerY) {
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    console.log(getCorrespondingPoints(8, 1, 1, 1, i));
  }

  let pixelValues = [5, 4, 3, 4, 3, 1, 2, 0, 3];
  for (let i = 0; i < P - 1; i++) {
    sum += unitStep(grayValueOfNeighbourPoint() - pixelValues[getCorrespondingPoints(P8, R1, )]) * Math.pow(2, i);
  }
  return sum;
}

function getCorrespondingPoints(p, r, x, y, point) {
  return {
    x: x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - 3) / p))),
    y: y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - 3) / p)))
  };
}
*/

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(11);



class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.greyScaleCanvas = this.canvas.cloneNode(true);
    this.featureCanvas = this.canvas.cloneNode(true);
    this.greyScaleContext = this.greyScaleCanvas.getContext('2d');
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
      this.greyScaleContext.drawImage(this.canvas, 0, 0);
      this.featureContext.drawImage(this.greyScaleCanvas, 0, 0);
    };
  }

  extractFacialFeature() {
    let greyScaleImageData = __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__["a" /* default */].getImageData(this.greyScaleCanvas);
    greyScaleImageData = __WEBPACK_IMPORTED_MODULE_0__ImageProcessor__["a" /* default */].rgb2gray(greyScaleImageData);

    let pixelValues = [137, 135, 115, 99, 82, 79, 70, 54, 45];
    console.log(this.getLBPOfPixel(pixelValues, __WEBPACK_IMPORTED_MODULE_1__Utils__["b" /* POINT_8 */], __WEBPACK_IMPORTED_MODULE_1__Utils__["c" /* RADIUS_1 */], 4));
    /*for (let i = 0; i < this.width * this.height; i += 4) {
     }*/
  }

  getLBPOfPixel(data, p, r, centerPosition) {
    let sum = 0;
    for (let i = 0; i < p; i++) {
      let difference = data[this.getNeighbourPosition(p, r, centerPosition, i)] - data[centerPosition];
      sum += Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["f" /* unitStep */])(difference) * Math.pow(2, (p - i - 1) % p);
    }

    return sum;
  }

  getNeighbourPosition(p, r, centerPosition, point) {
    let coordinate = Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["e" /* getCoordinate */])(3, centerPosition);

    return Object(__WEBPACK_IMPORTED_MODULE_1__Utils__["d" /* get1DPosition */])(3, coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* NEIGHBOUR_SHIFT */]) / p))), coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* NEIGHBOUR_SHIFT */]) / p))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FaceMess);

/***/ }),
/* 11 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map