var numRows = 13
var numColumns = 8
var grid = document.getElementById("grid")

function createRow(numButtons) {
    var row = "<div class='row'>"
    for (var i = 1; i <= numButtons; i++) {
        var button = "<button onclick='changeButtonColor()'class='grid-button-default'>" + "</button>"
        row = row + button;
    }
    grid.innerHTML += row + "<br/>" + "</div>"
}

for (var i = 1; i <= numRows; i++) {
    createRow(numColumns);
}

function changeButtonColor() {
    console.log("blue")
}





