class Obstacle {
  constructor () {
    this.possiblePositions = [0, 150, 300, 450, 600, 750, 900];
    this.x = this.possiblePositions[Math.floor(Math.random() * 7)];
    this.y = -100;
    this.image = surfBoard;
    this.width = 180;
    this.height = 150;
    this.fallInterval = undefined;
  }

  _fallDown() {
    this.fallInterval = setInterval(() => {
      if (this.y > 600) {
        clearInterval(this.fallInterval);
      }
      this.y = this.y + 1;
    }, 10)
  }
}
