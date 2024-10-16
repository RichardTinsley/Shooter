import { TILE_SIZE, HALF_TILE_SIZE } from "../index.js";
import { ENEMY_STATE } from "./EnemyHandler.js";

export class Enemy {
    constructor({
        game, 
        sprite, 
        position, 
        scale,
        waypoints
    }){
        this.game = game;
        this.sprite = sprite ?? { 
            imageLeft: "",
            imageRight: "", 
            x: 0, 
            y: 0, 
            width: TILE_SIZE, 
            height: TILE_SIZE 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;
        this.waypoints = waypoints;
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
        
        this.priorityDistance = 0;
        this.maxFrame = (this.sprite.imageRight.width / this.sprite.width) - 1;
        
        this.state;
        this.direction;
        this.health = 100;
        this.coins = Math.floor(Math.random() * 5 + 1);
        this.exp = Math.floor(Math.random() * 2 + 1);
        
        this.speedMinimum = 0.4; 
        this.speedRange = 1.0
        this.speed = Math.random() * this.speedRange + this.speedMinimum;
        this.speedAverage = (this.speedRange + this.speedMinimum) / 2;
        
        if(this.speed >= .8){
            this.sprite.y = ENEMY_STATE.RUNNING;
            this.state = ENEMY_STATE.RUNNING;
        } else {
            this.sprite.y = ENEMY_STATE.WALKING;
            this.state = ENEMY_STATE.WALKING;
        }
    }

    renderEnemy(ctx){
        switch(this.state){
            case ENEMY_STATE.WALKING:
                this.updateMovement(); 
                this.draw(ctx);
                break
            case ENEMY_STATE.RUNNING:
                this.updateMovement();
                this.draw(ctx); 
                break
            case ENEMY_STATE.DYING:
                this.updateDying();
                this.draw(ctx); 
                break
        }
    }

    updateMovement(){
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
        ){
            this.waypointIndex++;
        }

        if(xDistance < 0)
            this.direction = this.sprite.imageLeft;
        else
            this.direction = this.sprite.imageRight;

        if(this.game.eventUpdate)
            this.sprite.x < this.maxFrame ? this.sprite.x++ : this.sprite.x = 0;

        if(this.health <= 0 && this.state) {
            this.state = ENEMY_STATE.DYING;
            this.sprite.y = ENEMY_STATE.DYING;
            if(this.direction === this.sprite.imageLeft)
                this.sprite.x = this.maxFrame 
            else
                this.sprite.x = 0;
        }
    }

    updateDying(){
        if(this.game.eventUpdate){
            if(this.direction === this.sprite.imageRight)
                if(this.sprite.x < this.maxFrame) 
                    this.sprite.x++; 
                else 
                    this.sprite.x = this.maxFrame;
            else
                if(this.sprite.x > 0) 
                    this.sprite.x--; 
                else
                    this.sprite.x = 0;
            
        if(this.height > 0) 
            this.height -= 2;
        else
            this.state = ENEMY_STATE.DEAD;
        }
    }

    draw(ctx){
        ctx.drawImage(
            this.direction,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.position.x + HALF_TILE_SIZE - this.halfWidth,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
        if(this.state === ENEMY_STATE.RUNNING || this.state === ENEMY_STATE.WALKING){
            this.drawHealthBar(ctx);
            this.drawShadow(ctx);
        }
        if(this.game.debug) 
            this.drawDebug(ctx);
    }

    drawHealthBar(ctx){
        const healthBarX = this.center.x - this.thirdWidth;
        const healthBarY = this.center.y - this.scale * 30;
        const healthBarWidth = this.thirdWidth * 2;
        ctx.fillStyle = 'red';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth, 5);
        ctx.fillStyle = 'rgb(85, 255, 0)';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth * (this.health / 100), 5);
    }
    
    drawShadow(ctx){
        ctx.beginPath();
        ctx.ellipse(this.center.x, this.position.y + TILE_SIZE - (2 * this.scale), this.thirdWidth / 3, this.thirdWidth, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();      
    }

    drawDebug(ctx){
        ctx.fillStyle = 'rgba(250, 0, 0, 0.3)';
        ctx.fillRect(this.position.x, this.position.y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = 'rgba(0, 0, 250, 0.3)';
        ctx.fillRect(Math.floor(this.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(this.position.y / TILE_SIZE) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        this.game.drawGUIText(ctx, this.priorityDistance, Math.floor(this.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(this.position.y / TILE_SIZE) * TILE_SIZE + 20, HALF_TILE_SIZE, 'right');
    }
}