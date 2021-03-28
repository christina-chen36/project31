class Drops {
  constructor(x, y) {
    var options = { isStatic: false, friction: 0.1 };
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    World.add(world, this.body);
  }
  update() {
    var pos = this.body.position;
    if (pos.y > 1000) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 800),
        y: random(0, 200),
      });
    }
  }
  display() {
    var pos = this.body.position;
    fill("blue");
    ellipse(pos.x, pos.y, 10);
  }
}
