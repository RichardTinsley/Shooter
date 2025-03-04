import { WASTELANDS_WAYPOINTS, generateEnemyWaypoints } from "../constants/levels.js";
import { generateEnemySpeed } from "../utilities/math.js";
import { Enemy } from "../objects/Enemy.js";
import { HUD } from "./HUD.js";

export class Wave{
    constructor(){
        this.enemySpawnTimer = 0;
        this.enemyCounter = 0;   
        this.maxEnemies = 8;
        this.maxEnemySpeed = 2
        this.allEnemiesActive = false; 
    }

    draw(ctx){
    }

    update(event, enemies){
        if(!event) 
            return

        this.enemySpawnTimer++;
        this.allEnemiesActiveCheck();
        this.spawnEnemy(enemies);
        this.newWaveCheck(enemies);
    }

    allEnemiesActiveCheck(){
        if(this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;
    }

    newWaveCheck(enemies){
        if(enemies.length === 0 && this.allEnemiesActive) {
            HUD.setWave();
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    spawnEnemy(enemies){ // 2% Health and Armour increase depending on round?
        if(enemies.length >= HUD.getWave() + 10){
            this.allEnemiesActive = true;
            return
        }

        if(this.allEnemiesActive)
            return

        if(this.enemySpawnTimer % Math.floor(Math.random() * 100) === 0){
            const waypoints = generateEnemyWaypoints(WASTELANDS_WAYPOINTS);
            const speed = generateEnemySpeed(this.maxEnemySpeed);

            enemies.push(new Enemy({
                position: {...waypoints[0]},
                speed: speed,
                waypoints: waypoints,
            }));

            this.enemyCounter++;
        }
    }
}