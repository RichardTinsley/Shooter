import * as AssetHandler from '../AssetLoader.js'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants/constants.js';
import { drawBigScreenTexts } from '../utilities/textRender.js';

export class LoadingScene {
    fade = 0;
    fadeAngle = 0;

    constructor(switchToMenuScene){

        this.loadAssets(switchToMenuScene);
        this.dslogo = new Image();
        this.dslogo.src = './images/logos/DsShieldLogo.png';
        
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
        // if(time.previous < this.fadeTimer) return;

        // this.fadeAngle = (this.fadeAngle + 1 * time.secondsPassed) % Math.PI;
        // this.fade = Math.sin(this.fadeAngle);
    }

    draw(ctx){
        ctx.drawImage(
            this.dslogo,
            GAME_WIDTH / 2,
            GAME_HEIGHT / 2,
            // dslogo.image.width,
            // dslogo.image.height
        );

        // drawBigScreenTexts(
        //     ctx,
        //     "Summoning",
        //     false
        // )
    }
}
