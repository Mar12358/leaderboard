"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["initFunction"],{

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addScore\": () => (/* binding */ addScore),\n/* harmony export */   \"getScores\": () => (/* binding */ getScores)\n/* harmony export */ });\nconst id = 'WL5Irjh09ObGUz7KyelO';\nconst API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;\n\nconst addScore = async (player) => {\n  const newScore = {\n    user: player.user,\n    score: player.score,\n  };\n\n  await fetch(API, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(newScore),\n  });\n};\n\nconst getScores = async () => {\n  const data = await fetch(API);\n  const scores = (await data.json()).result;\n  const scoresTable = document.querySelector('.scores-table');\n  scoresTable.innerHTML = '';\n  let colorBack = 'grey';\n  scores.forEach((score) => {\n    const li = document.createElement('li');\n    colorBack = colorBack === 'light' ? 'grey' : 'light';\n    li.className = `${colorBack}`;\n    li.innerHTML = `${score.user}: ${score.score}`;\n    scoresTable.appendChild(li);\n  });\n  return scores;\n};\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/initiate.js":
/*!*********************************!*\
  !*** ./src/modules/initiate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst initiate = () => {\n  const body = document.querySelector('body');\n  const container = document.createElement('div');\n  container.className = 'container';\n  container.innerHTML = `\n  <div class=\"left-section\">\n    <div class=\"title\">\n      <label>Recent scores:</label>\n      <button id=\"refresh\">Refresh</button>\n    </div>\n    <ul class=\"scores-table\">\n    </ul>\n  </div>\n  <div class=\"right-section\">\n    <form id=\"form\">\n      <label>Add your score:</label>\n      <input type=\"text\" id=\"name\" placeholder=\"Your name\">\n      <input type=\"text\" id=\"score\" placeholder=\"Your score\">\n      <button id=\"submit\">Submit</button>\n    </form>\n  </div>\n  `;\n  body.appendChild(container);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiate);\n\n//# sourceURL=webpack://leaderboard/./src/modules/initiate.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/initiate.js"));
/******/ }
]);