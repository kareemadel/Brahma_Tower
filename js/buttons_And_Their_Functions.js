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
                SubmitBtn : document.getElementById("submitBtn")
            },

    page2 : {
                StartBtn : document.getElementById("startButton")
            },

    page3 : {
                mainMenuBtn : document.getElementById("mainMenuBtn"),
                skipButton : document.getElementById("skipBtn")
            },

    page4 : {
                easy : document.getElementById("easy"),
                average : document.getElementById("average"),
                hard : document.getElementById("hard"),
                insane : document.getElementById("insane"),

            },

    page5 : {
                charmander : document.getElementById("charmander"),
                pikachu : document.getElementById("pikachu"),
                bulbasaur : document.getElementById("bulbasaur"),
                squirtle : document.getElementById("squirtle"),
                mainMenuButton : document.getElementById("mainMenuButton01")


            },

    page6 : {
                movesDiv : document.getElementById("moves"),
                tower1 : document.getElementById("tower-1"),
                tower2 : document.getElementById("tower-2"),
                tower3 : document.getElementById("tower-3"),
                restartBtn : document.getElementById("restartButton")
            }
};

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//// Buttons' Functions
function onclickAttrIntializer() {
    /*
    sets the click events to all the
    clickables in our game in the HTML file
    */
    clickables.page1.SubmitBtn.addEventListener('click', Submit_btn);
    clickables.page2.StartBtn.addEventListener('click', Start_btn);
    clickables.page3.mainMenuBtn.addEventListener('click', mainMenu_btn);
    clickables.page3.skipButton.addEventListener('click', skip_btn);
    for (var k in clickables.page4) {
        clickables.page4[k].addEventListener('click', difficulty);
    }
    for (k in clickables.page5) {
        clickables.page5[k].addEventListener('click', character);
    }
    console.log("asdf");
    clickables.page5.mainMenuButton.addEventListener('click', mainMenuButtonjj);
    clickables.page6.restartBtn.addEventListener('click', restart_btn);
    clickables.page6.tower1.addEventListener('click', handleTowers);
    clickables.page6.tower2.addEventListener('click', handleTowers);
    clickables.page6.tower3.addEventListener('click', handleTowers);
}
//page 1
function Submit_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    This button will validate the username,
    store it in a global session object and
    switch to page2.
    */

    // body...
    function validateName (IdForTextInput)
    {
        var content = document.getElementById(IdForTextInput).value;
        var pattern = new RegExp("^[a-zA-Z]{3,15}$");
        return pattern.test(content);
    }
    e.preventDefault();
    if (!validateName("playerName"))
    {
        alert("too short");
    }
    else {
      flip(0,2)
    }

}

///////////////////////////////////
// page 2
function Start_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    Switch to page 3
    */

    // body...
}

// page 3
function mainMenu_btn() {
    /*
    takes only one parameter, which is the calling event.
    takes only one parameter, which is the calling event.
    switch to page2
    */
    flip(000,2)
}

function skip_btn() {
    /*
    switch to page4
    */
    flip(000,4)
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

function mainMenuButtonjj(){
  flip(0,6)
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
