var bullet,wall;
var speed,mass;
var thickness,damage;
function setup(){
 createCanvas(1600,800);
 speed=random(40,60);
 mass=random(40,52);
 thickness=random(12,23);
 bullet=createSprite(50,400,40,10);
 bullet.shapeColor="yellow";
 bullet.velocityX=speed;
 wall=createSprite(1600-thickness/2,400,thickness,800);
}
function draw(){
 background(0);
 //collide(wall,bullet)
 if(collide(wall,bullet)){
 damage=(0.5*mass*speed*speed)/(thickness*thickness*thickness);
 console.log(damage);
 if(damage>10){
  wall.shapeColor="red";
 }else if(damage<10){
    wall.shapeColor="green";
  }
  else{wall.shapeColor="blue"}
 }
 drawSprites();
}