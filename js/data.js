var dataObj = function() {
  this.x;
  this.y;
  this.total;
  this.double;
  this.source = 0;
  this.gameOver = false;
  this.opacity = 0;
}

dataObj.prototype.init = function() {
  this.x = canWidth / 2;
  this.y = 500;
  this.total = 0;
  this.double = 1;
}

dataObj.prototype.draw = function() {
  // var txt = '吃的果实数量：' + this.total;
  // var txt1 = '大鱼的状态：' + this.double;
  // ctx1.fillText(txt, canWidth / 2, canHeight - 80);
  // ctx1.fillText(txt1, canWidth / 2, canHeight - 50);
  if (this.gameOver) {
    this.stop();
  }
  
  ctx1.fillText('source:' + this.source, canWidth / 2, canHeight - 50);
}

dataObj.prototype.reset = function() {
  this.total = 0;
  this.double = 1;
}

dataObj.prototype.getSource = function() {
  // console.log('this.gameOver', this.gameOver);
  if (this.gameOver) {
    return;
  }
  this.source = this.source + this.double * this.total * 10;

  // this.total = 0;
  // this.double = 0;
  this.reset();
}

dataObj.prototype.stop = function() {
  this.opacity = this.opacity + deltaTime * 0.0001;
  if (this.opacity >= 1) {
    this.opacity = 1;
  }
  // console.log('this.opacity', this.opacity);
  ctx1.save();
  // ctx1.fillStyle = 'white';
  ctx1.shadowBlur = 10;
  ctx1.shadowColor = 'white';
  ctx1.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
  ctx1.fillText('GAMEOVER', canWidth / 2, canHeight / 2);
  ctx1.restore();
}