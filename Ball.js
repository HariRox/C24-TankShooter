class Ball {
  constructor(x,rad) {
    var options ={
        frictionAir: 0.01,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.4
    }
    this.rad = rad;
    this.x = x;
    this.body = Bodies.circle(x, 30, rad, options);
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(this.x,30,this.rad);
    pop();
  }
}
