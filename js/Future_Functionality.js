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
