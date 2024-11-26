import { ANIMATION_STATES } from "../constants/animations.js";
import { CURSOR_TYPES } from "../constants/mouse.js";
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

        this.type = CURSOR_TYPES.TOWER;
        this.isOccupied = false;
        this.isSelected = false;
        
        this.enemiesInRange = [];
        this.target;
        this.shootTimer = 0;
        this.damage;
        this.range;
        this.cooldown;

        this.muzzle = {
            x: this.position.x,
            y: this.position.y - this.sprite.height
        };

    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                super.draw(ctx);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                super.update(event);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
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
        this.enemiesInRange = this.prioritiseEnemiesInTowerRange(enemies);//CLEAN THIS UP
        const selectedEnemy = this.enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            this.target = selectedEnemy;
        else
            this.target = this.enemiesInRange[0];

        if(this.shootTimer > this.cooldown && this.target){
            projectiles.push(new SapphireProjectile({
                position: this.muzzle, 
                target: this.target, 
                damage: this.damage
            }));
            this.shootTimer = 0;
        }
    }

    prioritiseEnemiesInTowerRange(enemies){
        return enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATES.WALKING || enemy.state === ENEMY_STATES.RUNNING){
                return checkCircleCollision(enemy, this);
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

