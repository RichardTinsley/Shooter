import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { MenuItemText } from "../components/MenuItemText.js";
import { GlowText } from "../objects/texts/GlowText.js";

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
        // if(!event) 
        //     return;
        if(this.globalAlpha < 1)
            this.globalAlpha += this.delta;

        if(this.title)
            this.title.update(event);

        if(this.menu)
            this.menu.forEach(menuItem => menuItem.update(event));
    }

    drawOverlay(ctx, colour){
        ctx.fillStyle = colour;
        ctx.fillRect(0, 0, GAME.SIZES.GAME_WIDTH, GAME.SIZES.GAME_HEIGHT);
        this.title.draw(ctx);
        this.menu.forEach(menuItem => menuItem.draw(ctx));
    }

    initialiseOverlay(title, menu){
        this.title = new GlowText({
            text: title,
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: GAME.SIZES.GAME_HEIGHT_HALF - 100, 
            },
            size: INTERFACE.SIZES.TITLETEXT,
        });
        
        this.title.enable(true);
        this.menu = this.initialiseMenu(menu);
    }
    
    initialiseMenu(menu){
        return menu.map((menuItem, index) => {
            return new MenuItemText({
                text: menuItem.text,
                position: {
                    x: INTERFACE.horizontallyAlignedMenu(index),
                    y: GAME.SIZES.GAME_HEIGHT_HALF + 100
                },
                size: INTERFACE.SIZES.MENUITEMTEXT,
                option: menuItem.option
            });
        });
    }
}