var fixrect, movingrect;
function setup() {
createCanvas(1200,800);
fixrect=createSprite(400,100, 90, 50);
fixrect.shapeColor="green";
fixrect.debug=true;
fixrect.velocityY=5;

movingrect=createSprite(400,800,50,90);
movingrect.shapeColor="green";
movingrect.debug=true;
movingrect.velocityY=-5;

}

function draw() {
  background(0);  

  //movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;



bounce(movingrect,fixrect);  
  drawSprites();
}

function bounce(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2
    ){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2&&
      object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}