
/*
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */
 (()=>{

 	let sizeInput = document.getElementById('psize')
	let p15 = new puzzle
	
	const handleSizeChange= () => {
		p15.initPuzzle(sizeVal())
	}

	const sizeVal = () =>{
		return parseInt(sizeInput.value)
	}

	p15.initPuzzle(sizeVal())
	sizeInput.addEventListener('change', handleSizeChange)

})()