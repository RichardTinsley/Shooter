import { GAME_WIDTH, GAME_HEIGHT } from '../constants/constants.js';
import { drawText } from '../utilities/textRender.js';

export class PauseScreen {
    constructor(userInput, screen) {
        this.userInput = userInput;
        this.screen = screen;
    }

    draw(ctx){
        this.screen.mapHandler.draw(ctx);
        this.screen.entityHandler.draw(ctx);
        this.screen.battleScreenHud.draw(ctx);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        drawText(
            ctx,
            "white",
            "PAUSED",
            GAME_WIDTH / 2,
            GAME_HEIGHT / 2 - 170 / 2,
            170,
            "center",
            "top"
        )
    }

    update(event){

    }
}

