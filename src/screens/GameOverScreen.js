import { drawBigScreenTexts, drawText } from '../utilities/textRender.js';
import { GAME_WIDTH } from '../constants/constants.js';
import { gameOverScreenButtons } from '../constants/buttons.js';

const textSize =  50;
const initialPosition = 500;

let activeOption = undefined;
let mouse = {
    x: undefined,
    y: undefined
};

export class GameOverScreen {
    constructor(switchToMenuScreen, switchToBattleScreen){
        this.options = menuOptions.filter(option => { return option.screen === "gameover" });

        window.addEventListener('click', e => {
            if(activeOption.name === "Restart"){
                activeOption.optionAction(switchToBattleScreen);
                this.options = [];
            }
            if(activeOption.name === "Main Menu"){
                activeOption.optionAction(switchToMenuScreen);
                this.options = [];
            }
        });

        window.addEventListener('mousemove', e => {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            activeOption = null;
        
            this.options.forEach((option, index) => {
                if( mouse.x > GAME_WIDTH / 2 - ((option.name.length / 2) * textSize) &&
                    mouse.x < GAME_WIDTH / 2 + ((option.name.length / 2) * textSize) &&
                    mouse.y > initialPosition + (textSize * index) &&
                    mouse.y < initialPosition + (textSize * index) + textSize
                )
                    activeOption = option;
                else
                    option.colour = "white";
            
            });
        
            if(activeOption)
                activeOption.colour = "red";
        });
    }

    draw(ctx){
        drawBigScreenTexts(
            ctx,
            "Game Over",
            true
        )
        this.options.forEach((option, index) => {
            drawText(
                ctx,
                option.colour,
                option.name,
                GAME_WIDTH / 2,
                initialPosition + (textSize * index),
                textSize,
                "center",
                "top"
            )
        })
    }

    update(event){
        return
    }
}
