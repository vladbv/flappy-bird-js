
document.addEventListener('DOMContentLoaded', () => {

const bird = document.querySelector('.bird');
const gameDisplay = document.querySelector('.game-container');
const ground = document.querySelector('.ground');

let birdLeft = 220;
let birdBottom = 100;
let gravity = 2;



function startGame(){
if(birdBottom > 0){birdBottom -= gravity;}


bird.style.bottom = birdBottom + 'px';

bird.style.left = birdLeft + 'px';


}

let timerId = setInterval(startGame, 20);


function control(e) {

if(e.keyCode === 38){

jump();

}

}

function jump(){

if(birdBottom < 500) birdBottom += 40;

bird.style.bottom = birdBottom + 'px';
console.log(birdBottom);
}


document.addEventListener('keyup', control);




function generateObstacle(){

let obstacleLeft = 500;
let obstacleBottom = Math.random() * 65;

const obstacle = document.createElement('div');

obstacle.classList.add('obstacle');
gameDisplay.appendChild(obstacle);
obstacle.style.left = obstacleLeft + 'px';
obstacle.style.bottom = obstacleBottom + 'px';



function moveObstacle(){

obstacleLeft -=5;

obstacle.style.left = obstacleLeft + 'px';

if(obstacleLeft  === 0){
clearInterval(timed);
gameDisplay.removeChild(obstacle);
}
}
let timed = setInterval(moveObstacle, 20);


setTimeout(generateObstacle, 3000);

}


generateObstacle();

});

