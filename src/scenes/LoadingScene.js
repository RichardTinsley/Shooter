import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { ASSET_LIST } from "../constants/assets.js";
import { loadAssets } from "../utilities/assets.js";
import { Text } from "../objects/Text.js";
import { FadeText } from "../objects/texts/FadeText.js";
import { Scene } from "../handlers/Scene.js";

export class LoadingScene extends Scene {
    constructor(switchScenes){ 
        super();
        this.dslogo = document.getElementById('dslogo');
        loadAssets(switchScenes, this.assetLoaded);

        this.assetsLoadedCounter = 0;

        this.title = new Text({
            text: "Death Sorcery",
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: 150, 
            },
            size: 150,
        });
        
        this.summoningText = new FadeText({
            text: "Summoning",
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: GAME.SIZES.GAME_HEIGHT - 100, 
            },
        });
    }
    
    draw(ctx){
        ctx.clearRect(0, 0, GAME.SIZES.GAME_WIDTH,  GAME.SIZES.GAME_HEIGHT);
        super.draw(ctx);
        ctx.drawImage(this.dslogo, GAME.SIZES.GAME_WIDTH_HALF - (this.dslogo.width /2), GAME.SIZES.GAME_HEIGHT_HALF - (this.dslogo.height / 2) + 40);
        this.summoningText.draw(ctx);
        this.drawLoadingBar(ctx);
    }
    
    update(event){
        super.update(event);
        this.summoningText.update(event);
    }
    
    assetLoaded = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
        this.assetsLoadedCounter++;
    }
    
    drawLoadingBar(ctx){
        const loadBarY = GAME.SIZES.GAME_HEIGHT - 50;
        const loadBarLength = GAME.SIZES.GAME_WIDTH / 3;
        const loadBarX = GAME.SIZES.GAME_WIDTH_HALF - loadBarLength / 2 ;
        const loadBarThickness = 10;
        const LoadBarMaxWidth = (this.assetsLoadedCounter / ASSET_LIST.length);
        ctx.beginPath();

        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.strokeStyle = INTERFACE.COLOURS.WHITE;
        ctx.strokeRect(loadBarX, loadBarY, loadBarLength, loadBarThickness);
        
        ctx.fillStyle = INTERFACE.COLOURS.WHITE;
        ctx.fillRect(loadBarX, loadBarY, loadBarLength * LoadBarMaxWidth, loadBarThickness);
        ctx.closePath();
    }
}
