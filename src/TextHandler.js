import { GAME_HEIGHT, GAME_WIDTH } from "./Constants.js";
import { Text } from "./Text.js";

export class TextHandler{
    constructor(game) {
        this.game = game;
        this.texts = [];
    }

    renderTexts(ctx){
        this.texts.sort((b, a) => a.position.y - b.position.y); 

        for (let i = this.texts.length - 1; i >= 0; i-- ){
            const text = this.texts[i];        
            text.draw(ctx);
            text.update();
            if (text.alpha <= 0){
                this.texts.splice(i, 1);
            }
        }
    }

    populateGameTextArray(text, colour, position){
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
        this.drawText(ctx, this.game.hearts, 65, 52, 20,'left');
        this.drawText(ctx, this.game.coins, 225, 52, 20,'left');
        this.drawText(ctx, this.game.exp, 515, 52, 20,'left');
        this.drawText(ctx, this.game.waves, 805, 52, 20,'left');
        this.drawText(ctx, this.game.timer, 1155, 52, 20,'left');
    }


}
