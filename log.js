class log extends BaseClass{
    //property and function

    constructor(x,y,height,angle){
    
        super(x,y,20,height);
        this.image=loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);

    }
}