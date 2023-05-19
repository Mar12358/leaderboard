"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["apiFunctions"],{

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addScore\": () => (/* binding */ addScore),\n/* harmony export */   \"getScores\": () => (/* binding */ getScores)\n/* harmony export */ });\nconst id = 'WL5Irjh09ObGUz7KyelO';\nconst API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;\n\nconst addScore = async (player) => {\n  const newScore = {\n    user: player.user,\n    score: player.score,\n  };\n\n  await fetch(API, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(newScore),\n  });\n};\n\nconst getScores = async () => {\n  const data = await fetch(API);\n  const scores = (await data.json()).result;\n  const scoresTable = document.querySelector('.scores-table');\n  scoresTable.innerHTML = '';\n  let colorBack = 'grey';\n  scores.forEach((score) => {\n    const li = document.createElement('li');\n    colorBack = colorBack === 'light' ? 'grey' : 'light';\n    li.className = `${colorBack}`;\n    li.innerHTML = `${score.user}: ${score.score}`;\n    scoresTable.appendChild(li);\n  });\n  return scores;\n};\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/api.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/api.js"));
/******/ }
]);