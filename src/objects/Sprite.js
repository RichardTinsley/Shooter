import * as OBJECTS from "../constants/objects.js"
import * as INTERFACE from "../constants/interface.js";
import { findAngleOfDirection, giveDirection, } from "../utilities/math.js";

export class Sprite {
    constructor({
        image,
        width,
        height,
        position,
        scale,
        speed,
    }){
        this.sprite = {
            image: image,
            width: width ?? 32,
            height: height ?? 32,
            frame: 0,
            row: 0,
        };
                
        this.scale = scale ?? 1;
        this.width = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height = Math.round(this.sprite.height * this.scale * 100) / 100; 
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;
        this.quarterWidth = this.width / 4;
        this.shadowHeight = this.height / 12;

        this.maxFrame = Math.floor(this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = Math.floor(this.sprite.image.height / this.sprite.height) - 1;

        this.position = position;
        this.center = {
            x: this.position.x,
            y: this.position.y - this.halfHeight,
            radius: this.quarterWidth,
        };

        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.height;
        
        this.destination = null;
        this.priorityDistance = 0;
        this.speed = speed ?? 1;
        this.angle = 0;
        this.direction;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.isSelected = false;
        this.state = OBJECTS.ANIMATION.ANIMATING;
    }

    draw(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.width * this.sprite.frame,
            this.sprite.height * this.sprite.row,
            this.sprite.width,
            this.sprite.height,
            this.drawPositionX,
            this.drawPositionY,
            this.width,
            this.height
        );
    }

    update(event){ 
        this.animate(event);
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

    drawShadow(ctx){
        if(!this.isDying()){
            ctx.beginPath();
            ctx.ellipse(this.position.x, this.position.y, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = INTERFACE.COLOURS.SHADOW;
            ctx.fill();  
            this.drawSelection(ctx);    
        }
    }

    drawSelection(ctx){
        if(this.isSelected){
            ctx.setLineDash([this.quarterWidth / 2, this.quarterWidth / 2]);
            ctx.lineWidth = 5;
            ctx.strokeStyle = INTERFACE.COLOURS.RED
            ctx.stroke();
            ctx.setLineDash([0, 0]);
        }   
    }

    animate(event){
        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    }

    updateSpriteDrawPosition(){
        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.height;
    }

    updateDestination(destination){
        this.destination = destination;
    }

    updateDirection(){
        this.angle = findAngleOfDirection(this.destination, this.position);
        this.direction = giveDirection(this.angle);
    }

    updateMovement(){
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    updateHitbox(){
        this.center.x = this.position.x;
        this.center.y = this.position.y - this.height / 3;
    }

    updatePriorityDistance(){  
        const yDistance = this.destination.y - this.position.y;
        const xDistance = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
    }
}

