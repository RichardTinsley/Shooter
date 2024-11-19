import { ENEMY_STATES, ENEMY_SIZE_HALF, TILE_SIZE, TILE_SIZE_HALF } from "../constants/constants.js";
import { WASTELANDS_WAYPOINTS } from "../constants/levelData.js";
import { checkCollision, findAngleOfDirection, randomPositiveFloat } from "../utilities/math.js";

export class Enemy {
    constructor({ 
        sprite, 
        scale,
        hudElements
    }){
        this.hudElements = hudElements;
        this.sprite = sprite;
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;

        this.scale = scale;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 
        this.halfWidth = this.width / 2;
        this.quarterWidth = this.width / 4;

        this.waypoints = this.generateEnemyWaypoints();
        this.priorityDistance = 0;
        this.waypointIndex = 0;
        this.position =  {
            x: this.waypoints[this.waypointIndex].x,
            y: this.waypoints[this.waypointIndex].y
        };

        this.center = {
            x: 0,
            y: 0
        };

        this.hitBox = {
            x: 0,
            y: 0,
            radius: this.quarterWidth,
        };
        
        this.enemySpeedMinimum = 0.4; 
        this.enemySpeedRange = 1.0;
        this.speed = randomPositiveFloat(this.enemySpeedRange) + this.enemySpeedMinimum;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.state = this.speed < 0.8 ? ENEMY_STATES.WALKING : ENEMY_STATES.RUNNING;
        this.sprite.row = this.state;
        this.isSelected = false;
        this.direction;
        
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;
        this.coins = Math.floor(Math.random() * 5 + 1);
        this.exp = this.generateRandomExp();
    }

    draw(ctx){
        switch(this.state){
            case ENEMY_STATES.WALKING:
                this.drawShadow(ctx);
                this.drawEnemy(ctx);
                this.drawHealthBar(ctx);
                break
            case ENEMY_STATES.RUNNING:
                this.drawShadow(ctx);
                this.drawEnemy(ctx); 
                this.drawHealthBar(ctx);
                break
            case ENEMY_STATES.DYING:
                this.drawEnemy(ctx); 
                break
        }
    }

    update(event){
        switch(this.state){
            case ENEMY_STATES.WALKING:
                this.updateMovement(event); 
                break
            case ENEMY_STATES.RUNNING:
                this.updateMovement(event);
                break
            case ENEMY_STATES.DYING:
                if(event)this.updateDying();
                break
        }
    }

    drawEnemy(ctx){
        const left = -this.halfWidth - ENEMY_SIZE_HALF - this.position.x;
        const right = this.position.x + ENEMY_SIZE_HALF - this.halfWidth;

        if(this.direction === ENEMY_STATES.LEFT){
            ctx.save();
            ctx.scale(-1, 1);
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.state * this.sprite.height + 1,
            this.sprite.width,
            this.sprite.height,
            this.direction === ENEMY_STATES.LEFT ? left : right,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
        if(this.direction === ENEMY_STATES.LEFT)
            ctx.restore();
    }

    updateMovement(event){  
        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;

        const waypoint = this.waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
        const angle = findAngleOfDirection(waypoint, this.center);

        this.updateEnemyPosition(angle);
        this.checkEnemyCollision();
        this.checkEnemyDirection(xDistance);
        this.checkEnemyHealth();
        this.resetEnemyPosition();
    }

    updateDying(){
        if(this.sprite.frame < this.maxFrame) 
            this.sprite.frame++; 
        else 
            this.sprite.frame = this.maxFrame;
        
        if(this.height > 2)
            this.height -= 2;
        else
            this.state = ENEMY_STATES.DEAD;
    }

    updateEnemyPosition(angle){
        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.center.x = this.position.x + ENEMY_SIZE_HALF;
        this.center.y = this.position.y + ENEMY_SIZE_HALF;
        this.hitBox.x = this.position.x + ENEMY_SIZE_HALF;
        this.hitBox.y = this.position.y + ENEMY_SIZE_HALF / 4;
    }

    checkEnemyCollision(){
        const waypointCenter = {
            center: {
                x: this.waypoints[this.waypointIndex].x,
                y: this.waypoints[this.waypointIndex].y
            },
            width: 1
        };
        
        if (checkCollision(this, waypointCenter) && 
            this.waypointIndex < this.waypoints.length - 1)
            this.waypointIndex++;
    }

    checkEnemyDirection(xDistance){
        if(xDistance < 0)
            this.direction = ENEMY_STATES.LEFT;
        else
            this.direction = ENEMY_STATES.RIGHT;
    }

    checkEnemyHealth(){
        if(this.health <= 0) {
            this.hitBox.y += this.quarterWidth;
            this.hitBox.radius -= this.quarterWidth;
            this.state = ENEMY_STATES.DYING;
            this.sprite.frame = 0;
        }
    }

    resetEnemyPosition(){
        if (this.position.x > canvas.width){
            this.hudElements.hearts -= 1;
            this.waypointIndex = 0;
            this.position = { 
                x: this.waypoints[this.waypointIndex].x, 
                y: this.waypoints[this.waypointIndex].y 
            };
        }
    }

    drawHealthBar(ctx){
        const healthBarX = this.center.x - this.quarterWidth;
        const healthBarY = this.center.y - (this.height / 1.4);
        const healthBarLength = this.quarterWidth * 2;
        const healthBarThickness = 4;
        if(this.health > 0){
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black'
            ctx.fillRect(
                healthBarX, 
                healthBarY, 
                healthBarLength, 
                healthBarThickness
            );
            ctx.fillStyle = 'rgb(85, 255, 0)';
            ctx.fillRect(
                healthBarX, 
                healthBarY, 
                healthBarLength * (this.health / this.maxHealth), 
                healthBarThickness
            );
            ctx.strokeRect(
                healthBarX,
                healthBarY, 
                healthBarLength, 
                healthBarThickness
            );
        }
    }

    drawShadow(ctx){
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

    generateRandomExp(){
        if (Math.random() * 10 < 1)
            return Math.floor(Math.random() * 5) + 1;
        else
            return 0
    }

    generateEnemyWaypoints(){
        return WASTELANDS_WAYPOINTS.map(waypoint => {
            return { 
                    x: (waypoint.x - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10)),
                    y: (waypoint.y - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10))
                }
            }
        );
    }
}