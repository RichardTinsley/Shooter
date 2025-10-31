import { COLOURS, getColour } from "../constants/colours.js";
export class EntityInformation {
    constructor() {
        this.information = {
            visual: "",
            position: { x: 0, y: 0 },
            destination: { x: 0, y: 0 },
            size: { width: 0, height: 0 },
            scaledSize: { width: 0, height: 0 },
            speed: 0,
            scale: 0,
            halfWidth: 0,
            halfHeight: 0,
            currentStatus: 0,
            maxStatus: 0,
            statusBarColour: getColour(COLOURS.WHITE),
            frequency: 0,
            amplitude: 0,
            startTime: Date.now(),
        };
    }
    setPosition(position) {
        this.information.position = Object.assign({}, position);
        this.information.destination = Object.assign({}, position);
        return this;
    }
    setSize(size, scale = 1) {
        this.information.size = Object.assign({}, size);
        this.information.scale = scale;
        this.information.scaledSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.information.halfWidth = this.information.scaledSize.width / 2;
        this.information.halfHeight = this.information.scaledSize.height / 2;
        return this;
    }
    getInformation() {
        return this.information;
    }
    setVisual(visual) {
        this.information.visual = visual;
        return this;
    }
    setText(text, height) {
        this.information.visual = text;
        this.information.size = {
            width: Math.ceil(text.length * (height / 1.85)),
            height: height,
        };
        return this;
    }
    setStatusBarColour(colour) {
        this.information.statusBarColour = colour;
    }
    setStatus(currentStatus, maxStatus) {
        this.information.currentStatus = currentStatus;
        this.information.maxStatus = maxStatus;
        return this;
    }
    getCurrentStatus() {
        return this.information.currentStatus;
    }
    increaseCurrentStatus(increment) {
        this.information.currentStatus += increment;
        if (this.information.currentStatus > this.information.maxStatus)
            this.information.currentStatus = this.information.maxStatus;
    }
    decreaseCurrentStatus(decrement) {
        this.information.currentStatus -= decrement;
        if (this.information.currentStatus < 0)
            this.information.currentStatus = 0;
    }
}
//# sourceMappingURL=EntityInformation.js.map