import * as INTERFACE from "../constants/interface.js";
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";

export class HUDItem{
    constructor({
        text,
        position,
        icon,
    }){
        this.text = text;      
        this.icon = assets.get(icon);
        this.position = position;
    }

    draw(ctx){
        ctx.drawImage(
            this.icon,
            this.position.x,
            this.position.y,
            32,
            32,
        );

        drawText(
            ctx, 
            INTERFACE.COLOURS.WHITE, 
            this.text, 
            this.position.x + 42, 
            this.position.y + 16, 
            24, 
            "left", 
            "middle"
        ); 
    }
    
    update(event){
        this.text.update(event);
    }

    setText(newText){
        this.text = newText;
    }

    getText(){
        return this.text;
    }
}