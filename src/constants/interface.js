import * as GAME from "./game.js"

export const SIZES = {
    GAMETEXT: 25,
    TITLETEXT: 170,
    MENUITEMTEXT: 60,
    SPACING: 15,
};

export const TEXT_COLOURS = {
    GOLD: '255, 215, 0, ',
    GREEN: '50, 205, 50, ',
    RED: '250, 0, 0, ',
    WHITE: '250, 250, 250, ',
}
//COLOUR FOR TEXT BLUR

export const COLOURS = {
    RED: "rgba(250, 0, 0, 1)",
    RED_ALPHA: "rgba(250, 0, 0, 0.3)",
    BLUE: "rgba(0, 0, 250, 1)",
    BLUE_ALPHA: "rgba(0, 0, 250, 0.3)",
    GREEN: "rgba(0, 250, 0, 1)",
    GREEN_ALPHA: "rgba(0, 250, 0, 0.3)",
    YELLOW: "rgba(250, 250, 0, 1)",
    WHITE: "rgba(250, 250, 250, 1)",
    BLACK: "rgba(0, 0, 0, 1)",
    LINES: "rgba(0, 0, 0, 0.5)",
    SHADOW: "rgba(0, 0, 0, 0.3)",
}

export const MENU_POSITION = {
    x: GAME.SIZES.GAME_WIDTH_HALF,
    y: GAME.SIZES.GAME_HEIGHT_HALF + 100,
} 

export const MAIN_MENU = [
    {
        text: "New Game",
        option: GAME.STATES.BATTLE,
    }, 
    {
        text: "Options",
        option: GAME.STATES.OPTIONS,
    }, 
    {
        text: "About",
        option: GAME.STATES.ABOUT,
    }, 
];
