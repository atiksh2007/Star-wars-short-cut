var red,redimage;
var start,satrimage;
var START=1;
var REDPLAY=11;
var CHUCKPLAY=12;
var BOOMPLAY=13;
var CABAGEPLAY=14;
var END=0;
var STORY=5;
var STORY2=6;
var STORY3=7
var STORY4=8;
var COMIC1=9;
var CHOOSE=10;
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
var back6;
var back7;
var back8;
var next;
var nextimage;
var next2;
var next3;
var next4;
var next5;
var next6;
var skip;
var skipimage;
var backimage;
var asap;
var volumeimage;
var volume;
var jedi;
var jedimage;
var sith;
var sithimage;
var darth;
var darthimage;
var darthvader;
var deathstar;
var deathstarimage;
var comic1;
var comic1image;
var red3;
var boom3;
var chuck3;
var cabage3;






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
nextimage=loadImage("next.png");
  asap=loadSound('asap.mp3')
  jedimage=loadImage("jedi.jpg");
  sithimage=loadImage("sith.png");
  darthimage=loadImage("darth vader.jpg");
  deathstarimage=loadImage("death star.png");
  comic1image=loadImage("comic1.png");
  //volumeimage=loadImage("volume.png")
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
  start.scale=0.4;
  
  
  intro=createSprite(300,400);
  intro.addImage(introimage);
  intro.scale=0.3;
  
  
  starWars=createSprite(300,150);
  starWars.addImage(starWarsImage);
  starWars.scale=0.7;
  
  
  ch=createSprite(300,550);
  ch.addImage(chimage);
  ch.scale=0.3;
  
  
  back1=createSprite(500,100);
  back1.visible=false;
  back1.addImage(backimage);
  back1.scale=0.2;
  
  
  back2=createSprite(500,500);
  back2.visible=false;
  back2.addImage(backimage);
  back2.scale=0.2;
  
  
  next=createSprite(500,560);
  next.addImage(nextimage);
  next.scale=0.2
  next.visible=false;
  
  
  back3=createSprite(50,50);
  back3.visible=false;
  back3.scale=0.2;
  back3.addImage(backimage);
  
  
  volume=createSprite(50,530,10,10);
  
  jedi=createSprite(200,300);
  jedi.addImage(jedimage);
  jedi.visible=false;
  
  
  next2=createSprite(500,200);
  next2.addImage(nextimage);
  next2.scale=0.2;
  next2.visible=false;
  
  
  back4=createSprite(300,560);
  back4.visible=false;
  back4.addImage(backimage);
  back4.scale=0.2;
  
  
  back5=createSprite(500,550);
  back5.visible=false;
  back5.addImage(backimage);
  back5.scale=0.2;
  
  
  next3=createSprite(200,550);
  next3.visible=false;
  next3.addImage(nextimage);
  next3.scale=0.2;
  
  
  sith=createSprite(200,180);
  sith.addImage(sithimage);
  sith.scale=1;
  sith.visible=false;
  
  
  darth=createSprite(450,400);
  darth.addImage(darthimage);
  darth.visible=false;
  darth.scale=0.7;
  
  
  next4=createSprite(500,200);
  next4.addImage(nextimage);
  next4.visible=false;
  next4.scale=0.2;
  
  
  back6=createSprite(500,300);
  back6.addImage(backimage);
  back6.visible=false;
  back6.scale=0.2;
  
  
  deathstar=createSprite(100,200);
  deathstar.visible=false;
  deathstar.addImage(deathstarimage);
  deathstar.scale=0.5;
  
  
  comic1=createSprite(300,300);
  comic1.addImage(comic1image);
  comic1.scale=0.4;
  comic1.visible=false;
  
  
    back7=createSprite(300,560);
  back7.visible=false;
  back7.addImage(backimage);
  back7.scale=0.2;
  
  
  next5=createSprite(400,560);
  next5.addImage(nextimage);
  next5.visible=false;
  next5.scale=0.2;
  
  red3=createSprite(50,100);
  red3.visible=false;
  red3.addImage(redimage);
  red3.scale=0.2;
  
    boom3=createSprite(270,100);
  boom3.addImage(boomimage);
  boom3.scale=0.2;
  boom3.visible=false;
  
  chuck3=createSprite(480,100);
  chuck3.scale=0.2;
  chuck3.addImage(chuckimage);
  chuck3.visible=false;
  
    cabage3=createSprite(80,400);
  cabage3.addImage(cabageimage);
  cabage3.visible=false;
  cabage3.scale=0.4;
  
  next6=createSprite(500,300);
  next6.addImage(nextimage);
  next6.visible=false;
  next6.scale=0.2;
  
  
  back8=createSprite(300,300);
  back8.visible=false;
  back8.addImage(backimage);
  back8.scale=0.2
  
}







function draw() {
      background("black");
  
  
  
     if(keyWentDown("s")){
       song.play()
     }
  
  
  
  
  if(mousePressedOver(volume)){
    asap.play();
  }
  
  
  
  if(keyDown("d")){
    song.stop()
    asap.stop();
  }
  
  
  
  if(gamestate===START){
      intro.visible=true;
    starWars.visible=true;
    start.visible=true;
    back1.visible=false;
    next.visible=false;
    back3.visible=false;
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
  
  
  if(gamestate===STORY){
              intro.visible=false;
    back3.visible=true
    starWars.visible=false;
    start.visible=false;
    next.visible=true;
    jedi.visible=false;
    back4.visible=false;
    next2.visible=false;
    textSize(50);
    textFont("Impact");
    fill("red");
      text("STORY",250,50);
    textSize(100);
    fill("cyan")
text("THE LONG",130,200);
    text("TIME",210,320);
    text("FAR WAY",130,440);
    text("GALAXY",150,560);
    
    
    
    if(mousePressedOver(back3)){
      gamestate=START;
    }
    
    
    
    if(mousePressedOver(next)){
      gamestate=STORY2;
    }
    
    
    
  }
  
  if(gamestate===STORY2){
    back3.visible=false;
    next.visible=false;
    jedi.visible=true;
    next2.visible=true;
    back4.visible=true;
    back5.visible=false;
    next3.visible=false;
    sith.visible=false;
    darth.visible=false;
    textFont("horror");
    textSize(20);
    fill("cyan")
    text("The GALATIC ARMY have Conquered Whole STAR WARS GALAXY",10,50)
    text("ALL birds are being killed by this Empire",10,70);
    text("When the jedi got weaker empire takes advantage",10,90);
    text("Around 10,000 jedi are begin killed",10,110);
    text("Now only 2 are left Boom and Red",10,130);
    text("Jedi are the warrior which fight for the peace",10,150);
    textFont("Impact");
    fill("red")
    text("REBEL Symbol",400,300);
        textFont("horror");
    textSize(20);
    fill("cyan")
    text("Galctic Army have ruled the whole galaxy for 1 thousand years",10,450);
    text("Now the birds are ready to defeat them",10,470);
    
    
    
    if(mousePressedOver(next2)){
      gamestate=STORY3;
    }
    
    
    
    
    
    if(mousePressedOver(back4)){
      gamestate=STORY
    }
    
    
    
    
  }
  
  if(gamestate===STORY3){
    jedi.visible=false;
    next4.visible=false;
    next2.visible=false;
    back6.visible=false;
    back4.visible=false;
    back5.visible=true;
    next3.visible=true;
    sith.visible=true;
    darth.visible=true;
    deathstar.visible=false;
    
    
    
    if(mousePressedOver(back5)){
      gamestate=STORY2;
    }
    
    
    
    
        textFont("horror");
    textSize(20);
    fill("cyan")
    text("SITH are  the acient emeny of jedi which are fighting for",10,50);
    text("5 thousand years the aim of sith is to spread the fear",10,70);
    text("Sith are the people who stand up the Galactic Army",10,90);
    text("In this whole galaxy there are around 10 SITH ",10,270);
    text("THE PALATINE AND THE DARTH THE TWO ONLY SITH LORD ",10,290);
    text("which rule the galaxy",10,310);
    textSize(50);
    textFont("Impact");
    fill("red");
    text("DARTH VADER",50,400);
    
    
    
    
    
    if(mousePressedOver(next3)){
      gamestate=STORY4;
    
    }
    
    
    
    
  }
  
  
  if(gamestate===STORY4){
        sith.visible=false;
    darth.visible=false;
    next3.visible=false;
    back5.visible=false;
    next4.visible=true;
    back6.visible=true;
    back7.visible=false;
    deathstar.visible=true;
    comic1.visible=false;
    next5.visible=false;
    
    
    
    if(mousePressedOver(back6)){
      gamestate=STORY3
    }
    
    
    
    
      fill("red");
      textFont("Impact");
      textSize(30)
      text("MISSION DEATH STAR",150,50)
    fill("cyan");
    textFont("horror");
    textSize(20);
    text("This is the big mission of birds",10,300);
text("In which birds have to destroy",10,330);
    text("The huge pig planet death star",10,360);
    text("In next page there is a small comic",10,390);
    
    
    
    if(mousePressedOver(next4)){
      gamestate=COMIC1;
    }
    
    
    
    
  }
  
  
  if(gamestate===COMIC1){
    deathstar.visible=false;
    back7.visible=true;
    next6.vsible=false;
    next4.visible=false;
    back6.visible=false;
    comic1.visible=true;
    next5.visible=true;
    red3.visible=false;
    boom3.visible=false;
    cabage3.visible=false;
    chuck3.visible=false;
    back8.visible=false;
    next6.visible=false;
    
    if(mousePressedOver(back7)){
      gamestate=STORY4;
    }
    
    
    
    fill("red");
    textSize(40);
    textFont("Impact")
    text("Comic",250,50);
    
    if(mousePressedOver(next5)){
      gamestate=CHOOSE;
    }
    
  }
  
  
  if(gamestate===CHOOSE){
        red3.visible=true;
    boom3.visible=true;
   cabage3.visible=true;
    chuck3.visible=true;
    comic1.visible=false;
    back7.visible=false;
    next5.visible=false;
    next6.visible=true;
    back8.visible=true;
    red.visible=false;
    
    if(mousePressedOver(back8)){
      gamestate=COMIC1;
    }
    
    
        textSize(40);
    fill("red");
    textFont("Impact")
    text("RED",20,170);
    
    
        textSize(40);
    fill("red");
    textFont("Impact");
    text("BOOM",230,170);
    
        textSize(40);
    textFont("Impact");
    fill("red");
    text("Chuck",450,170);
    
        textSize(40);
    textFont("Impact");
    fill("red");
    text("Cabage",20,550)
    
    if(mousePressedOver(red3)){
      gamestate=REDPLAY;
    }
    if(mousePressedOver(chuck3)){
      gamestate=CHUCKPLAY
    }
      if(mousePressedOver(boom3)){
      gamestate=BOOMPLAY
    }
      if(mousePressedOver(cabage3)){
      gamestate=CABAGEPLAY
    }
  }
  
  if(gamestate===REDPLAY){
    red.visible=true;
    back8.visible=false;
    next6.visible=false;
    red3.visible=false;
    chuck3.visible=false;
    boom3.visible=false;
    cabage3.visible=false;
    var ground=createSprite(300,500,1000,150);
    red.collide(ground)
    
    
    red.velocityY=red.velocityY+2
  if(keyDown("space")&&red.y>200){
red.velocityY=-20
  }
    
    if(keyDown("left")){
      red.x=red.x+7
    }
    
    if(keyDown("right")){
      red.y=red.x-7;
    }
    
    
    
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
    text("If you are out of bullet dont worry press Up arrow key for sword.",50,350)
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