import { COLOURS, getColour } from "../constants/colours.js";
import { Component } from "./Component.js";
export const JOINS = {
    round: "round",
    bevel: "bevel",
    miter: "miter",
};
export class Shape extends Component {
    constructor() {
        super(...arguments);
        this.lineJoin = JOINS.bevel;
        this.strokeWidth = 1;
        this.strokeColour = getColour(COLOURS.WHITE);
        this.fillColour = getColour(COLOURS.BLACK);
    }
    draw(ctx) {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    setLineJoins(lineJoin) {
        this.lineJoin = lineJoin;
        return this;
    }
    setStrokeWidth(strokeWidth) {
        this.strokeWidth = strokeWidth;
        return this;
    }
    setStrokeColour(strokeColour) {
        this.strokeColour = strokeColour;
        return this;
    }
    setFillColour(fillColour) {
        this.fillColour = fillColour;
        return this;
    }
}
//# sourceMappingURL=Shape.js.map