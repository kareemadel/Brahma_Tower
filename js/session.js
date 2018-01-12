/*
    This will contain the implementation of the session objects
*/

function session(name) {
    /*
    This will contain the time of start and end of session, the name of the user, an array containing all the games played in that session, object of booleans representing the badges
    the methods: setters and getters for the name and time, addGame, checkBadge
    */

    // your code...
    var _endTime = Date.now();
    var _userName = name;
    var _games = [];
    var _firstGameBadge = false;
    var _optimumBadge = false;
    var _nearOptBadge = false;
    var _insaneBadge = false;

    Object.defineProperties(this, {
        startTime: {
            value: Date.now(),
        },
        endTime: {
            get: function() {
                return _endTime;
            },
            set: function(newTime) {
                _endTime = newTime;
            }
        },
        userName: {
            get: function() {
                return _userName;
            },
            set: function(name) {
                _userName = name;
            }
        },
        games: {
            get: function() {
                return _games.slice();
            }
        },
        firstGameBadge: {
            get: function() {
                return _firstGameBadge;
            },
            set: function(bool) {
                _firstGameBadge = Boolean(bool);
            }
        },
        optimumBadge: {
            get: function() {
                return _optimumBadge;
            },
            set: function(bool) {
                _optimumBadge = Boolean(bool);
            }
        },
        nearOptBadge: {
            get: function() {
                return _nearOptBadge;
            },
            set: function(bool) {
                _nearOptBadge = Boolean(bool);
            }
        },
        insaneBadge: {
            get: function() {
                return _insaneBadge;
            },
            set: function(bool) {
                _insaneBadge = Boolean(bool);
            }
        }
    });

    this.addGame = function(newGame) {
        /*
        adds a game to the session, check if the player unlocked a badge
        */

        // your code...
        if (newGame.isSolved()) {
            _games.push(newGame);
        }
    };
}

session.prototype.checkBadge = function(newGame) {
    /*
    check if the player is entilted to a new badge and change the corresponging badge propertry if the player just unlocked a new badge, do nothing if the player isn't qualified to win new badge
    */




    // your code...
    // the difference between the actual and optimumBadge number of moves
    var delta = newGame.numberOfMoves - newGame.optimumNumberOfMoves;
    var badgeObject = {
        firstGameBadge: "assets/images/1stgame",
        nearOptBadge: "assets/images/nearopt",
        optimumBadge: "assets/images/optimum",
        insaneBadge: "assets/images/insane"
    };
    var currentGameBadges = {
        firstGameBadge: this.games.length == 1,
        nearOptBadge: delta < 3 && delta > 0,
        optimumBadge: delta == 0,
        insaneBadge: newGame.difficulty == INSANE
    };
    if (newGame.isSolved()) {
        this.firstGameBadge = firstGameBadge || this.firstGameBadge;
        this.optimumBadge = optimumBadge || this.optimumBadge;
        this.nearOptBadge = nearOptBadge || this.nearOptBadge;

        this.insaneBadge = insaneBadge || this.insaneBadge;
        for (var i in badgeObject) {
            if (currentGameBadges[i]) {
                badgeObject[i] += ".png";
            }
        }
    }
    return badgeObject;
};
