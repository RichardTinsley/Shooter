export const COLOURS = {
    WHITE: { red: 250, green: 250, blue: 250 },
    BLACK: { red: 0, green: 0, blue: 0 },
    RED: { red: 250, green: 0, blue: 0 },
    GREEN: { red: 50, green: 250, blue: 50 },
    BLUE: { red: 0, green: 0, blue: 250 },
    YELLOW: { red: 250, green: 250, blue: 0 },
    GOLD: { red: 255, green: 217, blue: 0 },
    TEXT_GLOW: { red: 213, green: 48, blue: 0 },
    TOWER_MODAL: { red: 213, green: 94, blue: 0 },
};
export function getColour(colour, alpha = 1) {
    return `rgba(${colour.red}, ${colour.green}, ${colour.blue}, ${alpha})`;
}
//# sourceMappingURL=colours.js.map