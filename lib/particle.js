import Circle from './circles'

document.addEventListener('DOMContentLoaded', () => {

  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');

  window.mouse = {
    x: null,
    y: null
  };
  canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y - canvas.offsetTop;
    window.player = new Circle(mouse.x, mouse.y, 2, mouse.x, mouse.y, 15545)
  });

  var circleArr = [];
  for (let i = 0; i < 200; i++) {
    let dx = Math.random() * 1;
    let dy = Math.random() * 1;
    let radius = (1 + Math.random()) * 2;

    circleArr.push(new Circle(999, 1, radius, dx, dy, 3, i));
  };

  function animate()  {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    window.player.player();
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update(circleArr);

    };
  };
  animate();
});
