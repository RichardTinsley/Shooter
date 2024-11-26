import { GAME_SIZES } from "../constants/game.js";
import { ASSET_LIST } from "../constants/assets.js";
import { drawText } from "../utilities/textRender.js";
import { loadAssets } from "../utilities/assets.js";

export class LoadingScreen {
    constructor(switchScreens){ 
        this.dslogo = document.getElementById('dslogo');
        loadAssets(switchScreens, this.assetLoaded);
        
        this.globalAlpha = 0;
        this.alpha = 0;
        this.delta = 0.05;
        
        this.textSize = 60;
        this.textShadowBlur = 1;
        this.textShadowBlurDelta = .3;

        this.maxLoadBar = ASSET_LIST.length;
        this.assetsLoaded = 0;
    }
    
    assetLoaded = (fileName) => {
        console.log(`${fileName.fileName} Loaded.`);
        this.assetsLoaded++;
    }
    
    update(event){
        if(!event) 
            return;

        if(this.globalAlpha < 1)
            this.globalAlpha += .1;

        this.alpha += this.delta;
        if (this.alpha <= -0.5 || this.alpha >= 1.5){
            this.delta = -this.delta;
        }
        
        this.textShadowBlur += this.textShadowBlurDelta;
        if (this.textShadowBlur <= 1 || this.textShadowBlur >= 10)
            this.textShadowBlurDelta = -this.textShadowBlurDelta;
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_SIZES.GAME_WIDTH,  GAME_SIZES.GAME_HEIGHT);
        ctx.globalAlpha = this.globalAlpha;

        ctx.drawImage(this.dslogo, GAME_SIZES.GAME_WIDTH_HALF - (this.dslogo.width /2), GAME_SIZES.GAME_HEIGHT_HALF - (this.dslogo.height / 2) + 40);

        this.drawDeathSorceryText(ctx);
        this.drawSummoningText(ctx);
        this.drawLoadingBar(ctx);
    }

    drawDeathSorceryText(ctx){
        ctx.shadowColor = "#d53";
        ctx.shadowBlur = this.textShadowBlur;

        drawText(ctx, "white", "Death Sorcery", GAME_SIZES.GAME_WIDTH_HALF, 60, 150, "center", "top");

        ctx.shadowColor = 0;
        ctx.shadowBlur = 0;
    }

    drawSummoningText(ctx){
        drawText(
            ctx, 
            `rgba(255, 255, 255, ${this.alpha})`, 
            "Summoning", 
            GAME_SIZES.GAME_WIDTH_HALF, 
            GAME_SIZES.GAME_HEIGHT - 65, 
            this.textSize, 
            "center", 
            "bottom"
        );
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
