import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/sizes.js";
export class loadingBar {
    constructor(opts) {
        this.loadBarThickness = 14;
        this.loadBarLength = SIZES.GAME_WIDTH / 3;
        this.loadBarMaxWidth = 0;
        this.position = opts.position;
        this.position.x -= this.loadBarLength / 2;
        this.assetListLength = opts.assetListLength;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.strokeStyle = COLOURS.WHITE;
        ctx.strokeRect(this.position.x, this.position.y, this.loadBarLength, this.loadBarThickness);
        ctx.fillStyle = COLOURS.WHITE;
        ctx.fillRect(this.position.x, this.position.y, this.loadBarLength * this.loadBarMaxWidth, this.loadBarThickness);
        ctx.closePath();
    }
    update(newLength) {
        this.loadBarMaxWidth = newLength / this.assetListLength;
    }
}
//# sourceMappingURL=loadingBar.js.map