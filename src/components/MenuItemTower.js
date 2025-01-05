import * as INTERFACE from "../constants/interface.js";
import * as OBJECTS from "../constants/objects.js";
import { Sprite } from "../objects/Sprite.js";

export class MenuItemTower{
    constructor({
        image,
        position,
    }){
        this.circle = (OBJECTS.SIZES.TOWER * 0.75) / 2;
        this.spriteScale = 0.65;
        this.spritePosition = (OBJECTS.SIZES.TOWER * this.spriteScale) / 2;
        this.position = {...position};

        this.sprite = new Sprite({
            image: image,
            width: OBJECTS.SIZES.TOWER,
            height: OBJECTS.SIZES.TOWER,
            position: {
                x: position.x,
                y: position.y + this.spritePosition, 
            },
            scale: this.spriteScale,
        });
    }

    draw(ctx){
        this.drawCircle(ctx);
        this.sprite.draw(ctx);
    }
    
    update(event){
        this.sprite.update(event);
    }

    drawCircle(ctx){
        ctx.beginPath();
        ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
        ctx.lineWidth = 3;
        ctx.fillStyle = INTERFACE.COLOURS.SHADOW;
        ctx.arc(this.position.x, this.position.y, this.circle, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}
