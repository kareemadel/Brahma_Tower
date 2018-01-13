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
                    clickables.page2.continueBtn.style.display = "none";
                    handleGameMap();
                    VictoryHeader.innerHTML = "Congratulations!, You have Won.";
                    VictoryMessageBody.innerHTML = "You won with " + moves + " moves!";
                    newGame.endTime = Date.now();
                    newSession.addGame(newGame);
                    handleBadges_Message();
                    document.getElementById("won").play();
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

var closeMessage = function() {
    VictoryMessage.style.display = "none";
    if (isAutoSolve) {
        newGame = bufferGame;
        newSession = bufferSession;
        emptyTowers();
        drawDiscs();
        clickables.page6.movesDiv.innerHTML = newGame.numberOfMoves + " move(s)";
        isAutoSolve = false;
    } else {
        mainMenu_btn();
    }
};
