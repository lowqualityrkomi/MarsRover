module.exports = (err, req, res, next) => {
	switch (err) {
		case "Bad request":
			res.sendStatus(400);
			break;
		default:
			res.sendStatus(500);
			break;
	}

	next();
};
