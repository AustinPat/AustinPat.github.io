canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
var segments = [];
var image = new Image();
image.src = "https://my.vetmatrixbase.com/clients/12679/images/cats-animals-grass-kittens--800x960.jpg";
//initialize the game pieces
function gamePiece(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.color = color;
}
//create the snake's head
var head = new gamePiece(0, 0, "yellow");
var head = new gamePiece(0, 0, "yellow");
//zero out his x y stuff
head.dirX = 0;
head.dirY = 0;
//declare the move method of the head
head.move = function () {
    //change the x and y location
    this.x = this.x + 20 * this.dirX;
    this.y = this.y + 20 * this.dirY;
    //check for the walls
    if (this.x < 0) {
        reset();
    }
    if (this.y < 0) {
        reset();
    }
    if (this.x > 480) {
        reset();
    }
    if (this.y > 480) {
        reset();
    }
}
//universal hit test for head and all other objects
//create a hit test for the head
head.hitTest = function (ob) {
    if (this.x < ob.x + ob.size && this.x + this.size > ob.x && this.y < ob.y + ob.size && this.y + this.size > ob.y) {
        return true
    }
    return false;
};

//create the food
var food = new gamePiece(20, 20, "salmon");
//move the food to a random new location when I eat it
food.move = function () {
    //random number generation
    var x = Math.floor(Math.random() * 25) * 20;
    var y = Math.floor(Math.random() * 25) * 20;
    this.x = x;
    this.y = y;
}
//reset function
function reset() {
    //place head in center of board
    head.x = 240;
    head.y = 240;
    //make sure it doesn't move
    head.dirX = 0;
    head.dirY = 0;
    //clear the segments array
    segments = [];
}
reset();
/**
draw the game
**/
function draw() {
    //move the head
    head.move();
    //collision detection
    if (head.hitTest(food) === true) {
        food.color = "white";
        food.move();
        //add a snake segment into the game
        // for(i = 0; i < 4; i++){
        var segment = new gamePiece(-100, -100, "red");
        segments.push(segment);
        // }
        //alert(segments);
    } else {
        food.color = "pink";
    }
    //first the game board
    context.fillStyle = randomColor();
    context.fillRect(0, 0, 500, 500);
    // context.drawImage(image, 0, 0, 500, 500);
    //then the head
    context.fillStyle = head.color;
    context.fillRect(head.x, head.y, head.size, head.size);
    //then the food
    context.fillStyle = food.color;
    context.fillRect(food.x, food.y, food.size, food.size);
    //then the segments
    for (i = 0; i < segments.length; i++) {

        context.fillStyle = segments[i].color;
        context.fillRect(segments[i].x, segments[i].y, segments[i].size, segments[i].size);
    }
    //move the segments except the first one
    for (i = segments.length - 1; i > 0; i--) {
        //check for collision
        if (head.hitTest(segments[i])) {
            //reset game because you lost
            reset();
        }
        segments[i].x = segments[i - 1].x;
        segments[i].y = segments[i - 1].y;

    }
    //move the first segment
    if (segments.length > 0) {
        segments[0].x = head.x;
        segments[0].y = head.y;
    }

}
//set it up so that it constantly draws
var thread = setInterval(draw, 50);


/**
key controls
**/
document.onkeydown = function (e) {
    //capture the event
    e = window.event || e;
    //get the key code
    var key = e.keyCode;
    //prevent default event behavior
    e.preventDefault();
    //establish my own behavior
    //right arrow
    if (key == 39) {
        head.dirX = 1;
        head.dirY = 0;
    }
    //left arrow
    if (key == 37) {
        head.dirX = -1;
        head.dirY = 0;
    }
    //up arrow
    if (key == 38) {
        head.dirX = 0;
        head.dirY = -1;
    }
    //down arrow
    if (key == 40) {
        head.dirX = 0;
        head.dirY = 1;
    }
};
function randomColor() {
    var r = Math.round(Math.random() * 70);
    var g = Math.round(Math.random() * 20);
    var b = Math.round(Math.random() * 20);
    var color = "rgba(" + r + ", " + g + ", " + b + ",.5)";
    return color;
}