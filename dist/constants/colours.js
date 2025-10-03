export const COLOURS = {
    WHITE: { red: 250, green: 250, blue: 250 },
    BLACK: { red: 0, green: 0, blue: 0 },
    GREEN: { red: 50, green: 205, blue: 50 },
};
export function getColour(colour, alpha) {
    return `rgba(${colour.red}, ${colour.green}, ${colour.blue}, ${alpha})`;
}
//# sourceMappingURL=colours.js.map