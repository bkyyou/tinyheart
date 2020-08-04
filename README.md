## 绘制直线的api

* beginPath() 

起始点

* closepath() 

形成闭合的路径

* strokeStyle() 

设置样式

* stroke() 

开始绘制

* lineWidth 

设置当前的宽度

* lineCap   

设置线条的结束端样式

可以设置的样式： butt， round， square

* globalAlpha

设置透明度

* save()  和 restore()

表示 这两个api 之间的样式 只在他们之间起作用

```js
ctx2.save();
ctx2.globalAlpha = 0.6;
for (let i = 0; i < this.num; i++) {
  // beginPath moveTo lineTo storke strokeStyle lineWidth lineCap globalAlpha
  // console.log('ctx2', ctx2);
  ctx2.beginPath();
  ctx2.moveTo(this.x[i], canHeight);
  ctx2.lineTo(this.x[i], canHeight - this.len[i]);
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.strokeStyle = 'purple';
  ctx2.stroke();
}
ctx2.restore();
```

* translate()

* rotate()

* clearRect()

## 设置文字

* fillText()

```js
ctx1.fillText('source:' + this.source, canWidth / 2, canHeight - 50);
```

* 设置字体样式

```js
ctx1.shadowBlur = 10;
ctx1.shadowColor = 'white';
ctx1.fillStyle = 'white' || 'rgba()';
ctx1.font = '30px Verdana';
ctx1.textAlign = 'center'; // center right left
ctx1.fillText('GAMEOVER', canWidth / 2, canHeight / 2);
```

* 画圆

```js
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(x , y , r , 0, 2 * Math.PI, fasle);  // 位置，半径， 弧度， 方向（顺时针还是逆时针）
ctx.closePath();
ctx.strokeStyle = 'rgba()';
ctx.stroke();
```

Math.atan2(y, x);  [3.14， -3.14]
