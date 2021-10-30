
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5; 

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	bobDiameter = 40;
	startPositionx = width/2;
	startPositiony = height/4+500;


	engine = Engine.create();
	world = engine.world;
	
	bob1=new bob(startPositionx-bobDiameter*2,startPositiony,bobDiameter);
	bob2=new bob(startPositionx-bobDiameter*2,startPositiony,bobDiameter);
	bob3=new bob(startPositionx-bobDiameter*2,startPositiony,bobDiameter);
	bob4=new bob(startPositionx-bobDiameter*2,startPositiony,bobDiameter);
	bob5=new bob(startPositionx-bobDiameter*2,startPositiony,bobDiameter);
	//paperObject=new paper(200,450,70);
	roof1=new roof(width/2,height/4,width/7,20);
	//dustbinObj=new dustbin(1200,650);
	//Create a Ground
	rope1=new rope(bob1.body,roof1.body,-bobDiameter*2, 0);
	rope2=new rope(bob2.body,roof1.body,-bobDiameter*2, 0);
	rope3=new rope(bob3.body,roof1.body,-bobDiameter*2, 0);
	rope4=new rope(bob4.body,roof1.body,-bobDiameter*2, 0);
	rope5=new rope(bob5.body,roof1.body,-bobDiameter*2, 0);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  //paperObject.display();
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
  //dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

    
  	}
}





