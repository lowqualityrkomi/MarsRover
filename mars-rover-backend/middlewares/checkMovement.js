module.exports = (req, res, next) => {
	try {
		let movements = req.body.movements,
			flag = false;

		for (let i = 0; i < movements.length && !flag; i++) {
			if (movements[i] != "FW" && movements[i] != "BW" && movements[i] != "TL" && movements[i] != "TR") {
				flag = true;
			}
		}

		if (flag) {
			throw new Error("Bad request");
		} else {
			return next();
		}
	} catch (e) {
		next(e);
	}
};
