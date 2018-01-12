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
