var aneObj = function() {
  this.x = [];
  this.y = [];
  this.len = [];
}

aneObj.prototype.num = 50;

aneObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.x[i] = i * 16 + Math.random() * 20; 
    this.len[i] = 200 + Math.random() * 50;
  }
}

aneObj.prototype.draw = function() {
  // console.log('ane init');
  ctx2.save();
	ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.strokeStyle = 'purple';
  for (let i = 0; i < this.num; i++) {
    // beginPath moveTo lineTo storke strokeStyle lineWidth lineCap globalAlpha
    // console.log('ctx2', ctx2);
    ctx2.beginPath();
    ctx2.moveTo(this.x[i], canHeight);
    ctx2.lineTo(this.x[i], canHeight - this.len[i]);
    ctx2.stroke();
  }
  ctx2.restore();
}