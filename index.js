import Enemy from './classes/Enemy.js';
import PlacementTile from './classes/placementTile.js';
import Building from './classes/Building.js'
import { waypoints, placementTilesData } from './classes/mapInfo.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;

const image = new Image();
image.onload = () => { //COMMENT OUT THIS LATER EXPERIMENT
    animate();
};
image.src = 'img/LEVEL1.png';

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
function spawnEnemies(spawnCount) {
    for (let i = 1; i < spawnCount + 1; i++) {
        const xOffset = i * 50;
        enemies.push(new Enemy({ position: { x: waypoints[0].x - xOffset, y: waypoints[0].y } }))
    }
}
let enemyCount = 3;
spawnEnemies(enemyCount);

const buildings = [];
let activeTile = undefined;

function animate(){
    requestAnimationFrame(animate);
    ctx.drawImage(image, 0, 0);
    enemies.forEach((enemy) => {
        enemy.update(ctx);
    });
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
                building.projectiles.splice(i, 1);
            }
        }
    })
}
// animate();
const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (event) => {
    // if (activeTile && !activeTile.isOccupied && coins - 50 >= 0) {
    if (activeTile && !activeTile.isOccupied) {
        // coins -= 50
        // document.querySelector('#coins').innerHTML = coins
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