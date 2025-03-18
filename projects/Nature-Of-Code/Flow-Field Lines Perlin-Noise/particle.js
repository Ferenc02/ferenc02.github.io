let Particle = function () {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.maxspeed = 4;

  this.previousPosition = this.position.copy(); // For trail effect

  this.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.follow = function (vectors) {
    let x = floor(this.position.x / scale);
    let y = floor(this.position.y / scale);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  };

  this.applyForce = function (force) {
    this.acceleration.add(force);
  };

  this.show = function () {
    stroke(0, 5);
    strokeWeight(1);
    line(
      this.position.x,
      this.position.y,
      this.previousPosition.x,
      this.previousPosition.y
    );

    this.updatePreviousPosition();
  };

  this.updatePreviousPosition = function () {
    this.previousPosition = this.position.copy();
  };
  this.edges = function () {
    if (this.position.x > width) {
      this.position.x = 0;
      this.updatePreviousPosition();
    }
    if (this.position.x < 0) {
      this.position.x = width;
      this.updatePreviousPosition();
    }
    if (this.position.y > height) {
      this.position.y = 0;
      this.updatePreviousPosition();
    }
    if (this.position.y < 0) {
      this.position.y = height;
      this.updatePreviousPosition();
    }
  };
};
