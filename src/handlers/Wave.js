import * as GAME from "../constants/game.js"
import { WASTELANDS_WAYPOINTS } from "../constants/levels.js";
import { randomPositiveFloat } from "../utilities/math.js";
import { Enemy } from "../objects/Enemy.js";

const enemySpeedMinimum = 0.4; 
const enemySpeedRange = 1.0;
const enemyCount = 10;
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
        this.newWaveCheck(enemies, playerStats);
        this.playerLivesCheck(enemies, playerStats);
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

    newWaveCheck(enemies, playerStats){
        if (enemies.length === 0 && isWaveActive) {
            playerStats.waves++;
            isWaveActive = false;
        }
    }

    playerLivesCheck(enemies, playerStats){
        enemies.forEach(enemy =>{
            if (enemy.position.x > canvas.width || enemy.position.y > canvas.height){
                playerStats.hearts -= 1;
                enemy.waypointIndex = 0;
                enemy.position = {... enemy.waypoints[enemy.waypointIndex]}; 
            }
        });
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