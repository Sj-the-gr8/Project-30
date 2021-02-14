class Hexagon  {
    constructor(x,y)  {
        this.r=15;
        this.body=Matter.Bodies.circle(x,y,this.r,{density:0.5,isStatic:false});
        Matter.World.add(myWorld,this.body);
        this.img=loadImage("Hexagon.png");
    }
    display()  {
        imageMode(CENTER);
        image(this.img,this.body.position.x,this.body.position.y,this.r*2,this.r*2);
    }
}