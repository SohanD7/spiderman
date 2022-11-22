const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world, ground;
var jumping_animations = [];
var standing_img = [];




function preload() 
{
  jumping_animations = [loadImage("assets/spiderman10.png"),loadImage("assets/spiderman1.png"),loadImage("assets/spiderman2.png"),loadImage("assets/spiderman3.png"),loadImage("assets/spiderman4.png"),loadImage("assets/spiderman5.png"),loadImage("assets/spiderman6.png"),loadImage("assets/spiderman7.png"),loadImage("assets/spiderman8.png"),loadImage("assets/spiderman9.png"),loadImage("assets/spiderman10.png")];
  standing_img = [loadImage("assets/spiderman10.png")];
  city_back = loadImage("assets/citybackground.jpg");
}

function setup() {

  createCanvas(windowWidth, windowHeight-5);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2, windowHeight-10, windowWidth, 5, "black");

  spiderman = new Spiderman(50,height-250,standing_img);

  block1 = new Ground(222,270,100,20,"black");
  block2 = new Ground(445,200,110,10,"black");
  block3 = new Ground(670,250,150,10,"black");
  block4 = new Ground(975,210,90,10,"black");

  const render = Matter.Render.create({
    element: document.body,
    engine: engine,
  });
  const mouseConstraint = Matter.MouseConstraint.create(
    engine, {element: document.body}
  );
  const runner = Matter.Runner.create();
  Matter.Events.on(runner, "tick", event => {
    if (mouseConstraint.body) {
      link1 = new Link(spiderman.body,mouseConstraint.body);
      //alert("message");
    }
  });
  // also possible, testing the condition on mousedown only:
  //Matter.Events.on(mouseConstraint, "mousedown", () => {
  //  if (mouseConstraint.body) {
  //    Matter.Composite.remove(engine.world, mouseConstraint.body);
  //  }
  //});
  Matter.Runner.start(runner, engine);
  Matter.Render.run(render);
  //link2 = new Link(spiderman.body,block1.body);
  o1 = Matter.Bodies.rectangle(600,600,100,100,{isStatic: true});
  o2 = Matter.Bodies.rectangle(200,500,50,100);
  World.add(world,o1);
  World.add(world,o2);
  console.log(o1);

}

function draw() {
  background(189);
  Engine.update(engine);
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  image(city_back,width/2,height/2,width,height);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  spiderman.display();
  spiderman.animate();
  if (keyIsDown(UP_ARROW))
  {
    spiderman.jump();
    console.log("1");
    spiderman.display();
  }
  //if (link1 != null){
    //link1.display();
  //}
  //link2.display();
  ellipse(600,600,100,100);
  o2.position.x = mouseX;
  o2.position.y = mouseY;
  push();
  fill("orange");
  rect(o2.position.x,o2.position.y,50,100);
  pop();
  //push();
  //fill("green");
  //pop();
}

/*function keyPressed()
{
  if (keyCode == 32)
  {
    spiderman.animate();
    spiderman.jump();
  }
}

function keyReleased()
{
  if (keyCode == 32)
  {
    spiderman.animation = standing_img;
  }
}*/

