import { drawText, spawnEnemies, initialiseTiles } from "../classes/utils.js";
import Building from '../classes/Building.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;

const mapIMG = new Image();
mapIMG.onload = () => { 
    animate();
};
mapIMG.src = 'img/LEVEL1.png';

let counter = 0;
let enemyCount = 50;
let enemyExtras = 3;
let hearts = 100;
let coins = 100;
let waves = 1;
let isRunning = true;
let activeTile = undefined;

const explosions = [];
const buildings = [];
const enemies = spawnEnemies(enemyCount);
const placementTiles = initialiseTiles(353);

function animate(){
    if(!isRunning)
        return
    const animationID = requestAnimationFrame(animate);
    ctx.drawImage(mapIMG, 0, 0);
    drawText(ctx, hearts, 65, 85, 20,'left');
    drawText(ctx, waves, 160, 85, 20,'left');
    drawText(ctx, coins, 65, 115, 20,'left');

    enemies.sort((a, b) => b.position.y - a.position.y);

    if (animationID % Math.floor(Math.random() * 250) == 0 && counter < enemies.length){
        const enemy = enemies.find((enemy) => enemy.activeStatus === false);
        enemy.activeStatus = true;
        counter++;
        console.log(enemy);
    }
    
    for (let i = enemies.length - 1; i >= 0; i--){
        const enemy = enemies[i];
        if(enemy.activeStatus === true){
            drawText(ctx, enemy.enemyID, Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 16, 'right');
            ctx.fillStyle = 'rgba(0, 0, 250, 0.15)';
            ctx.fillRect(Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 32, 32);
            enemy.update(ctx); 
        }
        if (enemy.position.x > canvas.width){
            hearts -= 1;
            enemy.position.x = enemy.waypoints[0].x;
            enemy.position.y = enemy.waypoints[0].y;
            enemy.waypointIndex = 0;
        }
    }

    placementTiles.forEach((tile) => {
        tile.update(mouse, ctx);
    })

    buildings.forEach((building) => {
        building.update(ctx);
        building.target = null;
        const validEnemies = enemies.filter(enemy => {
                const xDifference = enemy.center.x - building.center.x;
                const yDifference = enemy.center.y - building.center.y;
                const distance = Math.hypot(xDifference, yDifference);
                return distance < enemy.radius + building.radius
        })
    })

    if(hearts === 0){
        cancelAnimationFrame(animationID);
        drawText(ctx, "GAME OVER", canvas.width / 2, canvas.height / 2, 30, 'center');
    }
}

window.onkeydown = (e) => {
    if(e.code === 'KeyP') {
        if(isRunning)
            isRunning = false;
        else {
            isRunning = true;
            animate();
        }
    }
}

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (event) => {
    if (activeTile && !activeTile.isOccupied && coins - 25 >= 0) {
        coins -= 25
        buildings.push(
            new Building({ 
                position: { 
                    x: activeTile.position.x, 
                    y: activeTile.position.y } 
                },
                './img/tower/sapphire1.png'
            ));

        activeTile.isOccupied = true;
        buildings.sort((a, b) => {
            return a.position.y - b.position.y;
        })
    }
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    activeTile = null;

    for (let i = 0; i < placementTiles.length; i++) {
        const tile = placementTiles[i];
        if (
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size
        ) {
            activeTile = tile;
            break;
        }
    }
})