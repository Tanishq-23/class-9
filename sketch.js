var box1
function setup() {
  createCanvas(400,400);
box1 = createSprite(200,200,50,50)

}

function draw() 
{
  background(30);
if(keyDown("right")){
  box1.x=box1.x+5

}
if(keyDown("left")){
  box1.x=box1.x-5

}


  drawSprites()
}





