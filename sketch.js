
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var groundObject;
var dustbinObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,600,70);
	groundObject=new ground(width/2,670,width,20);
    dustbinObject=new dustbin(600,640,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paperObject.display();
groundObject.display();
dustbinObject.display();



  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:145,y:-145})

}

}



