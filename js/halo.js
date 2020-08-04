function haloObj() {
  this.x = [];
  this.y = [];
  this.r = [];
  this.alive = [];
}

haloObj.prototype.num = 10;

haloObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.alive[i] = false;
    this.r[i] = 5
  }
}

haloObj.prototype.draw = function() {
  ctx1.save();
  ctx1.lineWidth = 2;
  ctx1.shadowBlur = 10;
  ctx1.shadowColor = 'white';
  for (let i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      this.r[i] += deltaTime * 0.05;
      var opacity = 1 - this.r[i] / 60;
      ctx1.beginPath();
      // console.log('this.x[i]', this.x[i]);
      // console.log('this.y[i]', this.y[i]);
      // console.log('this.r[i]', this.r[i]);
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
      ctx1.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx1.stroke()
      if (this.r[i] > 60) {
        this.alive[i] = false;
        this.r[i] = 5;
      }
    }
  }
  ctx1.restore();
}

haloObj.prototype.born = function(x, y) {
  for (let i = 0; i < this.num; i++) {
    if (!this.alive[i]) {
      this.x[i] = x;
      this.y[i] = y;
      this.alive[i] = true;
      break;
    }
  }
}