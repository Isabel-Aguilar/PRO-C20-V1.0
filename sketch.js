const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ballImg;

var ball1;
//var floor;
var wall1;
var wall2;
var ceiling;
var ball2;
var cube;
var piso;

var button;

function preload(){
  ballImg = loadImage("ball.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Creacion de botones
button = createImg("ball.png");
button.position(windowWidth/2+100, windowHeight/2+100);
button.size(50,50);
button.mouseClicked(fuerza);

  engine = Engine.create();
  world = engine.world;
  
   var ball_parameters = {
    restitution: 1.3,
    frictionAir:0.01
  }
   
   var static ={
     isStatic: true
   }

   var affectedByGravity ={
     isStatic: false
   };
  //anexar el objeto piso al borde inferior 
    piso = new Ground(500, 500, 20, 20);
  //floor = Bodies.rectangle(windowWidth/2,(windowHeight/2)+200,1400,20,static);
  //World.add(world,floor);

  cube = Bodies.rectangle(windowWidth/2,(windowHeight/2),50,50, affectedByGravity);
  World.add(world,cube);

  cube1 = Bodies.rectangle(windowWidth/2+10,windowHeight/2,60,60, static);
  World.add(world,cube1);
  
  wall1 = Bodies.rectangle((windowWidth/2)+200,windowHeight/2,20,400,static);
  World.add(world,wall1);

  wall2 = Bodies.rectangle((windowWidth/2)-200,windowHeight/2,20,400,static);
  World.add(world,wall2);

  ceiling = Bodies.rectangle(windowWidth/2,(windowHeight/2)-200,400,20,static);
  World.add(world,ceiling);

  ball1 = Bodies.circle(windowWidth/2,(windowHeight/2)-200,20,ball_parameters);
  World.add(world,ball1);

  ball2 = Bodies.circle(windowWidth/2,(windowHeight/2)-200,30,ball_parameters);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  piso.show();

  fill("red")
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,30);
  fill("blue")
  rect(cube.position.x,cube.position.y,50,50);
  rect(cube1.position.x,cube1.position.y,60,60);
  //rect(floor.position.x,floor.position.y,1400,20);
  rect(wall1.position.x,wall1.position.y,20,400);
  rect(wall2.position.x,wall2.position.y,20,400);
  rect(ceiling.position.x,ceiling.position.y,400,20);
}

function fuerza()
{
  Matter.Body.applyForce(ball1, {x:0,y:0},{x:0,y:-0.02});
}
