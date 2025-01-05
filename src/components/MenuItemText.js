import * as OBJECTS from "../constants/objects.js";
import { checkBoxCollision } from "../utilities/math.js";
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
        
        this.width = text.length * (size / 1.75)
        this.position = {
            x: position.x - this.width / 2,
            y: position.y - (size / 2),
            width: this.width,
            height: size,
        };
        
        this.type = OBJECTS.TYPES.MENUITEM;
        this.option = option;
        this.isMouseOver
    }

    draw(ctx){
        this.text.draw(ctx);
    }
    
    update(event){
        this.text.update(event);
        this.updateIsMouseOver();
    }

    updateIsMouseOver(){
        if(this.isMouseOver)
            this.text.enable(true);
        else
            this.text.enable(false);
    }

    collisionDetection(mouse){
        return !checkBoxCollision(mouse, this.position);
    }
}
