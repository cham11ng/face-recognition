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
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FaceMess = __webpack_require__(2);

var _FaceMess2 = _interopRequireDefault(_FaceMess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let canvas = FaceMess.createWithImage('image', 'images/cham11ng.jpg');

var faceMess = _FaceMess2.default.createById('canvas');
var webCam = false;

faceMess.canvas.addEventListener('click', function () {
  if (webCam) {
    faceMess.stopWebCam();
    webCam = false;
  } else {
    faceMess.startWebCam();
    webCam = true;
  }
});

document.getElementById('capture').addEventListener('click', function () {
  faceMess.capture();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_Utils);

var _ImageProcessor = __webpack_require__(4);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

var _WebCam = __webpack_require__(5);

var _WebCam2 = _interopRequireDefault(_WebCam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FaceMess = function () {
  function FaceMess(canvas) {
    _classCallCheck(this, FaceMess);

    this.canvas = canvas;
    this.webcam = new _WebCam2.default();
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.featureCanvas = this.canvas.cloneNode(true);
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.featureContext = this.featureCanvas.getContext('2d');
    this.grayScaleContext = this.grayScaleCanvas.getContext('2d');
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedContext = this.capturedCanvas.getContext('2d');
  }

  _createClass(FaceMess, [{
    key: "startWebCam",
    value: function startWebCam() {
      this.webcam.start(this.context);
    }
  }, {
    key: "stopWebCam",
    value: function stopWebCam() {
      this.webcam.stop();
    }
  }, {
    key: "capture",
    value: function capture() {
      this.capturedContext.drawImage(this.canvas, 0, 0, utils.WIDTH, utils.HEIGHT);
      this.extractFeature();
    }
  }, {
    key: "browseImage",
    value: function browseImage(src) {
      var _this = this;

      var image = new Image();
      image.src = src;
      image.onload = function () {
        _this.context.drawImage(image, 0, 0, _this.height, _this.width);
        _this.grayScaleContext.drawImage(_this.canvas, 0, 0);
        _this.featureContext.drawImage(_this.grayScaleCanvas, 0, 0);
        _this.extractFeature();
      };
    }
  }, {
    key: "extractFeature",
    value: function extractFeature() {
      var imageData = _ImageProcessor2.default.getImageData(this.capturedCanvas);
      this.grayScaleContext.drawImage(this.canvas, 0, 0);
      var grayScaleImageData = _ImageProcessor2.default.getImageData(this.grayScaleCanvas);
      grayScaleImageData = _ImageProcessor2.default.rgb2gray(grayScaleImageData);
      var data = imageData.data;

      for (var i = 0, dataLength = data.length; i < dataLength; i += 4) {
        var coordinate = utils.getCoordinate(this.width, i / 4);
        if (coordinate.x === utils.RADIUS_1 - 1 // ignoring border
        || coordinate.y === utils.RADIUS_1 - 1 || coordinate.x === this.width - utils.RADIUS_1 || coordinate.y === this.height - utils.RADIUS_1) {
          continue;
        }
        data[i] = data[i + 1] = data[i + 2] = this.getLBPOfPixel(grayScaleImageData.data, utils.POINT_8, utils.RADIUS_1, i / 4);
      }

      this.capturedContext.putImageData(imageData, 0, 0);
    }
  }, {
    key: "getLBPOfPixel",
    value: function getLBPOfPixel(data, p, r, centerPosition) {
      var sum = 0;
      for (var i = 0; i < p; i++) {
        var difference = data[this.getNeighbourPosition(p, r, centerPosition, i) * 4] - data[centerPosition];
        sum += utils.unitStep(difference) * Math.pow(2, p - (i + 1));
      }

      return sum;
    }
  }, {
    key: "getNeighbourPosition",
    value: function getNeighbourPosition(p, r, centerPosition, point) {
      var coordinate = utils.getCoordinate(this.width, centerPosition);

      return utils.get1DPosition(this.width, coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - utils.NEIGHBOUR_SHIFT) / p))), coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - utils.NEIGHBOUR_SHIFT) / p))));
    }
  }], [{
    key: "createById",
    value: function createById(id) {
      return new FaceMess(document.getElementById(id));
    }
  }, {
    key: "createWithImage",
    value: function createWithImage(id, src) {
      var canvasObject = FaceMess.createById(id);
      canvasObject.browseImage(src);

      return canvasObject;
    }
  }]);

  return FaceMess;
}();

exports.default = FaceMess;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitStep = unitStep;
exports.get1DPosition = get1DPosition;
exports.getCoordinate = getCoordinate;
var POINT_8 = exports.POINT_8 = 8;
var RADIUS_1 = exports.RADIUS_1 = 1;
var WIDTH = exports.WIDTH = 640;
var HEIGHT = exports.HEIGHT = 480;
var NEIGHBOUR_SHIFT = exports.NEIGHBOUR_SHIFT = 3;
var UNIFORM_BINARY_PATTERN = exports.UNIFORM_BINARY_PATTERN = [0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageProcessor = function () {
  function ImageProcessor() {
    _classCallCheck(this, ImageProcessor);
  }

  _createClass(ImageProcessor, null, [{
    key: "getImageData",
    value: function getImageData(canvas) {
      return canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "rgb2gray",
    value: function rgb2gray(imageData) {
      var data = imageData.data;
      for (var i = 0, dataLength = data.length; i < dataLength; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
      }

      return imageData;
    }
  }, {
    key: "getPixelValue",
    value: function getPixelValue(imageData, position) {
      return imageData.data[position * 4];
    }
  }]);

  return ImageProcessor;
}();

exports.default = ImageProcessor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebCam = function () {
  function WebCam() {
    _classCallCheck(this, WebCam);

    this.stream = '';
    this.cameraTimeout = '';
    this.video = document.createElement('video');
  }

  _createClass(WebCam, [{
    key: 'start',
    value: function start(context) {
      var _this = this;

      navigator.getUserMedia({
        video: true,
        audio: false
      }, function (stream) {
        _this.video.src = window.URL.createObjectURL(stream);
        _this.stream = stream;
        draw(_this.video, context);
      }, function (error) {
        console.log(error);
      });
      var draw = function draw(video) {
        context.drawImage(video, 0, 0);
        _this.cameraTimeout = setTimeout(draw, 10, video, context);
      };
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearTimeout(this.cameraTimeout);
      this.stream.getTracks()[0].stop();
    }
  }]);

  return WebCam;
}();

exports.default = WebCam;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map