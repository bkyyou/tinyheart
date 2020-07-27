function momObj() {
  this.x;
  this.y;
  this.angle;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();
}

momObj.prototype.init = function() {
  this.x = canWidth / 2;
  this.y = canHeight / 2;
  this.angle = 0;
  this.bigEye.src = './src/bigEye0.png';
  this.bigBody.src = './src/bigSwim0.png';
  this.bigTail.src = './src/bigTail0.png';
}

momObj.prototype.draw = function() {
  // this
  this.x = lerpDistance(mx, this.x, 0.98);
  this.y = lerpDistance(my, this.y, 0.98);  // 0.98 运动的速度

  var deltaX = mx - this.x;
  var deltaY = my - this.y;
  var beta = Math.atan2(deltaY, deltaX) + Math.PI; // [-pi, pi]
  this.angle = lerpAngle(beta, this.angle, 0.6); // 旋转的角度

  ctx1.save();
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(this.bigTail,  -this.bigTail.width / 2 + 30, -this.bigTail.height / 2);
  ctx1.drawImage(this.bigBody, -this.bigBody.width / 2, -this.bigBody.height / 2);
  ctx1.drawImage(this.bigEye, -this.bigEye.width / 2, -this.bigEye.height / 2);
  ctx1.restore();
}

