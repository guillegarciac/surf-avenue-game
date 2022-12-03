class Obstacle {
  constructor (level) {
    this.possiblePositions = [150, 450, 750];
    this.x = this.possiblePositions[Math.floor(Math.random() * 3)];
    this.y = -100;
    this.image = null;
    this.width = 180;
    this.height = 150;
    this.fallInterval = undefined;
    this.speed = 5 + level
    console.log(this.speed)
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
