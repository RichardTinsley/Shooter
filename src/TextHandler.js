import { Text } from "./Text.js";
import { drawText } from "./utilities/textRender.js";

export class TextHandler{
    constructor(game) {
        this.game = game;
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
        drawText(ctx, "white", this.game.hearts, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.game.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.game.exp, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.game.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.game.timer, 1160, 39, 20, 'left', 'top');
    }
}
