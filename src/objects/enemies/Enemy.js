import * as OBJECTS from "../../constants/objects.js"
import { checkCircleCollision, findAngleOfDirection, giveDirection, randomPositiveFloat } from "../../utilities/math.js";
import { Sprite } from "../Sprite.js";
import { assets } from "../../utilities/assets.js";

export class Enemy extends Sprite{
    constructor({
        image,
        width,
        height,
        position,
        scale,
        speed,
        waypoints
    }){
        super({
            image: image ?? assets.get(OBJECTS.COLOURS.TOPAZ), 
            width: width ?? OBJECTS.SIZES.ENEMY,
            height: height ?? OBJECTS.SIZES.ENEMY,
            position,
            scale: scale ?? 1.5,
            speed: speed ?? 1, 
        });
        this.type = OBJECTS.TYPES.ENEMY;

        this.center.radius = this.width / 3;

        this.quarterWidth = this.width / 4;
        this.shadowHeight = this.height / 12;

        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.currentDestination = this.waypoints[this.waypointIndex];

        this.sprite.row = this.speed < 0.8 ? OBJECTS.STATES.WALKING : OBJECTS.STATES.RUNNING;
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.drawShadow(ctx);
                this.contextSave(ctx);
                super.draw(ctx);
                this.contextRestore(ctx);
                this.drawHealthBar(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    contextSave(ctx){
        if(this.direction === OBJECTS.ANIMATION.LEFT){
            ctx.save();
            ctx.scale(this.direction, 1);
            this.position.x *= -1;
        }
    }

    contextRestore(ctx){
        if(this.direction === OBJECTS.ANIMATION.LEFT){
            this.position.x *= -1;
            ctx.restore();
        }
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                if(this.sprite.row !== OBJECTS.STATES.DYING){
                    super.update(event);
                    this.updateMovement();
                    this.updateEnemyDirection();
                    this.updatePriorityDistance(); 
                    this.updateEnemyHitbox();
                    this.checkWaypointArrival();
                    this.checkEnemyHealth();
                }
                this.updateDeathAnimation(event);
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

    updateEnemyHitbox(){
        this.center.x = this.position.x;
        this.center.y = this.position.y - this.height / 3;
    }

    updateDeathAnimation(event){
        if(!event) 
            return

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
        if(this.health <= 0 && this.sprite.row !== OBJECTS.STATES.DYING) {
            this.sprite.row = OBJECTS.STATES.DYING;
            this.center.y = this.position.y;
            this.center.radius /= 4;
            this.isSelected = false;
            this.sprite.frame = 0;
        }
    }

    drawHealthBar(ctx){
        if(this.health > 0){
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
    }

    drawShadow(ctx){
        if(this.health > 0){
            ctx.beginPath();
            ctx.ellipse(this.position.x, this.position.y, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fill();  
            this.drawSelection(ctx);    
        }
    }

    drawSelection(ctx){
        if(this.isSelected){
            ctx.setLineDash([this.quarterWidth / 2, this.quarterWidth / 2]);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(255, 30, 30, 1)'
            ctx.stroke();
            ctx.setLineDash([0, 0]);
        }   
    }
}