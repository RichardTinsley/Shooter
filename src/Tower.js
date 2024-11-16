import { ENEMY_STATES, TOWER_SIZE } from "./constants/constants.js";
import { assets } from "./AssetLoader.js";

export class Tower {
    constructor({
        sprite, 
        position, 
        damage,
        range,
        cooldown
    }){
        this.sprite = sprite;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
        this.halfWidth = this.width / 2;
        
        this.position = position;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };
        
        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        
        this.shootTimer = 0;
        this.damage = damage;
        this.range = range;
        this.cooldown = cooldown;

        this.mouseOver = false;
        
        this.cost;
        this.muzzlePosition = {
            x: 0,
            y: 0
        };
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.center.x - this.width + this.halfWidth,
            this.center.y - this.halfWidth ,
            this.width,
            this.height
        );

        if(this.mouseOver)
            this.colour = 'rgba(50, 255, 50, 0.15)';
        else
            this.colour = 'rgba(255, 255, 255, 0.15)';
        
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(event) {
        if (event){
            this.shootTimer++;
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
        }
    }

    targetEnemy(enemies){
        const enemiesInTowerRange = this.prioritiseEnemiesInTowerRange(enemies);
        const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            this.target = selectedEnemy;
        else
            this.target = enemiesInTowerRange[0];
    }

    shootEnemy(addProjectile){
        if(this.shootTimer > this.cooldown && this.target){
            addProjectile(
                this.target, 
                this, 
                assets.get('blueFireball'))
                this.shootTimer = 0;
        }
    }

    prioritiseEnemiesInTowerRange(enemies){
        return enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATES.WALKING || enemy.state === ENEMY_STATES.RUNNING){
                const xDifference = enemy.center.x - this.center.x;
                const yDifference = enemy.center.y - this.center.y;
                const distance = Math.hypot(xDifference, yDifference);
                return distance < enemy.width / 10 + this.range;
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