
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

//bobObject1, bobObject2, bobObject3, bobObject4, bobObject5

var ball_options ={
    isStatic: true
}

ball1 = Bodies.rectangle(1000,494,250,15,ball_options);
World.add(world,ball1);

ball2= Bodies.rectangle(872,427,15,150,ball_options);
World.add(world,ball2);

ball3 = Bodies.rectangle(1132,427,15,150,ball_options);
World.add(world,ball3);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

   rect(ball1.position.x,ball1.position.y,250,15);
  rect(ball2.position.x,ball2.position.y,15,190-7);
  rect(ball3.position.x,ball3.position.y,15,200-17);


  background(0);
  
  drawSprites();
 
}



