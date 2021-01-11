
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bobDiameter,startBobPositionX,startBobPositionY;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter=40;
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;
	
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	  //bob1 = new bob(100,100,20);
	  
	bob2= new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	bob3= new bob(startBobPositionX,startBobPositionY,bobDiameter);

	bob4= new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);

	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	roof1 = new roof(width/2,height/4,width/7,20);

	rope1 = new rope (bob1.body,roof1.body,-bobDiameter*2,0);
	 
	rope2 = new rope (bob2.body,roof1.body,0,0);

	rope3 = new rope (bob3.body,roof1.body,bobDiameter,0);

	rope4 = new rope (bob4.body,roof1.body,+bobDiameter*2,0);

	rope5 = new rope (bob5.body,roof1.body,bobDiameter*2+15,0);
 	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
		 }
		 } 
		 function drawLine(constraint){ 
			 bobPosition=constraint.bodyA.position 
			 roofPosition=constraint.bodyB.position
			roofOffset=constraint.pointB; 
			 roofyX=roofPosition.x+roofOffset.x 
			 roofY=roofPosition.y+roofOffset.y 
			 line(bobPosition.x, bobPosition.y, roofX,roofY);
			 }



