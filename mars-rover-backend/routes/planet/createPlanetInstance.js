class Planet {
	surface = [];
	constructor(size) {
		this.size = size;
	}

	/* 
		Values of cells:
		0 -- > void
		1 --> Obstacle 
	*/

	generateSurface(x, y) {
		//Generation of the surface
		for (let i = 0; i < this.size; i++) {
			this.surface[i] = [];
			for (let j = 0; j < this.size; j++) {
				this.surface[i][j] = Math.floor(Math.random() * 2);
			}
		}

		//Placing the rover
		this.surface[y][x] = 0;

		return true;
	}

	get surface() {
		return this.surface;
	}

	set surface(value) {
		this.surface = value;
	}
}

module.exports = Planet;
