const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
const Detector = Matter.Detector;

var engine, world;
var ball1, ball2, ball3, canonBall;
let angle = 0;


function setup() {
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);


    ground = new Ground();
    canonBall = new CanonBall()
    tanker = new Tanker();
    ball1 = new Ball(300,40);
    ball2 = new Ball(400,60);
    ball3 = new Ball(500,50);
}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    canonBall.display();
    tanker.display();
    
    if(keyCode === RIGHT_ARROW){
        canonBall.display();
    }
    
    {translate(120,340);
    rotate(angle);
    rect(0, 0, 60, 20);
    if(keyCode === UP_ARROW && angle <= 0){
        angle = angle - 1;
    }
    else if(keyCode === DOWN_ARROW && angle >= -65){
        angle = angle + 1;
    }
    if(angle > 0){
        angle = 0;
    }
    if(angle < -65){
        angle = -65;
    }
    }
}