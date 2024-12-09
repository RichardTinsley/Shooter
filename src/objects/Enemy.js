import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { checkCircleCollision, randomPositiveFloat } from "../utilities/math.js";
import { assets } from "../utilities/assets.js";
import { Sprite } from "./Sprite.js";
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
        this.position.radius = this.width / 3; // CHANGE SIZE AND DRAW IN DEBUGGER
        
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
                if(!this.isDying()){
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

    checkWaypointArrival(){   
        let waypointCenter = {...this.waypoints[this.waypointIndex]};
        waypointCenter.radius = 1;

        if (checkCircleCollision(this.position, waypointCenter))
            this.waypointIndex++;
    }

    checkEndpointArrival(playerStats){
        if(this.waypointIndex === this.waypoints.length){
            playerStats.setLives();
            this.waypointIndex = 0;
            this.position = {...this.waypoints[0]};
        }
    }

    setHealth(damage){
        this.health -= damage;
        if(this.health <= 0 && !this.isDying()){
	    this.health = 0;
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

    updateDeathAnimation(event){
        if(event && this.isDying()){
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


    drawHealthBar(ctx){
        if(!this.isDying()){
            const healthBarX = this.position.x - this.quarterWidth;
            const healthBarY = this.position.y - this.height + this.shadowHeight;
            const healthBarLength = this.halfWidth;
            const healthBarThickness = 3;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.lineJoin = "bevel";
            ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
            ctx.strokeRect(healthBarX - 2, healthBarY - 2, healthBarLength + 4, healthBarThickness + 4);
            ctx.strokeStyle = INTERFACE.COLOURS.BLACK;
            ctx.strokeRect(healthBarX - 1, healthBarY - 1, healthBarLength + 2, healthBarThickness + 2);

            ctx.fillStyle = INTERFACE.COLOURS.BLACK;
            ctx.fillRect(healthBarX, healthBarY, healthBarLength, healthBarThickness);
            this.health > (this.maxHealth * .33) ? ctx.fillStyle = INTERFACE.COLOURS.BRIGHT_GREEN : ctx.fillStyle = INTERFACE.COLOURS.RED;
            ctx.fillRect(healthBarX, healthBarY, healthBarLength * (this.health / this.maxHealth), healthBarThickness);
        }
    }

    addBlood(effects){
        effects.push(new Blood({
            position: {...this.position},
            scale: this.scale * .5,
        }));
    }
}