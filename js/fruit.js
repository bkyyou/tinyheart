var fruitObj = function() {
  this.alive = [];
  this.orange = new Image();
  this.blue = new Image();
  this.fruitType = [];

  this.x = [];
  this.y = [];
  this.l = [];
  this.spd = [];
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.alive[i] = true;
    this.x[i] = 0;
    this.y[i] = 0;
    this.spd[i] = Math.random() * 0.01 + 0.005; // [0.01, 0.015)
    this.born(i);
  }
  this.orange.src = './src/fruit.png'
  this.blue.src = './src/blue.png'
}

fruitObj.prototype.draw = function() {
  // console.log('fruit draw');
  var pic;
  for (let i = 0; i < this.num; i++) {
    // if (Math.random() < 0.3) {
    //   pic = this.blue;
    // } else {
    //   pic = this.orange;
    // }
    // console.log(this.x[i])
    // console.log(this.y[i])
    if (this.alive[i]) {
      if (this.l[i] < 14) {
        this.l[i] = this.l[i] + this.spd[i] * deltaTime;
        if (this.l[i] > 14) {
          this.l[i] = 14;
        }
      } else {
        this.y[i] -= this.spd[i] * 7 * deltaTime;
      }
      ctx2.drawImage(this.fruitType[i], this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);

      if (this.y[i] < 10) {
        this.alive[i] = false;
      }
    }
  }
  this.fruitMonitor();
}

// 每次出生的位置
fruitObj.prototype.born = function(i) {
  var aneId = Math.floor(Math.random() * ane.num);
  this.x[i] = ane.x[aneId];
  this.y[i] = canHeight - ane.len[aneId];
  this.l[i] = 0;
  this.fruitType[i] = Math.random() < 0.3 ? this.blue : this.orange;
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

