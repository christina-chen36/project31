const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var drop, umbrella;

var drops = [];

var thunder;
var thunder1, thunder2;
var thunderCreatedFrame;

function preload() {
  thunder1 = loadImage("lightning.png");
  thunder2 = loadImage("lightning2.jpg");
}

var maxDrops = 100;

function setup() {
  createCanvas(800, 1000);

  engine = Engine.create();
  world = engine.world;

  drop = new Drops(200, 200);
  umbrella = new Umbrella(400, 800);

  for (var i = 0; i < maxDrops; i++) {
    drops.push(new Drops(random(0, 800), random(0, 1000)));
  }
}

function draw() {
  background(0);

  Engine.update(engine);
  drop.display();
  drop.update();
  umbrella.display();
  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    drops[i].update();
  }
  rand = Math.round(random(1, 2));
  if (frameCount % 80 == 0) {
    if (thunder) {
      thunder.remove();
    }
    thunder = createSprite(random(10, 770), random(10, 30), 10, 10);
    thunderCreatedFrame = frameCount;
    switch (rand) {
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
    }
    console.log(thunder);
    thunder.scale = random(0.3, 0.6);
  }

  drawSprites();
}
