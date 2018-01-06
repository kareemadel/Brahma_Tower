/*
    This will contain the implementation of the tower object
*/

function Tower(position) {
    /*
    This is a tower object, it will have the attributes: position, dists (array of disks)
    and the methods: drawDisks, addDisk, removeDisk and getTopDisk
    */

    // your code...
}

Tower.prototype.drawDisks = function() {
    /*
    draw the disks of the tower
    */

    // your code ...
};

Tower.prototype.add_disk = function(disk) {
    /*
    add a disk to the tower
    */
};

Tower.prototype.remove_disk = function(disk) {
    /*
    remove a disk from the tower, return 1 if removed successfully, 0 if the tower is empty, 2 if the this specific disk isn't on that tower and 3 if it's there but illegal to remove
    */
};

Tower.prototype.getTopDisk = function() {
    /*
    returns the top disk of the tower and null if it's empty
    */
};
