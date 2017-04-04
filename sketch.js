var allMyBubbles = [];
var numOfBubbles = prompt("How Many Blood Cells Do You Want To See?");
var sizeOfBubble = 50;

function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
        allMyBubbles[i]= new Bubble(random(0,600),random(400,0));
    }
}

function draw(){
    background(0);
    for(var i = 0 ; i < allMyBubbles.length ;i++){
        allMyBubbles[i].display();
        allMyBubbles[i].move(); 
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(255, 0, 50, 125);
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBubble, sizeOfBubble);
    }
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}