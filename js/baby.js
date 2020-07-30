var babyObj = function() {
  this.x;
  this.y;
  this.angle;
  this.babyEye = new Image();
  this.babyBody = new Image();
  this.babyTail = new Image();

  this.babyTailArr = [];
  this.babyEyeArr = [];
  this.babyBodyArr = [];

  this.babyTailTimer;
  this.babyTailCount;

  this.babyEyeTimer;
  this.babyEyeTimeInterval;
  this.babyEyeCount;

  this.babyBodyTimer;
  this.babyBodyCount;
}

babyObj.prototype.init = function() {
  this.x = canWidth / 2 - 50;
  this.y = canHeight / 2 + 50;
  this.angle = 0;
  this.babyEye.src = './src/babyEye0.png';
  this.babyBody.src = './src/babyFade0.png';
  this.babyTail.src = './src/babyTail0.png';

  this.babyTailTimer = 0;
  this.babyTailCount = 0;
  for (let i = 0; i < 8; i++) {
    this.babyTailArr[i] = new Image();
    // console.log('`./src/babyTail${i}`', `./src/babyTail${i}.png`);
    this.babyTailArr[i].src = `./src/babyTail${i}.png`;
  }

  this.babyEyeTimer = 1000;
  this.babyEyeTimeInterval = 3000;
  this.babyEyeCount = 0;
  for (let i = 0; i < 2; i++) {
    this.babyEyeArr[i] = new Image();
    this.babyEyeArr[i].src = `./src/babyEye${i}.png`;
  }

  this.babyBodyTimer = 0;
  this.babyBodyCount = 0
  for (let i = 0; i < 20; i++) {
    this.babyBodyArr[i] = new Image();
    this.babyBodyArr[i].src = `./src/babyFade${i}.png`;
  }
  console.log('this.babyBodyArr', this.babyBodyArr);
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

  // this.babyEyeTimer += deltaTime;
  // if (this.babyEyeTimer <= 200) {
  //   this.babyEyeCount = 1
  // }
  // if (this.babyEyeTimer > 200) {
  //   this.babyEyeCount = 0;
  //   if (this.babyEyeTimer > this.babyEyeTimeInterval) {
  //     this.babyEyeTimer = 0;
  //     this.babyEyeTimeInterval = Math.random() * 1500 + 2000;
  //   }
  // } else {
  //   // this.babyEyeCount = 0;
  // }

  this.babyEyeTimer += deltaTime;
  if(this.babyEyeTimer > this.babyEyeTimeInterval) {
    this.babyEyeCount = ++this.babyEyeCount % 2;
    // this.babyEyeTimer = 0;
    this.babyEyeTimer %= this.babyEyeTimeInterval;

    if (this.babyEyeCount == 0) {
      this.babyEyeTimeInterval = Math.random() * 1500 + 2000;
    } else {
      this.babyEyeTimeInterval = 200;
    }
  }
  // console.log('this.babyTailCount', this.babyTailCount);


  this.babyBodyTimer += deltaTime;
  console.log('deltaTime', deltaTime);
  console.log('this.babyBodyTimer', this.babyBodyTimer);
  if (this.babyBodyTimer > 30) {
    this.babyBodyCount++;
    this.babyBodyTimer %= 30;
    if (this.babyBodyCount > 19) {
      this.babyBodyCount = 0;
    }
  }

  console.log('this.babyBodyCount', this.babyBodyCount);

  ctx1.save()
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  // ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
  ctx1.drawImage(this.babyTailArr[this.babyTailCount], -this.babyTailArr[this.babyTailCount].width * 0.5 + 23, -this.babyTailArr[this.babyTailCount].height * 0.5);
  ctx1.drawImage(this.babyBodyArr[this.babyBodyCount], -this.babyBodyArr[this.babyBodyCount].width * 0.5, -this.babyBodyArr[this.babyBodyCount].height * 0.5);
  // ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5 , -this.babyEye.height * 0.5);
  ctx1.drawImage(this.babyEyeArr[this.babyEyeCount], -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
  ctx1.restore();
}