import { GAME_WIDTH } from "../constants/game.js";
import { assets } from "../handlers/AssetHandler.js";
import { drawText } from "../utilities/textRender.js";

export class MenuScreen {
    constructor(userInput) {
        // this.userInput = userInput;
    }

    draw(ctx){
        if(ctx.globalAlpha !== 1) ctx.globalAlpha = 1;
        ctx.drawImage(
            assets.get('menuLogo'),
            0,
            0,
        );

        drawText(
            ctx,
            "white",
            "Death   Sorcery",
            GAME_WIDTH / 2,
            90,
            170,
            "center",
            "top"
        )

        // menuScreenButtons.forEach((option, index) => {
        //     drawText(
        //         ctx,
        //         option.colour,
        //         option.name,
        //         GAME_WIDTH / 2,
        //         menuScreenButtonsPosition + (menuScreenButtonsTextSize * index),
        //         menuScreenButtonsTextSize,
        //         "center",
        //         "top"
        //     )
        // })
    }

    update(event){
        // this.userInput.menuScreenButtonsSelector(menuScreenButtons);
    }
}


