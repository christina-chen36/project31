class Umbrella {
  constructor(x, y) {
    var options = { isStatic: true };
    this.body = Bodies.circle(x, y, 50, options);
    this.radius = 10;
    this.image = loadImage("umbrella.PNG");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill("blue");
    image(
      this.image,
      this.body.position.x - 100,
      this.body.position.y - 50,
      200,
      200
    );
  }
}
