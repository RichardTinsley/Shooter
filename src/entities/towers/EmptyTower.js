import { checkCollision } from "../../utilities/math.js";
import { ANIMATION_STATES, ENEMY_STATES, TILE_SIZE } from "../../constants/constants.js";
import { assets } from "../../AssetLoader.js";

export class EmptyTower {
    constructor({
        position
    }){
        this.sprite = {
            image: assets.get('towerSpot'),
            width: TILE_SIZE,
            height: TILE_SIZE,
            row: 0,
            frame: 0
        };

        this.halfWidth = this.sprite.width / 2;
        this.position = position;
        this.center = {
            x: this.position.x + TILE_SIZE / 2,
            y: this.position.y + TILE_SIZE / 2
        };
        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        
        this.enemiesInRange = [];
        this.target;
        this.shootTimer = 0;
        this.damage;
        this.range;
        this.cooldown;
        
        this.hitBox = {
            x: this.center.x,
            y: this.center.y,
            radius: this.range,
        };

        this.isSelected = false;
        
        this.cost;
        this.muzzle = {
            x: this.center.x,
            y: this.center.y - TILE_SIZE / 2
        };

        this.state = ANIMATION_STATES.ANIMATING;
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
            ctx.arc(this.hitBox.x, this.hitBox.y, this.hitBox.radius, 0, Math.PI * 2);
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

    targetEnemy(enemies){
        this.enemiesInRange = this.prioritiseEnemiesInTowerRange(enemies);//CLEAN THIS UP
        const selectedEnemy = this.enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            this.target = selectedEnemy;
        else
            this.target = this.enemiesInRange[0];

        this.shootEnemy();
    }

    shootEnemy(){
        if(this.shootTimer > this.cooldown && this.target){
            // this.addProjectile(
            //     this.target, 
            //     this, 
            //     assets.get('blueFireball'))
            //     this.shootTimer = 0;
        }
    }

    prioritiseEnemiesInTowerRange(enemies){
        return enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATES.WALKING || enemy.state === ENEMY_STATES.RUNNING){
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