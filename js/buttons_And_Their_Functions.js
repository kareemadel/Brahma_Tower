function flip(current_page, target_page) {
    for (var i = 1; i < 7; i++) {
        document.getElementById("page" + i).style.display = "none";
    }
    document.getElementById("page" + target_page).style.display = "";
}


//////////////////////////////////////////////////////////////
//////// All Clickables On All Pages As A Global Object///////

var clickables = {
    page1: {
        SubmitBtn: document.getElementById("submitBtn")
    },

    page2: {
        StartBtn: document.getElementById("startButton"),
        continueBtn: document.getElementById("ContinueBtn")
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
    }
};
var globalElements = {
    yourcharacter: document.getElementById("yourCharacter"),
    firstGameBadge: document.getElementById("firstGameBadge"),
    nearOptBadge: document.getElementById("nearOptBadge"),
    optimumBadge: document.getElementById("optimumBadge"),
    insaneBadge: document.getElementById("insaneBadge")
};

// capturing elements related to the message after winning
VictoryMessage = document.getElementById('myVictoryMessage');
span = document.getElementsByClassName("close")[0];
VictoryMessageBody = document.getElementById("VictoryMessageBody");
VictoryHeader = document.getElementById("VictoryHeader");
// when this flag is true, then the game is running in auto solve mode
var isAutoSolve = false;

// When the user clicks on <span> (x), close the VictoryMessage
span.onclick = function() {
    VictoryMessage.style.display = "none";
    if (isAutoSolve) {
        newGame = bufferGame;
        newSession = bufferSession;
        flip(0, 6)
        emptyTowers();
        drawDiscs();
        clickables.page6.movesDiv.innerHTML = newGame.numberOfMoves + " move(s)";
        isAutoSolve = false;
    } else {
        mainMenu_btn();
    }
};
// When the user clicks anywhere outside of the VictoryMessage, close it
window.onclick = function(event) {
    if (event.target == VictoryMessage) {
        VictoryMessage.style.display = "none";
        if (isAutoSolve) {
            newGame = bufferGame;
            newSession = bufferSession;
            flip(0, 6);
            emptyTowers();
            drawDiscs();
            clickables.page6.movesDiv.innerHTML = newGame.numberOfMoves + " move(s)";
            isAutoSolve = false;
        } else {
            mainMenu_btn();
        }
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
    clickables.page2.continueBtn.addEventListener('click', continueGame);
    clickables.page3.mainMenuBtn.addEventListener('click', mainMenu_btn);
    clickables.page3.skipButton.addEventListener('click', skip_btn);
    clickables.page4.easy.addEventListener('click', difficulty);
    clickables.page4.average.addEventListener('click', difficulty);
    clickables.page4.hard.addEventListener('click', difficulty);
    clickables.page4.insane.addEventListener('click', difficulty);
    clickables.page4.mainMenuBtn4.addEventListener('click', mainMenu_btn);
    clickables.page5.pikachu.addEventListener('click', character);
    clickables.page5.charmander.addEventListener('click', character);
    clickables.page5.bulbasaur.addEventListener('click', character);
    clickables.page5.squirtle.addEventListener('click', character);
    clickables.page5.mainMenuButton.addEventListener('click', mainMenu_btn);
    clickables.page6.mainMenuBtn6.addEventListener('click', mainMenu_btn);
    clickables.page6.restartBtn.addEventListener('click', restart_btn);
    clickables.page6.optimumSolutionButton.addEventListener('click', function() {
        showOptimalSolution(300);
    });
    clickables.page6.tower0.addEventListener('click', handleTowers);
    clickables.page6.tower1.addEventListener('click', handleTowers);
    clickables.page6.tower2.addEventListener('click', handleTowers);
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
    function validateName(content) {
        var Pattern = new RegExp("^[a-zA-Z]{3,15}$");
        if (content.length < 3 || content.length > 15) {
            console.log('inv_len');
            return "inv_len";
        } else if (Pattern.test(content) == false) {
            console.log('notchar');
            return "notchar";
        }
    }
    e.preventDefault();
    var nameElement = document.getElementById("playerName");
    var userName = nameElement.value;
    if (validateName(userName) == "inv_len") {
        alert("Your username should be between 3 to 15 characters.");
    } else if (validateName(userName) == "notchar") {
        alert("Please enter only alphabetical letters.");
    } else {
        nameElement.value = "";
        newSession = new session(userName);
        flip(0, 2);
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
    flip(0, 3);
}



function continueGame() {
    /*
    This will continue the current game
    */
    flip(0, 6);
    emptyTowers();
    drawDiscs();
}

function isGameInProgress() {
    return newGame && newGame.numberOfMoves > 0;
}

// page 3
function mainMenu_btn() {
    /*
    takes only one parameter, which is the calling event.
    takes only one parameter, which is the calling event.
    switch to page2
    */

    if (isGameInProgress()) {
        clickables.page2.continueBtn.parentElement.style.display = "inline";
        newSession.previousGame = newGame;
    }
    flip(0, 2);
}

function skip_btn() {
    /*
    switch to page4
    */
    flip(0, 4);
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
    var levelOfDifficulty = e.currentTarget.getAttribute("id");
    switch (levelOfDifficulty) {
        case "easy":
            level = EASY;
            break;
        case "average":
            level = AVERAGE;
            break;
        case "hard":
            level = HARD;
            break;
        case "insane":
            level = INSANE;
            break;
    }
    flip(0, 5);


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
    var target = e.target.id;
    var targetsrc = e.target.src;
    // globalElements.yourcharacter
    switch (target) {
        case "charmander":
            chosenCharacter = "charmander";
            break;
        case "pikachu":
            chosenCharacter = "pikachu";
            break;
        case "bulbasaur":
            chosenCharacter = "bulbasaur";
            break;
        case "squirtle":
            chosenCharacter = "squirtle";
            break;

    }
    globalElements.yourcharacter.src = targetsrc;
    init();
    flip(0, 6);
}

// function mainMenuButtonjj() {
//     flip(0, 2);
// }

//////////////////////////////////
// page 6

function restart_btn() {
    init();
}

// Optimum solution
// function to solve the problem and store the steps in the array solution_steps
var solution_steps = [];

function solve(gameObject, numberOfDisks, srcTowerIndex, bufferTowerIndex, destTowerIndex) {
    if (numberOfDisks > 0) {
        solve(gameObject, numberOfDisks - 1, srcTowerIndex, destTowerIndex, bufferTowerIndex);
        solution_steps.push([srcTowerIndex, destTowerIndex]);
        solve(gameObject, numberOfDisks - 1, bufferTowerIndex, srcTowerIndex, destTowerIndex);
    }
}

// function to send click event to a tower with index towerIndex
function clickTower(towerIndex) {
    clickables.page6["tower" + towerIndex].click();
}


// use the solution steps array, to illustrate the solution on the browerser, with "interval" millisecond between each move
function show_solution(interval) {
    solve(newGame, newGame.difficulty, 0, 1, 2);
    for (var i = 0; i < solution_steps.length; i++) {
        setTimeout(clickTower, i * interval, solution_steps[i][0]);
        setTimeout(clickTower, i * interval + 0.5 * interval, solution_steps[i][1]);
    }
    solution_steps = [];
}

function showOptimalSolution(interval) {
    /*
    switch the gamee and session to temporary objects, solve the games
    and then restores everything back to normal by calling the function restoreSessionAndGame in the event
    */
    if (isAutoSolve) {
        // first we need to clean all time outside
        // create new one to get the last timeout id
        var id = window.setTimeout(function() {}, 0);
        // loop the ids and clear them one by one.
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        // reset the game to original state
        span.click();
    } else {
        isAutoSolve = true;
        bufferGame = newGame;
        bufferSession = newSession;
        newSession = new session("userName");
        init();
        show_solution(interval);
    }

}

///////////////////Game Functions////////////
function handleTowers(e) {
    // handle the frontend of the towers and disc movements && check for isSolved() function
    var tower = e.currentTarget;
    var towerClickedValue = Number(tower.getAttribute("value"));
    var whichTowerClicked = newGame.whichTowerClicked;
    if (whichTowerClicked == null) {
        if (!newGame.isTowerEmpty(towerClickedValue)) {
            newGame.whichTowerClicked = towerClickedValue;
            whichTowerClicked = towerClickedValue;
            tower.lastChild.style.backgroundColor = "black";
        }
    } else {
        var firstClickedTower = clickables.page6["tower" + whichTowerClicked];
        var moves = Number(newGame.numberOfMoves) + 1;
        firstClickedTower.lastChild.style.backgroundColor = "#e4b326";
        if (whichTowerClicked != towerClickedValue) {
            var moveStatus = newGame.moveDisk(whichTowerClicked, towerClickedValue);
            clickables.page6.movesDiv.innerHTML = moves + " move(s)";
            if (moveStatus) {
                emptyTowers();
                drawDiscs();
            }
            if (newGame.isSolved()) {
                if (isAutoSolve) {
                    VictoryHeader.innerHTML = "See How easy was that!!";
                    VictoryMessageBody.innerHTML = "Now that you've seen the solution, why don't you continue trying?";
                } else {
                    handleGameMap();
                    VictoryHeader.innerHTML = "Congratulations!, You have Won.";
                    VictoryMessageBody.innerHTML = "You won with " + moves + " moves!";
                    newGame.endTime = Date.now();
                    newSession.addGame(newGame);
                    handleBadges_Message();
                }
                VictoryMessage.style.display = "block";
            }
        }
        //  else {
        //     $("ul").effect("shake");
        // }
        newGame.whichTowerClicked = null;
    }
}

function handleBadges_Message() {
    var badgeObject = newSession.checkBadge(newGame);
    for (var i in badgeObject) {
        if (badgeObject[i].includes(".png")) {
            globalElements[i].src = badgeObject[i];
            switch (i) {
                case "firstGameBadge":
                    VictoryMessageBody.innerHTML += "<br /> You have won your first game.";
                    break;
                case "nearOptBadge":
                    VictoryMessageBody.innerHTML += "<br /> You have won with almost the optimum number of moves.";
                    break;
                case "optimumBadge":
                    VictoryMessageBody.innerHTML += "<br /> You have won with a perfect number of moves";
                    break;
                case "insaneBadge":
                    VictoryMessageBody.innerHTML += "<br /> You have won the INSANE level.";
                    break;
            }
        }
    }
}

function handleGameMap() {
    switch (newGame.difficulty) {
        case EASY:
            newSession.easyLevel = true;
            clickables.page4.easy.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
            break;
        case AVERAGE:
            newSession.averageLevel = true;
            clickables.page4.average.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
            break;
        case HARD:
            newSession.hardLevel = true;
            clickables.page4.hard.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
            break;
        case INSANE:
            newSession.insaneLevel = true;
            clickables.page4.insane.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
            break;
    }
}

function init(argument) {
    // intialize towers in backend and call the drawDiscs function
    emptyTowers();
    clickables.page6.movesDiv.innerHTML = "0 move(s)";
    newGame = new Game(level, chosenCharacter);
    drawDiscs();
}

function emptyTowers() {
    // delete the html content of <ul> towers tags
    for (var i = 0; i < 3; i++) {
        clickables.page6["tower" + i].innerHTML = "";
    }
}

function drawDiscs() {
    // draw the discs according to handled backend
    emptyTowers();
    for (var i = 0; i < 3; i++) {
        if (!newGame.isTowerEmpty(i)) {
            for (var j = 0; j < newGame.towers[i].numberOfDisks; j++) {
                clickables.page6["tower" + i].innerHTML += "<li id='disc-" + newGame.towers[i].disks[j].width + "' value='" + newGame.towers[i].disks[j].width + "'></li>";
            }
        }
    }
}


// the following function are implemented in case we wanted to extend the code,
// to add functionality of saving games, and maybe continue later.
function restoreSessionAndGame(aSession, aGame) {
    /*
    this takes a game and session, and restore the old state
    */
    newGame = aGame;
    newSession = aSession;
    emptyTowers();
    drawDiscs();
    clickables.page6.movesDiv.innerHTML = newGame.numberOfMoves + " move(s)";
    refreshBadges();
    refreshMap();

}

function refreshBadges() {
    /*
    check the badges in the session, and make the html badges match it
    */
    globalElements.firstGameBadge.src = newSession.firstGameBadge ? "assets/images/1stgame.png" : "assets/images/1stgame(g).png";
    globalElements.nearOptBadge.src = newSession.nearOptBadge ? "assets/images/nearopt.png" : "assets/images/nearopt(g).png";
    globalElements.optimumBadge.src = newSession.optimumBadge ? "assets/images/optimum.png" : "assets/images/optimum(g).png";
    globalElements.insaneBadge.src = newSession.insaneBadge ? "assets/images/insane.png" : "assets/images/insane(g).png";
}

function refreshMap() {
    /*
    checks the levels in the session object and make the html map match it
    */
    if (newSession.easyLevel) {
        clickables.page4.easy.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
    } else {
        clickables.page4.easy.firstElementChild.setAttribute("style", "filter: grayscale(100%);");
    }
    if (newSession.averageLevel) {
        clickables.page4.average.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
    } else {
        clickables.page4.average.firstElementChild.setAttribute("style", "filter: grayscale(100%);");
    }
    if (newSession.hardLevel) {
        clickables.page4.hard.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
    } else {
        clickables.page4.hard.firstElementChild.setAttribute("style", "filter: grayscale(100%);");
    }
    if (newSession.insaneLevel) {
        clickables.page4.insane.firstElementChild.setAttribute("style", "filter: grayscale(0%);");
    } else {
        clickables.page4.insane.firstElementChild.setAttribute("style", "filter: grayscale(100%);");
    }
}
