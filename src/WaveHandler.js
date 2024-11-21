import { ENEMY_COLOURS, GAME_STATES } from "./constants/constants.js";
import { assets } from "./AssetLoader.js";

export class WaveHandler{
    constructor(hudElements, addEnemy, switchScreens){
        this.hudElements = hudElements;
        this.addEnemy = addEnemy;
        this.switchScreens = switchScreens;

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;
    }

    update(event, enemies){
        if(event) 
            this.enemySpawnTimer++;
        this.allEnemiesActiveCheck();
        this.endOFWaveCheck(enemies);
        this.playerLivesCheck();

    }

    addEnemy(){
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.allEnemiesActive === false){
            console.log("OMG")
            const enemy = this.generateEnemy();
            this.addEnemy(enemy);
            this.enemyCounter++;
        }
    }

    allEnemiesActiveCheck(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;
    }

    endOFWaveCheck(enemies){
        if (enemies.length === 0 && this.allEnemiesActive === true) {
            this.hudElements.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    playerLivesCheck(){
        if(this.hudElements.hearts <= 0)
            this.switchScreens(GAME_STATES.GAMEOVER);
    }
    
    generateEnemy(){
        let index;
        if(this.hudElements.waves < 119)
            index = Math.floor(Math.random() * (this.hudElements.waves / 10));
        else 
            index = Math.floor(Math.random() * 12);
        return assets.get(ENEMY_COLOURS[index]);
    }

}