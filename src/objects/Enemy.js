import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { checkCircleCollision, randomPositiveFloat } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";
import { assets } from "../utilities/assets.js";
import { Blood } from "./effects/Blood.js";

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
            height: height ?? OBJECTS.SIZES.ENEMY + .1, // +.1 REMOVES UPPER SPRITE PIXEL OVERLAP
            position,
            scale: scale ?? 1.5,
            speed: speed ?? 1, 
        });

        this.waypoints = waypoints;
        this.waypointIndex = 0;
        
        this.maxHealth = randomPositiveFloat(100);
        this.health = this.maxHealth;
        
        this.isPillaged = false;
        this.sprite.row = this.speed < 0.8 ? OBJECTS.STATES.WALKING : OBJECTS.STATES.RUNNING;
        this.type = OBJECTS.TYPES.ENEMY;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.drawShadow(ctx);
                this.contextSave(ctx);
                this.updateSpriteDrawPosition();
                super.draw(ctx);
                this.contextRestore(ctx);
                this.drawHealthBar(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    update(event){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                if(this.sprite.row !== OBJECTS.STATES.DYING){
                    super.update(event);
                    this.updateDestination({...this.waypoints[this.waypointIndex]});
                    this.updateDirection(this.position);
                    this.updateMovement();
                    this.updatePriorityDistance(); 
                    this.updateHitbox();
                    this.checkWaypointArrival();
                }
                this.updateDeathAnimation(event);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    updateDeathAnimation(event){
        if(event && this.sprite.row === OBJECTS.STATES.DYING){
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

    checkEndpointArrival(playerStats){
        if(this.waypointIndex === this.waypoints.length){
            playerStats.setLives();
            this.waypointIndex = 0;
            this.position = {...this.waypoints[0]};
        }
    }

    checkWaypointArrival(){
        const waypointCenter = {};
        waypointCenter.center = {...this.waypoints[this.waypointIndex]};
        waypointCenter.center.radius = 1;

        this.center.radius = this.width / 3;
        if (checkCircleCollision(this, waypointCenter))
            this.waypointIndex++;
        this.center.radius = this.width / 4;
    }

    setHealth(damage){
        if(damage > this.health)
            this.health = 0
        else
            this.health -= damage;

        if(this.health <= 0) {
            this.sprite.row = OBJECTS.STATES.DYING;
            this.sprite.frame = 0;
            this.center.y = this.position.y;
            this.center.radius /= 4;
            this.isSelected = false;
        }
    }

    isDying(){
        return this.sprite.row === OBJECTS.STATES.DYING;
    }

    drawHealthBar(ctx){
        if(this.health > 0){
            const healthBarX = this.position.x - this.quarterWidth;
            const healthBarY = this.position.y - this.height + this.shadowHeight;
            const healthBarLength = this.halfWidth;
            const healthBarThickness = 5;
            ctx.beginPath();
            ctx.fillStyle = INTERFACE.COLOURS.RED;
            ctx.lineWidth = 1;
            ctx.strokeStyle = INTERFACE.COLOURS.BLACK;
            ctx.fillRect(healthBarX, healthBarY, healthBarLength, healthBarThickness);
            ctx.fillStyle = INTERFACE.COLOURS.BRIGHT_GREEN;
            ctx.fillRect(healthBarX, healthBarY, healthBarLength * (this.health / this.maxHealth), healthBarThickness);
            ctx.strokeRect(healthBarX, healthBarY, healthBarLength, healthBarThickness);
        }
    }

    addBlood(effects){
        effects.push(new Blood({
            position: this.position,
            scale: this.scale * .5,
        }));
    }
}