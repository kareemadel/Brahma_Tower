function flip(current_page, target_page) {
    for (var page in pages) {
        pages[page].style.display = "none";
    }
    pages["page" + target_page].style.display = "";
}

// when this flag is true, then the game is running in auto solve mode
var isAutoSolve = false;

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
        alert("Username has to be between 3 and 15 characters.");
    } else if (validateName(userName) == "notchar") {
        alert("Only alphabetical letters are allowed.");
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

function toBadges() {

    flip(0, 7);
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
    return typeof newGame !== 'undefined' && newGame.numberOfMoves > 0 && !newGame.isSolved();
}

// page 3
function mainMenu_btn(e) {
    /*
    takes only one parameter, which is the calling event.
    takes only one parameter, which is the calling event.
    switch to page2
    */
    if (typeof e !== 'undefined' && e.target == clickables.page6.mainMenuBtn6) {
        clearAllIntervals();
        xButton.click();
    }
    if (isGameInProgress()) {
        clickables.page2.continueBtn.style.display = "inline";
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
    if (isAutoSolve) {
        clearAllIntervals();
        xButton.click();
    }
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

function clearAllIntervals() {
    // create new one to get the last timeout id
    var id = window.setTimeout(function() {}, 0);
    // loop the ids and clear them one by one.
    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}

function showOptimalSolution(interval) {
    /*
    switch the gamee and session to temporary objects, solve the games
    and then restores everything back to normal by calling the function restoreSessionAndGame in the event
    */
    if (isAutoSolve) {
        // first we need to clean all time outside
        clearAllIntervals();
        // reset the game to original state
        xButton.click();
    } else {
        isAutoSolve = true;
        bufferGame = newGame;
        bufferSession = newSession;
        newSession = new session("userName");
        init();
        show_solution(interval);
    }

}


var map = {};

function cheat(e) {
    map[e.key] = e.type == 'keydown';
    if (map['Shift'] && map['Alt'] && map['Q']) {
        init();
        show_solution(100);
    }
    if (map['Shift'] && map['Alt'] && map['W']) {
        // first we need to clean all time outside
        clearAllIntervals();
    }
}
