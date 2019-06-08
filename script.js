var notes = ["F#/Gb", "F", "E", "D#", "D", "C#", "C", "B", "Bb", "A", "Ab", "G", "F#/Gb"]


function makeNoteBoxes() {
    var noteString = ""
    for (i = 0; i < 13; i++) {
        var noteToDisplay = notes[i]
        var div = `<div class="note-boxes">${noteToDisplay}</div>`;
        noteString += div;
    }
    console.log(noteString);
    return noteString;
}

document.getElementById("note-name-boxes").innerHTML = makeNoteBoxes();
/*
<div class="row">
     <button>
     <button>
     <button>
</div>

vs.

     <button>
     <button>
     <button>
<br />
*/

function createRow(numButtons) {
    var row = "<div class='row'>"  //this is the start of the row
    for (var i = 1; i <= numButtons; i++) {
        var button = "<button class='grid-button-default'>" + "</button>"
        row = row + button;
    }
    var greyBoxGrid = document.getElementById("grey-box")
    greyBoxGrid.innerHTML += row + "<br/>" + "</div>" //this is the end
}

var numRows = 13
var numColumns = 8

for (var i = 1; i <= numRows; i++) {
    createRow(numColumns);
}


var slider = document.getElementById("myRange");
var output = document.getElementById("volume-value")
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}



