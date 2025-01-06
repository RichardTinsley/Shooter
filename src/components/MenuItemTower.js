import * as INTERFACE from "../constants/interface.js";
import * as OBJECTS from "../constants/objects.js";
import { Sprite } from "../objects/Sprite.js";
import { checkCircleCollision } from "../utilities/math.js";
import { PlayerStats } from "../handlers/PlayerStats.js";

export class MenuItemTower{
    constructor({
        image,
        position,
        option,
        cost,
    }){
        this.center = {
            x: position.x,
            y: position.y,
            radius: (OBJECTS.SIZES.TOWER * 0.75) / 2
        }

        this.spriteScale = 0.65;
        this.sprite = new Sprite({
            image: image,
            width: OBJECTS.SIZES.TOWER,
            height: OBJECTS.SIZES.TOWER,
            position: {
                x: position.x,
                y: position.y + (OBJECTS.SIZES.TOWER * this.spriteScale) / 2, 
            },
            scale: this.spriteScale,
        });

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
                this.sprite.draw(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                this.sprite.draw(ctx);
                this.drawCircle(ctx);
                break
        }
    }
    
    update(event){
        this.state = this.canAfford();
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.sprite.update(event);
                this.updateMouseOver();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
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
        if(PlayerStats.getCoins() >= this.cost)
            return OBJECTS.ANIMATION.ANIMATING;
        else
            return OBJECTS.ANIMATION.FINISHED;
    }
}
