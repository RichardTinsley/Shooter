import Enemy from './enemy.js';
import { waypoints } from './waypoints.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const enemiesArray = [];

function handleEnemies(){

    enemiesArray.push(new Enemy({ position: { x: waypoints[0].x, y: waypoints[0].y } }));
    
    for (let i = 0; i < enemiesArray.length; i++){
        enemiesArray[i].update();
        enemiesArray[i].draw(ctx);
        
        if( Math.round(enemiesArray[i].center.x) == waypoints[waypoints.length - 1].x &&
            Math.round(enemiesArray[i].center.y) == waypoints[waypoints.length - 1].y 
        ){
            enemiesArray.splice(i, 1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    handleEnemies();
    requestAnimationFrame(animate);
}

animate();


// const mouse = { x: undefined, y: undefined };

// canvas.addEventListener('click', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
// });

// canvas.addEventListener('mousemove', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
// });