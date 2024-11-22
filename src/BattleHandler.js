import { ANIMATION_STATES } from "./constants/constants.js";

export class BattleHandler{
    constructor(addProjectile){
        this.addProjectile = addProjectile;
    }

    update(event, towers, enemies){
        towers.forEach(tower => {
            this.targetEnemy(enemies, tower);
            this.shootTargetEnemy(tower);
        });
    }

    targetEnemy(enemies){
        const enemiesInRange = this.prioritiseEnemiesInTowerRange(enemies); //CLEAN THIS UP
        const selectedEnemy = enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            tower.target = selectedEnemy;
        else
            tower.target = enemiesInRange[0];
    }

    shootTargetEnemy(tower){
        if(tower.shootTimer > tower.cooldown && tower.target){
            this.addProjectile(
                tower.target, 
                tower, 
                assets.get('blueFireball')
            );
            tower.shootTimer = 0;
        }
    }

    prioritiseEnemiesInTowerRange(enemies){
        return enemies.filter(enemy => {
            if(enemy.state === ANIMATION_STATES.ANIMATING){
                return checkCollision(enemy, this);
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