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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var RGBA_SHIFT = exports.RGBA_SHIFT = 4;
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(7);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FaceMess = __webpack_require__(3);

var _FaceMess2 = _interopRequireDefault(_FaceMess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let canvas = FaceMess.createWithImage('canvas', 'images/cham11ng.jpg');

var faceMess = _FaceMess2.default.createById('canvas');

faceMess.canvas.addEventListener('click', function () {
  faceMess.triggerWebCam();
});

document.getElementById('capture').addEventListener('click', function () {
  faceMess.capture();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebCam = __webpack_require__(4);

var _WebCam2 = _interopRequireDefault(_WebCam);

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _Histogram = __webpack_require__(5);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _ImageProcessor = __webpack_require__(6);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FaceMess = function () {
  function FaceMess(canvas) {
    _classCallCheck(this, FaceMess);

    this.canvas = canvas;
    this.webcam = new _WebCam2.default();
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.grayScaleContext = this.grayScaleCanvas.getContext('2d');
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedContext = this.capturedCanvas.getContext('2d');
  }

  _createClass(FaceMess, [{
    key: "triggerWebCam",
    value: function triggerWebCam() {
      this.webcam.isActive ? this.webcam.stop() : this.webcam.start(this.context);
    }
  }, {
    key: "generateHistogramValue",
    value: function generateHistogramValue() {
      console.log(_Histogram2.default.uniformBinaryPixels(_ImageProcessor2.default.getImageData(this.capturedCanvas)));
    }
  }, {
    key: "capture",
    value: function capture() {
      this.capturedContext.drawImage(this.canvas, 0, 0, utils.WIDTH, utils.HEIGHT);
      this.extractFeature();
      this.generateHistogramValue();
    }
  }, {
    key: "browseImage",
    value: function browseImage(src) {
      var _this = this;

      var image = new Image();
      image.src = src;
      image.onload = function () {
        _this.capturedContext.drawImage(image, 0, 0, _this.height, _this.width);
        _this.extractFeature();
        // this.generateHistogramValue();
      };
    }
  }, {
    key: "extractFeature",
    value: function extractFeature() {
      var imageData = _ImageProcessor2.default.getImageData(this.capturedCanvas);
      this.grayScaleContext.drawImage(this.capturedCanvas, 0, 0);
      var grayScaleData = _ImageProcessor2.default.rgbCanvas2grey(this.grayScaleCanvas);
      var data = imageData.data;

      for (var y = 1; y < this.height - 1; y++) {
        for (var x = 1, index = 0; x < this.width - 1; x++, index += 4) {
          var sum = 0;
          var neighbourValue = [];
          var centerPosition = utils.get1DPosition(this.width, x, y) * utils.RGBA_SHIFT;
          var centerValue = grayScaleData[centerPosition];
          neighbourValue[7] = grayScaleData[utils.get1DPosition(this.width, x - 1, y - 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[6] = grayScaleData[utils.get1DPosition(this.width, x, y - 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[5] = grayScaleData[utils.get1DPosition(this.width, x + 1, y - 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[4] = grayScaleData[utils.get1DPosition(this.width, x + 1, y) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[3] = grayScaleData[utils.get1DPosition(this.width, x + 1, y + 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[2] = grayScaleData[utils.get1DPosition(this.width, x, y + 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[1] = grayScaleData[utils.get1DPosition(this.width, x - 1, y + 1) * utils.RGBA_SHIFT] - centerValue;
          neighbourValue[0] = grayScaleData[utils.get1DPosition(this.width, x - 1, y) * utils.RGBA_SHIFT] - centerValue;

          for (var k = 0, totalNeighbour = neighbourValue.length; k < totalNeighbour; k++) {
            sum += utils.unitStep(neighbourValue[k]) * Math.pow(2, k);
          }
          data[centerPosition] = data[centerPosition + 1] = data[centerPosition + 2] = sum;
        }
      }

      this.capturedContext.putImageData(imageData, 0, 0);
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
/* 4 */
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
    this.isActive = false;
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
      this.isActive = true;
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearTimeout(this.cameraTimeout);
      this.stream.getTracks()[0].stop();
      this.isActive = false;
    }
  }]);

  return WebCam;
}();

exports.default = WebCam;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Histogram = function () {
  function Histogram() {
    _classCallCheck(this, Histogram);
  }

  _createClass(Histogram, null, [{
    key: 'uniformBinaryPixels',
    value: function uniformBinaryPixels(imageData) {
      var histogramData = [],
          data = imageData.data;
      for (var i = 0, uniformLength = utils.UNIFORM_BINARY_PATTERN.length; i < uniformLength; i++) {
        var count = 0;
        for (var j = 0, dataLength = data.length; j < dataLength; j += 4) {
          if (utils.UNIFORM_BINARY_PATTERN[i] === data[j]) {
            count++;
          }
        }
        histogramData.push({
          'bin': utils.UNIFORM_BINARY_PATTERN[i],
          'frequency': count
        });
      }

      return histogramData;
    }
  }]);

  return Histogram;
}();

exports.default = Histogram;

/***/ }),
/* 6 */
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
    value: function rgb2gray(data) {
      for (var i = 0, dataLength = data.length; i < dataLength; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
      }

      return data;
    }
  }, {
    key: "rgbCanvas2grey",
    value: function rgbCanvas2grey(canvas) {
      var imageData = this.getImageData(canvas);
      return this.rgb2gray(imageData.data);
    }
  }, {
    key: "getPixelValue",
    value: function getPixelValue(context, x, y) {
      var pixel = context.getImageData(x, y, 1, 1);

      return pixel.data[0];
    }
  }]);

  return ImageProcessor;
}();

exports.default = ImageProcessor;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map