const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,leftwall,rightwall;
var bridge;
var jointpoint,jointlink;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height,width,20);
  leftwall = new Base(50,height/2 + 100,100,150);
  rightwall = new Base(width - 50,height/2 + 100,100,150);
  bridge = new Bridge(24,{x:0, y:height/2 + 100});
  jointpoint = new Base(width - 100, height/2 + 100,40,20);
  Matter.Composite.add(bridge.body, jointpoint);
  jointlink = new Link(bridge, jointpoint);

  for(var i = 0; 1 <= 8; i++) {
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  leftwall.display();
  rightwall.display();
  bridge.show();
  jointpoint.display();

  for(var stone of stones) {
    stone.display();
  }
}
