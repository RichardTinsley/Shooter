import { ENEMY_STATE } from "./EnemyHandler.js";
import { ProjectileHandler } from "./ProjectileHandler.js";

export class TowerHandler{
    constructor(game, enemyHandler, effectHandler, gameTextHandler){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = new ProjectileHandler(game, enemyHandler, effectHandler, gameTextHandler);
        this.towers = [];
    }

    renderTowers(ctx, event){
        this.towers.forEach((tower) => {
            tower.update(event);
            tower.draw(ctx);

            const enemiesInTowerRange = this.prioritiseEnemiesInTowerRange(tower);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
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
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });
    }
}