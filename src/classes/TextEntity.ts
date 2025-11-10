import { TextInformation } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class TextEntity extends Entity {
  protected information: TextInformation = {};

  setText(text: string, height: number): this {
    this.information.visual = text;
    this.information.size = {
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    };
    return this;
  }
}
