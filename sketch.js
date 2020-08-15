var fixedrectangle, movingrectangle;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedrectangle = createSprite(600, 100, 50, 80);
  fixedrectangle.shapeColor = "green";
 
  movingrectangle = createSprite(800, 400,80,30);
  movingrectangle.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  
  gameObject2.velocityX=-5;
  gameObject3.velocityX=+5;


}

function draw() {
  background(0,0,0);  

  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  
  if(isTouching(movingrectangle, gameObject1)){
    movingrectangle.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingrectangle.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  bounce(gameObject2,gameObject3);


  drawSprites();
}

