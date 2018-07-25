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
    // if (trailPos.length > 10) {
    //   trailPos.shift
    //   trailpos.push([mouse.x, mouse.y])
    // } else {
    //   trailpos.push([mouse.x, mouse.y])
    //
    // }

    window.player = new Circle(mouse.x , mouse.y, 2, mouse.x, mouse.y)
    console.log(mouse) ;
  })


  var circleArr = [];
  for (let i = 0; i < 200; i++) {
    let dx = Math.random() * 5
    let x = Math.random() * innerWidth
    let dy = Math.random() * 5
    let y = Math.random() * innerHeight
    let circle = new Circle(999, 1, 2, dx, dy)
    circleArr.push(circle);
  }


  function animate()  {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    player.player()
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update()
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

    this.draw = this.draw.bind(this);
  }

  draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'blue';
      ctx.fillStyle = 'white';
      ctx.stroke();
      ctx.fill()

  }

  drawPlayer() {
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
    this.drawPlayer()
  }

  update(){

    if ( this.x < 0 && this.y > 600) {
      this.x = Math.random(900) * 1000;
      this.y = Math.random() * 600;
    }
    this.x += -this.dx
    this.y += this.dy
    this.draw()

  }


}
