class Player {
  constructor (x, y, width, height) {
    this.image = surfer;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  moveRight() {
    this.x = this.x + 150;
    if (this.x > 1000) {
      this.x = 0;
    }
  }

  moveLeft() {
    this.x = this.x - 150;
    if (this.x < 0) {
      this.x = 1000 - this.width;
    }
  }
}