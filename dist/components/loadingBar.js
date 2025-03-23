import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
export class LoadingBar {
    constructor(position) {
        this.position = position;
        this.loadBarHeight = 14;
        this.loadBarLength = SIZES.GAME_WIDTH / 3;
        this.loadBar = 0;
        this.assetsLoaded = 0;
        this.assetListLength = 0;
        this.position.x -= this.loadBarLength / 2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.strokeStyle = COLOURS.WHITE;
        ctx.strokeRect(this.position.x, this.position.y, this.loadBarLength, this.loadBarHeight);
        ctx.fillStyle = COLOURS.WHITE;
        ctx.fillRect(this.position.x, this.position.y, this.loadBarLength * this.loadBar, this.loadBarHeight);
        ctx.closePath();
    }
    setAssetsLoaded() {
        this.assetsLoaded++;
        this.loadBar = this.assetsLoaded / this.assetListLength;
    }
    setAssetsListLength(assetListLength) {
        this.assetListLength = assetListLength;
        return this;
    }
}
//# sourceMappingURL=LoadingBar.js.map