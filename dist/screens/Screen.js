import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
export class Screen {
    constructor() {
        this.entities = [];
        this.setLoadingScreen = () => {
            this.entities.push(GUIComponentFactory.DSLogo());
        };
        this.setBeginScreen = () => console.log("OMG22222222");
        this.setLoadingScreen();
    }
    draw(ctx) {
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.entities.forEach((entity) => entity.update());
    }
    addEntity(entity) {
        this.entities.push(entity);
        return this;
    }
}
//# sourceMappingURL=Screen.js.map