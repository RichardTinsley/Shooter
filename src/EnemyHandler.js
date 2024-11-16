import { ENEMY_STATES, ENEMY_SIZE } from "./constants/constants.js";
import { Enemy } from "./Enemy.js";

export class EnemyHandler {
    constructor(
        hudElements
    ){
        this.hudElements = hudElements;
        this.enemies = [];
    }
    
    draw(ctx){
        this.enemies.sort((a, b) => a.position.y - b.position.y);   
        this.enemies.forEach(enemy => {
            enemy.draw(ctx);
        })
    }

    update(event){
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

    add(enemy){
        this.enemies.push(new Enemy({
            sprite: { 
                image: enemy, 
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            scale: 1.5,
        }));
    }
}