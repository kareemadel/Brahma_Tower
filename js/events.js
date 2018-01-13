
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


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//// Buttons' Functions
function eventIntializer() {
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
        showOptimalSolution(800);
    });
    clickables.page2.tobadges.addEventListener('click', toBadges);
    clickables.page6.tower0.addEventListener('click', handleTowers);
    clickables.page6.tower1.addEventListener('click', handleTowers);
    clickables.page6.tower2.addEventListener('click', handleTowers);
    pages.page6.addEventListener('keydown', cheat);
    pages.page6.addEventListener('keyup', cheat);
    clickables.page7.mainMenuBtn7.addEventListener('click', mainMenu_btn);
    // When the user clicks on <xButton> (x), close the VictoryMessage
    xButton.onclick = closeMessage;
    // When the user clicks anywhere outside of the VictoryMessage, close it
    window.onclick = function(e) {
        if (e.target == VictoryMessage) {
            closeMessage();
        }
    };
}
