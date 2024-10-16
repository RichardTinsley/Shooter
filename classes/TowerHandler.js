import { ProjectileHandler } from "./ProjectileHandler.js";

export class TowerHandler{
    constructor(game, enemyHandler, gameTextHandler){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = new ProjectileHandler(game, enemyHandler, gameTextHandler);
        this.towers = [];
    }

    renderTowers(ctx, deltaTime){
        this.towers.forEach((tower) => {
            tower.update(deltaTime);
            tower.draw(ctx);

            const enemiesInTowerRange = this.findEnemiesInTowerRange(tower);

            tower.target = enemiesInTowerRange[0];

            this.projectileHandler.renderProjectiles(ctx, deltaTime, tower);
        })
    }

    findEnemiesInTowerRange(tower){
        return this.enemyHandler.enemies.filter(enemy => {
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
    }
}