const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var base, bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload() {
	
}

function setup() {
	createCanvas(400, 700);

	engine = Engine.create();
	world = engine.world;
	
	base = Bodies.rectangle(200, 100, 200, 50, {'isStatic': true});
	World.add(world, base);
	bob1 = new Bob(80, 200, 25, 25);
	chain1 = new Chain(base.body, bob1.body);
	//Create the Bodies Here.

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  	background(0);
	  Engine.update(engine);
	rectMode(CENTER);
	rect(base.position.x, base.position.y, 200, 50);
	bob1.display();
	//chain1.display();
}