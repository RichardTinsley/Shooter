import { GAME_SIZES } from "../constants/game.js";
import { ASSET_LIST } from "../constants/assets.js";
import { TEXT_COLOURS } from "../constants/colours.js";
import { loadAssets } from "../utilities/assets.js";
import { Text } from "../objects/texts/Text.js";
import { FadeText } from "../objects/texts/FadeText.js";

export class LoadingScreen {
    constructor(switchScreens){ 
        this.dslogo = document.getElementById('dslogo');
        loadAssets(switchScreens, this.assetLoaded);
        
        this.globalAlpha = 0;
        this.maxLoadBar = ASSET_LIST.length;
        this.assetsLoaded = 0;

        this.title = new Text({
            text: "Death Sorcery",
            colour: TEXT_COLOURS.WHITE, 
            position: {
                x: GAME_SIZES.GAME_WIDTH_HALF,
                y: 150, 
            },
            size: 150,
        });
        
        this.summoningText = new FadeText({
            text: "Summoning",
            colour: TEXT_COLOURS.WHITE, 
            position: {
                x: GAME_SIZES.GAME_WIDTH_HALF,
                y: GAME_SIZES.GAME_HEIGHT - 100, 
            },
            size: 60,
        });
    }
    
    draw(ctx){
        ctx.clearRect(0, 0, GAME_SIZES.GAME_WIDTH,  GAME_SIZES.GAME_HEIGHT);
        ctx.globalAlpha = this.globalAlpha;

        ctx.drawImage(this.dslogo, GAME_SIZES.GAME_WIDTH_HALF - (this.dslogo.width /2), GAME_SIZES.GAME_HEIGHT_HALF - (this.dslogo.height / 2) + 40);
        this.title.draw(ctx);
        this.summoningText.draw(ctx);
        this.drawLoadingBar(ctx);
    }
    
    update(event){
        if(!event) 
            return;
        if(this.globalAlpha < 1)
            this.globalAlpha += .1;
        
        this.title.update(event);
        this.summoningText.update(event);
    }
    
    assetLoaded = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
        this.assetsLoaded++;
    }
    
    drawLoadingBar(ctx){
        const loadBarY = GAME_SIZES.GAME_HEIGHT - 50;
        const loadBarLength = GAME_SIZES.GAME_WIDTH / 3;
        const loadBarX = GAME_SIZES.GAME_WIDTH_HALF - loadBarLength / 2 ;
        const loadBarThickness = 5;
        const LoadBarMaxWidth = (this.assetsLoaded / this.maxLoadBar);
        ctx.beginPath();
        
        ctx.fillStyle = 'white';
        ctx.fillRect(loadBarX, loadBarY, loadBarLength * LoadBarMaxWidth, loadBarThickness);
        
        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.strokeStyle = 'white'
        ctx.strokeRect(loadBarX - 5, loadBarY - 5, loadBarLength + 10, loadBarThickness + 10);
        
    }
}
