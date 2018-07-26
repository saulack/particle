document.addEventListener('DOMContentLoaded', () => {

  window.canvas = document.getElementById('canvas');
  window.ctx = canvas.getContext('2d');

  window.mouse = {
    x: null,
    y: null
  }

  canvas.addEventListener('mousemove', function(event) {

    let trailPos = [];
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y - canvas.offsetTop;


    window.player = new Circle(mouse.x, mouse.y, 2, mouse.x, mouse.y)
  })



  var circleArr = [];
  for (let i = 0; i < 200; i++) {
    let dx = Math.random() * 3
    let x = Math.random() * innerWidth
    let dy = Math.random() * 3
    let y = Math.random() * innerHeight
    let circle = new Circle(999, 1, 3, dx, dy)
    circleArr.push(circle);
  }


  function animate()  {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    player.player();
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update(circleArr)
    };
  };

    animate();
});


class Circle  {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx
    this.dy = dy
    this.lives = 3;

    this.draw = this.draw.bind(this);
    this.drawTrail = this.drawTrail.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }


  draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'blue';
      ctx.fillStyle = 'white';
      ctx.stroke();
      ctx.fill()

  }


  getDistance(x1, y1, x2, y2) {
    let xDistance = x1 - x2
    let yDistance = y1 - y2
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.stroke();
    ctx.fill()

  }

  drawTrail(trail) {

    trail.push([this.x, this.y])
    this.x = trail[i][0]
    this.y = trail[i][1]
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.stroke();
    ctx.fill()


  }

  player() {
    this.x = window.mouse.x
    this.y = window.mouse.y

    const trailLength = 10;
    const trail = [];
    if (trail.length < trailLength) {
      trail.push([this.x, this.y])
    } else
      trail.shift();
      trail.push([this.x, this.y])

    console.log(trail);



    this.drawPlayer();
    this.drawTrail(trail)
  }

  update(particles){

    if ( this.x < 0 && this.y > 600) {
      this.x = Math.random(1000) * 1200;
      this.y = Math.random() * 800;
    }
    this.x += -this.dx
    this.y += this.dy
    this.draw();


    for (let i = 0; i < particles.length; i++ ) {
      if (particles[i].getDistance(this.x, this.y, mouse.x, mouse.y) - this.radius * 2 < 0) {
        console.log('COLLISION DETECTED');
      }
    }
  }

}
