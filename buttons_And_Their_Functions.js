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
function pg1Submit_btn(argument) {
    // body...
}

///////////////////////////////////
// page 2
function pg2Start_btn(argument) {
    // body...
}

// page 3
function mainMenu_btn(argument) {
    // body...
}

function skip_btn(argument) {
    // body...
}

////////////////////////////////
// page 4
function easy_btn(argument) {
    // body...
}

function avg_btn(argument) {
    // body...
}

function hard_btn(argument) {
    // body...
}

function insane_btn(argument) {
    // body...
}

//////////////////////////////////
// page 5
function charmander_btn(argument) {
    // body...
}

function pikachu_btn(argument) {
    // body...
}

function bulbasaur_btn(argument) {
    // body...
}

function squirtle_btn(argument) {
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













