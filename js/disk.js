
/*
    This will contain the implementation of the Disk object
*/
////////////////////////////////proposed structure//////////////////////////
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

////////////////////////////initial disk drawing/////////////////////////////////
var stake1=document.getElementById("stake1")
var stake2=document.getElementById("stake2")
var stake3=document.getElementById("stake3")

var t1=document.getElementById("tower-1")
var t2=document.getElementById("tower-2")
var t3=document.getElementById("tower-3")
var diskOnTheFly=null;
var stakePulled;
var stakePushed;

function draw_disks()
{
    var NoOfDisks;
}

Object.defineProperty(draw_disks, 'NumOD',
{
    get: function(){return NoOfDisks},
    set: function(N){NoOfDisks=N},
});

draw_disks.prototype.putdisks=function()
{
    for (var i = 6-this.NoOfDisks+1; i <= 6; i++) 
    {
        var child_disk=document.createElement('div')
        var attr=document.createAttribute('id')
        attr.value="disk"+i;
        child_disk.setAttributeNode(attr)
        stake1.appendChild(child_disk)
    }
}
//main://
var x=new draw_disks();
x.NoOfDisks=5;
x.putdisks();

///////////////////////////////////////////////////////////////////////////////
//////////////////////Procedural trial///////////////////////////////////
var w;
var flag=1;

function play()
{
    if(flag==1){
    t1.addEventListener('click',detectstake1);
    //t1.addEventListener('click',select_disk);
    t2.addEventListener('click',detectstake2);
    //t2.addEventListener('click',select_disk);
    t3.addEventListener('click',detectstake3);
    //t3.addEventListener('click',select_disk);
    }
}

function detectstake1(){ if (stake1.childNodes[1]!=null && flag==1){stakePulled=stake1; select_disk()} }
function detectstake2(){ if (stake2.childNodes[1]!=null && flag==1){stakePulled=stake2; select_disk()} }
function detectstake3(){ if (stake3.childNodes[1]!=null && flag==1){stakePulled=stake3; select_disk()} }

function select_disk()
{
    diskOnTheFly=stakePulled.childNodes[1];
    if (stakePulled.childNodes[1]!=null)
    { 
        diskOnTheFly.style.backgroundColor='gray';
        pop_disk();
    }
}

function pop_disk()
{ 
    flag=0; //to avoid previous event listeners
    t2.addEventListener('click', push_to2);
    t3.addEventListener('click', push_to3);
}

function push_to2()
{
    if (diskOnTheFly!=null)
    {
    console.log("pop_disk");
    stake2.insertBefore(diskOnTheFly, stake2.childNodes[1]);
    diskOnTheFly.style.backgroundColor='white';
    flag=1;
    }
    diskOnTheFly=null;
}

function push_to3()
{
    if (diskOnTheFly!=null)
    {
    stake3.insertBefore(diskOnTheFly, stake3.childNodes[1]);
    diskOnTheFly.style.backgroundColor='white';
    flag=1;
    }
    diskOnTheFly=null;
}

//main:
play();









