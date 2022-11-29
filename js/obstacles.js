class Obstacle {
  constructor () {
    this.x = Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100);
    this.image = surfBoard;
    this.width = 400;
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