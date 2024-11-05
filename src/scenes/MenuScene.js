import { assets } from "../AssetHandler.js";
import { GAME_WIDTH } from "../Constants.js";
import { drawText } from '../utilities/textRender.js';
import { GameScene } from "./GameScene.js";

const menuOptions = [
    {
        name: "New Game",
        colour: "white",
        optionAction: function(scene) {
            scene = new GameScene("OMG222");
        }
    },
    {
        name: "Options",
        colour: "white",
        optionAction: function(scene) {
            // scene = new GameScene();
            console.log("ERNST");
        }
    },  
    {
        name: "About",
        colour: "white",
        optionAction: function(scene) {
            // scene = new GameScene();
            console.log("NYOH");
        }
    }
];

const textSize =  50;
const initialPosition = 350;

let activeOption = undefined;
let mouse = {
    x: undefined,
    y: undefined
};

export class MenuScene{
    constructor(scene) {
        this.menuMusic = assets.get("menuMusic");
        this.menuMusic.loop = true;
        this.menuMusic.volume = 0.1;
        this.menuMusic.play();

        this.scene = scene;
        console.log(this.scene)
        window.addEventListener('click', e => {
            if(activeOption)
                activeOption.optionAction(this.scene);
        })
    }

    draw(ctx){
        ctx.drawImage(
            assets.get('menuLogo'),
            0,
            0,
        );

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
})

