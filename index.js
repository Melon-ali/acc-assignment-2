const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

// database connection

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DataBase Connected".green.bold);
  });

app.listen(port, () => {
    console.log(`Port Connected..${port}`.red.bold);
});

app.use(errorHandler);