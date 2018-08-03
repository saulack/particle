class Circle  {
  constructor(x, y, radius, dx, dy, id, type) {
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.type = type
    this.draw = this.draw.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }


  draw() {
    let fillColor;
    let strokeColor;
    let width;
    if (this.type === 'power up') {
      strokeColor = '#8005ff';
      fillColor = '#06ffe5'
      width = 10
    } else {
      fillColor = '#46008E';
      strokeColor = '#00685D'
      width = 1
    }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = fillColor;
      ctx.lineWidth= width;
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
    this.draw('#46008E',);
  }
}

export default Circle;
