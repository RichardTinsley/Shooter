import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
import { IAnimatedSprite, Position } from "../interfaces/IEntity.js";

export class Sprite {
  private image!: any;

  private scale: number = 1;
  private width: number = this.spriteWidth;
  private height: number = this.spriteHeight;

  private halfWidth = this.width / 2;

  private animationFrame = 0;
  private animationRow = 0;
  private maxAnimationFrame!: number;
  private maxAnimationRow!: number;

  position: Position = { x: 100, y: 100 };

  constructor(
    fileName: any,
    private spriteWidth: number,
    private spriteHeight: number
  ) {
    this.image = ALL_ASSETS.get(fileName);
    this.maxAnimationFrame =
      Math.floor(this.image.width / this.spriteWidth) - 1;
    this.maxAnimationRow =
      Math.floor(this.image.height / this.spriteHeight) - 1;
    console.log(this.maxAnimationFrame, this.maxAnimationRow);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.animationFrame,
      this.spriteHeight * this.animationRow,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x - this.halfWidth,
      this.position.y - this.height,
      this.width,
      this.height
    );
  }

  update() {
    // if(event)
    this.animationFrame < this.maxAnimationFrame
      ? this.animationFrame++
      : (this.animationFrame = 0);
  }

  animate(): void {
    throw new Error("Method not implemented.");
  }

  setPosition(x: number, y: number): this {
    if (x) this.position.x = x;
    if (y) this.position.y = y;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setScale(scale: number): void {
    // this.scale = scale;
    // this.width = Math.round(this.image.width * this.scale * 100) / 100;
    // this.height = Math.round(this.image.height * this.scale * 100) / 100;
  }

  //FOR SPRITE SHEETS WITH MULTIPLE ROWS
  // animate(event){
  //     if(!event || this.maxFrame === 0)
  //         return

  //     if(this.maxRow === 0)
  //         this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
  //     else
  //         this.animateRows();
  // }

  // animateRows(){
  //     if(this.sprite.frame < this.maxFrame)
  //         this.sprite.frame++;
  //     else{
  //         this.sprite.row++;
  //         this.sprite.frame = 0;
  //     }
  //     if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
  //         this.sprite.row = 0;
  //         this.sprite.frame = 0;
  //     }
  // }
}
