import { GameText } from "./GameText.js";
import { GameTextHandler } from "./GameTextHandler.js";

export class ProjectileHandler{
    constructor(game, enemyHandler){
        this.game = game;
        this.enemyHandler = enemyHandler;
        this.gameTextHandler = new GameTextHandler();
    }

    renderProjectiles(ctx, deltaTime, tower){
        for (let i = tower.projectiles.length - 1; i >= 0; i-- ){
            const projectile = tower.projectiles[i];        
            projectile.update(deltaTime);
            projectile.draw(ctx);
            const xDifference = projectile.enemy.center.x - projectile.center.x;
            const yDifference = projectile.enemy.center.y - projectile.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            
            if (distance < projectile.enemy.width / 32 + projectile.radius){
                projectile.enemy.health -= projectile.damage;
                if(projectile.enemy.health <= 0){
                    const enemyIndex = this.enemyHandler.enemies.findIndex((enemy) => {
                        return projectile.enemy === enemy;
                    });
                    if (enemyIndex > -1){
                        this.game.coins += this.enemyHandler.enemies[enemyIndex].coins;
                        this.game.exp += this.enemyHandler.enemies[enemyIndex].exp;
                        this.enemyHandler.enemies.splice(enemyIndex, 1);

                        this.gameTextHandler.gameTexts.push(
                            new GameText({
                                game: this.game,
                                text: '+' + projectile.enemy.coins,
                                color: '255, 215, 0, ', //GOLD COLOUR
                                alpha: '10',
                                position: projectile.enemy.position,
                                textSize: 20,
                                align: 'left' 
                            })
                        );
                        
                        this.gameTextHandler.gameTexts.push(
                            new GameText({
                                game: this.game,
                                text: '+' + projectile.enemy.exp,
                                color: '19, 50, 29, ', //EMERALD COLOUR
                                alpha: '10',
                                position: tower.position,
                                textSize: 20,
                                align: 'left' 
                            })
                        );
                    }
                }

                this.gameTextHandler.renderGameTexts(ctx, deltaTime);

                tower.projectiles.splice(i, 1);
            }
        }
    }
}
