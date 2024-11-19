export const menuOptions = [
    {
        name: "New Game",
        screen: "menu",
        colour: "white",
        optionAction: function(switchScreen, music) {
            music.pause();
            switchScreen();
        }
    },
    {
        name: "Options",
        screen: "menu",
        colour: "white",
        optionAction: function(switchScreen) {
            switchScreen();
        }
    },  
    {
        name: "About",
        screen: "menu",
        colour: "white",
        optionAction: function(switchScreen) {
            switchScreen();
        }
    },
    {
        name: "Restart",
        screen: "gameover",
        colour: "white",
        optionAction: function(switchScreen) {
            switchScreen();
        }
    },
    {
        name: "Main Menu",
        screen: "gameover",
        colour: "white",
        optionAction: function(switchScreen) {
            switchScreen();
        }
    },
];

