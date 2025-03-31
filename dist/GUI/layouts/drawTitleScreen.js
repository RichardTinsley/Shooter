import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../../entities/texts/TextFactory.js";
export function drawIntroScreen(ctx) {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    const title = TextFactory.text()
        .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
        .setText("Death Sorcery")
        .setSize(SIZES.TEXT_TITLE);
    const dslogo = document.getElementById("dslogo");
    title.draw(ctx);
    ctx.drawImage(dslogo, SIZES.GAME_WIDTH_HALF - dslogo.width / 2, SIZES.GAME_HEIGHT_HALF - dslogo.height / 2);
}
//# sourceMappingURL=drawTitleScreen.js.map