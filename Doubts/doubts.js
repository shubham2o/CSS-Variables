// onmousemove Event
function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + ", " + y + ")";
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}


var x = 0,
    y = 0,
    z = 0;

function myMoveFunction() {
    document.getElementById("mousemove").innerHTML = z += 1;
}

function myEnterFunction() {
    document.getElementById("mouseenter").innerHTML = x += 1;
}

function myOverFunction() {
    document.getElementById("mouseover").innerHTML = y += 1;
}