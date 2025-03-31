// export class MainMenuState implements IState {
//   private waypoints: Array<Position> =
//     generateEnemyWaypoints(LAVONEY_WAYPOINTS);

//   private projectile = new Enemy(
//     FILE_NAMES.PROJECTILE_SAPPHIRE_1,
//     84,
//     9,
//     this.waypoints
//   )
//     .setPosition(this.waypoints[0])
//     .setDestination(this.waypoints[0])
//     .setSpeed(2)
//     .setScale(1);

//   private tower = new Projectile(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
//     .setPosition(this.waypoints[0])
//     .setDestination(this.waypoints[7])
//     .setSpeed(0.5)
//     .setScale(1);

//   private entities: Array<any> = [];

//   constructor(public state: State) {
//     this.entities.push(this.projectile, this.tower);
//   }

//   draw(ctx: CanvasRenderingContext2D): void {
//     this.entities.forEach((entity) => entity.draw(ctx));
//   }
//   update(): void {
//     this.entities.forEach((entity) => entity.update());
//   }
// }
