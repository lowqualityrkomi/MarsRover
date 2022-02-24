module.exports = (req, res, next) => {
	try {
		let x = parseInt(req.body.x),
			y = parseInt(req.body.y),
			size = parseInt(req.body.size),
			direction = parseInt(req.body.direction);

		if (x >= 0 && x < size && y >= 0 && y < size && direction >= 0 && direction < 4) {
			return next();
		} else {
			throw new Error("Bad request");
		}
	} catch (e) {
		console.log(e);
		next(e);
	}
};
