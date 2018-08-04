class PowerUp extends Circle {
  constructor(x, y, radius, dx, dy, id, type) {
    super();
    this.types = ['life', 'score', 'bomb']
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.player = player
    this.radius = radius;
    this.type = this.types[Math.floor(Math.random() * 3)]
  }

  drawPoweredUp(radius, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  powerEffect(color) {
    for (let i = 0; i < 40; i += 8) {
      drawPoweredUp(i, color);
    }
  }

  drawPowerUp() {
    let color;
    if (this.type === 'bomb'); {
      color = 'red';
    } else {
      color = 'green';
    }

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
  }

  update() {
    this.drawPowerUp()
    super.getPower(this.player);
    this.x -= this.dx;
    this.y += this.dy;
  }
}
