
/*
    This will contain the implementation of the Disk object
*/

function Disk(tower, width, colour, height) {
    /*
    The disk object will the attributes, DOM reference tower, width, color and height.
    and the methods, draw moveToTower, isTop,
    */

    // your code...
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
