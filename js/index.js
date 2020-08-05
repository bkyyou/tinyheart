
let can1;
let can2;

let ctx1;
let ctx2;

let canWidth;
let canHeight;

let deltaTime;
let lastTime;

let bgPic = new Image();

let data;
let ane;
let fruit;
let mom;
let mx;
let my;
let baby;
let wave;
let halo;
let dust;

function game() {
  init();
  lastTime = Date.now()
  deltaTime = 0;
  gameloop();
}

document.body.onload = game;

function init() {
  can1 = document.getElementById('canvas1'); // fishers , dust, ui , circle
  can2 = document.getElementById('canvas2'); // background ane fruits

  ctx1 = can1.getContext('2d');
  ctx2 = can2.getContext('2d');

  ctx1.fillStyle = 'white';
  ctx1.font = '30px Verdana';
  ctx1.textAlign = 'center'; // center right left

  
  canWidth = can1.width;
  canHeight = can1.height;
  
  mx = canWidth / 2;
  my = canHeight / 2;
  
  bgPic.src = './src/background.jpg';
  
  ane = new aneObj();
  ane.init();
  // bgPic.onload = function() {
    //   drawBackground();
    //   // 循环
    //   ane.draw();
    // }
    // 暂时放着；
    // console.log('this.ane.x', ane.x);
    
  data = new dataObj();
  data.init();

  can1.addEventListener('mousemove', onMouseMove);
    
  fruit = new fruitObj();
  fruit.init();

  mom = new momObj();
  mom.init();

  baby = new babyObj();
  baby.init();

  wave = new waveObj();
  wave.init();

  halo = new haloObj();
  halo.init();

  dust = new dustObj();
  dust.init();
}

function onMouseMove(e) {
  if (data.gameOver) return;
  if (e.offsetX || e.layerX) {
    mx = e.offsetX || e.offsetX;
    my = e.offsetY || e.offsetY;
    // console.log('mx', mx, my);
  }
}

function gameloop() {
  // console.log('gameloop')
  window.requestAnimFrame(gameloop);
  // drawBackground();

  var currentTime = Date.now();
  deltaTime = currentTime - lastTime;
  // if (deltaTime > 40) deltaTime = 40;
  lastTime = currentTime;

  // ctx2 绘制的
  drawBackground();
  ane.draw();
  fruit.draw();

  // ctx1 绘制的
  ctx1.clearRect(0, 0, canWidth, canHeight);
  mom.draw();

  baby.draw();
  momFruitsCollision()
  momBabyCollision();
  data.draw();
  wave.draw();
  halo.draw();
  dust.draw();
}