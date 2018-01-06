function flip(current_page, target_page) {
    for (var i = 1; i < 7; i++) {
        document.getElementById("page" + i).style.display = "none";
    }
    document.getElementById("page" + target_page).style.display = "";
}


//////////////////////////////////////////////////////////////
//////// All Clickables On All Pages As A Global Object///////

var clickables = {
    page1 : {
                pg1SubmitBtn : function(argument){
                    return document.getElementById("submitBtn");
                }
            },

    page2 : {
                pg2StartBtn : function (argument) {
                    return document.getElementById("startButton");
                } 
            },

    page3 : {
                mainMenuBtn : function (argument) {
                    return document.getElementById("mainMenuBtn");
                }, 
                skipButton : function (argument) {
                    return document.getElementById("skipBtn");
                } 
            },

    page4 : {
                easy : function (argument) {
                    return document.getElementById("easy");
                }, 
                average : function (argument) {
                    return document.getElementById("average");
                }, 
                hard : function (argument) {
                    return document.getElementById("hard");
                }, 
                insane : function (argument) {
                    return document.getElementById("insane");
                } 
            },

    page5 : {
                charmander : function (argument) {
                    return document.getElementById("charmander");
                }, 
                pikachu : function (argument) {
                    return document.getElementById("pikachu");
                }, 
                bulbasaur : function (argument) {
                    return document.getElementById("bulbasaur");
                }, 
                squirtle : function (argument) {
                    return document.getElementById("squirtle");
                }

            },

    page6 : {
                movesDiv : function (argument) {
                    return document.getElementById("moves");
                }, 
                tower1 : function (argument) {
                    return document.getElementById("tower-1");
                }, 
                tower2 : function (argument) {
                    return document.getElementById("tower-2");
                }, 
                tower3 : function (argument) {
                    return document.getElementById("tower-3");
                }, 
                restartBtn : function (argument) {
                    return document.getElementById("restartButton");
                } 
            }
};
    
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//// Buttons' Functions
function onClickAttrIntializer(argument) {
    /*
    sets the onclick attribute to all the
    clickables in our game in the HTML file
    */
    for(var k1 in clickables){
        if (k1 == "page1") {
            clickables[k1].pg1SubmitBtn.onClick = "pg1Submit_btn()";
        }
        else if (k1 == "page2") {
            clickables[k1].pg2StartBtn.onClick = "pg2Start_btn()";
        }
        else if (k1 == "page3") {
            clickables[k1].mainMenuBtn.onClick = "mainMenu_btn()";
            clickables[k1].skipBtn.onClick = "skip_btn()";
        }
        else if (k1 == "page4") {
            clickables[k1].easy.onClick = "difficulty(this.id)";
            clickables[k1].average.onClick = "difficulty(this.id)";
            clickables[k1].hard.onClick = "difficulty(this.id)";
            clickables[k1].insane.onClick = "difficulty(this.id)";
        }
        else if (k1 == "page5") {
            clickables[k1].charmander.onClick = "character(this.id)";
            clickables[k1].pikachu.onClick = "character(this.id)";
            clickables[k1].bulbasaur.onClick = "character(this.id)";
            clickables[k1].squirtle.onClick = "character(this.id)";
        }
        else if (k1 == "page6") {
            clickables[k1].tower1.onClick = "handleTowers(this.value)";
            clickables[k1].tower2.onClick = "handleTowers(this.value)";
            clickables[k1].tower3.onClick = "handleTowers(this.value)";
            clickables[k1].restartBtn.onClick = "restart_btn()";
        }
            
        }
}
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
