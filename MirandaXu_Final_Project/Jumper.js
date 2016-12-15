// in this part, I referred to the demo code from class week 7a

var Jumper = function() {
  this.mass = 1;
  this.position = createVector(10, 10);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function() {
    this.velocity.add(this.acceleration); // add acceleration to velocity
    this.position.add(this.velocity); // add velocity to position
    this.acceleration.mult(0); // set acceleration back to 0 so it doesn't go crazy
    
  } // end of update

  this.display = function(pic) {
    this.myPic = pic;
    image(this.myPic, this.position.x, this.position.y, 85, 75);
    
  } // end of display

  this.limiter = function() {
    if (this.position.x > 720) {
      this.position.x = 720;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      //this.velocity.x *= -1;
      constrain(this.velocity, 0, 5);
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  } // end of limiter

} // end of class