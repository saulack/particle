import Circle from './circles';

class Player extends Circle {
  constructor(x, y, radius, dx, dy, id, lives, score) {
    super();
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lives = lives;
    this.score = score
    this.history = [];
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgb(5, 0, 255)';
    ctx.fillStyle = 'red';
    ctx.stroke();
    ctx.fill();

    this.drawInfo(`Lives: ${this.lives}`, 5, 20, 12, "white");
    this.drawInfo(`Score: ${this.score}`, 80, 20, 12, "white");
    }

  drawInfo(text, x, y, size, color) {
    ctx.font = `${size}px Arial`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
 }


 drawTrail(x, y, radius) {
   if (!(x === this.x && y === this.y)) {
     let colors = ['#05297D', '#1147C2', '#1147C2', '#1A5FFF', '#7FA6FF'];
     let randomColor = colors[Math.floor(Math.random() * colors.length)];
     ctx.beginPath();
     ctx.arc(x, y, radius + 1, 0, Math.PI * 2, false);
     ctx.strokeStyle = randomColor;
     ctx.stroke();
   }
 }


 collisionDetect(particles) {
   for (let i = 0; i < particles.length; i++ ) {
     if (particles[i].getDistance(particles[i].x, particles[i].y,
        this.x, this.y) - particles[i].radius * 2 < 0) {
       return true;
     }
   }
   return false;
 }

 checkCollisions(particles) {
   if (this.collisionDetect(particles)) {
     this.lives -= 1;
   }
 }


 endGame() {
   this.drawInfo("GAME OVER", 500, 30, 80, "#46008E");
   this.drawPlayer();
   this.drawInfo("press space to play again", 600, 400, 20, "#46008E");
   if (this.history.length < 300) {
    this.history.push([this.x, this.y]);
   } else {
    this.history.shift();
    this.history.push([this.x, this.y]);
   }
   for (let i = 0; i < this.history.length; i++) {
     let prevPos = this.history[i];
    this.drawTrail(prevPos[0], prevPos[1], i/8);
   }
 }

checkTail() {
 if (this.history.length < 20) {
   this.history.push([this.x, this.y]);
 } else {
   this.history.shift();
   this.history.push([this.x, this.y]);
 }
}

 update(particles) {
  if (this.lives > 0) {
    for (let i = 0; i < this.history.length; i++) {
      let prevPos = this.history[i];
      this.drawTrail(prevPos[0], prevPos[1], i / 3);
    }
    this.score += 1;

    this.checkCollisions(particles)
    this.checkTail()
    this.drawPlayer();
  } else {
    this.endGame();
  }
 }
}

export default Player;
