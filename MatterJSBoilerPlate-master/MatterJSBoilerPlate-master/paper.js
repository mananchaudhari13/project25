class Paper{
constructor(){
    var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,


  
}
this.body=Bodies.circle(100,100,30,options)
World.add(world,this.body)
this.image=loadImage("paper.png")
}
display(){
  var pos= this.body.position
  image  (this.image,pos.x,pos.y,28,28)
}


}