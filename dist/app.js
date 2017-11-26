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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
exports.valuesArray = valuesArray;
var FACE_WIDTH = exports.FACE_WIDTH = 180;
var FACE_HEIGHT = exports.FACE_HEIGHT = 180;
var CAMERA_WIDTH = exports.CAMERA_WIDTH = 640;
var CAMERA_HEIGHT = exports.CAMERA_HEIGHT = 480;
var CANVAS_WIDTH = exports.CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = exports.CANVAS_HEIGHT = 480;
var CAPTURE_HEIGHT = exports.CAPTURE_HEIGHT = 180;
var CAPTURE_WIDTH = exports.CAPTURE_WIDTH = 180;
var FACE_FRAME = exports.FACE_FRAME = [(CANVAS_WIDTH - FACE_WIDTH) / 2, (CANVAS_HEIGHT - FACE_HEIGHT) / 2, FACE_WIDTH, FACE_HEIGHT];

var POINT_8 = exports.POINT_8 = 8;
var RADIUS_1 = exports.RADIUS_1 = 1;
var RGBA_SHIFT = exports.RGBA_SHIFT = 4;
var NEIGHBOUR_SHIFT = exports.NEIGHBOUR_SHIFT = 3;
var UNIFORM_BINARY_PATTERN = exports.UNIFORM_BINARY_PATTERN = ['non', 0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];

var CHI_RECOGNITION_DOF = exports.CHI_RECOGNITION_DOF = 0.02;
var CHI_PREDICTION_DOF = exports.CHI_PREDICTION_DOF = 0.1;

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

function valuesArray(arrayOfObjects, key) {
  var values = [];
  for (var i = 0, total = arrayOfObjects.length; i < total; i++) {
    if (arrayOfObjects[i].hasOwnProperty(key)) {
      values.push(arrayOfObjects[i][key]);
    }
  }
  return values;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _Histogram = __webpack_require__(2);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _Data = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageProcessor = function () {
  function ImageProcessor() {
    _classCallCheck(this, ImageProcessor);
  }

  _createClass(ImageProcessor, null, [{
    key: "getImageData",
    value: function getImageData(canvas) {
      var _canvas$getContext;

      for (var _len = arguments.length, parameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }

      return parameters.length === 4 ? (_canvas$getContext = canvas.getContext("2d")).getImageData.apply(_canvas$getContext, parameters) : canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
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
  }, {
    key: "extractFeature",
    value: function extractFeature(canvas) {
      var context = canvas.getContext('2d');
      var imageData = this.getImageData(canvas);
      var data = imageData.data;
      var backupData = imageData.data.slice();

      for (var y = 1; y < canvas.height - 1; y++) {
        for (var x = 1, index = 0; x < canvas.width - 1; x++, index += 4) {
          var sum = 0;
          var neighbourValue = [];
          var centerPosition = utils.get1DPosition(canvas.width, x, y) * utils.RGBA_SHIFT;
          var centerValue = this.getGrayScaleValue(backupData, centerPosition);
          neighbourValue[7] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y - 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[6] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y - 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[5] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y - 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[4] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[3] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y + 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[2] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y + 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[1] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y + 1) * utils.RGBA_SHIFT) - centerValue;
          neighbourValue[0] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y) * utils.RGBA_SHIFT) - centerValue;

          for (var k = 0, totalNeighbour = neighbourValue.length; k < totalNeighbour; k++) {
            sum += utils.unitStep(neighbourValue[k]) * Math.pow(2, k);
          }
          data[centerPosition] = data[centerPosition + 1] = data[centerPosition + 2] = sum;
        }
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.putImageData(imageData, 0, 0);
    }
  }, {
    key: "getGrayScaleValue",
    value: function getGrayScaleValue(data, position) {
      return data[position] * 0.3 + data[position + 1] * 0.59 + data[position + 2] * 0.11;
    }
  }, {
    key: "evaluateRecognition",
    value: function evaluateRecognition(canvas) {
      this.extractFeature(canvas);
      var observedHistogram = _Histogram2.default.uniformBinary(ImageProcessor.getImageData(canvas));
      var maxMatch = {
        value: 1,
        name: ''
      };
      for (var key in _Data.FACE_DATA) {
        if (_Data.FACE_DATA.hasOwnProperty(key)) {
          var difference = _Histogram2.default.compareHistogram(utils.valuesArray(observedHistogram, 'normalized'), _Data.FACE_DATA[key]);
          if (difference < maxMatch.value) {
            maxMatch.name = key;
            maxMatch.value = difference;
          }
        }
      }

      if (maxMatch.value < utils.CHI_RECOGNITION_DOF) {
        this.displayOutput(maxMatch);
      }
    }
  }, {
    key: "displayOutput",
    value: function displayOutput(maxMatch) {
      console.log(maxMatch.name, maxMatch.value);
      /*
      let context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = 'bold 18pt Calibri';
      context.textAlign = 'center';
      context.fillText("You're", canvas.width / 2, canvas.height / 2 - 20);
      context.fillText(name, canvas.width / 2, canvas.height / 2 + 20);
      */
    }
  }]);

  return ImageProcessor;
}();

exports.default = ImageProcessor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Data = __webpack_require__(3);

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _ImageProcessor = __webpack_require__(1);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Histogram = function () {
  function Histogram() {
    _classCallCheck(this, Histogram);
  }

  _createClass(Histogram, null, [{
    key: "init",
    value: function init(bins) {
      var histogram = [];
      for (var i = 0, binLength = bins.length; i < binLength; i++) {
        histogram.push({
          'bin': bins[i],
          'frequency': 0,
          'normalized': 0
        });
      }
      return histogram;
    }
  }, {
    key: "uniformBinary",
    value: function uniformBinary(imageData) {
      var data = imageData.data;
      var histogram = this.init(utils.UNIFORM_BINARY_PATTERN);
      for (var i = 0, dataLength = data.length; i < dataLength; i += 4) {
        var isNotUniform = true;
        for (var j = 1, uniformLength = utils.UNIFORM_BINARY_PATTERN.length; j < uniformLength; j++) {
          if (utils.UNIFORM_BINARY_PATTERN[j] === data[i]) {
            this.incrementHistogramFrequency(histogram, j, dataLength);
            isNotUniform = false;
            break;
          }
        }
        if (isNotUniform) {
          this.incrementHistogramFrequency(histogram, 0, dataLength);
        }
      }
      // console.log(this.isNormalized(histogram, data.length));

      return histogram;
    }
  }, {
    key: "incrementHistogramFrequency",
    value: function incrementHistogramFrequency(histogram, index, dataLength) {
      histogram[index].frequency++;
      histogram[index].normalized = histogram[index].frequency / (dataLength / 4);
    }
  }, {
    key: "compareHistogram",
    value: function compareHistogram(firstHistogram, secondHistogram) {
      return this.chiSquare(firstHistogram, secondHistogram);
    }
  }, {
    key: "chiSquare",
    value: function chiSquare(firstHistogram, secondHistogram) {
      var total = firstHistogram.length;
      var sum = 0;
      for (var i = 0; i < total; i++) {
        sum += Math.pow(firstHistogram[i] - secondHistogram[i], 2) / secondHistogram[i];
      }

      return sum;
    }
  }, {
    key: "isNormalized",
    value: function isNormalized(histogram, dataLength) {
      var totalFrequencies = 0,
          totalNormalizedValue = 0;
      for (var k = 1; k < histogram.length; k++) {
        totalFrequencies += histogram[k].frequency;
        totalNormalizedValue += histogram[k].normalized;
      }
      return totalFrequencies === dataLength / 4 && Math.round(totalNormalizedValue) === 1;
    }
  }, {
    key: "generateHistogramValue",
    value: function generateHistogramValue(canvas) {
      console.log(this.compareHistogram(utils.valuesArray(this.uniformBinary(_ImageProcessor2.default.getImageData(canvas)), 'normalized'), _Data.FACE_DATA['Sagar Chamling']));
      console.log(utils.valuesArray(this.uniformBinary(_ImageProcessor2.default.getImageData(canvas)), 'normalized'));
    }
  }]);

  return Histogram;
}();

exports.default = Histogram;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FACE_DATA = exports.FACE_DATA = {
  "Sagar Chamling": [0.12361111111111112, 0.019567901234567902, 0.006975308641975308, 0.004598765432098765, 0.010339506172839507, 0.004598765432098765, 0.008271604938271605, 0.01888888888888889, 0.004382716049382716, 0.008580246913580248, 0.022376543209876542, 0.03382716049382716, 0.0071913580246913585, 0.008703703703703703, 0.020771604938271605, 0.03873456790123457, 0.026419753086419754, 0.004135802469135802, 0.010802469135802469, 0.02259259259259259, 0.03175925925925926, 0.020030864197530866, 0.009259259259259259, 0.004567901234567902, 0.0075, 0.024537037037037038, 0.03212962962962963, 0.022098765432098766, 0.010401234567901235, 0.004691358024691358, 0.004166666666666667, 0.010956790123456791, 0.020401234567901234, 0.02574074074074074, 0.01734567901234568, 0.009969135802469135, 0.0038580246913580245, 0.007561728395061728, 0.023271604938271604, 0.028333333333333332, 0.02234567901234568, 0.010308641975308641, 0.005216049382716049, 0.02104938271604938, 0.03453703703703704, 0.019012345679012346, 0.009814814814814814, 0.006234567901234568, 0.034228395061728395, 0.02212962962962963, 0.00867283950617284, 0.005061728395061729, 0.02058641975308642, 0.00867283950617284, 0.003765432098765432, 0.01117283950617284, 0.005061728395061729, 0.007006172839506173, 0.02117283950617284]
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(8);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FaceMess = __webpack_require__(6);

var _FaceMess2 = _interopRequireDefault(_FaceMess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_FaceMess2.default.createWithImage('camera', 'images/lenna.png');

var faceMess = _FaceMess2.default.createById('camera');
var webCamIcon = document.querySelector('#webCam .fa');

document.getElementById('webCam').addEventListener('click', function () {
  if (faceMess.webcam.isActive) {
    faceMess.stopWebCam();
    webCamIcon.setAttribute('class', 'fa fa-play fa-2x');
  } else {
    faceMess.startWebCam();
    webCamIcon.setAttribute('class', 'fa fa-pause fa-2x');
  }
});

document.getElementById('capture').addEventListener('click', function () {
  faceMess.capture();
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebCam = __webpack_require__(7);

var _WebCam2 = _interopRequireDefault(_WebCam);

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _ImageProcessor = __webpack_require__(1);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FaceMess = function () {
  function FaceMess(canvas) {
    _classCallCheck(this, FaceMess);

    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedCanvas.width = utils.CAPTURE_WIDTH;
    this.capturedCanvas.height = utils.CAPTURE_HEIGHT;
    this.webcam = new _WebCam2.default(this.canvas, this.capturedCanvas);
  }

  _createClass(FaceMess, [{
    key: "startWebCam",
    value: function startWebCam() {
      this.webcam.start();
    }
  }, {
    key: "stopWebCam",
    value: function stopWebCam() {
      this.webcam.stop();
    }
  }, {
    key: "capture",
    value: function capture() {
      this.webcam.capture();
      this.webcam.stop();
    }
  }, {
    key: "browseImage",
    value: function browseImage(src) {
      var _this = this;

      var image = new Image();
      image.src = src;
      image.onload = function () {
        var scale = utils.CAPTURE_WIDTH / image.width;
        var context = _this.capturedCanvas.getContext('2d');
        context.clearRect(0, 0, utils.CAPTURE_WIDTH, utils.CAPTURE_HEIGHT);
        context.drawImage(image, 0, (utils.CAPTURE_HEIGHT - image.height * scale) / 2, utils.CAPTURE_WIDTH, image.height * scale);
        _ImageProcessor2.default.extractFeature(_this.capturedCanvas);
      };
    }
  }, {
    key: "handleLocalFile",
    value: function handleLocalFile(file) {
      if (file.type.match(/image.*/)) {
        this.browseImage(window.URL.createObjectURL(file));
      }
    }
  }], [{
    key: "createById",
    value: function createById(id) {
      var canvas = document.getElementById(id);
      canvas.height = utils.CANVAS_HEIGHT;
      canvas.width = utils.CANVAS_WIDTH;
      return new FaceMess(canvas);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _ImageProcessor = __webpack_require__(1);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

var _Histogram = __webpack_require__(2);

var _Histogram2 = _interopRequireDefault(_Histogram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebCam = function () {
  function WebCam(canvas, capturedCanvas) {
    _classCallCheck(this, WebCam);

    this.scaleV = 1;
    this.scaleH = -1;
    this.stream = '';
    this.isActive = false;
    this.cameraTimeout = '';
    this.video = document.createElement('video');

    this.canvas = canvas;
    this.capturedCanvas = capturedCanvas;
    this.context = this.canvas.getContext("2d");
    this.capturedContext = this.capturedCanvas.getContext("2d");
  }

  _createClass(WebCam, [{
    key: "start",
    value: function start() {
      var _this = this;

      navigator.getUserMedia({
        video: true,
        audio: false
      }, function (stream) {
        _this.stream = stream;
        _this.video.src = window.URL.createObjectURL(stream);
        draw();
      }, function (error) {
        console.log(error);
      });
      var draw = function draw() {
        _this.flipHorizontal();
        _this.drawRecognitionFrame();
        _this.capturedContext.drawImage(_this.canvas, (utils.CANVAS_WIDTH - utils.FACE_WIDTH) / 2, (utils.CANVAS_HEIGHT - utils.FACE_HEIGHT) / 2, utils.FACE_WIDTH, utils.FACE_HEIGHT, 0, 0, _this.capturedCanvas.width, _this.capturedCanvas.height);
        _ImageProcessor2.default.evaluateRecognition(_this.capturedCanvas);

        _this.cameraTimeout = setTimeout(draw, 100, _this.video, _this.context);
      };
      this.isActive = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this.cameraTimeout);
      this.stream.getTracks()[0].stop();
      this.isActive = false;
    }
  }, {
    key: "capture",
    value: function capture() {
      var _capturedContext;

      this.capturedContext.clearRect(0, 0, this.capturedCanvas.width, this.capturedCanvas.height);
      (_capturedContext = this.capturedContext).drawImage.apply(_capturedContext, [this.canvas].concat(_toConsumableArray(utils.FACE_FRAME), [0, 0, this.capturedCanvas.width, this.capturedCanvas.height]));
      _ImageProcessor2.default.evaluateRecognition(this.capturedCanvas);
      _Histogram2.default.generateHistogramValue(this.capturedCanvas);
    }

    /**
     * By default web cam video is opposite.
     */

  }, {
    key: "flipHorizontal",
    value: function flipHorizontal() {
      var positionX = (this.scaleH === 1 ? 0 : utils.CANVAS_WIDTH * -1) + (utils.CANVAS_WIDTH - utils.CAMERA_WIDTH) / 2;
      var positionY = (this.scaleV === 1 ? 0 : utils.CANVAS_HEIGHT * -1) + (utils.CANVAS_HEIGHT - utils.CAMERA_HEIGHT) / 2;
      this.context.save();
      this.context.scale(this.scaleH, this.scaleV);
      this.context.drawImage(this.video, positionX, positionY);
      this.context.restore();
    }

    /**
     * Recognition frame is region where core feature extraction and recognition works.
     */

  }, {
    key: "drawRecognitionFrame",
    value: function drawRecognitionFrame() {
      this.context.beginPath();
      this.context.moveTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1]);
      this.context.lineTo(utils.FACE_FRAME[0] + utils.FACE_FRAME[2], utils.FACE_FRAME[1]);
      this.context.lineTo(utils.FACE_FRAME[0] + utils.FACE_FRAME[2], utils.FACE_FRAME[1] + utils.FACE_FRAME[3]);
      this.context.lineTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1] + utils.FACE_FRAME[3]);
      this.context.lineTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1]);
      this.context.stroke();
      this.context.closePath();
    }
  }]);

  return WebCam;
}();

exports.default = WebCam;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map