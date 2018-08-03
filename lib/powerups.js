class PowerUp extends Player {
  constructor(x, y, radius, dx, dy, id, lives, score, player) {
    super();
    this.types = ['life', 'score', 'bomb']
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.player = player
    this.radius = radius;
    this.type = this.types[Math.random() * 3]
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

  getPower(player) {
    if (super.getDistance(player.x, player.y, this.x, this.y) <) {
      if (this.type === 'life') {
        this.lives += 1
        powerEffect('green');
      } else if (this.type === 'score') {
        this.score += Math.random() * 100;
        powerEffect('green');
      } else {
        this.lives -= 3;
        powerEffect('red');
      }
    }
  }

  drawPowerUp() {
    let color;
    if (this.type = 'bomb'); {
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
