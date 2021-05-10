// creating the variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var drops=[];
var man1;
var body1;
var thunder;
var maxDrops=100;


function preload(){
// load background image
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");
    
}

function setup(){
    var canvas = createCanvas(500, 700);

    engine = Engine.create();
    world = engine.world;
 
    umbrella = new Umbrella(200,500);
 
    for(var i = 0; i < maxDrops; i++){
       drops.push(new createDrops(random(0,500), random(0,500)));
    }
    
    man1 = new man(225,520,30);
    body1 = new man(225,365,30);
   
    
}

function draw(){

  background(0);

    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){
       drops[i].showDrop();
        drops[i].updateY()
        
    }

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370, random(10,30), 10,10));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 10;
        umbrella.display()

    }

    drawSprites();
    man1.display();
    umbrella.display()
    
}   

