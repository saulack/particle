import Circle from './circles';

class Player extends Circle {
  constructor(x, y, radius, dx, dy, id) {
    super()
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.lives = 3;
    this.score = 0;
    this.history = [];
  }


  drawPlayer() {
    this.drawScore();
    this.drawLives();
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
   this.score += .1;

 }

 drawTrail(x, y) {
   ctx.beginPath();
   ctx.arc(x, y, 5, 0, Math.PI * 2, false);
   ctx.strokeStyle = 'red';
   ctx.fillStyle = 'red';
   ctx.stroke();
   ctx.fill();
   
 }

 update() {
   if (this.history.length < 10) {
     this.history.push([this.x, this.y]);
   } else {
     this.history.shift();
     this.history.push([this.x, this.y]);
   }

   for (let i = 0; i < this.history.length; i++) {
     let prevPos = this.history[i]
     this.drawTrail(prevPos[0], prevPos[1])
   }

   this.drawPlayer()
 }

}

export default Player;
