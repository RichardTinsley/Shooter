import { GameText } from "./GameText.js";

export class GameTextHandler {
    constructor(){
        this.gameTexts = [];
    }

    renderGameTexts(ctx, event){
        for (let i = this.gameTexts.length - 1; i >= 0; i-- ){
            const gameText = this.gameTexts[i];        
            gameText.draw(ctx);
            gameText.update(event);
            
            if (gameText.alpha <= 0){
                this.gameTexts.splice(i, 1);
            }
        }
    }

    populateGameTextArray(text, color, alpha, position, textSize, align){
        this.gameTexts.push(
            new GameText({
                text: text,
                color: color,
                alpha: alpha,
                position: position,
                textSize: textSize,
                align: align 
            })            
        );
    }
}