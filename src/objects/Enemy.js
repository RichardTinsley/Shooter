import * as OBJECTS from "../constants/objects.js"
import { checkCircleCollision, findAngleOfDirection, giveDirection, randomPositiveFloat } from "../utilities/math.js";
import { MovingSprite } from "./MovingSprite.js";
import { assets } from "../utilities/assets.js";

export class Enemy extends MovingSprite{
    constructor({
        image,
        size,
        position,
        scale,
        speed,
        waypoints
    }){
        super({
            image: image ?? assets.get(OBJECTS.COLOURS.TOPAZ), 
            size: size ?? OBJECTS.SIZES.ENEMY,
            position,
            scale: scale ?? 1.5,
            speed: speed ?? 1, 
        });

        this.quarterWidth = this.width / 4;
        this.shadowHeight = this.height / 12;
        
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.currentDestination = 0;

        this.sprite.row = this.speed < 0.8 ? OBJECTS.STATES.WALKING : OBJECTS.STATES.RUNNING;
        this.isSelected = false;
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.drawShadow(ctx);
                super.draw(ctx);
                this.drawHealthBar(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    drawEnemy(ctx){
        const left = -this.halfWidth - this.halfWidth - this.position.x;
        const right = this.position.x + this.halfWidth - this.halfWidth;

        if(this.direction === OBJECTS.ANIMATION.LEFT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.direction === OBJECTS.ANIMATION.LEFT ? left : right,
            this.position.y + GAME_SIZES.TILE_SIZE - this.height,//WE DON"T NEED TILESZIE
            this.width,
            this.height
        );
        if(this.direction === OBJECTS.ANIMATION.LEFT)
            ctx.restore();
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.updateEnemyDirection()
                this.updatePriorityDistance() 
                this.updateMovement();
                this.checkWaypointArrival();
                this.checkEnemyHealth();
                this.updateDeathAnimation();
                super.update(event);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    updateEnemyDirection(){
        this.currentDestination = this.waypoints[this.waypointIndex];
        this.angle = findAngleOfDirection(this.currentDestination, this.position);
        this.direction = giveDirection(this.angle);
    }

    updatePriorityDistance(){  
        const yDistance = this.currentDestination.y - this.position.y;
        const xDistance = this.currentDestination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
    }

    updateDeathAnimation(){
        if(this.sprite.row === OBJECTS.STATES.DYING){
            if(this.sprite.frame < this.maxFrame) 
                this.sprite.frame++; 
            else 
                this.sprite.frame = this.maxFrame;
            
            if(this.height > 2)
                this.height -= 2;
            else
                this.state = OBJECTS.ANIMATION.FINISHED;
        }
    }

    checkWaypointArrival(){
        const waypointCenter = {
            center: {
                x: this.waypoints[this.waypointIndex].x,
                y: this.waypoints[this.waypointIndex].y,
                radius: 1
            },
        };
        
        if (checkCircleCollision(this, waypointCenter) && 
            this.waypointIndex < this.waypoints.length - 1)
            this.waypointIndex++;
    }

    checkEnemyHealth(){
        if(this.health <= 0) {
            this.sprite.row = OBJECTS.ENEMY.DYING;
            this.sprite.frame = 0;
        }
    }

    drawHealthBar(ctx){
        if(this.health <= 0)
            return
        
        const healthBarX = this.position.x - this.quarterWidth;
        const healthBarY = this.position.y - this.height + this.shadowHeight;
        const healthBarLength = this.quarterWidth * 2;
        const healthBarThickness = 4;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black'
        ctx.fillRect(healthBarX, healthBarY, healthBarLength, healthBarThickness);
        ctx.fillStyle = 'rgb(85, 255, 0)';
        ctx.fillRect(healthBarX, healthBarY, healthBarLength * (this.health / this.maxHealth), healthBarThickness);
        ctx.strokeRect(healthBarX, healthBarY, healthBarLength, healthBarThickness);
    }

    drawShadow(ctx){
        if(this.health <= 0)
            return

        ctx.beginPath();
        ctx.ellipse(
            this.position.x, 
            this.position.y, 
            this.shadowHeight, 
            this.quarterWidth, 
            Math.PI / 2, 
            0, 
            2 * Math.PI
        );
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();      
        if(this.isSelected){
            ctx.setLineDash([this.quarterWidth / 2, this.quarterWidth / 2]);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(255, 30, 30, 1)'
            ctx.stroke();
            ctx.setLineDash([0, 0]);
        }   
    }
}