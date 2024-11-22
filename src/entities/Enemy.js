import { ENEMY_STATES, ENEMY_SIZE_HALF, TILE_SIZE, ENEMY_SIZE, ANIMATION_STATES } from "../constants/constants.js";
import { checkCollision, findAngleOfDirection, giveDirection, randomPositiveFloat } from "../utilities/math.js";

export class Enemy {
    constructor({ 
        sprite,
        waypoints, 
        scale
    }){
        this.sprite = sprite 
        this.sprite.width = ENEMY_SIZE;
        this.sprite.height = ENEMY_SIZE;
        
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        
        this.scale = scale;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 
        this.halfWidth = this.width / 2;
        this.quarterWidth = this.width / 4;
        
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.position = { ...this.waypoints[this.waypointIndex]};

        this.center = {
            x: 0,
            y: 0
        };

        this.hitBox = {
            x: this.waypoints[this.waypointIndex].x,
            y: this.waypoints[this.waypointIndex].y,
            radius: this.quarterWidth,
        };
        
        this.speed = this.setSpeed();
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.state = ANIMATION_STATES.ANIMATING;
        this.sprite.row = this.speed < 0.8 ? ENEMY_STATES.WALKING : ENEMY_STATES.RUNNING;
        this.isSelected = false;
        this.direction;
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.drawShadow(ctx);
                this.drawEnemy(ctx);
                this.drawHealthBar(ctx);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;

        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateMovement(); 
                this.updateDying();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    drawEnemy(ctx){
        const left = -this.halfWidth - ENEMY_SIZE_HALF - this.position.x;
        const right = this.position.x + ENEMY_SIZE_HALF - this.halfWidth;

        if(this.direction === ANIMATION_STATES.LEFT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.direction === ANIMATION_STATES.LEFT ? left : right,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
        if(this.direction === ANIMATION_STATES.LEFT)
            ctx.restore();
    }

    updateMovement(){  
        const waypoint = this.waypoints[this.waypointIndex];
        const angle = findAngleOfDirection(waypoint, this.center);
        this.direction = giveDirection(angle);

        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));

        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.center.x = this.position.x + ENEMY_SIZE_HALF;
        this.center.y = this.position.y + ENEMY_SIZE_HALF;
        this.hitBox.x = this.position.x + ENEMY_SIZE_HALF;
        this.hitBox.y = this.position.y + ENEMY_SIZE_HALF / 4;

        this.checkEnemyCollision();
        this.checkEnemyHealth();
    }

    updateDying(){
        if(this.sprite.row === ENEMY_STATES.DYING){
            if(this.sprite.frame < this.maxFrame) 
                this.sprite.frame++; 
            else 
                this.sprite.frame = this.maxFrame;
            
            if(this.height > 2)
                this.height -= 2;
            else
                this.state = ANIMATION_STATES.FINISHED;
        }
    }

    checkEnemyCollision(){
        const waypointCenter = {
            hitBox: {
                x: this.waypoints[this.waypointIndex].x,
                y: this.waypoints[this.waypointIndex].y,
                radius: 1
            },
        };
        
        if (checkCollision(this, waypointCenter) && 
            this.waypointIndex < this.waypoints.length - 1)
            this.waypointIndex++;
    }

    checkEnemyHealth(){
        if(this.health <= 0) {
            this.hitBox.y += this.quarterWidth;
            this.hitBox.radius -= this.quarterWidth;
            this.sprite.row = ENEMY_STATES.DYING;
            this.sprite.frame = 0;
        }
    }

    drawHealthBar(ctx){
        if(this.health <= 0)
            return
        
        const healthBarX = this.center.x - this.quarterWidth;
        const healthBarY = this.center.y - (this.height / 1.4);
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

        const shadowHeight = this.height / 12;

        ctx.beginPath();
        ctx.ellipse(
            this.center.x, 
            this.center.y + ENEMY_SIZE_HALF / 6, 
            shadowHeight, 
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

    setSpeed(){
        const enemySpeedMinimum = 0.4; 
        const enemySpeedRange = 1.0;
        return randomPositiveFloat(enemySpeedRange) + enemySpeedMinimum;
    }
}