const express = require("express");
const app = express();
const cors = require("cors");
const tourstRouter = require("./routes/v1/tours.router");
const tourtRouter = require("./routes/v1/tour.router");



app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is Working");
});

app.use("/tours", tourstRouter);
app.use("/tour", tourtRouter);

module.exports = app;