function setup() {
  createCanvas(800,400);
  box = createSprite(400, 200, 50, 50);
  box.shapeColor="white";
}

function draw() {
  background("Grey");
  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5
  }  
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-5
  } 
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-5
  } 
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+5
  }    
  drawSprites();
}