/*
    this script will be used to test the objects and their functionality
*/

var EASY = 3;
var AVERAGE = 4;
var HARD = 5;
var INSANE = 7;
onclickAttrIntializer();

// listner to wait for the page to load.
window.addEventListener("load", function() {
    document.getElementById("cover").style.display = "none";
    audio.play();
});

// listner to check before the user leave, update the the endTime of the session.
window.onbeforeunload = function() {
    newSession.endTime = Date.now();
    return 'Are you sure you want to leave?';
};


// function to solve the problem and stor the steps in the array solution_steps
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
        setTimeout(clickTower, i * interval + 0.5*interval, solution_steps[i][1]);
    }
    solution_steps = [];
}
