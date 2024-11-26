import { OBJECT_TYPES } from "../constants/objects.js";
import { checkCircleCollision } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";

export class Tower extends Sprite{
    constructor({
        image,
        position,
        size
    }){
        super({
            image, 
            position, 
            size
        });

        this.type = OBJECT_TYPES.TOWER;
        this.isOccupied = false;
        this.isSelected = false;
        this.muzzle = {
            x: this.position.x,
            y: this.position.y - this.height
        };       
        this.enemiesInRange = [];
        this.target;
        this.shootTimer = 0;

        this.center.radius = this.halfWidth;



    }

    draw(ctx){
        super.draw(ctx);
        this.drawSelection(ctx);
    }

    update(event){
        super.update(event);
    }

    drawSelection(ctx){
        if(this.isSelected){
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, this.center.radius, 0, Math.PI * 2);
            ctx.setLineDash([5, 15]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.setLineDash([0, 0]);
        } 
    }

    shootEnemy(enemies, projectiles){
        // this.enemiesInRange = this.prioritiseEnemiesInTowerRange(enemies);//CLEAN THIS UP
        // const selectedEnemy = this.enemiesInRange.find(enemy => enemy.isSelected);

        this.target = this.findEnemyTarget(enemies);

        // if(selectedEnemy)
        //     this.target = selectedEnemy;
        // else
        //     this.target = this.enemiesInRange[0];

        if(this.shootTimer > this.cooldown && this.target){
            projectiles.push(new SapphireProjectile({
                position: this.muzzle, 
                target: this.target, 
                damage: this.damage
            }));
            this.shootTimer = 0;
        }
    }

    findEnemyTarget(enemies){
        //this.center.radius = this.range;
        const enemiesInRange = enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATES.WALKING || enemy.state === ENEMY_STATES.RUNNING)
                return checkCircleCollision(enemy, this);
        })

        const selectedEnemy = enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            return selectedEnemy;

        enemiesInRange.sort((a, b) => {
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });

        return enemiesInRange[0];
    }

}

