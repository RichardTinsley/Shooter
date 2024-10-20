import { ENEMY_STATE } from "./EnemyHandler.js";

export class TowerHandler{
    constructor(enemyHandler, projectileHandler){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = projectileHandler;
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

            this.projectileHandler.renderProjectiles(ctx, event, tower);
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