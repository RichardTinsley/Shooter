import { GAME_HEIGHT, GAME_WIDTH } from '../Constants.js';
import * as AssetHandler from '../AssetHandler.js'


export class LoadingScene {
    fade = 0;
    fadeAngle = 0;

    constructor(onLoadedComplete){

        this.loadAssets(onLoadedComplete);
    }

    handleAssetComplete = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
    }

    async loadAssets(onLoadedComplete){
        await AssetHandler.load(AssetHandler.assetList, this.handleAssetComplete)
            .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
            .then(() => {
                console.log(`Asset loading complete. A total of ${AssetHandler.assets.size} assets have been loaded.`);
                onLoadedComplete();
            });
    }

    update(event){
        if(time.previous < this.fadeTimer) return;

        this.fadeAngle = (this.fadeAngle + 1 * time.secondsPassed) % Math.PI;
        this.fade = Math.sin(this.fadeAngle);
    }

    // draw(ctx){
    //     ctx.clearReact(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //     ctx.globalAlpha = this.fade;
    //     ctx.fillStyle = "white";
    //     ctx.textAlign = "right";
    //     ctx.fillText('LOADING...', GAME_WIDTH - 4, GAME_HEIGHT - 4 );
    //     ctx.globalAlpha = 1;
    // }

    draw(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + 150 + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'black';
        ctx.strokeText("LOADING...", GAME_WIDTH / 2, GAME_HEIGHT / 2);
        ctx.fillText("LOADING...", GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }
}