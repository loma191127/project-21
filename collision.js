var fixedRect, movingRect;
var f2,m2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  f2 = createSprite(50, 300, 50, 80);
  f2.shapeColor = "green";
  f2.debug = true;
  m2 = createSprite(1100, 300,80,30);
  m2.shapeColor = "green";
  m2.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  m2.velocityX = -5;
  f2.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
bounceOff(m2,f2);  
  drawSprites();
}
