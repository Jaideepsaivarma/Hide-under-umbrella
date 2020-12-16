const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//loading Images....
var Walking_ani;
var thunder1,thunder2,thunder3,thunder4;

var thunderGroup;

var particles = [];


function preload(){
 thunder1 = loadImage("images/thunderbolt/1.png");
 thunder2 = loadImage("images/thunderbolt/2.png");
 thunder3 = loadImage("images/thunderbolt/3.png");
 thunder4 = loadImage("images/thunderbolt/4.png");
 Walking_ani = loadImage("images/Walk/walking_1.png","images/Walk/walking_2.png","images/Walk/walking_3.png","images/Walk/walking_4.png","images/Walk/walking_5.png","images/Walk/walking_6.png","images/Walk/walking_7.png","images/Walk/walking_8.png")
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    thunderGroup = new Group();

    man = createSprite(200,300,100,100);
    man.addAnimation("jai",Walking_ani);
    
    man.scale = 0.3;
    
    U_ball = new U(200,260);
  
    Engine.run(engine);

}

function draw(){
    
    
    background(0);
   

    if(frameCount%50===0){
        CreateThunder();
    }
    man.changeAnimation("jai",Walking_ani);

 
    if(frameCount%10===0){
        particles.push(new Rain(random(10,390),0));
   }

   for (var j = 0; j < particles.length;j++){
    particles[j].display();
  }

   
  if(frameCount%1===0){
    particles.push(new Rain(random(10,390),0));
}

for (var j = 0; j < particles.length;j++){
particles[j].display();
}

 drawSprites();
    
}  

function CreateThunder(){
    rand = random(1,4);
    if(rand==1){
        console.log("1")
    }
    if(rand==2){
        console.log("2")
    }
    if(rand==3){
        console.log("3")
    }
    if(rand==4){
        console.log("4")
    }
}

