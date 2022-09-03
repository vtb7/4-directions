const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;
var btn3;
var btn4;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,700,2200,20);
  right = new Ground(1460,200,20,975);
  left = new Ground(10,200,20,970);

  top_wall = new Ground(1250,10,2460,20);
  btn1 = createImg("right.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hforce)



  btn2 = createImg("up.png")
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vforce)
  
  btn3 = createImg("down.png")
  btn3.position(20,300)
  btn3.size(50,50)
  btn3.mouseClicked(gforce)
  
  btn4 = createImg("left.png")
  btn4.position(220,300)
  btn4.size(50,50)
  btn4.mouseClicked(oforce)

  var balloptions={
    restitution:-0.95
    
  }
  ball = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball)
  ball2 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball2)
  ball3 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball3)
  ball4 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball4)
  ball5 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball5)
  ball6 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball6)
  ball7 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball7)
  ball9 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball9)
  ball10 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball10)
  ball11 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball11)
  ball8 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball8)
  ball12 = Bodies.circle(200,100,20,balloptions)
  World.add(world,ball12)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20) 
  ellipse(ball2.position.x,ball2.position.y,20) 
  ellipse(ball3.position.x,ball3.position.y,20) 
  ellipse(ball4.position.x,ball4.position.y,20) 
  ellipse(ball5.position.x,ball5.position.y,20) 
  ellipse(ball6.position.x,ball6.position.y,20) 
  ellipse(ball7.position.x,ball7.position.y,20) 
  ellipse(ball8.position.x,ball7.position.y,20) 
  ellipse(ball9.position.x,ball7.position.y,20) 
  ellipse(ball10.position.x,ball7.position.y,20) 
  ellipse(ball11.position.x,ball7.position.y,20) 
  ellipse(ball12.position.x,ball7.position.y,20) 
  text("Wait till all the balls hit the ground and then click a arrow of your choice.Have Fun!",700,600)
  textSize(20)
  

  
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0.05,y:0})
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0,y:-0.05})
}
function gforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:0,y:0.05})
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:0,y:0.05})
}
function oforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball6,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball8,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball9,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball10,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball11,{x:0,y:0},{x:-0.05,y:0})
  Matter.Body.applyForce(ball12,{x:0,y:0},{x:-0.05,y:0})

}