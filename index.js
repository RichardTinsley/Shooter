import { drawText, spawnEnemies, initialiseTiles } from "../classes/utils.js";
import Building from '../classes/Building.js';
import Sprite from "../classes/Sprite.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;

const mapIMG = new Image();
mapIMG.onload = () => { 
    animate();
};
mapIMG.src = 'img/LEVEL1.png';
const audio = new Audio('./music.mp3');

let counter = 0;
let enemyCount = 10;
let hearts = 100;
let coins = 100;
let experience = 0;
let waves = 1;
let timer = 0;

let isRunning = true;
let activeTile = undefined;

const explosions = [];
const buildings = [];
let enemies = spawnEnemies(enemyCount);
const placementTiles = initialiseTiles(353);

function animate(){
    if(!isRunning)
        return
    const animationID = requestAnimationFrame(animate);
    ctx.drawImage(mapIMG, 0, 0);
    drawText(ctx, hearts, 65, 52, 20,'left');
    drawText(ctx, coins, 225, 52, 20,'left');
    drawText(ctx, experience, 515, 52, 20,'left');
    drawText(ctx, waves, 805, 52, 20,'left');
    drawText(ctx, timer, 1155, 52, 20,'left');

    enemies.sort((a, b) => b.position.y - a.position.y);

    if (animationID % Math.floor(Math.random() * 250) == 0 && counter < enemies.length){
        const enemy = enemies.find((enemy) => enemy.activeStatus === false);
        enemy.activeStatus = true;
        counter++;
    }
    
    for (let i = enemies.length - 1; i >= 0; i--){
        const enemy = enemies[i];
        if(enemy.activeStatus === true){
            ctx.fillStyle = 'rgba(0, 0, 250, 0.15)';
            ctx.fillRect(Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 32, 32);
            enemy.update(ctx); 
            drawText(ctx, enemy.enemyID, Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 16, 'right');
            drawText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32 + 20, 16, 'right');
        }
        if (enemy.position.x > canvas.width){
            hearts -= 1;
            enemy.position.x = enemy.waypoints[0].x;
            enemy.position.y = enemy.waypoints[0].y;
            enemy.activeStatus = false;
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
                return distance < enemy.radius + building.radius;
        }).sort((a, b) => {
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });

        building.target = validEnemies[0];
        for (let i = building.projectiles.length - 1; i >= 0; i-- ){
            const projectile = building.projectiles[i];

            projectile.update(ctx);
            const xDifference = projectile.enemy.center.x - projectile.position.x;
            const yDifference = projectile.enemy.center.y - projectile.position.y;
            const distance = Math.hypot(xDifference, yDifference);

            if (distance < projectile.enemy.radius + projectile.radius){
                projectile.enemy.health -= 20;

                if(projectile.enemy.health <= 0){
                    const enemyIndex = enemies.findIndex((enemy) => {
                        return projectile.enemy === enemy;
                    });
                    if (enemyIndex > -1){
                        enemies.splice(enemyIndex, 1);
                        coins += 25;
                    }
                }
                explosions.push(
                    new Sprite({
                        position: { x: projectile.position.x, y: projectile.position.y },
                        imageSrc: './img/explosion.png',
                        frames: { max: 12 },
                        offset: { x: - 80, y: -80 }
                    })
                )
                building.projectiles.splice(i, 1);
            }
        }
    })

    for (let i = explosions.length - 1; i >= 0; i--) {
        const explosion = explosions[i];
        explosion.draw(ctx);
        explosion.update(ctx);
        if (explosion.frames.current >= explosion.frames.max - 1) {
            explosions.splice(i, 1);
        }
    }
    if (enemies.length === 0){
        waves++;
        console.log(enemies);
        enemies = spawnEnemies(enemyCount += 3);
        console.log(enemies);

    }

    if(hearts === 0){
        cancelAnimationFrame(animationID);
        drawText(ctx, "GAME OVER", canvas.width / 2, canvas.height / 2, 30, 'center');
    }
}

window.onkeydown = (e) => {
    if(e.code === 'KeyP') {
        if(isRunning){
            isRunning = false;
            audio.pause();
        }
        else {
            isRunning = true;
            audio.play();
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

/* 
FIX NEXT WAVE AFTER ENEMIES KILLED
FIX TOWER ATTACK PRIORITY
ADD ID TO EACH ENEMY

Ruby		Splash damage
Emerald  	Poison, damage, reduce armour
Amethyst  	Air Attack only
Sapphire	Freeze / slow group 
Topaz 		rapid fire
Diamond		Heavy damage / stun / critical hit 
Gold 		money generation, weak damage
Silver		Sniper range
Opal		Tower boost auras
Uranium		Enemy Damage, weakness auras / remove armour and abilities
Obsidian	rail gun laser
chain lighting, spreadshot
fire pit, landmines, net traps /air units to the ground

*/