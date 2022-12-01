class Game {
  constructor(context) {
    this.ctx = context;
    this.surfer = new Player (450, 450, 180, 150);
    this.obstacles = [];
    this.points = 0;
    this.generateInterval = null;
    this.currentTime = 0;
  }

  _timer() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  _generateObstacles() {
    this.generateInterval = setInterval (() => {
      const newObstacle = new Obstacle();
      //console.log(newObstacle);
      newObstacle._fallDown();
      this.obstacles.push(newObstacle);
    }, 2000)
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

  _checkCollisions() {
    this.obstacles.forEach((obstacle) => {
      if (
        (
          this.surfer.x >= obstacle.x && this.surfer.x <= obstacle.x + obstacle.width ||
          this.surfer.x + this.surfer.width >= obstacle.x && this.surfer.x + this.surfer.width <= obstacle.x + obstacle.width ||
          obstacle.x >= this.surfer.x && obstacle.x <= this.surfer.x + this.surfer.width
        ) &&
        (
          this.surfer.y >= obstacle.y && this.surfer.y <= obstacle.y + obstacle.height ||
          this.surfer.y + this.surfer.height >= obstacle.y && this.surfer.y + this.surfer.height <= obstacle.y + obstacle.height ||
          obstacle.y >= this.surfer.y && obstacle.y <= this.surfer.y + this.surfer.height
        ) 
      ) {this._gameOver();} 
    })
  }

  _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Poppins";
    this.ctx.fillText(`Score: ${this.currentTime}`, 50, 40);
  }

  _checkScore() {
    console.log(this.currentTime);
    if (this.currentTime === 5) {
      this._nextLevel();
    }
  }

  _drawSurfer() {
    this.ctx.drawImage(this.surfer.image, this.surfer.x, this.surfer.y, this.surfer.width, this.surfer.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _nextLevel() {
    clearInterval(this.generateInterval);
    clearInterval(this.intervalId);
    this.obstacles = [];
    const levelPage = document.getElementById('level-page');
    levelPage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _gameOver() {
    clearInterval(this.generateInterval);
    clearInterval(this.intervalId);
    this.obstacles = [];
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _update() {
    this._clean();
    this._drawSurfer();
    this._drawObstacles();
    this._checkCollisions();
    this._writeScore();
    this._checkScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    //backgroundMusic.play();
    this._timer();
    this._update();
    this._assignControls();
    this._generateObstacles();
    
  }
}