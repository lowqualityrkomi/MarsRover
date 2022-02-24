//Importing packages
const express = require("express");
const router = require("./routes/app.js");
const errorHandler = require("./errors/createErrorHandler.js");

//Initialization
const app = express();

const PORT = 6990;

app.use(express.json());
app.use("/", router);
app.use(errorHandler); //This enables the use of next(e); inside of the catch for the routers

//Check server status on start
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
