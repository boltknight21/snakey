var snake;
var food;
var w,h; 
var rez=20

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
     w = floor(width / rez);
     h = floor(height / rez);
     frameRate(5);
     snake = new snake();
     foodLocation();
}


function foodLocation() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);
  
  }

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    } else if (key == ' ') {
    snake.grow();
  }

  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    console.log("END GAME");
    background(255, 0, 0);
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
drawSprites();

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
