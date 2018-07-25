document.addEventListener('DOMContentLoaded', function() {

  window.canvas = document.getElementById('canvas');
    window.ctx = canvas.getContext('2d');

    const circleArr = [];
    for (let i = 0; i < 100; i++) {
      let dx = Math.random() * 5
      let dy = Math.random() * 5
      let x = Math.random() * innerWidth
      let y = Math.random() * innerHeight
      let circle = new Circle(x, y, 3, dx, dy)
      circleArr.push(circle);
    }

    for (let j = 0; j < circleArr.length; j++) {
      circleArr[j].draw()
    }
    console.log(circleArr);

});


class Circle  {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx
    this.dy = dy

    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);
  }

  draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'blue';
      ctx.fillStyle = 'white';
      ctx.stroke();

  }


  animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    this.draw()

      x -= dx;
      y += dy;
  }
}



//
//     let dx = Math.random() * 5
//     let dy = Math.random() * 5
//     let radius = 20
//     let x = 900;
//     let y = 1;
//
// function draw() {
//
// }
//
//
// function animate() {
//   requestAnimationFrame(animate)
//   ctx.clearRect(0, 0, innerWidth, innerHeight)
//
//
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
//     ctx.fillStyle = 'white';
//     ctx.stroke();
//
//     x -= dx;
//     y += dy;
//   }
//
//
// animate();
// })
