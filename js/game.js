/*
    This will contain the implementation of the game object
*/

function Game(difficulty, chosedCharacter) {
    /*
    This will contain the time of start and end of the game, the level of difficulty of that game(the number of disks associated with each level), the character, the number of moves, the optimum number of moves, array of towers
    methods: isVictory,
    This object will need only setters and getter for each property, which can be achieved using "defineProperty"
    */

    // your code...
    var _endTime = Date.now();
    var _numberOfMoves = 0;
    var _whichTowerClicked = null;
    var _towers = [];
    _towers.push(new Tower(0, difficulty));
    _towers.push(new Tower(1, 0));
    _towers.push(new Tower(2, 0));

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
        character: {
            value: chosedCharacter
        },
        numberOfMoves: {
            get: function() {
                return _numberOfMoves;
            },
            set: function() {
                ++_numberOfMoves;
            }
        },
        difficulty: {
            value: difficulty
        },
        optimumNumberOfMoves: {
            value: Math.pow(2, difficulty) - 1
        },
        whichTowerClicked: {
            get: function() {
                return _whichTowerClicked;
            },
            set: function(towerIndex) {
                _whichTowerClicked =
                    towerIndex;
            }
        },
        towers: {
            get: function() {
                return _towers.slice();
            }
        }
    });
}

Game.prototype.isSolved = function() {
    /*
    This will return true if the player won, otherwise false.
    */
    return this.towers[0].numberOfDisks == 0 && this.towers[1].numberOfDisks == 0 && this.towers[2].numberOfDisks == this.difficulty;
};

Game.prototype.isTowerEmpty = function(towerIndex) {
    return this.towers[towerIndex].disks.length == 0;
};

Game.prototype.moveDisk = function(srcTowerIndex, destTowerIndex) {
    /*
    if the move is legal, do it and return true.
    if the move is illegal, don't do it, return false.
    */
    var srcTower = this.towers[srcTowerIndex];
    var destTower = this.towers[destTowerIndex];
    var src_top = srcTower.getTopDisk();
    var dest_top = destTower.getTopDisk();
    this.numberOfMoves++;
    if (src_top && (src_top.moveToTower(destTower))) {
        srcTower.popDisk();
        destTower.pushDisk(src_top);
        return true;
    }
    return false;
};
