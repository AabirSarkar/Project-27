const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base,ball,string;

function setup(){
    var canvas = createCanvas(850,700);
    engine = Engine.create();
    world = engine.world;
    var base_options={
        isStatic: true
    }
    base = Bodies.rectangle(400,150,800,20,base_options);
    World.add(world,base);
    
    var ball_options={
        density:0.2,
        restitution:0.9,
        frictionAir:0
    }
    ball = Bodies.circle(100,250,40,ball_options);
    World.add(world,ball);
    
    var string_options={
        bodyA: base,
        bodyB: ball,
        stiffness:1,
        length: 300
    }
    string = Constraint.create(string_options);
    World.add(world,string);


    
   
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(base.position.x,base.position.y,200,20);
    
    strokeWeight(4);
    stroke(255);
    line(base.position.x,base.position.y,ball.position.x,ball.position.y);

    noStroke();
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(ball.position.x,ball.position.y,40);

    fill(255);
    text("SPACE ---> set position",600,600);
    text("R ---> to release",600,650);
    textSize(20);
    text("OSCILLATING PENDULUM",50,50);
   // Matter.Body.setAngularVelocity(ball, 2);

    if(keyCode===32){
        Matter.Body.setPosition(ball, {x:100,y:250})
        
    }
    if(keyCode===82){
        Matter.Body.setStatic(ball, false);
        //Matter.Body.applyForce(ball.body,ball.body.position, {x:20,y:20})
    }
   // ball.display();
    //attach.display();
    

}
