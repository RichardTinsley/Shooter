import { COLOURS, getColour } from "../constants/colours.js";
import { StatusType, VisualType } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class StatusBar extends Entity {
  protected information!: VisualType & StatusType;
  constructor() {
    super();
    this.information.statusBarColour = getColour(COLOURS.WHITE);
  }
}
