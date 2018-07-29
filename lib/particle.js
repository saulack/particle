
import Circle from './circles';
import Player from './player';

document.addEventListener('DOMContentLoaded', () => {

  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');
  window.mouse = {
    x: null,
    y: null
  };
  window.player = new Player(mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, 3, 0)
  canvas.addEventListener('mousemove', function(event) {
    player.x = event.x - canvas.offsetLeft;
    player.y = event.y - canvas.offsetTop;
  });


const resetGlobalVariables = () => {
  window.player =new Player(mouse.x, mouse.y, 3, mouse.x, mouse.y, 15545, 3, 0)
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
      circleArr.push(new Circle(999, 1, radius, dx, dy, 3, i));
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
