import { ENEMY_STATE } from "./EnemyHandler.js";
import { ProjectileHandler } from "./ProjectileHandler.js";

export class TowerHandler{
    constructor(game, enemyHandler, gameTextHandler){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = new ProjectileHandler(game, enemyHandler, gameTextHandler);
        this.towers = [];
    }

    renderTowers(ctx){
        this.towers.forEach((tower) => {
            tower.update();
            tower.draw(ctx);

            const enemiesInTowerRange = this.prioritiseEnemiesInTowerRange(tower);
            // enemiesInTowerRange.unshift(enemy => enemy.isSelected);

            tower.target = enemiesInTowerRange[0];

            this.projectileHandler.renderProjectiles(ctx, tower);
        })
    }

    prioritiseEnemiesInTowerRange(tower){
        return this.enemyHandler.enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATE.WALKING || enemy.state === ENEMY_STATE.RUNNING){
                const xDifference = enemy.center.x - tower.center.x;
                const yDifference = enemy.center.y - tower.center.y;
                const distance = Math.hypot(xDifference, yDifference);
                return distance < enemy.width / 10 + tower.range;
            }
        }).sort((a, b) => {
            if (a.isSelected) return 0;
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });
    }
}