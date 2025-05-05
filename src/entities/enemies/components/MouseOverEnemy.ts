import { STATE } from "../../../constants/states.js";
import { Position } from "../../../constants/types.js";
import { drawMouseOverEnemy } from "../../../utilities/drawShapes.js";

export class MouseOverEnemy {
  state = STATE.MOUSEOFF;
  width!: number;
  position!: Position;

  draw(ctx: CanvasRenderingContext2D): void {
    switch (this.state) {
      case STATE.MOUSEOVER:
        drawMouseOverEnemy(ctx, this.position, this.width);
        break;
      case STATE.MOUSEOFF:
        break;
    }
  }

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  setWidth(width: number): this {
    this.width = width;
    return this;
  }

  setState(state: number): this {
    this.state = state;
    return this;
  }

  getState(): number {
    return this.state;
  }
}
