import { ENEMY_STATES, ENEMY_SIZE_HALF } from "./Constants.js";

export class Enemy {
    constructor({ 
        sprite, 
        position, 
        scale,
        speed,
        state,
        waypoints,
    }){
        this.sprite = sprite;
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;

        this.scale = scale;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 
        this.halfWidth = this.width / 2;
        this.quarterWidth = this.width / 4;
        this.shadowHeight = this.halfWidth / 6;

        this.position = position;
        this.center = {
            x: Math.round(this.position.x + this.width / 2 * 100) / 100,
            y: Math.round(this.position.y + this.height / 2 * 100) / 100
        };
        
        this.speed = speed;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.state = state;
        this.isSelected = false;
        this.direction;
        
        this.priorityDistance = 0;
        this.waypointIndex = 0;
        this.waypoints = waypoints;

        this.health = 100;
        this.healthBarThickness = 2.5;
        this.coins = Math.floor(Math.random() * 5 + 1);
        this.exp = Math.floor(Math.random() * 2 + 1);
    }

    renderEnemy(ctx, event){
        switch(this.state){
            case ENEMY_STATES.WALKING:
                this.updateMovement(event); 
                this.drawShadow(ctx);
                this.draw(ctx);
                break
            case ENEMY_STATES.RUNNING:
                this.updateMovement(event);
                this.drawShadow(ctx);
                this.draw(ctx); 
                break
            case ENEMY_STATES.DYING:
                this.updateDying(event);
                this.draw(ctx); 
                break
        }
    }

    draw(ctx){
        const left = -this.halfWidth - ENEMY_SIZE_HALF - this.position.x;
        const right = this.position.x + ENEMY_SIZE_HALF - this.halfWidth;
        if(this.direction === ENEMY_STATES.LEFT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.direction === ENEMY_STATES.LEFT ? left : right,
            this.center.y - this.height + ENEMY_SIZE_HALF,
            this.width,
            this.height
        );
        if(this.direction === ENEMY_STATES.LEFT)
            ctx.restore();
    }

    updateMovement(event){
        const waypoint = this.waypoints[this.waypointIndex];

        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;

        const angle = Math.atan2(yDistance, xDistance);
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.center = {
            x: this.position.x + ENEMY_SIZE_HALF,
            y: this.position.y + ENEMY_SIZE_HALF
        };
        
        if( Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
            Math.abs(this.velocity.x) && 
            Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
            Math.abs(this.velocity.y) &&
            this.waypointIndex < this.waypoints.length - 1
        )
            this.waypointIndex++;
        
        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;

        if(xDistance < 0)
            this.direction = ENEMY_STATES.LEFT;
        else
            this.direction = ENEMY_STATES.RIGHT;

        if(this.health <= 0) {
            this.state = ENEMY_STATES.DYING;
            this.sprite.row = ENEMY_STATES.DYING;
            this.sprite.frame = 0;
        }
    }

    updateDying(event){
        if(event){
            if(this.sprite.frame < this.maxFrame) 
                this.sprite.frame++; 
            else 
                this.sprite.frame = this.maxFrame;
            
            if(this.height > 2) 
                this.height -= 2;
            else
                this.state = ENEMY_STATES.DEAD;
        }
    }

    drawHealthBar(ctx){
        const healthBarX = this.center.x - this.thirdWidth;
        const healthBarY = this.center.y - this.scale * 30;
        const healthBarWidth = this.thirdWidth * 2;

        ctx.fillStyle = 'red';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth, this.healthBarThickness);

        ctx.fillStyle = 'rgb(85, 255, 0)';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth * (this.health / 100), this.healthBarThickness);
    }

    drawShadow(ctx){
        ctx.beginPath();
        ctx.ellipse(this.center.x, this.center.y + ENEMY_SIZE_HALF, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();      
        if(this.isSelected){
            ctx.lineWidth = this.healthBarThickness;
            ctx.strokeStyle = 'rgba(255, 30, 30, 1)'
            ctx.stroke();
        }   
    }
}