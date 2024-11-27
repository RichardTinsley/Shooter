import { GAME_SIZES } from "../constants/game.js";

export class Screen {
    constructor(){ 
        this.title = null;
        this.menu = null;
        this.globalAlpha = 0;
        this.delta = 0.1;
    }
    
    draw(ctx){
        ctx.clearRect(0, 0, GAME_SIZES.GAME_WIDTH,  GAME_SIZES.GAME_HEIGHT);
        ctx.globalAlpha = this.globalAlpha;
        if(this.title)
            this.title.draw(ctx);
    }
    
    update(event){
        if(!event) 
            return;
        if(this.globalAlpha < 1)
            this.globalAlpha += this.delta;
        if(this.title)
            this.title.update(event);
    }
}