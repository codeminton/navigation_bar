/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var body = document.querySelector('body');
var hamburgerIcon = document.querySelector('.header .mobile-btn .material-icons');
document.querySelector('.header .header-center ul').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
});
document.querySelector('.header .header-start .mobile-btn').addEventListener('click', function (e) {
  e.preventDefault();
  body.classList.toggle('menu-toggle');
  hamburgerIcon.textContent = body.classList.contains('menu-toggle') ? 'close' : "menu";
});
document.querySelector('.header .header-center').addEventListener('click', function () {
  body.classList.remove('menu-toggle');
  hamburgerIcon.textContent = "menu";
});
document.querySelectorAll(".header .header-center > ul li a").forEach(function (menu_item) {
  if (menu_item.nextElementSibling) {
    if (menu_item.nextElementSibling.classList.contains('drop-menu')) {
      var span = document.createElement('SPAN');
      span.className = 'material-icons expand-more';
      span.textContent = 'expand_more';
      menu_item.appendChild(span);
    }
  }

  menu_item.addEventListener('click', function (e) {
    if (this.nextElementSibling) {
      this.nextElementSibling.classList.toggle('show');
    }
  });
});

/***/ }),

/***/ "./src/navigation.scss":
/*!*****************************!*\
  !*** ./src/navigation.scss ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n36 │                 background: linear-gradient(90deg, $secodary-color, transparent);\r\n   │                                                    ^^^^^^^^^^^^^^^\n   ╵\n  src\\_responsive.scss 36:40  @import\n  src\\navigation.scss 173:9   root stylesheet\n    at processResult (C:\\yt\\navigation_bar\\node_modules\\webpack\\lib\\NormalModule.js:758:19)\n    at C:\\yt\\navigation_bar\\node_modules\\webpack\\lib\\NormalModule.js:860:5\n    at C:\\yt\\navigation_bar\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\yt\\navigation_bar\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\yt\\navigation_bar\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\yt\\navigation_bar\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\yt\\navigation_bar\\node_modules\\sass\\sass.dart.js:101159:16)\n    at render_closure1.call$2 (C:\\yt\\navigation_bar\\node_modules\\sass\\sass.dart.js:86170:12)\n    at _RootZone.runBinary$3$3 (C:\\yt\\navigation_bar\\node_modules\\sass\\sass.dart.js:29901:18)\n    at _FutureListener.handleError$1 (C:\\yt\\navigation_bar\\node_modules\\sass\\sass.dart.js:28421:21)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/navigation.scss"]();
/******/ 	
/******/ })()
;