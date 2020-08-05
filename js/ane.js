var aneObj = function() {
  this.x = [];
  this.y = [];
  this.len = [];

  this.rootx = [];
  this.curvature = 0;
  this.amp = [];
  this.headx = [];
  this.heady = [];
  this.currentx = [];
}

aneObj.prototype.num = 50;

aneObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.x[i] = i * 16 + Math.random() * 20;
    this.len[i] = 200 + Math.random() * 50;

    this.rootx[i] = i * 16 + Math.random() * 20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    this.amp[i] = Math.random() * 50 + 50;
    this.currentx[i] = this.headx[i];
  }
}

aneObj.prototype.draw = function() {
  // console.log('ane init');
  this.curvature += deltaTime * 0.0008;
  var l = Math.sin(this.curvature);
  // console.log('l', l);
  ctx2.save();
	ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.strokeStyle = '#3b154e';
  for (let i = 0; i < this.num; i++) {
    // beginPath moveTo lineTo storke strokeStyle lineWidth lineCap globalAlpha
    // console.log('ctx2', ctx2);
    // ctx2.beginPath();
    // ctx2.moveTo(this.x[i], canHeight);
    // ctx2.lineTo(this.x[i], canHeight - this.len[i]);
    // ctx2.stroke();
    this.currentx[i] = this.headx[i] + l * this.amp[i];
    ctx2.beginPath();
    ctx2.moveTo(this.rootx[i], canHeight); 
    ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.currentx[i], this.heady[i]);
    ctx2.stroke();

  }
  ctx2.restore();
}