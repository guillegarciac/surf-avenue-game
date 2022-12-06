class Obstacle {
  constructor (level, position) {
    this.x = position;
    this.y = -100;
    this.image = null;
    this.width = 150;
    this.height = 120;
    this.fallInterval = undefined;
    this.speed = 1 + level;
  }

  _fallDown() {
    this.fallInterval = setInterval(() => {
      if (this.y > 600) {
        clearInterval(this.fallInterval);
      }
      this.y = this.y + this.speed;
    }, 10)
  }

  _assignImage() {
      this.image = carImages[Math.floor(Math.random() * carImages.length)];
    }
}

//add last Position as argument to avoid having two cards in the same position of the array consecutively.
//how to make the collision show and remove the car from the screen
