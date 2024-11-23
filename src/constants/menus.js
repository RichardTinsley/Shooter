import { GAME_STATES } from "./game";

export const menuScreenButtonsPosition = 460;
export const menuScreenButtonsTextSize = 60;
//COLOUR FOR TEXT BLUR

export const mainMenu = [
    {
        x:,
        y:,
        name: "New Game",
        colour: "white",
        option: GAME_STATES.PLAYING
    },
    {
        x:,
        y:,
        name: "Options",
        colour: "white",
        option: GAME_STATES.OPTIONS
    },  
    {
        x:,
        y:,
        name: "About",
        colour: "white",
        option: ""
    },
];

export const gameOverMenu = [
    {
        x:,
        y:,
        name: "Restart",
        colour: "white",
        option: GAME_STATES.RESTART
    },
    {
        x:,
        y:,
        name: "Main Menu",
        colour: "white",
        option: GAME_STATES.MENU
    },
]
