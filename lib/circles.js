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

  drawExplode(size){
    ctx.beginPath();
    ctx.arc(this.x, this.y, (this.radius * size), 0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'rgb(164, 74, 0.1)';
    ctx.stroke();
    ctx.fill();
  }

  update(){
    if (this.x < 0) {
      this.x = Math.random() * 1400;
      this.y = 0;
    } else if (this.y > 600) {
      this.x = 0;
      this.y = Math.random() * 700;
    }

    this.x += -this.dx;
    this.y += this.dy;
    this.draw();
  }
}

export default Circle;
