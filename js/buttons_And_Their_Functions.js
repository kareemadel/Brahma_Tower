function flip(current_page, target_page) {
    for (var i = 1; i < 7; i++) {
        document.getElementById("page" + i).style.display = "none";
    }
    document.getElementById("page" + target_page).style.display = "";
}

//////////////////////////////////////////////////////////////////////////
// All buttons
// page 1 buttons
var pg1SubmitBtn = document.getElementById("submitBtn");
// page 2
var pg2StartBtn = document.getElementById("startButton");
// page3
var mainMenuBtn = document.getElementById("mainMenuBtn"); // shared button
var skipButton = document.getElementById("skipBtn");
// page 4
var easy = document.getElementById("easy");
var average = document.getElementById("average");
var hard = document.getElementById("hard");
var insane = document.getElementById("insane");
// page 5
var charmander = document.getElementById("charmander");
var pikachu = document.getElementById("pikachu");
var bulbasaur = document.getElementById("bulbasaur");
var squirtle = document.getElementById("squirtle");
// page 6
var movesDiv = document.getElementById("moves");
var tower1 = document.getElementById("tower-1");
var tower2 = document.getElementById("tower-2");
var tower3 = document.getElementById("tower-3");
var restartBtn = document.getElementById("restartButton");

///////////////////////////////////////////////////////////////
//// Buttons' Functions

//page 1
function pg1Submit_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    This button will validate the username,
    store it in a global session object and
    switch to page2.
    */

    // body...
}

///////////////////////////////////
// page 2
function pg2Start_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    Switch to page 3
    */

    // body...
}

// page 3
function mainMenu_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    takes only one parameter, which is the calling event.
    switch to page2
    */

    // body...
}

function skip_btn(e) {
    /*
    switch to page4
    */

    // body...
}

////////////////////////////////
// page 4

function difficulty(e) {
    /*
    takes only one parameter, which is the calling event.
    it will set the difficulty variable depending on the id of the object calling the event.
    1=easy, 2=average, 3=hard, 4=instane.
    after this it will switch to page5
    */

    // body...
}

//////////////////////////////////
// page 5
function character(e) {
    /*
    takes only one parameter, which is the calling event.
    it will the the global character of the game depending on the id of the calling object. the is should be one of the following charmander, pikachu, bulbasaur, squirtle.
    after this it switches to page6, the actual game.
    */

    // body...
}

//////////////////////////////////
// page 6
function movesDiv_func(argument) {
    // body...
}

function restart_btn() {
    // body...
}



///////////////////Game Functions////////////
function handleTowers(towerClicked) {
    // handle the frontend of the towers and disc movements && check for isSolved() function
}

function moveDisc(from_Tower, to_Tower) {
    // body...
}

function init(argument) {
    // intialize towers in backend and call the drawDiscs function
}

function emptyTowers() {
    // delete the html content of <ul> towers tags
}

function drawDiscs() {
    // draw the discs according to handled backend
}

function isSolved() {
    // used to check whether he won or not
}
