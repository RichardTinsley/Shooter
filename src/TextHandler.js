import { GAME_HEIGHT, GAME_WIDTH } from "./Constants.js";
import { Text } from "./Text.js";

export class TextHandler{
    constructor(game) {
        this.game = game;
        this.texts = [];

        this.greenGameText = {
            color: '50, 205, 50, ',
            alpha: '10', 
            textSize: 25, 
            align: 'left'
        };

        this.goldGameText = {
            color:  '255, 215, 0, ',
            alpha: '10',
            textSize: 25,
            align: 'left'
        };
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

    populateGameTextArray(gameText, text, position){
        this.texts.push(new Text({
            text: text,
            color: gameText.color,
            alpha: gameText.alpha,
            position: {
                x: position.x,
                y: position.y
            },
            textSize: gameText.textSize,
            align: gameText.align 
        }));
    }
    
    renderGUITexts(ctx){
        this.drawText(ctx, this.game.hearts, 65, 52, 20,'left');
        this.drawText(ctx, this.game.coins, 225, 52, 20,'left');
        this.drawText(ctx, this.game.exp, 515, 52, 20,'left');
        this.drawText(ctx, this.game.waves, 805, 52, 20,'left');
        this.drawText(ctx, this.game.timer, 1155, 52, 20,'left');
    }

    renderbigScreenTexts(ctx, text, screenFill){
        if(screenFill){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        }
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + 150 + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'black';
        ctx.strokeText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
        ctx.fillText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }

    drawText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
}
