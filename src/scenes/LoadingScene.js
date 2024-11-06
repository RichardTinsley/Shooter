import * as AssetHandler from '../AssetHandler.js'
import { drawBigScreenTexts } from '../utilities/textRender.js';

export class LoadingScene {
    fade = 0;
    fadeAngle = 0;

    constructor(switchToMenuScene){

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
        // if(time.previous < this.fadeTimer) return;

        // this.fadeAngle = (this.fadeAngle + 1 * time.secondsPassed) % Math.PI;
        // this.fade = Math.sin(this.fadeAngle);
    }

    draw(ctx){
        drawBigScreenTexts(
            ctx,
            "Summoning",
            false
        )
    }
}
