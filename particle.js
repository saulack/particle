document.addEventListener('DOMContentLoaded', function() {

  let canvas = document.getElementById('canvas');

  if (canvas) {
    let ctx = canvas.getContext('2d');


    ctx.beginPath();
    ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'white';
    ctx.stroke();

  }

})
