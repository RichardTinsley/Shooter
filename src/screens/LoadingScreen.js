import * as AssetLoader from '../AssetLoader.js'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants/constants.js';
import { drawText } from '../utilities/textRender.js';

export class LoadingScreen {
    constructor(switchToMenuScreen){ 
        this.dslogo = document.getElementById('dslogo');
        this.textSize = 65;
        this.alpha = .0;
        this.fade;
        this.loadAssets(switchToMenuScreen);

        this.maxLoadBar = AssetLoader.assetList.length;
        this.loadBar = this.maxLoadBar;
        this.assetsLoaded = 0;
    }

    assetLoaded = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
        this.assetsLoaded++;
    }

    async loadAssets(switchToMenuScreen){
        await AssetLoader.load(AssetLoader.assetList, this.assetLoaded)
            .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
            .then(() => {
                console.log(`Asset loading complete. A total of ${AssetLoader.assets.size} assets have been loaded.`);
                switchToMenuScreen();
            });
    }

    update(event){
        if(!event) 
            return;

        if(this.alpha >= 2)
            this.fade = -.05;
        if(this.alpha <= 0)
            this.fade = .05;

        this.alpha += this.fade;
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        ctx.drawImage(
            this.dslogo,
            GAME_WIDTH / 2 - (this.dslogo.width /2),
            GAME_HEIGHT / 2 - (this.dslogo.height / 2) + 40,
        );

        drawText(
            ctx,
            "white",
            "Death Sorcery",
            GAME_WIDTH / 2,
            60,
            150,
            "center",
            "top"
        )

        drawText(
            ctx, 
            `rgba(255, 255, 255, ${this.alpha})`, 
            "Summoning", 
            GAME_WIDTH / 2, 
            GAME_HEIGHT - 65, 
            this.textSize, 
            "center", 
            "bottom"
        );

        this.drawHealthBar(ctx);
    }

    drawHealthBar(ctx){
        const loadBarY = GAME_HEIGHT -  40;
        const loadBarLength = GAME_WIDTH / 3;
        const loadBarX = GAME_WIDTH / 2 - loadBarLength / 2 ;
        const loadBarThickness = 15;
        ctx.beginPath();
        
        ctx.fillStyle = 'white';
        ctx.fillRect(
            loadBarX, 
            loadBarY, 
            loadBarLength * (this.assetsLoaded / this.maxLoadBar), 
            loadBarThickness
        );
        
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white'
        ctx.strokeRect(
            loadBarX,
            loadBarY, 
            loadBarLength, 
            loadBarThickness
        );
        
    }
}
