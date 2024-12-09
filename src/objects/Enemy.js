import * as OBJECTS from "../constants/objects.js";
import { HealthBar } from "../components/HealthBar.js";
import { checkCircleCollision } from "../utilities/math.js";
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

        this.health = new HealthBar({
            length: this.halfWidth,
        })

        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.position.radius = this.width / 3; // CHANGE SIZE AND DRAW IN DEBUGGER
        
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
                this.health.draw(ctx);
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
                    this.health.update(this.updateHealthBarPosition());
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

    updateHealthBarPosition(){
        return {
            x: this.position.x - this.quarterWidth,
            y: this.position.y - this.height + this.shadowHeight
        }
    }

    isAlive(){
        if(!this.health.getHealth() && !this.isDying()){
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

    addBlood(effects){
        effects.push(new Blood({
            position: {...this.position},
            scale: this.scale * .5,
        }));
    }
}