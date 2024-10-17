import { ENEMY_STATE } from "./EnemyHandler.js";

export class ProjectileHandler{
    constructor(game, enemyHandler, gameTextHandler){
        this.game = game;
        this.enemyHandler = enemyHandler;
        this.gameTextHandler = gameTextHandler;
    }

    renderProjectiles(ctx, deltaTime, tower){
        for (let i = tower.projectiles.length - 1; i >= 0; i--){
            const projectile = tower.projectiles[i];        
            projectile.update(deltaTime);
            projectile.draw(ctx);
            const xDifference = projectile.enemy.center.x - projectile.center.x;
            const yDifference = projectile.enemy.center.y - projectile.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            
            if (distance < projectile.enemy.width / 32 + projectile.radius){
                projectile.enemy.health -= projectile.damage;
                if(projectile.enemy.health <= 0){
                    const enemyIndex = this.enemyHandler.enemies.findIndex((enemy) => projectile.enemy === enemy);
                    
                    if (enemyIndex > -1 && projectile.enemy.state !== ENEMY_STATE.DYING){
                        this.game.coins += this.enemyHandler.enemies[enemyIndex].coins;
                        this.game.exp += this.enemyHandler.enemies[enemyIndex].exp;

                        this.gameTextHandler.populateGameTextArray(
                            this.game, 
                            '+' + projectile.enemy.coins, 
                            '255, 215, 0, ', //GOLD COLOUR TEXT
                            '10', 
                            {x: projectile.enemy.position.x, y: projectile.enemy.position.y}, 
                            20, 
                            'left'
                        ); 

                        this.gameTextHandler.populateGameTextArray(
                            this.game, 
                            '+' + projectile.enemy.exp, 
                            '50, 205, 50, ', //LIME COLOUR TEXT
                            '10', 
                            {x: tower.position.x + 16, y: tower.position.y}, 
                            20, 
                            'left'
                        ); 
                    }
                }
                tower.projectiles.splice(i, 1);
            }
        }
    }
}
