var babyObj = function() {
  this.x;
  this.y;
  this.angle;
  this.babyEye = new Image();
  this.babyBody = new Image();
  this.babyTail = new Image();
  this.babyTailArr = [];

  this.babyTailTimer;
  this.babyTailCount;
}

babyObj.prototype.init = function() {
  this.x = canWidth / 2 - 50;
  this.y = canHeight / 2 + 50;
  this.angle = 0;
  this.babyTailTimer = 0;
  this.babyTailCount = 0;
  this.babyEye.src = './src/babyEye0.png';
  this.babyBody.src = './src/babyFade0.png';
  this.babyTail.src = './src/babyTail0.png';

  for (let i = 0; i < 8; i++) {
    this.babyTailArr[i] = new Image();
    console.log('`./src/babyTail${i}`', `./src/babyTail${i}.png`);
    this.babyTailArr[i].src = `./src/babyTail${i}.png`;    
  }
}

babyObj.prototype.draw = function() {
  this.x = lerpDistance(mom.x, this.x, 0.98);
  this.y = lerpDistance(mom.y, this.y, 0.98);

  var deltaX = mom.x - this.x;
  var deltaY = mom.y - this.y;
  var beta = Math.atan2(deltaY, deltaX) + Math.PI; // [-pi, pi]
  this.angle = lerpAngle(beta, this.angle, 0.6); // 旋转的角度

  this.babyTailTimer += deltaTime;
  if (this.babyTailTimer > 50) {
    this.babyTailCount = ++this.babyTailCount % 8;
    this.babyTailTimer %= 50;
  }

  console.log('this.babyTailCount', this.babyTailCount);

  ctx1.save()
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  // ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
  ctx1.drawImage(this.babyTailArr[this.babyTailCount], -this.babyTailArr[this.babyTailCount].width * 0.5 + 23, -this.babyTailArr[this.babyTailCount].height * 0.5);
  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
  ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5 , -this.babyEye.height * 0.5);
  ctx1.restore();
}