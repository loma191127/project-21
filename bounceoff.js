var fixedRect, movingRect;

var obj1, obj2 , obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200, 200, 50, 80);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(100, 700, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(300, 100, 50, 80);
  obj3.shapeColor = "green";
  obj3.shapeColor = "green";
  obj3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  // calling the func
  if(isTouching(movingRect, obj1)){
    movingRect.shapeColor = "red";
    obj1.shapeColor = "red";
  }else if(isTouching(movingRect,obj2)){
    movingRect.shapeColor = "red";
    obj2.shapeColor = "red";
  }  else{
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
  }
  drawSprites();
}
// definiton of a func
