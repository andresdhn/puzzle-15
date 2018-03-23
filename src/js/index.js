
const puzzleSize = Math.pow(4, 2); 
const puzzle = document.getElementById('puzzle');


const createTiles = () => {
	for (let i=1; i<puzzleSize+1; i++){
		let tile = document.createElement('div');
		
		if (i==puzzleSize) {
			tile.classList.add('puzzle__tile', 'blank')
		}
		else {
			tile.innerHTML = i;	
			tile.classList.add('puzzle__tile',  'puzzle__tile--' + i )
		}
		
		tile.addEventListener('click', (e) => handleClick(e)); 

		puzzle.appendChild(tile); 
	}
}

const handleClick = (e) => {
	console.log(e.target)
}


createTiles();