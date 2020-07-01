//def global variables
let canvas = document.getElementById('pixelCanvas');
let size = document.getElementById('sizePicker');

//def makeGrid function to create grid according to height & width
function makeGrid() {
    let height = document.getElementById ('inputHeight').value;
    let width = document.getElementById ('inputWidth').value;

    //ensuring the grid starts empty even after hitting submit again
    canvas.innerHTML = '';

    //using a for loop to create rows and cols via the tr and td tags
    for (var i = 1; i <= height; i++) {
        let rows =  document.createElement("tr");
        for (var j = 1; j <= width; j++) {
            let cols = document.createElement("td");
            rows.appendChild(cols);
            canvas.appendChild(rows);
            
            //adding color to the grid via event listener adjusting the color
            cols.addEventListener('click', function(event) {
                let color = document.getElementById ('colorPicker').value;
                event.target.style.backgroundColor = color;
            });
        }
    }
}

//calls makeGrid and resets both color and grid once submit is clicked again.
makeGrid();
size.addEventListener('submit', function(click) {
    click.preventDefault();
    makeGrid();
    document.getElementById('colorPicker').value = '#000000';
});