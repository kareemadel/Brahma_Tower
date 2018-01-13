//////////////////////////////////////////////////////////////
//////// All Clickables On All Pages As A Global Object///////

var clickables = {
    page1: {
        SubmitBtn: document.getElementById("submitBtn")
    },

    page2: {
        StartBtn: document.getElementById("startButton"),
        continueBtn: document.getElementById("ContinueBtn"),
        tobadges: document.getElementById("Bgs")
    },

    page3: {
        mainMenuBtn: document.getElementById("mainMenuBtn"),
        skipButton: document.getElementById("skipBtn")
    },

    page4: {
        easy: document.getElementById("easy"),
        average: document.getElementById("average"),
        hard: document.getElementById("hard"),
        insane: document.getElementById("insane"),
        mainMenuBtn4: document.getElementById("mainMenuButton4")

    },

    page5: {
        charmander: document.getElementById("charmander"),
        pikachu: document.getElementById("pikachu"),
        bulbasaur: document.getElementById("bulbasaur"),
        squirtle: document.getElementById("squirtle"),
        mainMenuButton: document.getElementById("mainMenuButton01")


    },

    page6: {
        movesDiv: document.getElementById("moves"),
        tower0: document.getElementById("tower-1"),
        tower1: document.getElementById("tower-2"),
        tower2: document.getElementById("tower-3"),
        restartBtn: document.getElementById("restartButton"),
        mainMenuBtn6: document.getElementById("mainMenuButton6"),
        optimumSolutionButton: document.getElementById("optimumSolutionButton")
    },

    page7: {
        mainMenuBtn7: document.getElementById("mainMenuButtonbdg")
    }
};
var globalElements = {
    yourcharacter: document.getElementById("yourCharacter"),
    firstGameBadge: document.getElementById("firstGameBadge"),
    nearOptBadge: document.getElementById("nearOptBadge"),
    optimumBadge: document.getElementById("optimumBadge"),
    insaneBadge: document.getElementById("insaneBadge")
};

var pages = {
    page1: document.getElementById("page1"),
    page2: document.getElementById("page2"),
    page3: document.getElementById("page3"),
    page4: document.getElementById("page4"),
    page5: document.getElementById("page5"),
    page6: document.getElementById("page6"),
    page7: document.getElementById("page7")
};

// capturing elements related to the message after winning
VictoryMessage = document.getElementById('myVictoryMessage');
xButton = document.getElementsByClassName("close")[0];
VictoryMessageBody = document.getElementById("VictoryMessageBody");
VictoryHeader = document.getElementById("VictoryHeader");
