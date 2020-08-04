// 判断大鱼和果实的距离
function momFruitsCollision() {
  if (!data.gameOver) {
    for (let i = 0; i < fruit.num; i++) {
      if (fruit.alive[i]) {
        var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
        if (l < 900) {
          // fruit.effectsArr.push({
          //   x: fruit.x[i],
          //   y: fruit.y[i],
          //   r: deltaTime
          // })
          wave.born(fruit.x[i], fruit.y[i]);
          fruit.dead(i);
          data.total++;
          mom.bigBodyCount = ++mom.bigBodyCount % 8;
          // console.log(' mom.bigBodyCount',  mom.bigBodyCount);
          if (fruit.fruitColor[i] == 'blue') {
            data.double = 2;
          }
        }
      }
    }
  }
}

// 判断 大鱼 和 小鱼的距离
function momBabyCollision() {
  var l = calLength2(mom.x, mom.y, baby.x, baby.y);
  if (l < 900 && !data.gameOver && data.total != 0) {
    baby.babyBodyCount = 0;
    mom.bigBodyCount = 0;
    halo.born(mom.x, mom.y);
    // data.reset();
    data.getSource();
  }
}