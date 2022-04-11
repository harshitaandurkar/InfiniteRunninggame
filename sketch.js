var background, spaceship, star, pinkstar, redstar, astroids;
var backgroundImg,spaceshipImg,starImg,pinkstarImg,redstarImg,astroidsImg;
var starCollection = 0;
var starG,pinkstarG,redstarG,astroidsGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  backgroundImg = loadImage("background.png");
  spaceshipImg = loadImage("spaceship.png");
  starImg = loadImage("star.png");
  pinkstarImg = loadImage("pinkstar.png");
  redstarImg = loadImage("redstar.png");
  astroidsImg = loadImage("astroids.png");

}

function setup() {

 createCanvas(600,600);
//moving background
background=createSprite(200,200);
background.addImage(backgroundImg);
background.velocityY = 4;


//creating spaceship flying
spaceship = createSprite(70,580,20,20);
spaceship.addImage(spaceshipImg);
spaceship.scale=0.08;


starG=new Group();
pinkstarG=new Group();
redstarG=new Group();
astroidsG=new Group();


}

function draw() {
 
  if(gameState===PLAY){
  spaceship.x = World.mouseX;

  edges = createEdgeSprites();
  spaceship.collide(edges);
   
  //code to reset the background
  if(background.y > 400){
    background.y = height/2;
  }
    
    createStar();
    createPinkStar();
    createRedStar();
    createAstroids();

    if(starG.istouching(spaceship)) {
      starG.destroyEach();
      starCollection=starCollection+50;
    }
    else if(pinkstarG.istouching(spaceship)) {
      pinkstarG.destroyEach();
      starCollection=starCollection+100;

    }else if(redstarG.isTouching(spaceship)) {
      redstarG.destroyEach();

      //starCollection=+ 150;
      //starCollection=+ 150;
      //starCollection=  starCollection - 150;
       starCollection= starCollection + 150;

    }else{
       if(swordGroup.isTouching(spaceship)){
         gameState=END;

         starG.destroyEach();
         pinkstarG.destroyEach();
         redstarG.destroyEach();
         astroidsG.destroyEach();

         starG.setVeocityYEach(0);
         pinkstar.setVeocityYEach(0);
         redstar.setVeocityYEach(0);
         astroids.setVeocityYEach(0);
        }
    }

  drawSprites();
  textSixe(20);
  fill(225);
  text("Stars: "+starsCollection,10,30);
  }

}

function createStar(){
 if(World.frameCount % 200 == 0) {
 var star = createSprites(Math.round(random(50, 350), 40, 10, 10));
 star.addImage(starImg);
 star.scale=0.12;
 star.velocityY= 3;
 star.lifetime = 150;
 starG.add(star);
  }
}

function createPinkStar() {
  if(World.frameCount % 410 == 0) {
  var pinkstar = createSprite(Math.round(random(50, 350),40, 10, 10));
  pinkstar.addImage(pinkstarImg);
  pinkstar.scale=0.13;
  pinkstar.velocityY = 3;
  pinkstar.lifetime = 150;
  pinkstarG.add(pinkstar);
  }
} 

function createAstroids() {
  if(World.frameCount % 530 == 0) {
  var astroids = createSprite(Math.round(random(50, 350),40, 10, 10));
  astroids.addImage(astroidsImg);
  astroids.scale=0.1;
  astroids.velocityY = 3;
  astroids.lifetime = 150;
  astroidsGroup = 150;
  }
}