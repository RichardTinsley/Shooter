import * as GAME from "../constants/game.js"
import { WASTELANDS_WAYPOINTS } from "../constants/levels.js";
import { randomPositiveFloat } from "../utilities/math.js";
import { Enemy } from "../objects/Enemy.js";

const enemySpeedMinimum = 0.4; 
const enemySpeedRange = 1.0;
const enemyCount = 0;
let enemySpawnTimer = 0;
let isWaveActive = false; 

export class Wave{
    constructor(){
        
    }

    draw(ctx){
    }

    update(event, enemies, playerStats){
        if(!event) 
            return

        enemySpawnTimer++;
        this.spawnEnemy(enemies, playerStats);
    }

    spawnEnemy(enemies, playerStats){ // 2% Health and Armour increase depending on round?
        if(enemies.length >= playerStats.waves + enemyCount)
            return

        if (enemySpawnTimer % Math.floor(Math.random() * 100) === 0){
            isWaveActive = true;
            const waypoints = this.generateEnemyWaypoints();
            const speed = this.setEnemySpeed();

            enemies.push(new Enemy({
                position: waypoints[0],
                speed: speed,
                waypoints: waypoints,
            }));
        }
    }

    setEnemySpeed(){
        return randomPositiveFloat(enemySpeedRange) + enemySpeedMinimum;
    }

    generateEnemyWaypoints(){
        return WASTELANDS_WAYPOINTS.map(waypoint => {
            return { 
                    x: (waypoint.x - GAME.SIZES.TILE) + Math.round(Math.random() * (GAME.SIZES.TILE * 2)),
                    y: (waypoint.y - GAME.SIZES.TILE) + Math.round(Math.random() * (GAME.SIZES.TILE * 2))
                }
            }
        );
    }
}