
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1;
var box2;
var box3;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-175, width,10);
	groundSprite.shapeColor=color(255);

	box1Sprite= createSprite(500, height-185, 200,15);
	box1Sprite.shapeColor=color("red");

	box2Sprite= createSprite(400, height-200, 15,45);
	box2Sprite.shapeColor=color("red");

	box3Sprite= createSprite(600, height-200, 15,45);
	box3Sprite.shapeColor=color("red");

	paper = new Paper(200,height-500 , 35);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
	 
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		  
		}
}



