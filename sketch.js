var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(830,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5
    ball.velocityY = 5
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
 
    
    //write code to bounce off ball from the block1 
    if(isTouching(ball,block1)){
        ball.shapeColor = "blue";
        ball.velocityX = ball.velocityX * (-1)
        ball.velocityY = ball.velocityY * (-1)
        music.play();
    }
    if(isTouching(ball,block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(isTouching(ball,block4) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    if(isTouching(ball,block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
         ball.velocityX = 0
         ball.velocityY =0 
         music.stop()
        //write code to stop music
    }
    
    if(block1.isTouching(ball)||block3.isTouching(ball)||block4.isTouching(ball)){
    music.play()
    }

    //write code to bounce off ball from the block3
 
    //write code to bounce off ball from the block4

    drawSprites();
}

function isTouching(ob1,ob2){
    if(ob2.x-ob1.x < ob1.width/2 + ob2.width/2 && ob1.x - ob2.x < ob2.width/2 + ob1.width/2 &&
      ob2.y-ob1.y < ob1.height/2 + ob2.height/2 &&ob1.y - ob2.y < ob2.height/2 + ob1.height/2  ){
      
        return true
    }
    else {
  
      return false
  
    }
}