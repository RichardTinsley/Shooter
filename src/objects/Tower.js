import { ANIMATION_STATES } from "../constants/animations.js";
import { TOWER_SIZE } from "../constants/objects.js";
import { CURSOR_TYPES } from "../constants/mouse.js";
import { checkCircleCollision } from "../utilities/math.js";
import { assets } from "../handlers/Assets.js";

export class Tower {
    constructor({
        position
    }){
        this.sprite = {
            image: assets.get('towerSpot'),
            width: TOWER_SIZE,
            height: TOWER_SIZE,
            row: 0,
            frame: 0,
        };

        this.halfWidth = this.sprite.width / 2;
        
        this.position = position;
        this.center = {
            x: this.position.x + TOWER_SIZE / 2,
            y: this.position.y + TOWER_SIZE / 2,
            radius: TOWER_SIZE / 2, 
        };

        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        
        this.enemiesInRange = [];
        this.target;
        this.shootTimer = 0;
        this.muzzle = {
            x: this.center.x,
            y: this.center.y - TOWER_SIZE / 2
        };

        this.state = ANIMATION_STATES.ANIMATING;
        this.isSelected = false;
        this.type = CURSOR_TYPES.TOWER;

        this.damage;
        this.range;
        this.cooldown;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.drawTower(ctx); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        if(!event) 
            return;
        
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateTower(); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    drawTower(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.center.x - this.sprite.width / 2,
            this.center.y - this.sprite.height / 2,
            this.sprite.width,
            this.sprite.height
        );
    
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

    updateTower(){
        this.shootTimer++;
        this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
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

