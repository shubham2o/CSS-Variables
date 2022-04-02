// Mouse Events
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


var a = 0,
    b = 0;

function myLeaveFunction() {
    document.getElementById("mouseleave").innerHTML = a += 1;
}

function myOutFunction() {
    document.getElementById("mouseout").innerHTML = b += 1;
}


// HTML DOM Document documentElement
document.getElementById("docEl").innerHTML = document.documentElement.nodeName;


// setProperty() method
function mySetProperty() {
    var declaration = document.styleSheets[0].cssRules[0].style;
    var setprop = declaration.setProperty("border", "50px solid black");
}


// onchange Event
function myOnchange() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("onchangeE").innerHTML = "You selected : " + x;
}

document.getElementById("fname").addEventListener("change", myOnchangeEvent);

function myOnchangeEvent() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


// cssText Property
function myCssText() {
    var element = document.getElementsByTagName("h3")[0];
    var x = element.style.cssText;
    document.getElementById("cssText").innerHTML = x;
}

function myCssText1() {
    var x = document.getElementsByTagName("h3")[1];
    element = x.style.cssText;
    document.getElementById("cssText1").innerHTML = element;
    x.style.cssText = "color : yellow; text-decoration : underline";
    document.getElementById("cssText2").innerHTML = element;
}