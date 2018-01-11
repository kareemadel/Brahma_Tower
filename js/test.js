/*
    this script will be used to test the objects and their functionality
*/

var EASY = 3;
var AVERAGE = 4;
var HARD = 7;
var INSANE = 15;
flip(0, 1);
var newSession = new session("kareem");
setInterval(function() {
    newSession.endTime = Date.now();
}, 1000);
var firstGame = new Game(INSANE);

function solve(gameObject, numberOfDisks, srcTowerIndex, bufferTowerIndex, destTowerIndex) {
    if (numberOfDisks > 0) {
        solve(gameObject, numberOfDisks - 1, srcTowerIndex, destTowerIndex, bufferTowerIndex);
        gameObject.moveDisk(srcTowerIndex, destTowerIndex);
        solve(gameObject, numberOfDisks - 1, bufferTowerIndex, srcTowerIndex, destTowerIndex);
    }
}
solve(firstGame, firstGame.difficulty, 0, 1, 2);
newSession.addGame(firstGame);
