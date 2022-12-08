var box;

function setup() {
  createCanvas(600,600);
  box= createSprite(200,200,50,50);
}



function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    box.x-=10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x+=10;
  }
  drawSprites();
}






