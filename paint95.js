var createMain = document.createElement("DIV");
div.setAttribute()

var grid = document.getElementById("mainGrid");
var width = 100;

var colorBar = document.getElementById("colorBar");
var buttons = colorBar.getElementsByTagName("button")
for (var i = 0; i <  buttons.length; i++){
    buttons[i].addEventListener("click", selectColor)
}

var enable = false;
function changeEnable() {
    if (enable){
        enable=false;
    } else {
        enable=true;
    }
}

for (var x=0; x <= width; x++) {
    for (var y=0; y <= width; y++) {
        var cell = document.createElement("DIV");
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
        cell.addEventListener("mousedown", changeEnable);
        cell.addEventListener("mouseover", changeColor);
        cell.addEventListener("mouseup", changeEnable);
    }
}

var br = document.createElement("BR");
grid.appendChild(br);

function changeColor() {
    if(enable){
        var selectedColor = document.getElementsByClassName("selected")[0];
        this.style.backgroundColor = selectedColor.id;
    }
}

function selectColor(){
    var colorBar = document.getElementById("colorBar");
    var buttons = colorBar.getElementsByTagName("button")
    for (var i = 0; i <  buttons.length; i++ ){
        buttons[i].setAttribute("class", "");
    }
    this.setAttribute("class", "selected");
}

function clear() {

}