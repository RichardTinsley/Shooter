import { WASTELANDS_WAYPOINTS, generateEnemyWaypoints } from "../constants/levels.js";
import { generateEnemySpeed } from "../utilities/math.js";
import { Enemy } from "../objects/Enemy.js";

let enemySpawnTimer = 0;
let enemyCounter = 0;   
let maxEnemies = 10;
let maxEnemySpeed = 2
let allEnemiesActive = false; 

export class Wave{
    constructor(){
    }

    draw(ctx){
    }

    update(event, enemies, PlayerStats){
        if(!event) 
            return

        enemySpawnTimer++;
        this.allEnemiesActiveCheck();
        this.spawnEnemy(enemies, PlayerStats);
        this.newWaveCheck(enemies, PlayerStats);
    }

    allEnemiesActiveCheck(){
        if(enemyCounter === maxEnemies)
            allEnemiesActive = true;
    }

    newWaveCheck(enemies, PlayerStats){
        if(enemies.length === 0 && allEnemiesActive) {
            PlayerStats.setWave();
            maxEnemies++;
            enemyCounter = 0;
            allEnemiesActive = false;
        }
    }

    spawnEnemy(enemies, PlayerStats){ // 2% Health and Armour increase depending on round?
        if(enemies.length >= PlayerStats.getWave() + 10){
            allEnemiesActive = true;
            return
        }

        if(allEnemiesActive)
            return

        if(enemySpawnTimer % Math.floor(Math.random() * 100) === 0){
            const waypoints = generateEnemyWaypoints(WASTELANDS_WAYPOINTS);
            const speed = generateEnemySpeed(maxEnemySpeed);

            enemies.push(new Enemy({
                position: {...waypoints[0]},
                speed: speed,
                waypoints: waypoints,
            }));

            enemyCounter++;
        }
    }
}