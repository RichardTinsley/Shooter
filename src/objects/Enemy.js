import * as OBJECTS from "../constants/objects.js";
import * as INTERFACE from "../constants/interface.js";
import { HealthBar } from "../components/HealthBar.js";
import { checkCircleCollision } from "../utilities/math.js";
import { assets } from "../utilities/assets.js";
import { Sprite } from "./Sprite.js";
import { Blood } from "./effects/Blood.js";
import { PlayerStats } from "../handlers/PlayerStats.js";

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
        
        this.isPillaged = false;
        this.sprite.row = this.speed < 0.8 ? OBJECTS.STATES.WALKING : OBJECTS.STATES.RUNNING;
        this.type = OBJECTS.TYPES.ENEMY;

        this.health = new HealthBar({
            length: this.halfWidth,
        })

        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.position.radius = this.width / 3; // CHANGE SIZE AND DRAW IN DEBUGGER
    }

    draw(ctx){
        switch(this.sprite.row){
            case OBJECTS.STATES.WALKING:
            case OBJECTS.STATES.RUNNING:
                this.drawShadow(ctx);
                this.health.draw(ctx);
            case OBJECTS.STATES.DYING:
                this.contextSave(ctx);
                this.updateSpriteDrawPosition();
                super.draw(ctx);
                this.contextRestore(ctx);
                break
        }
    }

    update(event){
        switch(this.sprite.row){
            case OBJECTS.STATES.WALKING:
            case OBJECTS.STATES.RUNNING:
                super.update(event);
                this.checkWaypointArrival();
                this.checkEndpointArrival();
                this.updateDestination({...this.waypoints[this.waypointIndex]});
                this.updateDirection();
                this.updateMovement();
                this.updatePriorityDistance(); 
                this.updateHitbox();
                this.health.update(this.updateHealthBarPosition());
                break
            case OBJECTS.STATES.DYING:
                this.updateDeathAnimation(event);
                break
        }
    }

    drawSelectionIcon(ctx){
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
        ctx.setLineDash([this.quarterWidth / 2, this.quarterWidth / 2]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = INTERFACE.COLOURS.RED
        ctx.stroke();
        ctx.setLineDash([0, 0]);  
    }

    checkWaypointArrival(){   
        let waypointCenter = {...this.waypoints[this.waypointIndex]};
        waypointCenter.radius = 5;

        if (checkCircleCollision(this.center, waypointCenter))
            this.waypointIndex++;
    }

    checkEndpointArrival(){
        if(this.waypointIndex === this.waypoints.length){
            PlayerStats.setLives();
            this.waypointIndex = 0;
            this.position = {...this.waypoints[this.waypointIndex]};
        }
    }

    updateHealthBarPosition(){
        return {
            x: this.position.x - this.quarterWidth,
            y: this.position.y - this.height + this.shadowHeight
        }
    }

    checkEnemyHealth(){
        if(!this.health.isAlive() && !this.isEnemyDying()){
            this.sprite.row = OBJECTS.STATES.DYING;
            this.sprite.frame = 0;
            this.center.y = this.position.y;
            this.center.radius /= 4;
        }
    }

    isEnemyDying(){
        return this.sprite.row === OBJECTS.STATES.DYING;
    }

    updateDeathAnimation(event){
        if(event){
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