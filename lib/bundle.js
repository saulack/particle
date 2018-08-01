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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/particle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/circles.js":
/*!************************!*\
  !*** ./lib/circles.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Circle  {
  constructor(x, y, radius, dx, dy, id) {
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = this.draw.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }

  draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = '#00685D';
      ctx.fillStyle = '#46008E';
      ctx.stroke();
      ctx.fill();
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x1 - x2;
    let yDistance = y1 - y2;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  update(){
    if ( this.x < 0 || this.y > 600) {
      this.x = Math.random() * 1200;
      this.y = Math.random(600);
    }
    this.x += -this.dx;
    this.y += this.dy;
    this.draw();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Circle);


/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circles */ "./lib/circles.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./lib/player.js");



// let firebase = require("firebase/app");
// let fireDatabase = require("firebase/database");


document.addEventListener('DOMContentLoaded', () => {
  //
  // let config = {
  //   apiKey: "AIzaSyC8MRoQiQPGTS--vjCiOEwR56SbvngsBqM",
  //   authDomain: "particle-28f5e.firebaseapp.com",
  //   databaseURL: "https://particle-28f5e.firebaseio.com",
  //   projectId: "particle-28f5e",
  //   storageBucket: "",
  //   messagingSenderId: "511295939823"
  // };
  // firebase.initializeApp(config);
  // let database = firebase.database();

  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');
  window.mouse = {
    x: null,
    y: null
  };
  window.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, 5, 0)
  canvas.addEventListener('mousemove', function(event) {
    player.x = event.x - canvas.offsetLeft;
    player.y = event.y - canvas.offsetTop;
  });


const resetGlobalVariables = () => {
  window.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, 3, 0)
  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');
  window.mouse = { x: 0, y: 0 };

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].x = 1000;
    circleArr[i].y = 0;
  }
}

  window.circleArr = [];
    for (let i = 0; i < 100; i++) {
      let dx = Math.random() * 2.5;
      let dy = Math.random() * 2.5;
      let radius = (1 + Math.random()) * 2;
      circleArr.push(new _circles__WEBPACK_IMPORTED_MODULE_0__["default"](999, 1, radius, dx, dy, 3, i));
    }

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    player.update(circleArr);

    if (player.lives >= 0) {
      document.addEventListener('keypress', () => {
        resetGlobalVariables()
      });

    }

    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update(circleArr);


    };
  };
  animate();
});


/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circles */ "./lib/circles.js");


class Player extends _circles__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, radius, dx, dy, id, lives, score) {
    super();
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lives = lives;
    this.score = score
    this.history = [];
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgb(5, 0, 255)';
    ctx.fillStyle = 'red';
    ctx.stroke();
    ctx.fill();

    this.drawInfo(`HP: ${this.lives}`, 5, 20, 12, "white");
    this.drawInfo(`Score: ${this.score}`, 80, 20, 12, "white");
  }

  drawInfo(text, x, y, size, color) {
    ctx.font = `${size}px Arial`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

 drawTrail(x, y, radius) {
   if (!(x === this.x && y === this.y)) {
     let colors = ['#05297D', '#1147C2', '#1147C2', '#1A5FFF', '#7FA6FF'];
     let randomColor = colors[Math.floor(Math.random() * colors.length)];
     ctx.beginPath();
     ctx.arc(x, y, radius + 1, 0, Math.PI * 2, false);
     ctx.strokeStyle = randomColor;
     ctx.stroke();
   }
 }

 collisionDetect(particles) {
   for (let i = 0; i < particles.length; i++ ) {
     if (particles[i].getDistance(particles[i].x, particles[i].y,
        this.x, this.y) - particles[i].radius * 2 < 0) {
       return true;
     }
   }
   return false;
 }

 checkCollisions(particles) {
   if (this.collisionDetect(particles)) {
     this.lives -= 1;
   }
 }

 endGame() {
   this.drawInfo("GAME OVER", 500, 300, 80, "#46008E");
   this.drawPlayer();
   this.drawInfo("press space to play again", 600, 400, 20, "#46008E");
   if (this.history.length < 300) {
    this.history.push([this.x, this.y]);
   } else {
    this.history.shift();
    this.history.push([this.x, this.y]);
   }
   for (let i = 0; i < this.history.length; i++) {
     let prevPos = this.history[i];
    this.drawTrail(prevPos[0], prevPos[1], i/8);
   }
 }

checkTail() {
 if (this.history.length < 20) {
   this.history.push([this.x, this.y]);
 } else {
   this.history.shift();
   this.history.push([this.x, this.y]);
 }
}

// writeUserData(name, score) {
//   database.ref('users/' + userId).set({
//     username: name,
//     score: score
//   });
// }

 update(particles) {
   let posX = this.x
   let PosY = this.y
  if (this.lives > 0 ) {
    for (let i = 0; i < this.history.length; i++) {
      let prevPos = this.history[i];
      this.drawTrail(prevPos[0], prevPos[1], i / 3);
    }
    this.score += 1;

    this.checkCollisions(particles)
    this.checkTail()
    this.drawPlayer();
  } else {
    this.endGame();
    writeUserData("person", this.score);
  }
 }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);


// && !(posX < 0 || posX > 1000 ) && !(posY < 0 || posY > 600 )


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map