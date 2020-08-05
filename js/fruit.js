var fruitObj = function() {
  this.alive = [];
  this.orange = new Image();
  this.blue = new Image();
  this.fruitType = [];
  this.fruitColor = [];

  // this.effectsArr = [];

  this.x = [];
  this.y = [];
  this.l = [];
  this.spd = [];
  this.aneId = [];
  this.first = [];
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.alive[i] = true;
    this.x[i] = 0;
    this.y[i] = 0;
    this.spd[i] = Math.random() * 0.01 + 0.005; // [0.01, 0.015)
    this.born(i);
    this.first[i] = true;
  }
  this.orange.src = './src/fruit.png'
  this.blue.src = './src/blue.png'
}

fruitObj.prototype.draw = function() {
  // console.log('fruit draw');
  var pic;
  // this.effects();

  for (let i = 0; i < this.num; i++) {
    // if (Math.random() < 0.3) {
    //   pic = this.blue;
    // } else {
    //   pic = this.orange;
    // }
    // console.log(this.x[i])
    // console.log(this.y[i])
    // 存活
    if (this.alive[i]) {
      // 果实的大小慢慢变大
      if (this.l[i] < 14) {
        this.l[i] = this.l[i] + this.spd[i] * deltaTime;
        if (this.l[i] > 14) {
          this.l[i] = 14;
        }
        ctx2.drawImage(this.fruitType[i], ane.currentx[this.aneId[i]] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        this.x[i] = ane.currentx[this.aneId[i]] - this.l[i] * 0.5;

      } else {
        this.y[i] -= this.spd[i] * 7 * deltaTime;
        if (this.first[i]) {
          // this.x[i] = ane.currentx[this.aneId[i]] - this.l[i] * 0.5;
        }
        this.first[i] = false;
        ctx2.drawImage(this.fruitType[i], this.x[i], this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        // ctx2.drawImage(this.fruitType[i], ane.currentx[this.aneId[i]] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
      }
      // if (this.fruitColor[i] == 'blue') {
      //   console.log('blue=========')
      //   data.double = 2;
      // }
      if (this.y[i] < 10) {
        this.alive[i] = false;
        this.first[i] = true;
      }
    }
  }

  this.fruitMonitor();
}

// 每次出生的位置
fruitObj.prototype.born = function(i) {
  var aneId = Math.floor(Math.random() * ane.num);
  var random = Math.random();
  // this.x[i] = ane.x[aneId];
  this.x[i] = ane.currentx[aneId];
  this.y[i] = ane.heady[aneId];
  this.l[i] = 0;
  this.aneId[i] = aneId;
  this.fruitType[i] = random < 0.3 ? this.blue : this.orange;
  this.fruitColor[i] = random < 0.3 ? 'blue' : 'orange';
}

fruitObj.prototype.fruitMonitor = function() {
  var num = 0;
  for (let i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      num++;
    }
  }
  if (num < 15) {
    this.sendFruit();
  }
}

fruitObj.prototype.sendFruit = function() {
  let i = 0;
  for (i = 0; i < this.num; i++) {
    if (!this.alive[i]) {
      this.alive[i] = true;
      break;
    }
  }
  this.born(i);
}

fruitObj.prototype.dead = function(i) {
  this.alive[i] = false;
}

fruitObj.prototype.effects = function() {
  // ctx2.save();
  for (let i = 0; i < this.effectsArr.length; i++) {
    ctx2.beginPath();
    ctx2.strokeStyle = "blue";
    ctx2.arc(this.effectsArr[i].x, this.effectsArr[i].y, this.effectsArr[i].r, 0, 2 * Math.PI);
    ctx2.stroke();
    this.effectsArr[i].r += deltaTime * 0.01;
    // console.log('this.effectsArr[i].r', this.effectsArr[i].r);
    if (this.effectsArr[i].r >= 40) {
      this.effectsArr.shift()
    }
  }
  // ctx2.restore();
}

