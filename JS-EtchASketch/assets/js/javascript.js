//Global.
var gridSize = 16;
var color = 'black'
var i = 0;
var j = 0;
const container = document.querySelector('.container');

//Call the function to create the grid.
createGrid(gridSize); 
function createGrid(gridSize) {
	for (i = 1; i <= gridSize; i++) { //Loop through.
		for (j = 0; j < gridSize; j++) {
			var colSize = 512 / gridSize;
			let cols = document.createElement('div');
			cols.className = 'col';
			cols.setAttribute('style', 'height:' + colSize + 'px;' + 'width:' + colSize + 'px;')
			container.appendChild(cols);
			cols.addEventListener('mouseover', (e) => {
				e.target.style.backgroundColor = 'black';
			});
		}
	}
}

//Clear the grid.
function cls() {
	while (container.firstChild) {
		container.removeChild(container.lastChild)
	}
}

//Ask the grid.
function promptGrid() {
	gridSize = window.prompt('Please enter the size of the grid');
	cls();
	createGrid(gridSize);
}

//Colors random to Rainbow.
function randomColor(){
	var r, g, b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

//Give fucntionality to Rainbow button.
function rainbowColor(){
	var col = document.querySelectorAll('.col');
	col.forEach((cols) => {
		cols.addEventListener('mouseover', (e) => {
			cols.style.backgroundColor = randomColor();
		});
	});
}