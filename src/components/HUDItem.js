import { Text } from "../objects/Text.js";
import { assets } from "../utilities/assets.js";

export class HUDItem{
    constructor({
        text,
        position,
        icon,
    }){
        this.text = new Text({
            text: text,
            position: {
                x: position.x + 64,
                y: position,
            },
            size: 20,
        });
        
        this.icon = assets.get(icon);

        this.position = {
            x: position.x,
            y: position.y,
        };
    }

    draw(ctx){
        ctx.drawImage(
            this.icon,
            this.position.x,
            this.position.y,
            32,
            32,
        );
        this.text.draw(ctx);
    }
    
    update(event){
        this.text.update(event);
    }
}