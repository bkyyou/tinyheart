function dustObj() {
  // this.x = [30, 100, 200, 300, 400, 500, 560];
  this.x = [];
  this.y = [];
  this.img = [];
  this.random = [];
  this.extent = [];
  this.curvature = 0;
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function() {
  for (let i = 0; i < 7; i++) {
    this.img[i] = new Image();
    this.img[i].src = `./src/dust${i}.png`;
  }

  for (let i = 0; i < this.num; i++) {
    this.random[i] = Math.floor(Math.random() * 7);
    this.x[i] = Math.random() * 800;
    this.y[i] = Math.random() * 600;
    this.extent[i] = Math.random() * 50 + 50;
  }
}

dustObj.prototype.draw = function() {
  this.curvature += deltaTime * 0.0008;
  var l = Math.sin(this.curvature);
  for (let i = 0; i < this.num; i++) {
    ctx1.drawImage(this.img[this.random[i]], this.x[i] + this.extent[i] * l, this.y[i]);
  }
}