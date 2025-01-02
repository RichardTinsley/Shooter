import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js"
import { MenuItemText } from "../components/MenuItemText.js";
import { GlowText } from "../objects/texts/GlowText.js";

export class Scene {
    constructor(){
        this.currentState = GAME.STATES.RESUME;
        this.title = null;
        this.menu = null;
        this.globalAlpha = 0;
        this.overLayAlpha = 0;
        this.delta = 0.1;
    }

    draw(ctx){
        this.drawScreenFade(ctx);
        this.drawTitle(ctx);
        this.drawMenu(ctx);
    }

    update(event){
        this.updateScreenFade();
        this.updateTitle(event);
        this.updateMenu(event);
    }

    drawScreenFade(ctx){
        if(this.globalAlpha < 1)
            ctx.globalAlpha = this.globalAlpha;
    }

    drawTitle(ctx){
        if(this.title)
            this.title.draw(ctx);
    }

    drawMenu(ctx){
        if(this.menu)
            this.menu.forEach(menuItem => menuItem.draw(ctx));
    }

    updateScreenFade(){
        if(this.globalAlpha < 1)
            this.globalAlpha += this.delta;
    }

    updateTitle(event){
        if(this.title)
            this.title.update(event);
    }

    updateMenu(event){
        if(this.menu)
            this.menu.forEach(menuItem => menuItem.update(event));
    }

    getCurrentState = () => {
        return this.currentState;
    }

    setSceneReset(){
        this.title = null;
        this.menu = null;
        this.overLayAlpha = 0;
    }

    switchSceneState(time, option){
        if(this.getCurrentState() === GAME.STATES.PAUSED && option === GAME.STATES.PAUSED)
            option = GAME.STATES.RESUME;

        this.setSceneReset();

        switch(option){
            case GAME.STATES.RESUME:
                time.startTimer();
                this.currentState = GAME.STATES.RESUME;
                break
            case GAME.STATES.PAUSED:
                time.pauseTimer();
                this.currentState = GAME.STATES.PAUSED;
                this.initialiseOverlayScreen("Paused", INTERFACE.PAUSE_MENU);    
                break
            case GAME.STATES.GAMEOVER:
                time.pauseTimer();
                this.initialiseOverlayScreen("Game Over", INTERFACE.GAME_OVER_MENU);    
                break
        }
    }

    initialiseHorizontalMenu(menu){
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

    initialiseVerticalMenu(menu){
        return menu.map((menuItem, index) => {
            return new MenuItemText({
                text: menuItem.text,
                position: {
                    x: GAME.SIZES.GAME_WIDTH_HALF,
                    y: INTERFACE.verticallyAlignedMenu(GAME.SIZES.GAME_HEIGHT_HALF + 100, index)
                },
                size: INTERFACE.SIZES.MENUITEMTEXT,
                option: menuItem.option
            });
        });
    }

    drawOverlayScreen(ctx, colour){
        ctx.fillStyle = `rgba(${colour}${this.overLayAlpha})`;
        ctx.fillRect(0, 0, GAME.SIZES.GAME_WIDTH, GAME.SIZES.GAME_HEIGHT);
        this.drawTitle(ctx);
        this.drawMenu(ctx);
    }

    updateOverlayScreen(){
        if(this.overLayAlpha < 0.7)
            this.overLayAlpha += this.delta;
    }

    initialiseOverlayScreen(title, menu){
        this.globalAlpha = 0;
        this.title = new GlowText({
            text: title,
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: GAME.SIZES.GAME_HEIGHT_HALF - 100, 
            },
            size: INTERFACE.SIZES.TITLETEXT,
        });
        
        this.title.enable(true);
        this.menu = this.initialiseHorizontalMenu(menu);
    }
}