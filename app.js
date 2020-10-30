
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


function jump(event){

if(birdBottom<400)birdBottom += 40;

bird.style.bottom = birdBottom + 'px';
console.log(birdBottom);
}


document.addEventListener('keyup',jump);


});

