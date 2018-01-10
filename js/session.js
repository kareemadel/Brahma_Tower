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
    var _firstGame = false;
    var _optimum = false;
    var _nearOptimum = false;
    var _instane = false;

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
                return _games;
            },
            push: function(game) {
                _games.push(game);
            },
            pop: function() {},
            copyWithin: function() {},
            fill: function() {},
            reverse: function() {},
            shift: function() {},
            sort: function() {},
            splice: function() {},
            unshift: function() {}
        },
        firstGame: {
            get: function() {
                return _firstGame;
            },
            set: function(bool) {
                _firstGame = Boolean(bool);
            }
        },
        optimum: {
            get: function() {
                return _optimum;
            },
            set: function(bool) {
                _optimum = Boolean(bool);
            }
        },
        nearOptimum: {
            get: function() {
                return _nearOptimum;
            },
            set: function(bool) {
                _nearOptimum = Boolean(bool);
            }
        },
        insane: {
            get: function() {
                return _insane;
            },
            set: function(bool) {
                _insane = Boolean(bool);
            }
        }
    });
}

session.prototype.addGame = function(newGame) {
    /*
    adds a game to the session, check if the player unlocked a badge
    */

    // your code...
};

session.prototype.checkBadge = function(newGame) {
    /*
    check if the player is entilted to a new badge, return true if the player just unlocked a new badge, false if he already have the badge or isn't qualified to get it
    */

    // your code...
};
