class Ground {
    constructor(x,y,width,height){
        var options ={
            'isStatic':true,
            'friction':0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adds body to world
        World.add(world,this.body);

        
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}