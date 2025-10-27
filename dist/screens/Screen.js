import { EntityFactory } from "../factories/EntityFactory.js";
export class Screen {
    constructor() {
        this.entities = [];
        this.setLoadingScreen = () => {
            const entityFactory = new EntityFactory();
            this.entities.push(entityFactory.DSLogo());
            this.entities.push(entityFactory.DSTitle());
            this.entities.push(entityFactory.StatusBar());
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