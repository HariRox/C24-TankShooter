class Ground {
  constructor() {
    var options ={
      isStatic : true
    }
  this.body = Bodies.rectangle(600, 400, 1200, 20, options);
  World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(600,400,1200,20);
    pop();  
  }
}
