import { ANIMATION_STATES, ENEMY_STATES, TILE_SIZE } from "../constants/constants.js";
import { assets } from "../AssetLoader.js";

export class Tower {
    constructor({
        sprite, 
        position,
        damage,
        range,
        cooldown,
        addProjectile,
    }){
        this.sprite = sprite;
        this.halfWidth = this.sprite.width / 2;
        
        this.position = position;
        this.center = {
            x: this.position.x + TILE_SIZE / 2,
            y: this.position.y + TILE_SIZE / 2
        };
        
        this.maxFrame = Math.floor((this.sprite.image.width / this.sprite.width)) - 1;
        this.sprite.row = 0;
        
        this.enemiesInRange = [];
        this.target;
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

        this.state = ANIMATION_STATES.ANIMATING;
        this.addProjectile = addProjectile;
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

        if(this.mouseOver)
            this.colour = 'rgba(50, 255, 50, 0.15)';
        else
            this.colour = 'rgba(255, 255, 255, 0.15)';
        
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position.x, this.position.y, this.sprite.width, this.sprite.height);
    }

    updateTower(){
        this.shootTimer++;
        this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    }

    targetEnemy(enemies){
        this.enemiesInRange = this.prioritiseEnemiesInTowerRange(enemies);
        const selectedEnemy = this.enemiesInRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            this.target = selectedEnemy;
        else
            this.target = this.enemiesInRange[0];

        this.shootEnemy();
    }

    shootEnemy(){
        if(this.shootTimer > this.cooldown && this.target){
            this.addProjectile(
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