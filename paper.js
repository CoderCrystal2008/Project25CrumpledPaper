class Paper {
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0,
            'density':1.2,
            'friction':1
        }
        this.body = Bodies.circle(x,y,70,options);
        this.radius = 70+10;

        World.add(world,this.body);

        //assigns image
        this.image = loadImage("images/paper.png");

    
        
        
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}