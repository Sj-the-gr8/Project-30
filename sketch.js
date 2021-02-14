var myEngine,myWorld,ground,ground1,ground2,hexagon,constraint,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,flag=0;
function setup()   {
    createCanvas(800,600);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(width/2,height-10,width,20);  
    ground1=new Ground(300,500,250,10);
    ground2=new Ground(600,400,200,10);
    hexagon=new Hexagon(100,300);
    block1=new Blocks(300,470);
    block2=new Blocks(330,470);
    block3=new Blocks(360,470);
    block4=new Blocks(390,470);
    block5=new Blocks(270,470);
    block6=new Blocks(240,470);
    block7=new Blocks(210,470);
    block8=new Blocks(240,430);
    block9=new Blocks(270,430);
    block10=new Blocks(300,430);
    block11=new Blocks(330,430);
    block12=new Blocks(360,430);
    block13=new Blocks(270,390);
    block14=new Blocks(300,390);
    block15=new Blocks(330,390);
    block16=new Blocks(300,350);
    block17=new Blocks(540,370);
    block18=new Blocks(570,370);
    block19=new Blocks(600,370);
    block20=new Blocks(630,370);
    block21=new Blocks(660,370);
    block22=new Blocks(570,330);
    block23=new Blocks(600,330);
    block24=new Blocks(630,330);
    block25=new Blocks(600,290);
    constraint=Matter.Constraint.create({pointA:{x:100,y:300},bodyB:hexagon.body,stiffness:0.1,length:50});
    Matter.World.add(myWorld,constraint);
}

function draw()   {
    Matter.Engine.update(myEngine);
    background("rgb(60,46,46)");
    if(constraint.bodyB)  {
        line(constraint.pointA.x,constraint.pointA.y,hexagon.body.position.x,hexagon.body.position.y)
    }
    ground.display();
    ground1.display();
    ground2.display();
    hexagon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    textSize(15);
    fill("white");
    text("Drag the hexagonal stone and release it to launch it towards the blocks",250,100);
}

function mouseDragged()  {
if(flag==0)  {
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
}

function mouseReleased()  {
flag=1;
constraint.bodyB=null;
}

function keyPressed()   {
if(keyCode==32)  {
    Matter.Body.setPosition(hexagon.body,{x:170,y:280});
    constraint.bodyB=hexagon.body;
    flag=0;
}
}