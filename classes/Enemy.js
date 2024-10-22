import { TILE_SIZE, HALF_TILE_SIZE } from "../index.js";

export const ENEMY_STATE = {
    IDLE: 0,
    WALKING: 1,
    RUNNING: 2,
    ATTACK: 3,
    INJURED: 4,
    DYING: 5,
    DEAD: 6,
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};

export class Enemy {
    constructor({ 
        sprite, 
        position, 
        scale,
        waypoints
    }){
        this.sprite = sprite ?? { 
            image: "",
            frame: 0, 
            row: 0, 
            width: TILE_SIZE, 
            height: TILE_SIZE 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;
        this.waypoints = this.generateRandomEnemyWaypoints(waypoints);
        this.waypointIndex = 0;
        
        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;   
        this.halfWidth = this.width / 2;
        this.thirdWidth = Math.floor(this.width / 3);
        this.center = {
            x: this.position.x + HALF_TILE_SIZE,
            y: this.position.y + HALF_TILE_SIZE
        };
        this.velocity = { 
            x: 0, 
            y: 0
        }; 
        
        this.direction;
        this.priorityDistance = 0;

        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        
        this.state;
        this.isSelected = false;

        this.health = 100;
        this.healthBarThickness = 2.5;
        this.coins = Math.floor(Math.random() * 5 + 1);
        this.exp = Math.floor(Math.random() * 2 + 1);
        
        this.speedMinimum = 0.4; 
        this.speedRange = 1.0;
        this.speed = Math.random() * this.speedRange + this.speedMinimum;
        this.speedAverage = (this.speedRange + this.speedMinimum) / 2;
        
        if(this.speed >= .8){
            this.sprite.row = ENEMY_STATE.RUNNING;
            this.state = ENEMY_STATE.RUNNING;
        } else {
            this.sprite.row = ENEMY_STATE.WALKING;
            this.state = ENEMY_STATE.WALKING;
        }
    }

    renderEnemy(ctx, event){
        switch(this.state){
            case ENEMY_STATE.WALKING:
                this.updateMovement(event); 
                this.draw(ctx);
                break
            case ENEMY_STATE.RUNNING:
                this.updateMovement(event);
                this.draw(ctx); 
                break
            case ENEMY_STATE.DYING:
                this.updateDying(event);
                this.draw(ctx); 
                break
        }
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
            x: this.position.x + HALF_TILE_SIZE,
            y: this.position.y + HALF_TILE_SIZE
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
            this.direction = ENEMY_STATE.LEFT;
        else
            this.direction = ENEMY_STATE.RIGHT;

        if(this.health <= 0 && this.state) {
            this.state = ENEMY_STATE.DYING;
            this.sprite.row = ENEMY_STATE.DYING;
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
                this.state = ENEMY_STATE.DEAD;
        }
    }

    draw(ctx){
        if(this.health > 0){
            this.drawHealthBar(ctx);
            this.drawShadow(ctx);
        }
        const left = -this.halfWidth - HALF_TILE_SIZE - this.position.x;
        const right = this.position.x + HALF_TILE_SIZE - this.halfWidth;
        if(this.direction === ENEMY_STATE.LEFT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.direction === ENEMY_STATE.LEFT ? left : right,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
        if(this.direction === ENEMY_STATE.LEFT)
            ctx.restore();
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
        ctx.ellipse(this.center.x, this.position.y + TILE_SIZE - (2 * this.scale), this.thirdWidth / 3, this.thirdWidth, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();      
        if(this.isSelected){
            ctx.lineWidth = this.healthBarThickness;
            ctx.strokeStyle = 'rgba(255, 30, 30, 1)'
            ctx.stroke();
        }   
    }

    generateRandomEnemyWaypoints(wayspoints){
        const newWaypoints = wayspoints.map(waypoint => {
            return { 
                    x: (waypoint.x - 40) + Math.round(Math.random() * 70),
                    y: (waypoint.y - 40) + Math.round(Math.random() * 70)
                }
            }
        );
        this.position.x = newWaypoints[0].x;
        this.position.y = newWaypoints[0].y;
        return newWaypoints;
    }
}