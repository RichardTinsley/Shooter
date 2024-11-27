import { Text } from "../objects/texts/Text.js";

export class MenuItemText{
    constructor({
        text,
        colour,
        position,
        size,
        option,
    }){
        this.text = new Text({
            text: text,
            colour: colour,
            position: position,
            size: size,
        });
        
        this.width = text.length * (size / 1.75);
        this.option = option;
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
