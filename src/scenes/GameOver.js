import { drawBigScreenTexts, drawText } from '../utilities/textRender.js';
import { GAME_WIDTH } from '../constants/constants.js';

const textSize =  50;
const initialPosition = 500;

let activeOption = undefined;
let mouse = {
    x: undefined,
    y: undefined
};

export class GameOver {
    menuOptions = [
        {
            name: "Restart",
            colour: "white",
            optionAction: function(switchToBattleScene) {
                switchToBattleScene();

            }
        },
        {
            name: "Main Menu",
            colour: "white",
            optionAction: function(switchToMenuScene) {
                switchToMenuScene();
            }
        },
    ];

    constructor(switchToMenuScene, switchToBattleScene){

        window.addEventListener('click', e => {
            if(activeOption.name === "Restart")
                activeOption.optionAction(switchToBattleScene);
            if(activeOption.name === "Main Menu")
                activeOption.optionAction(switchToMenuScene);
        });

        window.addEventListener('mousemove', e => {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            activeOption = null;
        
            this.menuOptions.forEach((option, index) => {
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
        this.menuOptions.forEach((option, index) => {
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
