class BaseClass{
    //property and function

    constructor(x,y,width,height,angle){
        var options ={
            restitution :0.8,
            friction : 1,
            density : 1.0
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/wood1.png");
        World.add(earth,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        fill("blue");
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}