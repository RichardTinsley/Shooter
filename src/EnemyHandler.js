import { ENEMY_STATES, ENEMY_COLOURS, ENEMY_SIZE } from "./constants/constants.js";
import { Enemy } from "./Enemy.js";
import { assets } from "./AssetLoader.js";

export class EnemyHandler {
    constructor(
        hudElements
    ){
        this.hudElements = hudElements;
        this.enemies = [];

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;
    }
    
    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.enemies.forEach(enemy => {
            enemy.draw(ctx);
        })
    }

    update(event){
        if (event) this.enemySpawnTimer++;
        this.add();
        this.updateEnemiesStatus(event);
        this.nextWave();
    }

    nextWave(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;

        if (this.enemies.length === 0 && this.allEnemiesActive === true) {
            this.hudElements.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    updateEnemiesStatus(event){
        for (let i = this.enemies.length - 1; i >= 0; i--){
            const enemy = this.enemies[i];

            if (enemy.state === ENEMY_STATES.DEAD) 
                this.enemies.splice(i, 1);
            else
                enemy.update(event);
            
            if (enemy.position.x > canvas.width){
                this.hudElements.hearts -= 1;
                enemy.resetEnemyPosition();
            }
        }
    }

    add(){
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.allEnemiesActive === false){

            const enemy = this.generateEnemy();

            this.enemies.push(new Enemy({
                sprite: { 
                    image: enemy, 
                    width: ENEMY_SIZE, 
                    height: ENEMY_SIZE 
                },
                scale: 1.5,
            }));

            this.enemyCounter++;
        }
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