
/*
    This will contain the implementation of the Disk object
*/

function Disk(tower, width, order) {
    /*
    The disk object will the attributes, tower, width and order.
    and the methods, draw moveToTower, isTop,
    */
    var _tower = tower;
    var _order = order;
    // your code...
    Object.defineProperties(this, {
        tower: {
            get: function() {
                return _tower;
            },
            set: function(newTower) {
                _tower = newTower;
            }
        },
        width: {
            value: width
        },
        order: {
            get: function() {
                return _order;
            },
            set: function(newOrder) {
                _order = newOrder;
            }
        }
    });
}

Disk.prototype.draw = function() {
    /*
    this will manipulate the DOM to draw a disk element, and set the DOM attribute to that element
    */

    // your code ....
};

Disk.prototype.moveToTower = function(destination) {
    /*
    the desticnation is a tower object, this check if the transfer is valid based on the game rules, and do the transfer if it's valid, return a boolean, true to indicate successfull transfer, false to indicate illegal transfer.
    */
};

Disk.prototype.isTop = function() {
    /*
    This will return true if the disk is at the top of tower, otherwise retrun false.
    */
};
