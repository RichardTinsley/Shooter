export class GameTextHandler {
    constructor(){
        this.gameTexts = [];
    }

    renderGameTexts(ctx){
        for (let i = this.gameTexts.length - 1; i >= 0; i-- ){
            const gameText = this.gameTexts[i];        
            gameText.draw(ctx);
            gameText.update();
            
            if (gameText.alpha <= 0){
                this.gameTexts.splice(i, 1);
            }
        }
    }
}