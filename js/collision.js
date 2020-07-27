// 判断大于和过时的距离
function momFruitsCollision() {
  for (let i = 0; i < fruit.num; i++) {
    var l = calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
    if (l < 900) {
      fruit.dead(i);
    }
  }
}