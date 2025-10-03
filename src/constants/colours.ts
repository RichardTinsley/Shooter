// export const COLOURS = {
//   RED: "rgba(250, 0, 0, 1)",
//   RED_ALPHA: "rgba(250, 0, 0, 0.3)",
//   BLUE: "rgba(0, 0, 250, 1)",
//   BLUE_ALPHA: "rgba(0, 0, 250, 0.3)",
//   GREEN: "rgba(50, 205, 50, 1)",
//   GREEN_ALPHA: "rgba(0, 250, 0, 0.3)",
//   BRIGHT_GREEN: "rgba(85, 255, 0, 1)",
//   YELLOW: "rgba(250, 250, 0, 1)",
//   GOLD: "rgba(255, 217, 0, 1)",
//   WHITE: "rgba(250, 250, 250, 1)",
//   BLACK: "rgba(0, 0, 0, 1)",
//   LINES: "rgba(0, 0, 0, 0.5)",
//   SHADOW: "rgba(0, 0, 0, 0.3)",
//   DARKSHADOW: "rgba(0, 0, 0, 0.9)",
//   GLOW: "rgba(213, 48, 0, 1)",
//   GLOW_ALPHA: "rgba(213, 48, 0, 0)",
//   TOWER_MODAL: "rgba(213,94,0, 1)",
//   TOWER_MODAL_ALPHA: "rgba(213,94,0, 0.5)",
//   TOWER_MODAL_TRANSPARENT: "rgba(213,94,0, 0.1)",
//   NONE: "",
//   BLACKOUT: "0, 0, 0, ",
//   REDOUT: "250, 0, 0, ",
// };

type colour = {
  red: number;
  green: number;
  blue: number;
};

export const COLOURS: Record<string, colour> = {
  WHITE: { red: 250, green: 250, blue: 250 },
  BLACK: { red: 0, green: 0, blue: 0 },
  GREEN: { red: 50, green: 205, blue: 50 },
};

export function getColour(colour: colour, alpha: number): string {
  return `rgba(${colour.red}, ${colour.green}, ${colour.blue}, ${alpha})`;
}
