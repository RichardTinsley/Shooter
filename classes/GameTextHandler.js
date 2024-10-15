export class GameTextHandler {
    constructor(){
        this.gameTexts = [];
    }

    renderGameTexts(ctx, deltaTime){
        for (let i = this.gameTexts.length - 1; i >= 0; i-- ){
            const gameText = this.gameTexts[i];        
            gameText.draw(ctx);
            gameText.update(deltaTime);
            
            if (gameText.lifespan <= 0){
                this.gameTexts.splice(i, 1);
            }
        }
    }
}