/*
    This will contain the implementation of the game object
*/

function game(difficulty) {
    /*
    This will contain the time of start and end of the game, the level of difficulty of that game(the number of disks associated with each level), the character, the number of moves, the optimum number of moves, array of towers
    methods: isVictory,
    This object will need only setters and getter for each property, which can be achieved using "defineProperty"
    */

    // your code...
    var _endTime = Date.now();
    var _numberOfMoves = 0;
    var _towers = [];

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
        numberOfMoves: {
            get: function() {
                return _numberOfMoves;
            },
            increment: function() {
                return ++_numberOfMoves;
            }
        },
        difficulty: {
            value: difficulty
        },
        optimumNumberOfMoves: {
            value: Math.pow(2, this.difficulty) - 1
        },
        towers: {
            get: function() {
                return _towers;
            },
            push: function(tower) {
                if (_towers.length < 3) {
                    _towers.push(tower);
                    return _towers.length;
                }
            },
            pop: function() {},
            copyWithin: function() {},
            fill: function() {},
            reverse: function() {},
            shift: function() {},
            sort: function() {},
            splice: function() {},
            unshift: function() {}
        }
    });
}

game.prototype.isVictory = function() {
    /*
    This will return true if the player won, otherwise false.
    */
};
