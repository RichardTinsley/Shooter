import { DSLogo } from "../components/DSLogo.js";
import { StatusBar } from "../components/StatusBar.js";
import { SCREEN_SIZES } from "../constants/screenSizes.js";
export class GUIComponentFactory {
    static DSLogo() {
        return new DSLogo().setSharedPosition({
            x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
            y: SCREEN_SIZES.SCREEN_HEIGHT * 0.52,
        });
    }
    static LoadingBar(currentStatus, maximumStatus) {
        return new StatusBar()
            .setSharedPosition({
            x: SCREEN_SIZES.SCREEN_WIDTH_HALF,
            y: SCREEN_SIZES.SCREEN_HEIGHT * 0.9,
        })
            .setSharedSize({ width: SCREEN_SIZES.SCREEN_WIDTH / 3, height: 10 })
            .setStatus(currentStatus, maximumStatus)
            .setDrawOffsets(0);
    }
}
//# sourceMappingURL=GUIComponentFactory.js.map