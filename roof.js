class Roof {
    constructor(x,y,width,height){
      var ground_options={
          isStatic:true
        }
      this.width = width; 
      this.height = height;
      this.image = loadImage("roof.png");
      this.body = Bodies.rectangle(x,y,width,height,ground_options)
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      fill("Brown");
      image(this.image,pos.x,pos.y,this.width,this.height);
    }
  
}