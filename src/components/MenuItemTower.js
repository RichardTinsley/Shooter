import * as INTERFACE from "../constants/interface.js";
import * as OBJECTS from "../constants/objects.js";
import { Sprite } from "../objects/Sprite.js";
import { checkCircleCollision } from "../utilities/math.js";

export class MenuItemTower{
    constructor({
        image,
        position,
        option,
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
    }

    draw(ctx){
        this.drawCircle(ctx);
        this.sprite.draw(ctx);
    }
    
    update(event){
        this.sprite.update(event);
        this.updateMouseOver();
    }

    drawCircle(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = 3;
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
}
