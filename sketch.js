
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg;

function preload()
{
	dustbinImg = loadImage("images/dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//creates the paper
	paper = new Paper (200,120);

	//creates the dustbin
	dustbin = new Dustbin (400,591,10,100);
	dustbin1 = new Dustbin (600,591,10,100);
	dustbin2 = new Dustbin (500,640,200,10);

	
	//creates the ground
	ground = new Ground (400,650,800,20);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  dustbin.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();

  imageMode(CENTER);
  image(dustbinImg,500,570,300,150);

	if(paper.y-dustbin.y<paper.height/2+dustbin.height/2){
		paper.velocityY = 10;
	}

  
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500.51});
}

}


