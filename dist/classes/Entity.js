import { EntityInformation } from "./EntityInformation.js";
import { DrawEntityComponents } from "./states/DrawEntityComponents.js";
import { TextEntityComponents } from "./states/TextEntityComponents.js";
export class Entity {
    constructor() {
        this.information = new EntityInformation();
        this.setDrawComponents = () => {
            this.components = new DrawEntityComponents();
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
        this.setTextComponents = () => {
            this.components = new TextEntityComponents();
            this.components.setAllComponents(this.information.getInformation());
            return this;
        };
    }
    getComponents() {
        return this.components;
    }
}
//# sourceMappingURL=Entity.js.map