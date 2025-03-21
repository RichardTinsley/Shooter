import * as INTERFACE from "../constants/interface.js";
import * as OBJECTS from "../constants/objects.js";
import { checkCircleCollision } from "../utilities/math.js";
import { HUD } from "../handlers/HUD.js";

export class MenuItemImage {
    constructor({
        image,
        position,
        option,
        cost,
        scale,
    }){
        this.sprite = {
            image: image,
            width: OBJECTS.SIZES.TOWER,//width: width ?? OBJECTS.SIZES.TOWER,
            height: OBJECTS.SIZES.TOWER,//height: height ?? OBJECTS.SIZES.TOWER,
            frame: 0,
            row: 0,
        };

        this.center = {
            x: position.x,
            y: position.y,
            radius: (OBJECTS.SIZES.TOWER * 0.75) / 2
        }
                
        this.scale          = scale;
        this.width          = Math.round(this.sprite.width * this.scale * 100) / 100; 
        this.height         = Math.round(this.sprite.height * this.scale * 100) / 100; 

        this.maxFrame = Math.floor(this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = Math.floor(this.sprite.image.height / this.sprite.height) - 1;

        this.isMouseOver = false;
        this.type = OBJECTS.TYPES.MENUITEM;
        this.option = option;
        this.colour = INTERFACE.COLOURS.WHITE;
        this.cost = cost;

        this.state = this.canAfford();
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.drawCircle(ctx);
                this.drawSprite(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                this.drawSprite(ctx);
                this.drawCircle(ctx);
                break
        }
    }

    update(event){
        this.state = this.canAfford();
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.animate(event);
                this.updateMouseOver();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break 
        }
    }

    drawSprite(ctx){
        ctx.drawImage(
            this.sprite.image,
            this.sprite.width * this.sprite.frame,
            this.sprite.height * this.sprite.row,
            this.sprite.width,
            this.sprite.height,
            this.center.x - (OBJECTS.SIZES.TOWER * this.scale) / 2,
            this.center.y - (OBJECTS.SIZES.TOWER * this.scale) / 2,
            this.width,
            this.height
        );
    }

    drawCircle(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = 5;
        ctx.fillStyle = INTERFACE.COLOURS.DARKSHADOW;
        ctx.arc(this.center.x, this.center.y, this.center.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    
    animate(event){
        if(event)
            this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
    }

    updatePosition(position){
        this.center.x = position.x;
        this.center.y = position.y;
    }

    updateMouseOver(){
        if(this.isMouseOver)
            this.colour = INTERFACE.COLOURS.GREEN;
        else
            this.colour = INTERFACE.COLOURS.WHITE;
    }

    collisionDetection(mouse){
        return checkCircleCollision(mouse, this.center);
    }

    canAfford(){
        if(HUD.getCoins() >= this.cost)
            return OBJECTS.ANIMATION.ANIMATING;
        else
            return OBJECTS.ANIMATION.FINISHED;
    }
    
}

