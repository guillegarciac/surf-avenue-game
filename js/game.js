class Game {
  constructor(context) {
    this.ctx = context;
    this.surfer = new Player (450, 550, 100, 50);
    this.obstacles = [];
    this.generateInterval = null;
  }

  _generateObstacles() {
    this.generateInterval = setInterval (() => {
      const newObstacle = new Obstacle();
      newObstacle._fallDown();
      this.obstacles.push(newObstacle);
    }, 1000)
  }

  _drawObstacles() {
    this.obstacles.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
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
    this._drawObstacles();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    //backgroundMusic.play();
    this._update();
    this._assignControls();
    this._generateObstacles();
    
  }
}