// import { Coordinates } from "../../classes/Coordinates.js";
// import { Entity } from "../../classes/Entity.js";
// import { EntityState } from "../../classes/EntityState.js";
// import { GUIComponentFactory } from "../../../src/factories/GUIComponentFactory.js";
// // import { TextFactory } from "../../factories/TextFactory.js";
// import { AssetLoader } from "../../handlers/assetLoader.js";
// import { IEntityComponent } from "../../../src/interfaces/interfaces.js";

// export class LoadingScreen extends EntityState {
//   coordinates!: Coordinates;
//   components!: IEntityComponent[];
//   private assetLoader = new AssetLoader();
//   // private DSLogo = GUIComponentFactory.DSLogo();
//   // private loadingBar = GUIComponentFactory.LoadingBar(0, this.assetLoader.getAssetFileNameLength());
//   // private DSTitle = TextFactory.DSTitle();
//   // private summoning = TextFactory.Summoning();

//   constructor(public state: Entity) {
//     super();
//     this.assetLoader
//       .load(this.assetLoaded)
//       .catch((error) => console.error(`Error: "${error.fileName}"`))
//       .then(() => this.state.setBeginScreen());
//   }

//   draw(ctx: CanvasRenderingContext2D): void {
//     super.draw(ctx, this.coordinates);
//     // this.DSLogo.draw(ctx);
//     // this.DSTitle.draw(ctx);
//     // this.loadingBar.draw(ctx);
//     // this.summoning.draw(ctx);
//   }

//   update(): void {
//     // this.summoning.update();
//     super.update();
//   }

//   // assetLoaded = (): void => this.loadingBar.increaseCurrentStatus(1);
//   assetLoaded = (): void => console.log("OMG");
// }
