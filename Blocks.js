class Blocks  {
    constructor(x,y)  {
        this.w=30;
        this.h=40;
        this.t=255;
        this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{isStatic:false});
        this.img=loadImage("rectangle - Copy.png");
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        if(this.body.speed<3)  {
            rectMode(CENTER);
            fill("#1E1BC0")
            rect(this.body.position.x,this.body.position.y,this.w,this.h);
        }
        else  {
            Matter.World.remove(myWorld,this.body);
            push();
            tint(255,this.t);
            image(this.img,this.body.position.x,this.body.position.y,30,40);
            this.t-=5;
            pop();
        }
    }
}