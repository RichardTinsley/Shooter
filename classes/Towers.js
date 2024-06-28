export class Towers{
    constructor(game, enemies){
        this.game = game;
        this.enemies = enemies;
        this.towers = [];
    }

    renderTowers(ctx){
        this.towers.forEach((tower) => {
            tower.draw(ctx);
            tower.update();
            tower.target = null;
            const validEnemies = this.enemies.enemies.filter(enemy => {
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
                projectile.update();
                projectile.draw(ctx);
                const xDifference = projectile.enemy.center.x - projectile.position.x;
                const yDifference = projectile.enemy.center.y - projectile.position.y;
                const distance = Math.hypot(xDifference, yDifference);

                if (distance < projectile.enemy.width / 32 + projectile.radius){
                    projectile.enemy.health -= projectile.damage;
                    if(projectile.enemy.health <= 0){
                        const enemyIndex = this.enemies.enemies.findIndex((enemy) => {
                            return projectile.enemy === enemy;
                        });
                        if (enemyIndex > -1){
                            this.game.coins += this.enemies.enemies[enemyIndex].coins;
                            this.enemies.enemies.splice(enemyIndex, 1);
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
                    tower.projectiles.splice(i, 1);
                }
            }
        })
    }
}

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