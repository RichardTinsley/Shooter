import { ENEMY_COLOURS, GAME_HEIGHT, GAME_STATES, GAME_WIDTH } from "./constants/constants.js";
import { assets } from "./AssetLoader.js";
import { drawText } from "./utilities/textRender.js";

export class WaveHandler{
    constructor(hudElements, addEnemy, switchScreens){
        this.hudElements = hudElements;
        this.addEnemy = addEnemy;
        this.switchScreens = switchScreens;

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;

        this.textDisplay = false;
        this.textDisplayCurrentWave = false;
        this.textTimer = 0;
        this.textTimeLimit = 10;
    }

    draw(ctx){
        this.drawWaveText(ctx);
    }

    update(event, enemies){
        if(!event) 
            return

        this.enemySpawnTimer++;
        this.spawnEnemy();
        this.allEnemiesActiveCheck();
        this.newWaveCheck(enemies);
        this.playerLivesCheck();
        this.waveTextCheck();
    }

    
    waveTextCheck(){
        if(this.hudElements.waves === 1 && this.textDisplayCurrentWave)
            this.textDisplay = true;
        if(this.textDisplay)
            this.textTimer++;
    }

    drawWaveText(ctx){
        if(!this.textDisplay) return;

        if(this.hudElements.waves === 1){
            drawText(ctx, 'white', "BEGIN!", GAME_WIDTH / 2, GAME_HEIGHT / 2, 150, 'center', 'middle');
            this.textDisplayCurrentWave = true;
        }

        if(this.textTimer >= this.textTimeLimit){
            this.textDisplay = false;
            this.textDisplayCurrentWave = false;
        }
    }


    spawnEnemy(){
        if (this.enemySpawnTimer % Math.floor(Math.random() * 200) === 0 && this.allEnemiesActive === false){
            const enemy = this.generateEnemy();
            this.addEnemy(enemy);
            this.enemyCounter++;
        }
    }

    allEnemiesActiveCheck(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;
    }

    newWaveCheck(enemies){
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