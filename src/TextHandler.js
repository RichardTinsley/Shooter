import { Text } from "./Text.js";
import { drawText } from "./utilities/textRender.js";

export class TextHandler{
    constructor(hudElements) {
        this.hudElements = hudElements;

        this.texts = [];
    }

    draw(ctx){
        this.texts.forEach(text =>{
            text.draw(ctx);
        });
    }

    update(){
        this.texts.sort((b, a) => a.position.y - b.position.y); 
        for (let i = this.texts.length - 1; i >= 0; i-- ){
            const text = this.texts[i];        
            text.update();
            if (text.alpha <= 0){
                this.texts.splice(i, 1);
            }
        }
    }

    add(text, colour, position){
        this.texts.push(new Text({
            text: text,
            colour: colour,
            position: {
                x: position.x,
                y: position.y
            },
        }));
    }
    
    renderGUITexts(ctx){
        drawText(ctx, "white", this.hudElements.hearts, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.exp, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.timer, 1160, 39, 20, 'left', 'top');
    }
}
