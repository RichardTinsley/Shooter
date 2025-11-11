import { COLOURS, getColour } from "../constants/colours.js";
import { StatusInformation, VisualInformation } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class StatusBar extends Entity {
  protected information!: VisualInformation & StatusInformation;
  constructor() {
    super();
    this.information.statusBarColour = getColour(COLOURS.WHITE);
  }
}
