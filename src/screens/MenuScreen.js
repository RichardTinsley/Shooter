import { GAME_WIDTH } from "../constants/constants.js";
import { menuScreenButtons, menuScreenButtonsPosition, menuScreenButtonsTextSize } from "../constants/buttons.js";
import { assets } from "../AssetLoader.js";
import { drawText } from '../utilities/textRender.js';

export class MenuScreen {
    constructor(userInput) {
        this.menuMusic = assets.get("menuMusic");
        this.menuMusic.loop = true;
        this.menuMusic.volume = 0.05;
        this.menuMusic.play();
        this.userInput = userInput;
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

        menuScreenButtons.forEach((option, index) => {
            drawText(
                ctx,
                option.colour,
                option.name,
                GAME_WIDTH / 2,
                menuScreenButtonsPosition + (menuScreenButtonsTextSize * index),
                menuScreenButtonsTextSize,
                "center",
                "top"
            )
        })
    }

    update(event){
        this.userInput.menuScreenButtonsSelector(menuScreenButtons);
    }
}


