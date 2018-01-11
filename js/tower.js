/*
    This will contain the implementation of the tower object
*/

function Tower(position, numberOfDisks) {
    /*
    This is a tower object, it will have the attributes: position, disks (array of disks), number of disks
    and the methods: pushDisk, popDisk and getTopDisk
    */

    // your code...
    var _disks = [];
    var _numberOfDisks = numberOfDisks;
    Object.defineProperties(this, {
        position: {
            value: position
        },
        numberOfDisks: {
            get: function() {
                return _numberOfDisks;
            }
        },
        disks: {
            get: function() {
                return _disks.slice();
            }
        }
    });
    this.pushDisk = function(disk) {
        /*
        push disk to the tower
        */
        _disks.push(disk);
        _numberOfDisks++;
        return _disks.length;
    };
    this.popDisk = function(disk) {
        /*
        pops a disk from the tower
        */
        _numberOfDisks--;
        return _disks.pop();
    };
    for (var i = _numberOfDisks; i > 0; i--) {
        _disks.push(new Disk(this, i));
    }
}

Tower.prototype.getTopDisk = function() {
    /*
    returns the top disk of the tower and null if it's empty
    */
    var topDisk = null;
    var numberOfDisks = this.numberOfDisks;
    if (numberOfDisks > 0) {
        topDisk = this.disks[numberOfDisks - 1];
    }
    return topDisk;
};
