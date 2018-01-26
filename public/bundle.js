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
/***/ (function(module, exports) {

const validateArr = arr => {
  if (arr.length < 2)
    arr.push(arr[0])
    
  return arr
}

const getInput = () => {
  let input = $('#input').val()
  let inputArr = input.split(" ").slice(0, 2).map(Number)
  
  return validateArr(inputArr)
}

const printLCM = LCM => {
  $("#result").text(LCM)
}

const findMinFromArr = arr => {
  if (arr[0] > arr[1])
    // swapping the two elements in the array
    arr[0] = arr.splice(1, 1, arr[0])[0]
  
  return arr
}

const findLCM = (LCM, next) => {
  let isLCM = false;
  let currentLCM = 0;
    
  while (!isLCM) {
    currentLCM += LCM

    if (currentLCM % next === 0) {
      isLCM = true
      LCM = currentLCM
    }
  }
  
  return LCM
}

const smallestCommons = arr => {
  arr = findMinFromArr(arr);
  let min = arr[0]
  let max = arr[1]
  
  let LCM = min;
  
  for (let i = min; i < max; i++) {
    let current = i
    let next = current + 1
    
    LCM = findLCM(LCM, next)
  }
  
  printLCM(LCM)
  // return arr
}

$("#label").click(() => {
  let display = $('#input').css('display')
  
  if (display != 'none') {
    $("#input").hide("fast")
    $('#numbers').text(findMinFromArr(getInput()).join(' - '))
    smallestCommons(getInput())
    
  }
  else
    $("#input").show("fast")
})

/***/ })
/******/ ]);