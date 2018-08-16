import Circle from './circles';

class Player extends Circle {
  constructor(x, y, radius, dx, dy, id, type, lives, score) {
    super();
    this.id = id
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lives = lives;
    this.score = score
    this.history = [];
    this.level = 1;
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
       this.x, this.y) - particles[i].radius * 2 <= 0) {

       if (particles[i].type === 'particle') {
        let size = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        particles[i].drawExplode(size[this.lives % 6]  * 20 );
        particles[i].x = 0;
        particles[i].y = 600;
        return 'particle';
      } else if (particles[i].type === 'score up') {
        particles[i].x = -40;
        particles[i].y = 600;
        return 'score up';
      } else if (particles[i].type === 'life up') {
        particles[i].x = -400;
        particles[i].y = 1000;
        return 'life up';
      } else if (particles[i].type === 'bomb') {
        particles[i].x = -400;
        particles[i].y = 1000;
        return 'bomb';
      }
    }
  }

  return false;
}

 checkCollisions(particles) {
   const col = this.collisionDetect(particles)

  if (col === 'particle') {
    this.lives -= 1;
   }

  if (col === 'score up') {
    let bonus = Math.floor(Math.random() * 100);
    this.score += bonus
    this.drawInfo(`+${bonus}`, this.x, this.y, 100, 'white');
   }
   if (col === 'life up') {
     this.lives += 1
     this.drawInfo(`1Up`, this.x, this.y, 100, 'green');
    }

  if (col === 'bomb') {
    this.explodeAll(particles)
    this.lives = 0;
   }
 }

 explodeAll(particles) {
   for (let i = 0; i < particles.length; i++) {
     let size = Math.floor(Math.random() * 40)
    this.drawExplode(size);
   }
 }

 endGame() {
   this.drawInfo("GAME OVER", 500, 300, 80, "#46008E");
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
    this.drawTrail(prevPos[0], prevPos[1], i/15);
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

  speedUp(particles) {
    let currScore = 0;
    let addScore = 2000;
    for (let i = 0; i < particles.length; i++) {
      particles[i].dx += .0002;
        particles[i].dy += .0002;
      }
    }

 update(particles) {
  if (this.lives > 0) {
    for (let i = 0; i < this.history.length; i++) {
      let prevPos = this.history[i];
      this.drawTrail(prevPos[0], prevPos[1], i / 3);
    }
    // this.score += 1;

    this.checkCollisions(particles)
    this.checkTail()
    this.drawPlayer();
    this.speedUp(particles)
  } else {
    this.endGame();
    this.drawInfo(`Score: ${this.score}`, 650, 450, 20, "#46008E");
  }
 }
}


export default Player;
