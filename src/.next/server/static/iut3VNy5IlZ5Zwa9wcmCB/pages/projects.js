module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"9a39f94b7da663f689bd","11":"544c57663b007bc80cbd","12":"27ff0b3a10261f29d89a","13":"9b111d8368a020810a9b","14":"228c3d88fa29a36219bc","15":"1260b3964bcc61e06e94","16":"88c081c5c66455e7ece9","17":"902b2cec123cdb21d597","18":"ee59e3f9069c77458b9e","19":"b54e89444f1742f76a27","20":"1bc233b4b808e6fa56da"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/w9Q":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./206.md": [
		"UA2s",
		11
	],
	"./4ej.md": [
		"a+O0",
		12
	],
	"./bottle.md": [
		"ew3O",
		13
	],
	"./cardiyo.md": [
		"6TWY",
		14
	],
	"./graphql.md": [
		"iUIo",
		15
	],
	"./grassroots.md": [
		"nRCz",
		16
	],
	"./helio.md": [
		"PEHt",
		17
	],
	"./lttrs.md": [
		"z8pN",
		18
	],
	"./mpj.md": [
		"/fpU",
		19
	],
	"./tapioca.md": [
		"SolM",
		0
	],
	"./wedge.md": [
		"EeXi",
		20
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "/w9Q";
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RSoV");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UeDS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = ({
  projects,
  tapiocaDescription
}) => __jsx("div", {
  className: "container"
}, Object(_components_menu__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("Things I've Built"), __jsx("div", {
  className: "grid"
}, getTapiocaCard(tapiocaDescription), projects.map((project, i) => Object(_components_card__WEBPACK_IMPORTED_MODULE_3__[/* MarkdownCard */ "b"])(project, i))));

async function getStaticProps() {
  const projectNames = ["lttrs", "4ej", "graphql", "grassroots", "cardiyo", "206", "wedge", "bottle", "helio", "mpj"];
  const projects = [];

  for (let projectName of projectNames) {
    const description = await __webpack_require__("/w9Q")(`./${projectName}.md`);
    projects.push(description.default);
  }

  const tapiocaDescription = await __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "SolM"));
  return {
    props: {
      projects: projects,
      tapiocaDescription: tapiocaDescription.default
    }
  };
}

const getTapiocaCard = description => __jsx("div", {
  className: "card"
}, __jsx("h3", {
  className: "title"
}, "Tapioca - API Help Desk"), __jsx("iframe", {
  className: "video",
  src: "https://player.vimeo.com/video/321909326",
  width: "560",
  height: "360",
  frameborder: "0",
  allow: "autoplay; fullscreen",
  allowfullscreen: true
}), __jsx("div", null, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  source: description,
  className: "card-body"
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "RSoV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Menu = title => __jsx("main", null, __jsx("div", {
  className: "link-menu"
}, __jsx("a", {
  href: "/"
}, "About"), __jsx("a", {
  href: "/projects"
}, "Projects"), __jsx("a", {
  href: "/contact"
}, "Contact")), __jsx("h1", {
  className: "title"
}, title));

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "UeDS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarkdownCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Card = (title, description) => __jsx("div", {
  className: "card"
}, __jsx("h3", {
  className: "title"
}, title), description);

const MarkdownCard = (content, key) => __jsx("div", {
  className: "card",
  key: key
}, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  source: content,
  className: "card-body"
}));

const DescriptionCard = (content, key) => __jsx("div", {
  className: "text-card"
}, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  source: content,
  className: "card-body"
}));



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });