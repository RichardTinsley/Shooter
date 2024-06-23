import Enemy from './classes/Enemy.js';
import PlacementTile from './classes/placementTile.js';
import Building from './classes/Building.js'
import Sprite from './classes/Sprite.js'
import { waypoints, placementTilesData } from './classes/mapInfo.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;

const mouse = {
    x: undefined,
    y: undefined
}

const mapIMG = new Image();
const coinsIMG = new Image();
const heartIMG = new Image();
const wavesIMG = new Image();

mapIMG.onload = () => { 
    animate();
};

mapIMG.src = 'img/LEVEL1.png';
coinsIMG.src = 'img/coins.png';
heartIMG.src = 'img/heart.png';
wavesIMG.src = 'img/skull.png';

function drawText(src, text, x, y, textSize, align){
    if(src != "")
        ctx.drawImage(src, x - 32, y - 20);
    ctx.fillStyle = 'white';
    ctx.font = 'bold ' + textSize + 'px Arial';
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + 5, y - 3);
}

const placementTilesData2D = [];
for (let i = 0; i < placementTilesData.length; i+= 40){
    placementTilesData2D.push(placementTilesData.slice(i, i + 40));
}

const placementTiles = [];
placementTilesData2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol != 0) {
            placementTiles.push(
                new PlacementTile({
                    position: {
                        x: x * 32,
                        y: y * 32
                    }
                })
            )
        }
    })
})

const enemies = [];
const explosions = [];
const buildings = [];

let counter = 0;
let enemyCount = 50;
let enemyExtras = 3;
let hearts = 100;
let coins = 100;
let waves = 1;
let activeTile = undefined;

function spawnEnemies(enemyCount) {
    for (let i = 1; i < enemyCount + 1; i++) {
        const randomWaypoints = [];
        waypoints.forEach((waypoint) => {
            randomWaypoints.push({ 
                x: waypoint.x + Math.round(Math.random() * 50 - 25),
                y: waypoint.y + Math.round(Math.random() * 50 - 25)
            });
        })
        const enemySpeed = Math.random() * 1 + .5;
        enemies.push(new Enemy({ position: { x: waypoints[0].x, y: waypoints[0].y }}, randomWaypoints, enemySpeed, false))
    }
}

spawnEnemies(enemyCount);

function animate(){
    const animationID = requestAnimationFrame(animate);
    ctx.drawImage(mapIMG, 0, 0);
    drawText(heartIMG, hearts, 65, 85, 20,'left');
    drawText(wavesIMG, waves, 160, 85, 20,'left');
    drawText(coinsIMG, coins, 65, 115, 20,'left');
    
    if (animationID % Math.round(Math.random() * 500) == 0 && counter < enemies.length){
        const enemyIndex = enemies.findIndex((enemy) => {
            return enemy.activeStatus === false;
        });
        enemies[enemyIndex].activeStatus = true;
        counter++;        
    }
    enemies.sort((a, b) => b.position.y - a.position.y);

    for (let i = enemies.length - 1; i >= 0; i--){
        const enemy = enemies[i];
        if(enemy.activeStatus == true)
            enemy.update(ctx);
        
        if (enemy.position.x > canvas.width){
            hearts -= 1;
            enemy.position.x = enemy.waypoints[0].x;
            enemy.position.y = enemy.waypoints[0].y;
            enemy.waypointIndex = 0;
            if(hearts === 0){
                cancelAnimationFrame(animationID);
                drawText("","GAME OVER", canvas.width / 2, canvas.height / 2, 30, 'center');
            }
        }
    }

    if (enemies.length === 0){
        counter = 0;
        waves++;
        enemyCount += enemyExtras;
        spawnEnemies(enemyCount);
    }

    for (let i = explosions.length - 1; i >= 0; i--) {
        const explosion = explosions[i];
        explosion.draw(ctx);
        explosion.update(ctx);
        if (explosion.frames.current >= explosion.frames.max - 1) {
            explosions.splice(i, 1);
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
}

canvas.addEventListener('click', (event) => {
    if (activeTile && !activeTile.isOccupied && coins - 25 >= 0) {
        coins -= 25
        buildings.push(
            new Building({
                position: {
                    x: activeTile.position.x,
                    y: activeTile.position.y
                }
        })
        )
        activeTile.isOccupied = true
        buildings.sort((a, b) => {
            return a.position.y - b.position.y
        })
    }
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    activeTile = null
    for (let i = 0; i < placementTiles.length; i++) {
        const tile = placementTiles[i]
        if (
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size
        ) {
            activeTile = tile
            break
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


