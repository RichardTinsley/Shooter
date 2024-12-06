import * as GAME from "../constants/game.js";

export class Screen {
    constructor(){ 
        this.title = null;
        this.menu = null;
        this.globalAlpha = 0;
        this.delta = 0.1;
    }
    
    draw(ctx){
        if(this.globalAlpha < 1){
            // ctx.clearRect(0, 0, GAME_SIZES.GAME_WIDTH,  GAME_SIZES.GAME_HEIGHT);
            ctx.globalAlpha = this.globalAlpha;
        }

        if(this.title)
            this.title.draw(ctx);

        if(this.menu)
            this.menu.forEach(menuItem => menuItem.draw(ctx));
    }
    
    update(event){
        if(!event) 
            return;
        if(this.globalAlpha < 1)
            this.globalAlpha += this.delta;

        if(this.title)
            this.title.update(event);

        if(this.menu)
            this.menu.forEach(menuItem => menuItem.update(event));
    }

    drawScreenTransparency(ctx, colour){
        ctx.fillStyle = colour;
        ctx.fillRect(0, 0, GAME.SIZES.GAME_WIDTH, GAME.SIZES.GAME_HEIGHT);
    }
}