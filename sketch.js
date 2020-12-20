var red,redimage;
var start,satrimage;
var START=1;
var PLAY=2;
var END=0;
var STORY=5;
var gamestate=START;
var IN=3;
var CH=4;
var intro,introimage;
var starWars;
var starWarsImage;
var ch;
var chimage;
var red2;
var boom;
var boomimage;
var boom2;
var chuck;
var chuckimage;
var chuck2;
var cabage;
var cabage2;
var cabageimage;
var sound;
var back1;
var back2;
var back3;
var back4;
var back5;
var skip;
var skipimage;
var backimage;

function preload(){
   song=loadSound("super.mp3")
redimage=loadImage("red.png");
  startimage=loadImage("start.png");
introimage=loadImage("intro.png");
  starWarsImage=loadImage("Untitled.png");
  chimage=loadImage("character.png");
  boomimage=loadImage("boom.png");
  chuckimage=loadImage("chuck.png");
  cabageimage=loadImage("cabage.png");
  backimage=loadImage("back.png")

}

function setup() {
 createCanvas(600,600);


  red=createSprite(200,450)
  red.addImage(redimage)
  red.scale=0.1;
  red.depth=2;
  
  red2=createSprite(50,100);
  red2.addImage(redimage);
  red2.scale=0.2;
  red2.visible=false;
  
  boom=createSprite(200,450);
  boom.addImage(boomimage);
  boom.scale=0.2;
  boom.deapth=2;
  boom.visible=false;
  
  boom2=createSprite(270,100);
  boom2.addImage(boomimage);
  boom2.scale=0.2;
  boom2.visible=false;
  
  chuck=createSprite(200,450);
  chuck.addImage(chuckimage);
  chuck.scale=0.2;
  chuck.visible=false;
  
  chuck2=createSprite(480,100);
  chuck2.scale=0.2;
  chuck2.addImage(chuckimage);
  chuck2.visible=false;
  
  cabage=createSprite(50,400);
  cabage.addImage(cabageimage);
  cabage.scale=0.3;
  cabage.visible=false;
  
  cabage2=createSprite(80,400);
  cabage2.addImage(cabageimage);
  cabage2.visible=false;
  cabage2.scale=0.4;

 start=createSprite(300,300);
  start.addImage(startimage);
  start.scale=0.4
  
  intro=createSprite(300,400);
  intro.addImage(introimage);
  intro.scale=0.3
  
  starWars=createSprite(300,150);
  starWars.addImage(starWarsImage);
  starWars.scale=0.7;
  
  ch=createSprite(300,550);
  ch.addImage(chimage);
  ch.scale=0.3
  
  back1=createSprite(500,100);
  back1.visible=false;
  back1.addImage(backimage);
  back1.scale=0.2
  
  back2=createSprite(500,500);
  back2.visible=false;
  back2.addImage(backimage);
  back2.scale=0.2;

}

function draw() {
      background("black");
     if(keyWentDown("s")){
       song.play()
     }
  if(keyDown("d")){
    song.stop()
  }
  if(gamestate===START){
      intro.visible=true;
    starWars.visible=true;
    start.visible=true;
    back1.visible=false;
red.visible=false;
    textSize(30);
    textFont("Impact");
    fill("red");
    text("Made by",250,500);
    text("ATIKSH",250,530);
    ch.visible=false;
if(mousePressedOver(intro)){
  gamestate=IN;
}
    if(mousePressedOver(start)){
      gamestate=STORY;
    }
  }
  
  //nedfyhevfiurgfuirgfurgfjewdjefhgfhrfhewfbhefvefvhefvehjgfvejvfjewvfjgev pending hvjreghvuregvuoreghufegr
  if(gamestate===STORY){
    
  }
  
  
  if(gamestate===IN){
    back1.visible=true;
    intro.visible=false;
    starWars.visible=false;
    start.visible=false;
    ch.visible=true
      red2.visible=false;
    boom2.visible=false;
    chuck2.visible=false;
    cabage2.visible=false
    back2.visible=false
    textSize(50);
    fill("red");
    textFont("Impact")
    text("Hello gamers",180,50);
    fill("yellow");
    textFont("horror");
    textSize(20);
    text("Use left arrow key to go left.",50,100);
  text("Use right arrow key to go right.",50,150)
    text("Use space key to jump.",50,200);
  text("Press ENTRE to shoot.",50,250);
    text("Bullet are limited for every level.",50,300);
    text("If you are out of bullet dont worries press Up arrow key for sword.",50,350)
    text("You will get 4 character and you have to choose.",50,400);
    text("Every charcter have different power.",50,450);
    text("Press S to play song and Press D to stop song",50,500)
    
    if(mousePressedOver(ch)){
      gamestate=CH;
    }
    
    if(mousePressedOver(back1)){
      gamestate=START;
    }
    
  }
  
  
  if(gamestate===CH){
    ch.visible=false;
    red2.visible=true
    boom2.visible=true;
    chuck2.visible=true;
    cabage2.visible=true;
    back2.visible=true
    back1.visible=false;
    
    if(mousePressedOver(back2)){
       gamestate=IN
       }
    
    textSize(40);
    fill("red");
    textFont("Impact")
    text("RED",20,170);
    textSize(20);
    textFont("horror");
    fill("yellow");
    text("He is an jedi he can",20,200);
    text("use sword and gun",20,230);
    text("His superpower is",20,260);
    text("Powerbeam",20,290);
    
    textSize(40);
    fill("red");
    textFont("Impact");
    text("BOOM",230,170);
    textSize(20);
    textFont("horror");
    fill("yellow");
    text("He is an orelous",230,200);
    text("and jedi.He can use",230,230);
    text("sword and gun his ",230,260);
    text("superpower is blast!",230,290)
    
    textSize(40);
    textFont("Impact");
    fill("red");
    text("Chuck",450,170);
    textSize(20);
    textFont("horrror")
    fill("yellow");
    text("He is a theif and he",430,200);
    text("can use gun and he",430,230);
    text("is superfast his super",430,260);
    text("power is misel",430,290);
    
    textSize(40);
    textFont("Impact");
    fill("red");
    text("Cabage",20,550)
    textSize(20);
    textFont("horror");
    fill("yellow");
    text("He is a fat bird and partner of chuck he uses gun",170,400);
    text("and utra sonic sound his superpower is smash",170,430)
    
  }
  
  drawSprites();
}