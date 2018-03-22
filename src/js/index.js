

var newOne = () => {
 console.log("Hello World..!");
}


class Puzzle {
	constructor(name) {
      this.name = name;
    }
    
    get Name() {
      return this.name;
    }
    
    set Name(name) {
      this.name = name;
    }
}

let puzzle = new Puzzle('John Snow'); 
console.log(puzzle.Name); 