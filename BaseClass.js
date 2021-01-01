class BaseClass{
    constructor(x,y,width,height,angle){
        var options={
    restitution:0.8,
    density:1.0,
    friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(myworld,this.body)
        this.image=loadImage("sprites/base.png")
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    //rect(0,0,this.width,this.height)
    image(this.image,0,0,this.width,this.height)
    pop()    
    }
}