const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(45,40,30);

	ground = new Ground(600,675,1200,20);

	line1 = createSprite(490.6,height-85,20,100);
	line1.shapeColor = color("red");

	line2 = createSprite(590,height-45,200,20);
	line2.shapeColor = color("red");

	line3 = createSprite(690,height-85,20,100);
	line3.shapeColor = color("red");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
paper.display();

line1.display();
line2.display();
line3.display();

ground.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		
		Matter.Body.setStatic(paper, false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}
