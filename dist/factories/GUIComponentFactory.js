import { SCREEN_SIZES } from "../constants/screenSizes.js";
import { DSLogo } from "../GUI/components/DSLogo.js";
import { StatusBar } from "../GUI/components/StatusBar.js";
export class GUIComponentFactory {
    static DSLogo() {
        return new DSLogo();
    }
    static LoadingBar(currentStatus, maximumStatus) {
        return new StatusBar()
            .setSharedPosition({ x: SCREEN_SIZES.SCREEN_WIDTH_HALF, y: SCREEN_SIZES.SCREEN_HEIGHT * 0.9 })
            .setSharedSize({ width: SCREEN_SIZES.SCREEN_WIDTH / 3, height: 10 })
            .setStatus(currentStatus, maximumStatus)
            .setDrawOffsets(0);
    }
}
//# sourceMappingURL=GUIComponentFactory.js.map