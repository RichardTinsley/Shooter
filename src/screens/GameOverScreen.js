import { drawText } from "../utilities/textRender.js";
import { GAME_WIDTH, GAME_HEIGHT } from "../constants/game.js";

export class GameOverScreen {
    constructor() {

    }

    draw(ctx){

        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        drawText(
            ctx,
            "white",
            "GAMEOVER",
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
