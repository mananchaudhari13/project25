
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1= new Dustbin(600,540,200,40)
	side2= new Ground(480,510,40,100)
	side3= new Ground(720,510,40,100)
ground = new Ground(400,600,800,80)
paper=new Paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ground.display();
 side1.display();
 side2.display()
 side3.display()
 paper.display()
}
function keyPressed (){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-80})
	}
}


