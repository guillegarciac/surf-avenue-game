class Game {
  constructor(context) {
    this.ctx = context;
    this.surfer = new Player (430, 475, 150, 120);
    this.obstacles = [];
    this.points = 0;
    this.generateInterval = null;
    this.currentTime = 0;
    this.level = 1;
    this.lives = 3;
  }

  _timer() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  _generateObstacles() {
    this.generateInterval = setInterval (() => {
      const newObstacle = new Obstacle(this.level);
      newObstacle._assignImage();
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
    this.ctx.fillText(`Score: ${this.currentTime}`, 70, 40);
    this.ctx.fillText(`Level: ${this.level}`, 820, 40);
    this.ctx.fillText(`Lives: ${this.lives}`, 100, 550);
  }

  _checkScore() {
    if (this.currentTime === 5 * this.level) {
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
    this.level = this.level + 1;
    this.obstacles = [];
    this.points = this.points + this.currentTime;
    this.currentTime = 0;
    const levelPage = document.getElementById('level-page');
    levelPage.style = "display: flex";
    document.getElementById('levelTag').innerHTML = `Let's try with Level ${this.level}`;
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
    const nextButton = document.getElementById('next');
    nextButton.onclick = () => {
      this._generateLevel();
    }
  }

  _generateLevel() {
    const levelPage = document.getElementById('level-page');
    levelPage.style = "display: none";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: flex";
    this._generateObstacles();
    this._timer();
  }

  _restart() {
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: none";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: flex";
    this._generateObstacles();
    this._timer();
    this.level = 1;
    this.points = 0;
    this.currentTime = 0;
  }

  _gameOver() {
    clearInterval(this.generateInterval);
    clearInterval(this.intervalId);
    this.obstacles = [];
    this.lives = this.lives - 1;
    this.points = this.currentTime + this.points;
    document.getElementById('pointsTag').innerHTML = `But congrats anyway you have reached Level ${this.level} with ${this.points} points and you still have ${this.lives} lives buddy.`
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
    const restartButton = document.getElementById('restart');
    if (this.lives === 0) {
      restartButton.style = "display: none"
    } else {
      restartButton.onclick = () => {
        this._restart();
      }
    }
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

