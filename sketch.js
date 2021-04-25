
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;
Mouse = Matter.Mouse;
MouseConstraint = Matter.MouseConstraint

var ball, ball2, ball3, ball4, ball5;
var roof, roof2, roof3, roof4, roof5;
var chain, chain2, chain3, chain4, chain5;
var canvas;
function preload() {

}

function setup() {
	canvas = createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();
 let options = {
	 mouse:canvasmouse
 };
mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint)
	Engine.run(engine);
	roof = new Ground(300, 50, 600, 10);
	// roof2 = new Ground(400, 50, 120, 10);
	// roof3 = new Ground(200, 50, 120, 10);
	// roof4 = new Ground(100, 50, 120, 10);
	// roof5 = new Ground(500, 50, 120, 10);
	ball = new Pendulum(200, 400, "white");
	ball2 = new Pendulum(400, 400, "white");
	ball3 = new Pendulum(300, 400, "white");
	ball4 = new Pendulum(500, 400, "white");
	ball5 = new Pendulum(100, 400, "white");
	chain = new Sling(ball5.body, { x: 100, y: 50 });
	chain2 = new Sling(ball.body, { x: 200, y: 50 });
	chain3 = new Sling(ball3.body, { x: 300, y: 50 });
	chain4 = new Sling(ball2.body, { x: 400, y: 50 });
	chain5 = new Sling(ball4.body, { x: 500, y: 50 });


	//Create the Bodies Here.




}


function draw() {
	rectMode(CENTER);
	background("black");
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	chain.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	roof.display();

	ball.display();
	drawSprites();

}

