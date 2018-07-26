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
    window.player = new Circle(mouse.x, mouse.y, 2, mouse.x, mouse.y, 3)
  });

  var circleArr = [];
  for (let i = 0; i < 200; i++) {
    let dx = Math.random() * 1;
    let dy = Math.random() * 1;
    let radius = (1 + Math.random()) * 2;
    circleArr.push(new Circle(999, 1, radius, dx, dy, 3));
  };

  function animate()  {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    player.player();
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update(circleArr);
    };
  };
  animate();
});





class Circle  {
  constructor(x, y, radius, dx, dy, lives, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.lives = lives;
    this.score = 0;

    this.draw = this.draw.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }

  draw() {
    this.drawScore();
    this.drawLives();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'blue';
      ctx.fillStyle = 'white';
      ctx.stroke();
      ctx.fill();
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x1 - x2;
    let yDistance = y1 - y2;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgb(5, 0, 255)';
    ctx.fillStyle = 'rgb(5, 0, 255)';
    ctx.stroke();
    ctx.fill();
  }

  player() {
    this.x = window.mouse.x;
    this.y = window.mouse.y;
    this.drawPlayer();
  }


 drawLives() {
   ctx.font = "16px Arial";
   ctx.fillStyle = "#0095DD";
   ctx.fillText('Lives: ' + this.lives, 5, 20);
 }

 drawScore() {
   ctx.font = "16px Arial";
   ctx.fillStyle = "#0095DD";
   ctx.fillText('Score: ' + this.score, 20, 40);
 }

 drawgameOver() {
   ctx.font = "16px Arial";
   ctx.fillStyle = "#0095DD";
   ctx.fillText('Score: ' + this.score, 20, 40);
 }


  update(particles){
    if ( this.x < 0 && this.y > 600) {
      this.x = Math.random() * 1200;
      this.y = Math.random(600);
    }
    this.x += -this.dx;
    this.y += this.dy;
    this.score += 1
    this.draw();

    for (let i = 0; i < particles.length; i++ ) {
      if (particles[i].getDistance(this.x, this.y, mouse.x, mouse.y) - this.radius * 2 < 0) {
        this.lives -= 1;
        if (this.lives <= 0)
        drawgameOver();
        // document.location.reload();

      }
    }
  }
}
