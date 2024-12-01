import * as OBJECTS from "../constants/objects.js";
import { GlowText } from "../objects/texts/GlowText.js"

export class MenuItemText{
    constructor({
        text,
        colour,
        position,
        size,
        option,
    }){
        this.text = new GlowText({
            text: text,
            colour: colour,
            position: position,
            size: size,
        });
        
        //MENU ITEM HITBOX FOR MOUSE CLICK
        this.type = OBJECTS.TYPES.MENUITEM;
        this.option = option;
        this.width = text.length * (size / 1.75);
        this.position = {
            x: position.x - this.width / 2,
            y: position.y - (size / 2)
        };
        this.height = size;
    }

    draw(ctx){
        this.text.draw(ctx);
    }
    
    update(event){
        this.text.update(event);
    }
}
