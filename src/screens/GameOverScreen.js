import { drawText } from "../utilities/textRender.js";
import { GAME_SIZES } from "../constants/game.js";

export class GameOverScreen {
    constructor() {

    }

    draw(ctx){

        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_SIZES.GAME_WIDTH, GAME_SIZES.GAME_HEIGHT);

        drawText(
            ctx,
            "white",
            "GAMEOVER",
            GAME_SIZES.GAME_WIDTH_HALF,
            GAME_SIZES.GAME_HEIGHT_HALF - 170 / 2,
            170,
            "center",
            "top"
        )
    }

    update(event){
    }
}
