import Circle from './circles';

class Player extends Circle {
  constructor(x, y, radius, dx, dy, id, lives, score) {
    super()
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.lives = lives;
    this.score = score
    this.history = [];
  }


  drawPlayer() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgb(5, 0, 255)';
    ctx.fillStyle = 'rgb(5, 0, 255)';
    ctx.stroke();
    ctx.fill();

    this.drawScore();
    this.drawLives();
    }


  player() {
    this.x = window.mouse.x;
    this.y = window.mouse.y;
  }


 drawLives() {
   ctx.font = "12px Arial";
   ctx.fillStyle = "white";
   ctx.fillText('Lives: ' + this.lives, 5, 20);
   return this.lives;
 }

 drawScore() {
   ctx.font = "12px Arial";
   ctx.fillStyle = "white";
   ctx.fillText('Score: ' + this.score, 80, 20);
   return this.score;

 }

 drawTrail(x, y, radius) {
   if (x === this.x && y === this.y) {

   } else {
     ctx.beginPath();
     ctx.arc(x, y, radius + 1, 0, Math.PI * 2, false);
     ctx.strokeStyle = 'rgb(0, 255, 232)';
     ctx.stroke();
   }
 }

 drawGameOver() {
   ctx.font = "80px Arial";
   ctx.fillStyle = "blue";
   ctx.fillText("GAME OVER", 500, 300);
 }

 drawStartAgain() {
   ctx.font = "20px Arial";
   ctx.fillStyle = "blue";
   ctx.fillText("Thank you sir, may I have another", 600, 400)

 }

 drawResetCursor() {
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
   ctx.strokeStyle = 'rgb(5, 0, 255)';
   ctx.fillStyle = 'rgb(5, 0, 255)';
   ctx.stroke();
   ctx.fill();

 }

 collisionDetect(particles) {
   for (let i = 0; i < particles.length; i++ ) {
     if (particles[i].getDistance(particles[i].x, particles[i].y, this.x, this.y) - particles[i].radius * 2 < 0) {
       return true;
     }
   }
   return false;
 }

 update(particles) {

  if (this.lives > 0) {
    if (this.history.length < 15) {
     this.history.push([this.x, this.y]);
    } else {
     this.history.shift();
     this.history.push([this.x, this.y]);
    }

    if (this.collisionDetect(particles)) {
     this.lives -= 1
    }

    for (let i = 0; i < this.history.length; i++) {
     let prevPos = this.history[i];
     this.drawTrail(prevPos[0], prevPos[1], i / 3);
    }

    this.score += 1;
    this.drawPlayer();

  } else {

    this.drawGameOver()
    this.drawPlayer();
    this.drawStartAgain()

    if (this.history.length < 300) {
     this.history.push([this.x, this.y]);
    } else {
     this.history.shift();
     this.history.push([this.x, this.y]);
    }

    for (let i = 0; i < this.history.length; i++) {
      let prevPos = this.history[i];
     this.drawTrail(prevPos[0], prevPos[1], i/5);
    }
  }
 }
}

export default Player;
