//Player
const surfer = new Image();
surfer.src = '../img/orangecar.png';

//Obstacles
const blueCar = new Image();
blueCar.src = '../img/bluecar.png';

const greenCar = new Image();
greenCar.src = '../img/greencar.png';

const redCar = new Image();
redCar.src = '../img/redcar.png';

const skyCar = new Image();
skyCar.src = '../img/skycar.png';

const yellowCar = new Image();
yellowCar.src = '../img/yellowcar.png';

//Car Array

const carImages = [greenCar,  redCar, skyCar, yellowCar, blueCar];

//Explosions

const boom1 = new Image ();
boom1.src = '../img/explosions/Explosion_1.png';

const boom2 = new Image ();
boom2.src = '../img/explosions/Explosion_2.png';

const boom3 = new Image ();
boom3.src = '../img/explosions/Explosion_3.png';

const boom4 = new Image ();
boom4.src = '../img/explosions/Explosion_4.png';

const boom5 = new Image ();
boom5.src = '../img/explosions/Explosion_5.png';

const boom6 = new Image ();
boom6.src = '../img/explosions/Explosion_6.png';

const boom7 = new Image ();
boom7.src = '../img/explosions/Explosion_7.png';

const boom8 = new Image ();
boom8.src = '../img/explosions/Explosion_8.png';

const boom9 = new Image ();
boom9.src = '../img/explosions/Explosion_9.png';

const boom10 = new Image ();
boom10.src = '../img/explosions/Explosion_10.png';

const explosions = [boom1, boom2, boom3, boom4, boom5, boom6, boom7, boom8, boom9, boom10]

//Music
const backgroundMusic = new Audio('../music/The Beach Boys.mp3');
backgroundMusic.volume = 0.15;