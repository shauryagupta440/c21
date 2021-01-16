var a,b,c;
  

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 50);
  b=createSprite(200, 100, 30, 50);
  c=createSprite(200,300,10,60);
  a.shapeColor="red";
  b.shapeColor="red";
  a.velocityY=-3;
  b.velovityY=+3;

}

function draw() {
  background(0);  
 

   bounceOff(a,b);
  
  drawSprites();
}

