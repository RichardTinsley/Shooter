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

export function initialiseTiles(placementSpot) {
    const placementTilesData2D = [];
    const placementTiles = [];

    for (let i = 0; i < placementTilesData.length; i+= 40)
        placementTilesData2D.push(placementTilesData.slice(i, i + 40));

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
