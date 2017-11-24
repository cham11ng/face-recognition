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
var CAMERA_WIDTH = exports.CAMERA_WIDTH = 640;
var CAMERA_HEIGHT = exports.CAMERA_HEIGHT = 180;
var CANVAS_WIDTH = exports.CANVAS_WIDTH = 180;
var CANVAS_HEIGHT = exports.CANVAS_HEIGHT = 180;
var FACE_WIDTH = exports.FACE_WIDTH = 180;
var FACE_HEIGHT = exports.FACE_HEIGHT = 180;
var FACE_FRAME = exports.FACE_FRAME = [(CANVAS_WIDTH - FACE_WIDTH) / 2, (CANVAS_HEIGHT - FACE_HEIGHT) / 2, FACE_WIDTH, FACE_HEIGHT];
var NEIGHBOUR_SHIFT = exports.NEIGHBOUR_SHIFT = 3;
var RGBA_SHIFT = exports.RGBA_SHIFT = 4;
var UNIFORM_BINARY_PATTERN = exports.UNIFORM_BINARY_PATTERN = ['non', 0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];

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

var CHI_RECOGNITION_THRESHOLD = exports.CHI_RECOGNITION_THRESHOLD = 0.02;
var TRAINED_DATA = exports.TRAINED_DATA = {
  "Sagar Chamling": [{ bin: "non", frequency: 3740, normalized: 0.1154320987654321 }, { bin: 0, frequency: 386, normalized: 0.01191358024691358 }, { bin: 1, frequency: 178, normalized: 0.005493827160493827 }, { bin: 2, frequency: 58, normalized: 0.0017901234567901235 }, { bin: 3, frequency: 223, normalized: 0.006882716049382716 }, { bin: 4, frequency: 133, normalized: 0.004104938271604938 }, { bin: 6, frequency: 185, normalized: 0.005709876543209876 }, { bin: 7, frequency: 693, normalized: 0.021388888888888888 }, { bin: 8, frequency: 65, normalized: 0.002006172839506173 }, { bin: 12, frequency: 256, normalized: 0.007901234567901235 }, { bin: 14, frequency: 533, normalized: 0.016450617283950617 }, { bin: 15, frequency: 1006, normalized: 0.031049382716049383 }, { bin: 16, frequency: 230, normalized: 0.0070987654320987656 }, { bin: 24, frequency: 314, normalized: 0.009691358024691357 }, { bin: 28, frequency: 766, normalized: 0.023641975308641976 }, { bin: 30, frequency: 1061, normalized: 0.032746913580246916 }, { bin: 31, frequency: 1028, normalized: 0.03172839506172839 }, { bin: 32, frequency: 67, normalized: 0.002067901234567901 }, { bin: 48, frequency: 312, normalized: 0.00962962962962963 }, { bin: 56, frequency: 544, normalized: 0.016790123456790124 }, { bin: 60, frequency: 919, normalized: 0.028364197530864197 }, { bin: 62, frequency: 711, normalized: 0.021944444444444444 }, { bin: 63, frequency: 417, normalized: 0.01287037037037037 }, { bin: 64, frequency: 117, normalized: 0.003611111111111111 }, { bin: 96, frequency: 215, normalized: 0.006635802469135803 }, { bin: 112, frequency: 975, normalized: 0.03009259259259259 }, { bin: 120, frequency: 1114, normalized: 0.034382716049382714 }, { bin: 124, frequency: 931, normalized: 0.02873456790123457 }, { bin: 126, frequency: 488, normalized: 0.015061728395061728 }, { bin: 127, frequency: 290, normalized: 0.008950617283950617 }, { bin: 128, frequency: 47, normalized: 0.0014506172839506173 }, { bin: 129, frequency: 222, normalized: 0.006851851851851852 }, { bin: 131, frequency: 386, normalized: 0.01191358024691358 }, { bin: 135, frequency: 831, normalized: 0.02564814814814815 }, { bin: 143, frequency: 669, normalized: 0.020648148148148148 }, { bin: 159, frequency: 369, normalized: 0.01138888888888889 }, { bin: 191, frequency: 133, normalized: 0.004104938271604938 }, { bin: 192, frequency: 177, normalized: 0.005462962962962963 }, { bin: 193, frequency: 635, normalized: 0.019598765432098767 }, { bin: 195, frequency: 913, normalized: 0.028179012345679013 }, { bin: 199, frequency: 713, normalized: 0.022006172839506174 }, { bin: 207, frequency: 391, normalized: 0.0120679012345679 }, { bin: 223, frequency: 244, normalized: 0.007530864197530864 }, { bin: 224, frequency: 445, normalized: 0.013734567901234567 }, { bin: 225, frequency: 934, normalized: 0.02882716049382716 }, { bin: 227, frequency: 552, normalized: 0.017037037037037038 }, { bin: 231, frequency: 365, normalized: 0.011265432098765432 }, { bin: 239, frequency: 197, normalized: 0.006080246913580247 }, { bin: 240, frequency: 1206, normalized: 0.03722222222222222 }, { bin: 241, frequency: 822, normalized: 0.02537037037037037 }, { bin: 243, frequency: 304, normalized: 0.009382716049382716 }, { bin: 247, frequency: 222, normalized: 0.006851851851851852 }, { bin: 248, frequency: 761, normalized: 0.023487654320987653 }, { bin: 249, frequency: 395, normalized: 0.012191358024691358 }, { bin: 251, frequency: 115, normalized: 0.0035493827160493828 }, { bin: 252, frequency: 540, normalized: 0.016666666666666666 }, { bin: 253, frequency: 291, normalized: 0.008981481481481481 }, { bin: 254, frequency: 257, normalized: 0.007932098765432098 }, { bin: 255, frequency: 1309, normalized: 0.040401234567901234 }],
  "Ayush Ghimire": [{ bin: "non", frequency: 3008, normalized: 0.09283950617283951 }, { bin: 0, frequency: 276, normalized: 0.008518518518518519 }, { bin: 1, frequency: 129, normalized: 0.003981481481481482 }, { bin: 2, frequency: 44, normalized: 0.0013580246913580246 }, { bin: 3, frequency: 171, normalized: 0.005277777777777778 }, { bin: 4, frequency: 85, normalized: 0.002623456790123457 }, { bin: 6, frequency: 183, normalized: 0.005648148148148148 }, { bin: 7, frequency: 719, normalized: 0.022191358024691358 }, { bin: 8, frequency: 64, normalized: 0.0019753086419753087 }, { bin: 12, frequency: 204, normalized: 0.006296296296296296 }, { bin: 14, frequency: 512, normalized: 0.01580246913580247 }, { bin: 15, frequency: 1108, normalized: 0.03419753086419753 }, { bin: 16, frequency: 164, normalized: 0.005061728395061729 }, { bin: 24, frequency: 215, normalized: 0.006635802469135803 }, { bin: 28, frequency: 725, normalized: 0.022376543209876542 }, { bin: 30, frequency: 998, normalized: 0.03080246913580247 }, { bin: 31, frequency: 906, normalized: 0.027962962962962964 }, { bin: 32, frequency: 71, normalized: 0.002191358024691358 }, { bin: 48, frequency: 247, normalized: 0.007623456790123457 }, { bin: 56, frequency: 492, normalized: 0.015185185185185185 }, { bin: 60, frequency: 1032, normalized: 0.03185185185185185 }, { bin: 62, frequency: 629, normalized: 0.01941358024691358 }, { bin: 63, frequency: 375, normalized: 0.011574074074074073 }, { bin: 64, frequency: 113, normalized: 0.003487654320987654 }, { bin: 96, frequency: 234, normalized: 0.007222222222222222 }, { bin: 112, frequency: 964, normalized: 0.029753086419753088 }, { bin: 120, frequency: 1052, normalized: 0.032469135802469136 }, { bin: 124, frequency: 825, normalized: 0.02546296296296296 }, { bin: 126, frequency: 374, normalized: 0.01154320987654321 }, { bin: 127, frequency: 211, normalized: 0.006512345679012346 }, { bin: 128, frequency: 64, normalized: 0.0019753086419753087 }, { bin: 129, frequency: 242, normalized: 0.007469135802469135 }, { bin: 131, frequency: 469, normalized: 0.014475308641975309 }, { bin: 135, frequency: 1078, normalized: 0.0332716049382716 }, { bin: 143, frequency: 637, normalized: 0.019660493827160494 }, { bin: 159, frequency: 352, normalized: 0.010864197530864197 }, { bin: 191, frequency: 126, normalized: 0.0038888888888888888 }, { bin: 192, frequency: 217, normalized: 0.0066975308641975305 }, { bin: 193, frequency: 921, normalized: 0.028425925925925927 }, { bin: 195, frequency: 1045, normalized: 0.03225308641975309 }, { bin: 199, frequency: 832, normalized: 0.02567901234567901 }, { bin: 207, frequency: 375, normalized: 0.011574074074074073 }, { bin: 223, frequency: 168, normalized: 0.005185185185185185 }, { bin: 224, frequency: 639, normalized: 0.01972222222222222 }, { bin: 225, frequency: 1499, normalized: 0.046265432098765435 }, { bin: 227, frequency: 815, normalized: 0.02515432098765432 }, { bin: 231, frequency: 366, normalized: 0.011296296296296296 }, { bin: 239, frequency: 153, normalized: 0.004722222222222222 }, { bin: 240, frequency: 1455, normalized: 0.04490740740740741 }, { bin: 241, frequency: 1054, normalized: 0.032530864197530866 }, { bin: 243, frequency: 365, normalized: 0.011265432098765432 }, { bin: 247, frequency: 250, normalized: 0.007716049382716049 }, { bin: 248, frequency: 811, normalized: 0.025030864197530863 }, { bin: 249, frequency: 396, normalized: 0.012222222222222223 }, { bin: 251, frequency: 113, normalized: 0.003487654320987654 }, { bin: 252, frequency: 395, normalized: 0.012191358024691358 }, { bin: 253, frequency: 240, normalized: 0.007407407407407408 }, { bin: 254, frequency: 177, normalized: 0.005462962962962963 }, { bin: 255, frequency: 1016, normalized: 0.031358024691358025 }],
  "Safal Pandey": [{ bin: "non", frequency: 2840, normalized: 0.08765432098765433 }, { bin: 0, frequency: 222, normalized: 0.006851851851851852 }, { bin: 1, frequency: 132, normalized: 0.004074074074074074 }, { bin: 2, frequency: 39, normalized: 0.0012037037037037038 }, { bin: 3, frequency: 233, normalized: 0.0071913580246913585 }, { bin: 4, frequency: 78, normalized: 0.0024074074074074076 }, { bin: 6, frequency: 167, normalized: 0.005154320987654321 }, { bin: 7, frequency: 758, normalized: 0.02339506172839506 }, { bin: 8, frequency: 38, normalized: 0.0011728395061728395 }, { bin: 12, frequency: 160, normalized: 0.0049382716049382715 }, { bin: 14, frequency: 433, normalized: 0.013364197530864198 }, { bin: 15, frequency: 1081, normalized: 0.0333641975308642 }, { bin: 16, frequency: 124, normalized: 0.0038271604938271606 }, { bin: 24, frequency: 175, normalized: 0.005401234567901234 }, { bin: 28, frequency: 650, normalized: 0.020061728395061727 }, { bin: 30, frequency: 973, normalized: 0.030030864197530864 }, { bin: 31, frequency: 963, normalized: 0.029722222222222223 }, { bin: 32, frequency: 49, normalized: 0.0015123456790123457 }, { bin: 48, frequency: 207, normalized: 0.006388888888888889 }, { bin: 56, frequency: 483, normalized: 0.014907407407407407 }, { bin: 60, frequency: 1080, normalized: 0.03333333333333333 }, { bin: 62, frequency: 581, normalized: 0.0179320987654321 }, { bin: 63, frequency: 314, normalized: 0.009691358024691357 }, { bin: 64, frequency: 85, normalized: 0.002623456790123457 }, { bin: 96, frequency: 150, normalized: 0.004629629629629629 }, { bin: 112, frequency: 676, normalized: 0.020864197530864197 }, { bin: 120, frequency: 1176, normalized: 0.0362962962962963 }, { bin: 124, frequency: 882, normalized: 0.02722222222222222 }, { bin: 126, frequency: 331, normalized: 0.01021604938271605 }, { bin: 127, frequency: 215, normalized: 0.006635802469135803 }, { bin: 128, frequency: 47, normalized: 0.0014506172839506173 }, { bin: 129, frequency: 198, normalized: 0.006111111111111111 }, { bin: 131, frequency: 655, normalized: 0.02021604938271605 }, { bin: 135, frequency: 1573, normalized: 0.04854938271604938 }, { bin: 143, frequency: 667, normalized: 0.02058641975308642 }, { bin: 159, frequency: 368, normalized: 0.011358024691358024 }, { bin: 191, frequency: 97, normalized: 0.002993827160493827 }, { bin: 192, frequency: 148, normalized: 0.004567901234567902 }, { bin: 193, frequency: 976, normalized: 0.030123456790123456 }, { bin: 195, frequency: 1451, normalized: 0.04478395061728395 }, { bin: 199, frequency: 1281, normalized: 0.03953703703703704 }, { bin: 207, frequency: 391, normalized: 0.0120679012345679 }, { bin: 223, frequency: 269, normalized: 0.00830246913580247 }, { bin: 224, frequency: 541, normalized: 0.01669753086419753 }, { bin: 225, frequency: 1422, normalized: 0.04388888888888889 }, { bin: 227, frequency: 780, normalized: 0.024074074074074074 }, { bin: 231, frequency: 380, normalized: 0.011728395061728396 }, { bin: 239, frequency: 156, normalized: 0.004814814814814815 }, { bin: 240, frequency: 1262, normalized: 0.03895061728395062 }, { bin: 241, frequency: 1069, normalized: 0.03299382716049383 }, { bin: 243, frequency: 365, normalized: 0.011265432098765432 }, { bin: 247, frequency: 211, normalized: 0.006512345679012346 }, { bin: 248, frequency: 589, normalized: 0.01817901234567901 }, { bin: 249, frequency: 289, normalized: 0.008919753086419752 }, { bin: 251, frequency: 101, normalized: 0.003117283950617284 }, { bin: 252, frequency: 321, normalized: 0.009907407407407408 }, { bin: 253, frequency: 211, normalized: 0.006512345679012346 }, { bin: 254, frequency: 144, normalized: 0.0044444444444444444 }, { bin: 255, frequency: 1143, normalized: 0.035277777777777776 }],
  "Ishan Dhakal": [{ bin: "non", frequency: 3516, normalized: 0.10851851851851851 }, { bin: 0, frequency: 305, normalized: 0.009413580246913581 }, { bin: 1, frequency: 142, normalized: 0.004382716049382716 }, { bin: 2, frequency: 58, normalized: 0.0017901234567901235 }, { bin: 3, frequency: 171, normalized: 0.005277777777777778 }, { bin: 4, frequency: 109, normalized: 0.0033641975308641974 }, { bin: 6, frequency: 185, normalized: 0.005709876543209876 }, { bin: 7, frequency: 745, normalized: 0.022993827160493828 }, { bin: 8, frequency: 68, normalized: 0.0020987654320987655 }, { bin: 12, frequency: 179, normalized: 0.0055246913580246915 }, { bin: 14, frequency: 477, normalized: 0.014722222222222222 }, { bin: 15, frequency: 1219, normalized: 0.03762345679012346 }, { bin: 16, frequency: 197, normalized: 0.006080246913580247 }, { bin: 24, frequency: 232, normalized: 0.007160493827160494 }, { bin: 28, frequency: 702, normalized: 0.021666666666666667 }, { bin: 30, frequency: 829, normalized: 0.02558641975308642 }, { bin: 31, frequency: 964, normalized: 0.029753086419753088 }, { bin: 32, frequency: 72, normalized: 0.0022222222222222222 }, { bin: 48, frequency: 269, normalized: 0.00830246913580247 }, { bin: 56, frequency: 568, normalized: 0.017530864197530863 }, { bin: 60, frequency: 1063, normalized: 0.03280864197530864 }, { bin: 62, frequency: 582, normalized: 0.017962962962962962 }, { bin: 63, frequency: 410, normalized: 0.012654320987654321 }, { bin: 64, frequency: 84, normalized: 0.0025925925925925925 }, { bin: 96, frequency: 199, normalized: 0.006141975308641976 }, { bin: 112, frequency: 1061, normalized: 0.032746913580246916 }, { bin: 120, frequency: 1071, normalized: 0.03305555555555555 }, { bin: 124, frequency: 961, normalized: 0.029660493827160492 }, { bin: 126, frequency: 407, normalized: 0.012561728395061728 }, { bin: 127, frequency: 303, normalized: 0.009351851851851853 }, { bin: 128, frequency: 50, normalized: 0.0015432098765432098 }, { bin: 129, frequency: 186, normalized: 0.005740740740740741 }, { bin: 131, frequency: 334, normalized: 0.010308641975308641 }, { bin: 135, frequency: 734, normalized: 0.02265432098765432 }, { bin: 143, frequency: 660, normalized: 0.020370370370370372 }, { bin: 159, frequency: 414, normalized: 0.012777777777777779 }, { bin: 191, frequency: 114, normalized: 0.0035185185185185185 }, { bin: 192, frequency: 186, normalized: 0.005740740740740741 }, { bin: 193, frequency: 697, normalized: 0.021512345679012345 }, { bin: 195, frequency: 711, normalized: 0.021944444444444444 }, { bin: 199, frequency: 645, normalized: 0.01990740740740741 }, { bin: 207, frequency: 337, normalized: 0.010401234567901235 }, { bin: 223, frequency: 266, normalized: 0.008209876543209876 }, { bin: 224, frequency: 547, normalized: 0.016882716049382716 }, { bin: 225, frequency: 995, normalized: 0.030709876543209877 }, { bin: 227, frequency: 559, normalized: 0.017253086419753087 }, { bin: 231, frequency: 328, normalized: 0.010123456790123457 }, { bin: 239, frequency: 156, normalized: 0.004814814814814815 }, { bin: 240, frequency: 1507, normalized: 0.04651234567901234 }, { bin: 241, frequency: 1179, normalized: 0.03638888888888889 }, { bin: 243, frequency: 369, normalized: 0.01138888888888889 }, { bin: 247, frequency: 274, normalized: 0.00845679012345679 }, { bin: 248, frequency: 798, normalized: 0.02462962962962963 }, { bin: 249, frequency: 477, normalized: 0.014722222222222222 }, { bin: 251, frequency: 123, normalized: 0.0037962962962962963 }, { bin: 252, frequency: 526, normalized: 0.016234567901234568 }, { bin: 253, frequency: 394, normalized: 0.012160493827160494 }, { bin: 254, frequency: 187, normalized: 0.005771604938271605 }, { bin: 255, frequency: 1499, normalized: 0.046265432098765435 }],
  "Prajwol Prajapati": [{ bin: "non", frequency: 2671, normalized: 0.08243827160493827 }, { bin: 0, frequency: 218, normalized: 0.006728395061728395 }, { bin: 1, frequency: 122, normalized: 0.003765432098765432 }, { bin: 2, frequency: 22, normalized: 0.0006790123456790123 }, { bin: 3, frequency: 146, normalized: 0.004506172839506173 }, { bin: 4, frequency: 65, normalized: 0.002006172839506173 }, { bin: 6, frequency: 141, normalized: 0.0043518518518518515 }, { bin: 7, frequency: 570, normalized: 0.017592592592592594 }, { bin: 8, frequency: 30, normalized: 0.000925925925925926 }, { bin: 12, frequency: 158, normalized: 0.004876543209876543 }, { bin: 14, frequency: 555, normalized: 0.01712962962962963 }, { bin: 15, frequency: 1096, normalized: 0.03382716049382716 }, { bin: 16, frequency: 121, normalized: 0.0037345679012345677 }, { bin: 24, frequency: 203, normalized: 0.006265432098765432 }, { bin: 28, frequency: 636, normalized: 0.01962962962962963 }, { bin: 30, frequency: 1337, normalized: 0.04126543209876543 }, { bin: 31, frequency: 1108, normalized: 0.03419753086419753 }, { bin: 32, frequency: 52, normalized: 0.0016049382716049382 }, { bin: 48, frequency: 242, normalized: 0.007469135802469135 }, { bin: 56, frequency: 628, normalized: 0.019382716049382714 }, { bin: 60, frequency: 1105, normalized: 0.03410493827160494 }, { bin: 62, frequency: 591, normalized: 0.01824074074074074 }, { bin: 63, frequency: 288, normalized: 0.008888888888888889 }, { bin: 64, frequency: 80, normalized: 0.0024691358024691358 }, { bin: 96, frequency: 156, normalized: 0.004814814814814815 }, { bin: 112, frequency: 982, normalized: 0.030308641975308644 }, { bin: 120, frequency: 1444, normalized: 0.0445679012345679 }, { bin: 124, frequency: 1181, normalized: 0.03645061728395062 }, { bin: 126, frequency: 373, normalized: 0.011512345679012345 }, { bin: 127, frequency: 213, normalized: 0.006574074074074074 }, { bin: 128, frequency: 44, normalized: 0.0013580246913580246 }, { bin: 129, frequency: 173, normalized: 0.0053395061728395065 }, { bin: 131, frequency: 502, normalized: 0.015493827160493827 }, { bin: 135, frequency: 1094, normalized: 0.03376543209876543 }, { bin: 143, frequency: 526, normalized: 0.016234567901234568 }, { bin: 159, frequency: 284, normalized: 0.008765432098765432 }, { bin: 191, frequency: 98, normalized: 0.0030246913580246914 }, { bin: 192, frequency: 109, normalized: 0.0033641975308641974 }, { bin: 193, frequency: 825, normalized: 0.02546296296296296 }, { bin: 195, frequency: 1186, normalized: 0.036604938271604937 }, { bin: 199, frequency: 1044, normalized: 0.03222222222222222 }, { bin: 207, frequency: 287, normalized: 0.008858024691358025 }, { bin: 223, frequency: 168, normalized: 0.005185185185185185 }, { bin: 224, frequency: 613, normalized: 0.018919753086419754 }, { bin: 225, frequency: 1497, normalized: 0.046203703703703705 }, { bin: 227, frequency: 699, normalized: 0.021574074074074075 }, { bin: 231, frequency: 394, normalized: 0.012160493827160494 }, { bin: 239, frequency: 136, normalized: 0.004197530864197531 }, { bin: 240, frequency: 1476, normalized: 0.04555555555555556 }, { bin: 241, frequency: 1135, normalized: 0.03503086419753086 }, { bin: 243, frequency: 308, normalized: 0.009506172839506173 }, { bin: 247, frequency: 209, normalized: 0.006450617283950617 }, { bin: 248, frequency: 830, normalized: 0.025617283950617284 }, { bin: 249, frequency: 362, normalized: 0.01117283950617284 }, { bin: 251, frequency: 91, normalized: 0.002808641975308642 }, { bin: 252, frequency: 474, normalized: 0.01462962962962963 }, { bin: 253, frequency: 244, normalized: 0.007530864197530864 }, { bin: 254, frequency: 148, normalized: 0.004567901234567902 }, { bin: 255, frequency: 910, normalized: 0.02808641975308642 }],
  "Sushan Raj Shakya": [{ bin: "non", frequency: 2932, normalized: 0.09049382716049383 }, { bin: 0, frequency: 285, normalized: 0.008796296296296297 }, { bin: 1, frequency: 139, normalized: 0.004290123456790124 }, { bin: 2, frequency: 51, normalized: 0.001574074074074074 }, { bin: 3, frequency: 262, normalized: 0.00808641975308642 }, { bin: 4, frequency: 106, normalized: 0.003271604938271605 }, { bin: 6, frequency: 170, normalized: 0.005246913580246914 }, { bin: 7, frequency: 779, normalized: 0.02404320987654321 }, { bin: 8, frequency: 40, normalized: 0.0012345679012345679 }, { bin: 12, frequency: 172, normalized: 0.005308641975308642 }, { bin: 14, frequency: 426, normalized: 0.013148148148148148 }, { bin: 15, frequency: 940, normalized: 0.029012345679012345 }, { bin: 16, frequency: 157, normalized: 0.004845679012345679 }, { bin: 24, frequency: 201, normalized: 0.0062037037037037035 }, { bin: 28, frequency: 635, normalized: 0.019598765432098767 }, { bin: 30, frequency: 896, normalized: 0.027654320987654323 }, { bin: 31, frequency: 844, normalized: 0.026049382716049382 }, { bin: 32, frequency: 41, normalized: 0.0012654320987654322 }, { bin: 48, frequency: 194, normalized: 0.005987654320987654 }, { bin: 56, frequency: 520, normalized: 0.016049382716049384 }, { bin: 60, frequency: 1393, normalized: 0.042993827160493825 }, { bin: 62, frequency: 637, normalized: 0.019660493827160494 }, { bin: 63, frequency: 348, normalized: 0.01074074074074074 }, { bin: 64, frequency: 108, normalized: 0.0033333333333333335 }, { bin: 96, frequency: 134, normalized: 0.004135802469135802 }, { bin: 112, frequency: 590, normalized: 0.018209876543209876 }, { bin: 120, frequency: 952, normalized: 0.029382716049382716 }, { bin: 124, frequency: 1020, normalized: 0.03148148148148148 }, { bin: 126, frequency: 403, normalized: 0.012438271604938272 }, { bin: 127, frequency: 207, normalized: 0.006388888888888889 }, { bin: 128, frequency: 43, normalized: 0.0013271604938271606 }, { bin: 129, frequency: 271, normalized: 0.008364197530864198 }, { bin: 131, frequency: 789, normalized: 0.02435185185185185 }, { bin: 135, frequency: 1602, normalized: 0.049444444444444444 }, { bin: 143, frequency: 749, normalized: 0.023117283950617285 }, { bin: 159, frequency: 361, normalized: 0.011141975308641975 }, { bin: 191, frequency: 111, normalized: 0.003425925925925926 }, { bin: 192, frequency: 160, normalized: 0.0049382716049382715 }, { bin: 193, frequency: 871, normalized: 0.026882716049382718 }, { bin: 195, frequency: 1767, normalized: 0.05453703703703704 }, { bin: 199, frequency: 1529, normalized: 0.047191358024691356 }, { bin: 207, frequency: 482, normalized: 0.014876543209876544 }, { bin: 223, frequency: 242, normalized: 0.007469135802469135 }, { bin: 224, frequency: 418, normalized: 0.012901234567901234 }, { bin: 225, frequency: 1308, normalized: 0.04037037037037037 }, { bin: 227, frequency: 771, normalized: 0.023796296296296298 }, { bin: 231, frequency: 408, normalized: 0.012592592592592593 }, { bin: 239, frequency: 174, normalized: 0.00537037037037037 }, { bin: 240, frequency: 917, normalized: 0.02830246913580247 }, { bin: 241, frequency: 818, normalized: 0.025246913580246912 }, { bin: 243, frequency: 321, normalized: 0.009907407407407408 }, { bin: 247, frequency: 235, normalized: 0.007253086419753086 }, { bin: 248, frequency: 496, normalized: 0.015308641975308642 }, { bin: 249, frequency: 290, normalized: 0.008950617283950617 }, { bin: 251, frequency: 114, normalized: 0.0035185185185185185 }, { bin: 252, frequency: 289, normalized: 0.008919753086419752 }, { bin: 253, frequency: 180, normalized: 0.005555555555555556 }, { bin: 254, frequency: 176, normalized: 0.005432098765432099 }, { bin: 255, frequency: 926, normalized: 0.028580246913580246 }],
  "Praval Sharma": [{ bin: "non", frequency: 2568, normalized: 0.07925925925925927 }, { bin: 0, frequency: 239, normalized: 0.007376543209876543 }, { bin: 1, frequency: 133, normalized: 0.004104938271604938 }, { bin: 2, frequency: 29, normalized: 0.0008950617283950618 }, { bin: 3, frequency: 215, normalized: 0.006635802469135803 }, { bin: 4, frequency: 87, normalized: 0.002685185185185185 }, { bin: 6, frequency: 176, normalized: 0.005432098765432099 }, { bin: 7, frequency: 790, normalized: 0.024382716049382715 }, { bin: 8, frequency: 29, normalized: 0.0008950617283950618 }, { bin: 12, frequency: 193, normalized: 0.00595679012345679 }, { bin: 14, frequency: 504, normalized: 0.015555555555555555 }, { bin: 15, frequency: 1280, normalized: 0.03950617283950617 }, { bin: 16, frequency: 123, normalized: 0.0037962962962962963 }, { bin: 24, frequency: 206, normalized: 0.006358024691358025 }, { bin: 28, frequency: 750, normalized: 0.023148148148148147 }, { bin: 30, frequency: 1112, normalized: 0.03432098765432099 }, { bin: 31, frequency: 1029, normalized: 0.03175925925925926 }, { bin: 32, frequency: 37, normalized: 0.0011419753086419754 }, { bin: 48, frequency: 178, normalized: 0.005493827160493827 }, { bin: 56, frequency: 491, normalized: 0.015154320987654322 }, { bin: 60, frequency: 1497, normalized: 0.046203703703703705 }, { bin: 62, frequency: 686, normalized: 0.02117283950617284 }, { bin: 63, frequency: 370, normalized: 0.011419753086419753 }, { bin: 64, frequency: 75, normalized: 0.0023148148148148147 }, { bin: 96, frequency: 181, normalized: 0.00558641975308642 }, { bin: 112, frequency: 667, normalized: 0.02058641975308642 }, { bin: 120, frequency: 958, normalized: 0.0295679012345679 }, { bin: 124, frequency: 795, normalized: 0.024537037037037038 }, { bin: 126, frequency: 381, normalized: 0.01175925925925926 }, { bin: 127, frequency: 191, normalized: 0.005895061728395061 }, { bin: 128, frequency: 46, normalized: 0.001419753086419753 }, { bin: 129, frequency: 222, normalized: 0.006851851851851852 }, { bin: 131, frequency: 694, normalized: 0.021419753086419753 }, { bin: 135, frequency: 1486, normalized: 0.045864197530864195 }, { bin: 143, frequency: 770, normalized: 0.023765432098765433 }, { bin: 159, frequency: 357, normalized: 0.011018518518518518 }, { bin: 191, frequency: 95, normalized: 0.002932098765432099 }, { bin: 192, frequency: 167, normalized: 0.005154320987654321 }, { bin: 193, frequency: 986, normalized: 0.030432098765432097 }, { bin: 195, frequency: 1712, normalized: 0.05283950617283951 }, { bin: 199, frequency: 1212, normalized: 0.03740740740740741 }, { bin: 207, frequency: 365, normalized: 0.011265432098765432 }, { bin: 223, frequency: 167, normalized: 0.005154320987654321 }, { bin: 224, frequency: 503, normalized: 0.015524691358024692 }, { bin: 225, frequency: 1411, normalized: 0.043549382716049384 }, { bin: 227, frequency: 848, normalized: 0.02617283950617284 }, { bin: 231, frequency: 382, normalized: 0.011790123456790123 }, { bin: 239, frequency: 156, normalized: 0.004814814814814815 }, { bin: 240, frequency: 1116, normalized: 0.034444444444444444 }, { bin: 241, frequency: 842, normalized: 0.025987654320987656 }, { bin: 243, frequency: 330, normalized: 0.010185185185185186 }, { bin: 247, frequency: 187, normalized: 0.005771604938271605 }, { bin: 248, frequency: 561, normalized: 0.017314814814814814 }, { bin: 249, frequency: 278, normalized: 0.008580246913580248 }, { bin: 251, frequency: 89, normalized: 0.0027469135802469136 }, { bin: 252, frequency: 282, normalized: 0.008703703703703703 }, { bin: 253, frequency: 181, normalized: 0.00558641975308642 }, { bin: 254, frequency: 124, normalized: 0.0038271604938271606 }, { bin: 255, frequency: 861, normalized: 0.026574074074074073 }]
};

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

var canvas = _FaceMess2.default.createWithImage('canvas', 'images/lenna.png');

var faceMess = _FaceMess2.default.createById('canvas');
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebCam = __webpack_require__(4);

var _WebCam2 = _interopRequireDefault(_WebCam);

var _Histogram = __webpack_require__(5);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _ImageProcessor = __webpack_require__(6);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

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
    this.nameCanvas = document.getElementById('name');
    this.nameContext = this.nameCanvas.getContext('2d');
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedContext = this.capturedCanvas.getContext('2d');
  }

  _createClass(FaceMess, [{
    key: "startWebCam",
    value: function startWebCam() {
      this.webcam.start(this.canvas, this.capturedCanvas, this.nameCanvas);
    }
  }, {
    key: "stopWebCam",
    value: function stopWebCam() {
      this.webcam.stop();
    }
  }, {
    key: "capture",
    value: function capture() {
      this.capturedContext.clearRect(0, 0, this.width, this.height);
      this.capturedContext.drawImage(this.canvas, 0, 0);
      _ImageProcessor2.default.extractFeature(this.capturedCanvas);
      this.generateHistogramValue();
    }
  }, {
    key: "generateHistogramValue",
    value: function generateHistogramValue() {
      console.log(_Histogram2.default.compareHistogram(_Histogram2.default.uniformBinary(_ImageProcessor2.default.getImageData(this.capturedCanvas)), utils.TRAINED_DATA['Sagar Chamling']));
      console.log(_Histogram2.default.uniformBinary(_ImageProcessor2.default.getImageData(this.capturedCanvas)));
    }
  }, {
    key: "browseImage",
    value: function browseImage(src) {
      var _this = this;

      var image = new Image();
      image.src = src;
      image.onload = function () {
        var scale = _this.width / image.width;
        _this.capturedContext.clearRect(0, 0, _this.width, _this.height);
        _this.capturedContext.drawImage(image, 0, (_this.height - image.height * scale) / 2, _this.width, image.height * scale);
        _ImageProcessor2.default.extractFeature(_this.capturedCanvas);
        // this.generateHistogramValue();
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

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _Histogram = __webpack_require__(5);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _ImageProcessor = __webpack_require__(6);

var _ImageProcessor2 = _interopRequireDefault(_ImageProcessor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebCam = function () {
  function WebCam() {
    _classCallCheck(this, WebCam);

    this.stream = '';
    this.isActive = false;
    this.cameraTimeout = '';
    this.scaleH = -1;
    this.scaleV = 1;
    this.video = document.createElement('video');
  }

  _createClass(WebCam, [{
    key: "start",
    value: function start(canvas, capturedCanvas, nameCanvas) {
      var _this = this;

      var context = canvas.getContext("2d");
      var capturedContext = capturedCanvas.getContext("2d");
      var positionX = (this.scaleH === 1 ? 0 : utils.CANVAS_WIDTH * -1) + (utils.CANVAS_WIDTH - utils.CAMERA_WIDTH) / 2;
      var positionY = (this.scaleV === 1 ? 0 : utils.CANVAS_HEIGHT * -1) + (utils.CANVAS_HEIGHT - utils.CAMERA_HEIGHT) / 2;
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
        context.save();
        context.scale(_this.scaleH, _this.scaleV);
        context.drawImage(video, positionX, positionY);
        context.restore();
        capturedContext.drawImage(canvas, 0, 0);
        _ImageProcessor2.default.extractFeature(capturedCanvas);
        var maxMatch = _Histogram2.default.compareFeature(capturedCanvas);

        if (maxMatch.value <= utils.CHI_RECOGNITION_THRESHOLD) {
          _ImageProcessor2.default.drawOutput(nameCanvas, maxMatch.name);
        }

        _this.cameraTimeout = setTimeout(draw, 100, video, context);
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

var _ImageProcessor = __webpack_require__(6);

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
        sum += Math.pow(firstHistogram[i].normalized - secondHistogram[i].normalized, 2) / secondHistogram[i].normalized;
      }

      return sum;
    }
  }, {
    key: "isNormalized",
    value: function isNormalized(histogram, dataLength) {
      var totalFrequencies = 0,
          totalNormalizedValue = 0;
      for (var k = 0; k < histogram.length; k++) {
        totalFrequencies += histogram[k].frequency;
        totalNormalizedValue += histogram[k].normalized;
      }
      return totalFrequencies === dataLength / 4 && Math.round(totalNormalizedValue) === 1;
    }
  }, {
    key: "compareFeature",
    value: function compareFeature(canvas) {
      var observedHistogram = Histogram.uniformBinary(_ImageProcessor2.default.getImageData(canvas));
      var maxMATCH = {
        value: 1,
        name: ''
      };
      for (var key in utils.TRAINED_DATA) {
        if (utils.TRAINED_DATA.hasOwnProperty(key)) {
          var difference = Histogram.compareHistogram(observedHistogram, utils.TRAINED_DATA[key]);
          if (difference <= maxMATCH['value']) {
            maxMATCH.name = key;
            maxMATCH.value = difference;
          }
        }
      }

      return maxMATCH;
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

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  }, {
    key: "extractFeature",
    value: function extractFeature(canvas) {
      var context = canvas.getContext('2d');
      var imageData = ImageProcessor.getImageData(canvas);
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
    key: "drawOutput",
    value: function drawOutput(canvas, name) {
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = 'bold 18pt Calibri';
      context.textAlign = 'center';
      context.fillText("You're", canvas.width / 2, canvas.height / 2 - 20);
      context.fillText(name, canvas.width / 2, canvas.height / 2 + 20);
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