class CanonBall {
  constructor() {
    var options = {
      density :   1.5,
      friction : 1.0,
      isStatic: false,
      restitution : 0.8,
      frictionAir:0.06
    }
    this.ball = loadImage("assets/canonBall.png");
    this.body = Bodies.rectangle(200, 200, 45, 45, options);
    World.add(world, this.body);
  };

  display(){
    image(this.ball, 80, 320, 45, 45);
  }
};