
const puzzleSize = 4; 
const puzzle = document.getElementById('puzzle__container');

const injectTiles = () => {
	let totalTiles = Math.pow(puzzleSize, 2); 
	let tiles = ''; 
	let i = 1;
	while (i<totalTiles){
		tiles += `
			<div class="puzzle__tile">
				<p class="puzzle__tile-number">${ i }</p>
			</div>
		`;
		i++; 
	}

	return tiles;
}

puzzle.innerHTML = injectTiles(); 