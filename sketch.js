const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy_IMG,tree_IMG;

function preload()
{
  boy_IMG=loadImage("boy.png")
  tree_IMG=loadImage("tree.png")
}

function setup() {
  createCanvas(1200, 600);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,550,30)
	ground = new Ground(400,575,10000,10);
	mango1 = new mango(600,200,30)
	mango2 = new mango(700,180,30)
	mango3 = new mango(600,130,30)
	mango4 = new mango(750,260,30)
	mango5 = new mango(700,240,30)
	mango6 = new mango(520,200,30)
	mango7 = new mango(650,100,30)
  string = new elastic(stone.body,{x:135,y:443})
  
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  image(boy_IMG,100,350,200,300);
  image(tree_IMG,400,30,460,560);
  
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  string.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
  string.fly()
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:100, y:600})
    string.attach(stone.body);
  }
}