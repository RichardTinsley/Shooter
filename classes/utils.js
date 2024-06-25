import { waypoints, placementTilesData } from './mapInfo.js';
import PlacementTile from '../classes/placementTile.js';
import Enemy from '../classes/Enemy.js';

export function drawText(ctx, text, x, y, textSize, align){
    ctx.fillStyle = 'white';
    ctx.font = 'bold ' + textSize + 'px Arial';
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + 5, y - 3);
}

let enemyID = 0;
export function spawnEnemies(enemyCount) {
    const enemies = [];
    for (let i = 1; i < enemyCount + 1; i++) {
        const randomWaypoints = [];
        waypoints.forEach((waypoint) => {
            randomWaypoints.push({ 
                x: (waypoint.x - 25) + Math.round(Math.random() * 70),
                y: (waypoint.y - 25) + Math.round(Math.random() * 70)
            });
        })
        const enemySpeed = Math.random() * 1 + .5;
        enemies.push(
            new Enemy({ 
                position: { 
                    x: waypoints[0].x, 
                    y: waypoints[0].y 
                }}, 
                'img/01Knight.png', 
                'img/02Knight.png', 
                enemyID++, 
                randomWaypoints, 
                enemySpeed, 
                false
            ));
    }
    return enemies;
}

function array2D(array){
    const array2D = [];
    for (let i = 0; i < array.length; i+= 40)
        array2D.push(array.slice(i, i + 40));
    return array2D
}

export function initialiseTiles(placementSpot) {
    const placementTilesData2D = array2D(placementTilesData);
    const placementTiles = [];
    placementTilesData2D.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol == placementSpot) 
                placementTiles.push(
                    new PlacementTile({ 
                        position: { 
                            x: x * 32, 
                            y: y * 32 
                        } 
                    }));
        })
    })
    return placementTiles
}

export function debugEnemy(ctx, enemy){
    ctx.fillStyle = 'rgba(0, 0, 250, 0.15)';
    ctx.fillRect(Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 32, 32);
    drawText(ctx, enemy.enemyID, Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32, 16, 'right');
    drawText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / 32) * 32, Math.floor(enemy.position.y / 32) * 32 + 20, 16, 'right');
}