const router = require("express").Router();
const cors = require("cors");

const Planet = require("./planet/createPlanetInstance.js");
const Rover = require("./rover/createRoverInstance.js");
const checkInput = require("../middlewares/checkInput.js");
const checkMovement = require("../middlewares/checkMovement.js");

var planet, rover;

router.use(cors());

router.post("/setup", checkInput, async (req, res, next) => {
	try {
		let x = parseInt(req.body.x),
			y = parseInt(req.body.y),
			size = parseInt(req.body.size),
			direction = parseInt(req.body.direction);

		//Creating planet
		planet = new Planet(size);

		//Generating surface. If return is true, create rover and response with rover data
		if (planet.generateSurface(x, y)) {
			rover = new Rover(x, y, direction, planet);
			res.status(200).json(rover);
		}
	} catch (e) {
		next(e);
	}
});

router.post("/move", checkMovement, async (req, res, next) => {
	try {
		let movements = req.body.movements;

		//Sendig to rover all movements to do
		rover.chooseMovement(movements);
		//Response with rover data
		res.status(200).json(rover);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
