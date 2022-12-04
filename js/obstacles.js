class Obstacle {
  constructor (level) {
    this.possiblePositions = [150, 300, 450, 600, 750];
    this.x = this.possiblePositions[Math.floor(Math.random() * 5)];
    this.y = -100;
    this.image = null;
    this.width = 150;
    this.height = 120;
    this.fallInterval = undefined;
    this.speed = 1 + level
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
