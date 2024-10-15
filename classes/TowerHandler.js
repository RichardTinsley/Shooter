import { GameText } from "./GameText.js";

export class TowerHandler{
    constructor(game, enemyHandler, GameTextHandler){
        this.game = game;
        this.enemyHandler = enemyHandler;
        this.GameTextHandler = GameTextHandler;
        this.towers = [];
    }

    renderTowers(ctx, deltaTime){
        this.towers.forEach((tower) => {
            tower.update(deltaTime);
            tower.draw(ctx);
            tower.target = null;

            const validEnemies = this.enemyHandler.enemies.filter(enemy => {
                    const xDifference = enemy.center.x - tower.center.x;
                    const yDifference = enemy.center.y - tower.center.y;
                    const distance = Math.hypot(xDifference, yDifference);
                    return distance < enemy.width / 32 + tower.radius;
            }).sort((a, b) => {
                if (a.waypointIndex > b.waypointIndex) return -1;
                if (a.waypointIndex < b.waypointIndex) return 1;
                if (a.priorityDistance < b.priorityDistance) return -1;
                if (a.priorityDistance > b.priorityDistance) return 1;
                return 0;
            });

            tower.target = validEnemies[0];

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
                            
                            this.GameTextHandler.gameTexts.push(
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
                            
                            this.GameTextHandler.gameTexts.push(
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

                            console.log(tower.position);
                        }
                    }

                    tower.projectiles.splice(i, 1);
                }
            }
        })
    }
}
// explosions.push(
//     new Sprite({
//         position: { x: projectile.position.x, y: projectile.position.y },
//         imageSrc: './img/explosion.png',
//         frames: { max: 12 },
//         offset: { x: - 80, y: -80 }
//     })
// )

// const explosions = [];
// function animate(){
//     for (let i = explosions.length - 1; i >= 0; i--) {
//         const explosion = explosions[i];
//         explosion.draw(ctx);
//         explosion.update(ctx);
//         if (explosion.frames.current >= explosion.frames.max - 1) {
//             explosions.splice(i, 1);
//         }
//     }
// }