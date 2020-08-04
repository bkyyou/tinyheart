function momObj() {
  this.x;
  this.y;
  this.angle;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();

  this.bigTailArr = [];
  this.bigTailTimer;
  this.bigTailCount;

  this.bigEyeArr = [];
  this.bigEyeTimer;
  this.bigEyeCount;
  this.bigEyeInterval;

  this.bigBodyOrgArr = [];
  this.bigBodyBlueArr = [];
  this.bigBodyCount = 0;
}

momObj.prototype.init = function() {
  this.x = canWidth / 2;
  this.y = canHeight / 2;
  this.angle = 0;
  this.bigEye.src = './src/bigEye0.png';
  this.bigBody.src = './src/bigSwim0.png';
  this.bigTail.src = './src/bigTail0.png';

  this.bigTailTimer = 0;
  this.bigTailCount = 0;
  for (let i = 0; i < 8; i++) {
    this.bigTailArr[i] = new Image();
    this.bigTailArr[i].src = `./src/bigTail${i}.png`
  }
  // console.log('this.bigTailArr', this.bigTailArr);

  for (let i = 0; i < 2; i++) {
    this.bigEyeArr[i] = new Image();
    this.bigEyeArr[i].src = `./src/bigEye${i}.png`
  }
  this.bigEyeTimer = 0;
  this.bigEyeCount = 0;
  this.bigEyeInterval = 3000;

  for (let i = 0; i < 8; i++) {
    this.bigBodyBlueArr[i] = new Image();
    this.bigBodyBlueArr[i].src = `./src/bigSwimBlue${i}.png`
    this.bigBodyOrgArr[i] = new Image();
    this.bigBodyOrgArr[i].src = `./src/bigSwim${i}.png`
  }
}

momObj.prototype.draw = function() {
  // this
  this.x = lerpDistance(mx, this.x, 0.98);
  this.y = lerpDistance(my, this.y, 0.98);  // 0.98 运动的速度

  var deltaX = mx - this.x;
  var deltaY = my - this.y;
  var beta = Math.atan2(deltaY, deltaX) + Math.PI; // [-pi, pi]
  this.angle = lerpAngle(beta, this.angle, 0.6); // 旋转的角度

  this.bigTailTimer += deltaTime;
  if (this.bigTailTimer > 50) {
    this.bigTailCount = ++this.bigTailCount % 8;
    this.bigTailTimer %= 50;
  }

  this.bigEyeTimer += deltaTime;
  if (this.bigEyeTimer >= this.bigEyeInterval) {
    this.bigEyeCount = ++this.bigEyeCount % 2;
    this.bigEyeTimer = 0;

    if (this.bigEyeCount == 1) {
      this.bigEyeInterval = 300;
    } else {
      this.bigEyeInterval = Math.random() * 1500 + 2000;
    }
  }

  // console.log('this.bigEyeCount', this.bigEyeCount);
  let fishColor = {
    1: 'bigBodyOrgArr',
    2: 'bigBodyBlueArr'
  }

  ctx1.save();
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(this.bigTailArr[this.bigTailCount],  -this.bigTailArr[this.bigTailCount].width / 2 + 30, -this.bigTailArr[this.bigTailCount].height / 2);
  // console.log('data.double', data.double);
  // console.log('this[fishColor[data.double]', this[fishColor[data.double]]);
  ctx1.drawImage(this[fishColor[data.double]][this.bigBodyCount], -this[fishColor[data.double]][this.bigBodyCount].width / 2, -this[fishColor[data.double]][this.bigBodyCount].height / 2);
  ctx1.drawImage(this.bigEyeArr[this.bigEyeCount], -this.bigEyeArr[this.bigEyeCount].width / 2, -this.bigEyeArr[this.bigEyeCount].height / 2);
  ctx1.restore();
}

