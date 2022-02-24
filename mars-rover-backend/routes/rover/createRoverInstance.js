class Rover {
	constructor(x, y, direction, planet) {
		//X position value
		this.x = x;
		//Y position value
		this.y = y;
		//Rover's direction value
		this.direction = direction;
		//Rover's status value
		this.status = "Ready";
		//Rover's check collision
		this.collision = false;
		//Planet object
		this.planet = planet;
	}

	//Setter methods
	set x(value) {
		this._x = value;
	}

	set y(value) {
		this._y = value;
	}

	set direction(value) {
		this._direction = value;
	}

	set status(value) {
		this._status = value;
	}

	set collision(value) {
		this._collision = value;
	}

	//Getter methods
	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

	get direction() {
		return this._direction;
	}

	get status() {
		return this._status;
	}

	get collision() {
		return this._collision;
	}

	/* 
		Movement values:

		FW --> Forward
		BW --> Backward
		TL --> Turn left
		TR --> Turn right
	*/

	chooseMovement(movements) {
		for (let i = 0; i < movements.length && !this.collision; i++) {
			switch (movements[i]) {
				case "FW":
					this.moveForward();
					break;
				case "BW":
					this.moveBackward();
					break;
				case "TL":
					this.turnLeft();
					break;
				case "TR":
					this.turnRight();
					break;
			}
		}

		if (this.collision) this.status = "stuck";
	}

	/* 
		FW movements:

		if rover's direction = 0 or 2, move it on Y axis
		else move it on X axis

		if rover's direction = 0 or 3, decrease the axis value
		else increase the axis value

		check the axis value with nextMove methods
	*/

	moveForward() {
		switch (this.direction) {
			case 0:
				if (this.planet.surface[this.nextMove(this.y - 1)][this.x] != 1) {
					this.y = this.nextMove(this.y - 1);
				} else {
					this.collision = true;
				}
				break;
			case 1:
				console.log(this.x + 1);
				if (this.planet.surface[this.y][this.nextMove(this.x + 1)] != 1) {
					this.x = this.nextMove(this.x + 1);
				} else {
					this.collision = true;
				}
				break;
			case 2:
				if (this.planet.surface[this.nextMove(this.y + 1)][this.x] != 1) {
					this.y = this.nextMove(this.y + 1);
				} else {
					this.collision = true;
				}
				break;
			case 3:
				if (this.planet.surface[this.y][this.nextMove(this.x - 1)] != 1) {
					this.x = this.nextMove(this.x - 1);
				} else {
					this.collision = true;
				}
				break;
		}
	}

	/* 
		FW movements:

		if rover's direction = 0 or 2, move it on Y axis
		else move it on X axis

		if rover's direction = 0 or 3, increase the axis value
		else decrease the axis value

		check the axis value with nextMove methods
	*/

	moveBackward() {
		switch (this.direction) {
			case 0:
				if (this.planet.surface[this.nextMove(this.y + 1)][this.x] != 1) {
					this.y++;
					if (this.y == this.planet.size) {
						this.y = 0;
					}
				} else {
					this.collision = true;
				}
				break;
			case 1:
				if (this.planet.surface[this.y][this.nextMove(this.x - 1)] != 1) {
					this.x--;
					if (this.x < 0) {
						this.x = this.planet.size--;
					}
				} else {
					this.collision = true;
				}
				break;
			case 2:
				if (this.planet.surface[this.nextMove(this.y - 1)][this.x] != 1) {
					this.y--;
					if (this.y < 0) {
						this.y = this.planet.size--;
					}
				} else {
					this.collision = true;
				}
				break;
			case 3:
				if (this.planet.surface[this.y][this.nextMove(this.x + 1)] != 1) {
					this.x++;
					if (this.x == this.planet.size) {
						this.x = 0;
					}
				} else {
					this.collision = true;
				}
				break;
		}
	}

	/*	
		Checking value of the X/Y position. If it is less then 0, set it with (size - 1) value, 
		if it is equals size value, set it with 0 else return the value
	*/
	nextMove(pos) {
		if (pos == this.planet.size) return 0;
		else if (pos < 0) return this.planet.size - 1;
		else return pos;
	}

	/* 
		Direction values:
		
		0 --> North
		1 --> East
		2 --> South
		3 --> West
	*/

	turnLeft() {
		this.direction--;

		if (this.direction < 0) {
			this.direction = 3;
		}
	}

	turnRight() {
		this.direction++;

		if (this.direction > 3) {
			this.direction = 0;
		}
	}
}

module.exports = Rover;
