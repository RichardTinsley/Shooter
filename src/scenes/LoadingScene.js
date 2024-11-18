import * as AssetHandler from '../AssetLoader.js'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants/constants.js';
import { drawText } from '../utilities/textRender.js';

export class LoadingScene {
    constructor(switchToMenuScene){ 
        this.dslogo = document.getElementById('dslogo');
        this.textSize = 100;
        this.alpha = .0;
        this.fade = .1;
        this.loadAssets(switchToMenuScene);
    }

    handleAssetComplete = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
    }

    async loadAssets(switchToMenuScene){
        await AssetHandler.load(AssetHandler.assetList, this.handleAssetComplete)
            .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
            .then(() => {
                console.log(`Asset loading complete. A total of ${AssetHandler.assets.size} assets have been loaded.`);
                switchToMenuScene();
            });
    }

    update(event){
        if(!event) 
            return;

        if(this.alpha >= 1)
            this.fade = -.1;
        if(this.alpha <= 0)
            this.fade = .1;

        this.alpha += this.fade;
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        ctx.drawImage(
            this.dslogo,
            GAME_WIDTH / 2 - (this.dslogo.width /2),
            GAME_HEIGHT / 2 - (this.dslogo.height / 2) + this.textSize / 2,
        );

        drawText(
            ctx,
            "white",
            "Death Sorcery",
            GAME_WIDTH / 2,
            90,
            170,
            "center",
            "top"
        )

        drawText(
            ctx, 
            `rgba(255, 255, 255, ${this.alpha})`, 
            "Summoning", 
            GAME_WIDTH / 2, 
            GAME_HEIGHT / 2 + this.textSize * 3.5, 
            this.textSize, 
            "center", 
            "bottom"
        );
    }
}
