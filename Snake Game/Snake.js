class Snake{
    constructor(x,y,size){
        this.x = x
        this.y = y
        this.size = size
        this.tall = [{x:this.x , y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move(){
        if(this.rotateX == 1){
            newRect ={
                x:  this.tail[this.tail.lenght - 1].x + this.size,
                y:  this.tail[this.tail.lenght - 1].y

            }
        }else  if(this.rotateX == -1){
            newRect ={
                x:  this.tail[this.tail.lenght - 1].x - this.size,
                y:  this.tail[this.tail.lenght - 1].y

            }
        } else  if(this.rotateY == 1){
            newRect = {
                x:  this.tail[this.tail.lenght - 1].x ,
                y:  this.tail[this.tail.lenght - 1].y +  this.size

            }
        }else  if(this.rotateY == -1) {
            newRect ={
                x:  this.tail[this.tail.lenght - 1].x,
                y:  this.tail[this.tail.lenght - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)

    }
}

class Aplle{
    constructer(){
        console.log("apple")
        console.log(snake.size)
        var isTouching;
        while(true){
            isTouching = false;
            this.x = Math.floar(Math.random() * canvas.width / snake.size)
            this.y = Math.floar(Math.random() * canvas.height / snake.size)
            for (var i = 0; i < snake.tall; i++) {
               if(this.x == snake.tai[i].x && this.y == snake.tail[i].y){
                        isTouching = true
               }
            }
               console.log(this.x,this.y)
               this.size = snake.size
               this.color = "porpule"
               if(!isTouching){
                  break;
           }
        }
    }
}


var canvas = document.getElementById("canvas")

var snake =new snake(20,20,20);

var aplle = new aplle();

var canvasContext = canvas.getContext("2d"); 

window.onload =()=>{
    gameLoop();
}

function gameLoop(){
    setInterval(show,1000/20) // here 15 is our fps value
}

function show(){
    update();
    draw();
} 

function update(){
    canvasContext.clearRect(0,0 ,canvas.width , canvas.height,"black")
    console.log("Update")
   snake.move()
   eatApple()
   checkHitWall();

}

function checkHitWall(){
   var headTail = snake.tail[snake.tail.lenght - 1]
   if (headTail.x == snake.size){
        headTail.x = canvas.width - snake.size
   } else if (headTail.x == canvas.widh){
    headTail.x = 0
   } else if (headTail.y == snake.size){
    headTail.tail.y = canvas.height - snake.size
   } else if (headTail.y == canvas.height){
    headTail.y = 0
   }
}

function eatApple(){
    if(snake.tail[snake.tail.lenght - 1]. x == apple.x &&
        snake.tail[snake.tail.lenght - 1].y == apple.y ){
            snake.tail[snake.tail.lenght] = {x:apple.x,y : apple.y}
            apple = new Apple();
        }
}

function draw(){
    createRect(0,0,canvas.width, canvas.height, "black")
    createRect(0,0,canvas.width,canvas.height)
    for(var i = 0; i < snale.tail.lenght;i++){
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5,
            snake.size - 5 ,snake.size - 5,'white')
    }


canvasContext.front = "20px Arial"
canvasContext.fillStyle = "00FF42"
canvasContext.fillText("Score :"+ (snake.tail.lenght -1),canvas.width - 120 ,18 );
createRect(apple.x , apple.y ,apple.size,apple.size ,apple.color)

}   
    

function createRect(x,y,width ,height,color){
    canvasContext.fillStyle = color
    canvasContext.fillRect(x,y,width,height)
}

window.addEventListener("keydown",(event)=>{
   setTimeout( () =>{
    if(event.keyCode == 37 && snake.rotateX != 1){
      snake.rotatexX = -1
      snake.rotatexY = 0;
    }else  if(event.keyCode == 38 && snake.rotateY != 1){
        snake.rotatexX = 0
        snake.rotatexY = -1;
   }else  if(event.keyCode == 39 && snake.rotateX != 1){
    snake.rotatexX = 1
    snake.rotatexY = 0;
   }else  if(event.keyCode == 40 && snake.rotateY != 1){
    snake.rotatexX = 0
    snake.rotatexY = -1;
   }
   }, 1)
})