// import { IDraw, IRenderEntityComponent, IUpdate } from "../interfaces/interfaces.js";
// import { FadeText } from "./TextStates/FadeText.js";
// import { NormalText } from "./TextStates/NormalText.js";
// import { PulsateText } from "./TextStates/PulsateText.js";

// export interface ITextState extends IDraw, IUpdate {}

// export class Text implements IRenderEntityComponent {
//   state!: ITextState;

//   constructor() {
//     super();
//   }

//   draw(ctx: CanvasRenderingContext2D): void {
//     this.state.draw(ctx);
//   }
//   update(): void {
//     this.state.update();
//   }

//   setNormalText = () => (this.state = new NormalText(this));
//   setFadeText = () => (this.state = new FadeText(this));
//   setPulsateText = () => (this.state = new PulsateText(this));
// }
