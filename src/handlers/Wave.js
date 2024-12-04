import { WASTELANDS_WAYPOINTS, generateEnemyWaypoints } from "../constants/levels.js";
import { randomPositiveFloat } from "../utilities/math.js";
import { Enemy } from "../objects/Enemy.js";

const enemySpeedMinimum = 0.4; 
const enemySpeedRange = 1.0;
let enemySpawnTimer = 0;
let isWaveActive = false; 

export class Wave{
    constructor(){
        
    }

    draw(ctx){
    }

    update(event, enemies, PlayerStats){
        if(!event) 
            return

        enemySpawnTimer++;
        this.spawnEnemy(enemies, PlayerStats);
        this.newWaveCheck(enemies, PlayerStats);
    }

    newWaveCheck(enemies, PlayerStats){
        if (enemies.length === 0 && isWaveActive) {
            PlayerStats.setWaves();
            isWaveActive = false;
        }
    }

    spawnEnemy(enemies, PlayerStats){ // 2% Health and Armour increase depending on round?
        if(enemies.length >= PlayerStats.getWaves() + 10){
            isWaveActive = true;
            return
        }

        if(enemySpawnTimer % Math.floor(Math.random() * 100) === 0){
            const waypoints = generateEnemyWaypoints(WASTELANDS_WAYPOINTS);
            const speed = randomPositiveFloat(enemySpeedRange) + enemySpeedMinimum;

            enemies.push(new Enemy({
                position: {...waypoints[0]},
                speed: speed,
                waypoints: waypoints,
            }));
        }
    }
}