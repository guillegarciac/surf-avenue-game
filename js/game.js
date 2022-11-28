class Game {
  constructor(context) {
    this.ctx = context;
    this.surfer = new Player (450, 550, 100, 50);
  }

  _assignControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.surfer.moveLeft();
          break;
        case 'ArrowRight':
          this.surfer.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _drawSurfer() {
    this.ctx.drawImage(this.surfer.image, this.surfer.x, this.surfer.y, this.surfer.width, this.surfer.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawSurfer();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    backgroundMusic.play();
    this._assignControls();
    this._update();
  }
}