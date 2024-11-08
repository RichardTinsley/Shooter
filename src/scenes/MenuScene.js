import { GAME_WIDTH } from "../utilities/constants.js";
import { assets } from "../AssetHandler.js";
import { drawText } from '../utilities/textRender.js';

const textSize =  50;
const initialPosition = 450;

let activeOption = undefined;
let mouse = {
    x: undefined,
    y: undefined
};

const menuOptions = [
    {
        name: "New Game",
        colour: "white",
        optionAction: function(switchToBattleScene, menuMusic) {
            menuMusic.pause();
            switchToBattleScene();
        }
    },
    {
        name: "Options",
        colour: "white",
        optionAction: function() {
        }
    },  
    {
        name: "About",
        colour: "white",
        optionAction: function() {
        }
    }
];

export class MenuScene{
    constructor(switchToBattleScene) {
        this.menuMusic = assets.get("menuMusic");
        this.menuMusic.loop = true;
        this.menuMusic.volume = 0.05;
        this.menuMusic.play();

        
        window.addEventListener('click', e => {
            if(activeOption)
                activeOption.optionAction(switchToBattleScene, this.menuMusic);
        });

        window.addEventListener('mousemove', e => {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            activeOption = null;
        
            menuOptions.forEach((option, index) => {
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
            150,
            "center",
            "top"
        )

        menuOptions.forEach((option, index) => {
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

    update(){
    }
}

