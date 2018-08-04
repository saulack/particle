
import Circle from './circles';
import Player from './player';
// import PowerUp from './powerups';
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
  window.player = new Player(mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, null, 5, 0)
  canvas.addEventListener('mousemove', function(event) {
    player.x = event.x - canvas.offsetLeft;
    player.y = event.y - canvas.offsetTop;
  });


const resetGlobalVariables = () => {
  window.player = new Player(mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, null, 5, 0)
  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');
  window.mouse = { x: 0, y: 0 };

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].x = 1000;
    circleArr[i].y = 0;
  }
}

  window.circleArr = [];
  const scoreUp = new Circle(800, 298, 6, 1, 1, 6168, 'score up' );
  const lifeUp = new Circle(0, 1000, 6, 1, 1, 6169, 'life up' );
  const bomb = new Circle(100, 2, 10, 2, 2, 6169, 'bomb')
  circleArr.push(scoreUp)
  circleArr.push(lifeUp)
  circleArr.push(bomb)
    for (let i = 0; i < 100; i++) {
      let dx = Math.random() * 1.5;
      let dy = Math.random() * 1.5;
      let radius = (1 + Math.random()) * 2;
      circleArr.push(new Circle(999, dy, radius, dx, dx, i, 'particle'));
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
