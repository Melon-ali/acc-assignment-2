const Tours = require("../../models/Tours");

const getCheapest = async (req, res, next) => {
  try {
    const cheapest = await Tours.find().sort("cost").limit(3);
    res.send(cheapest);
  } catch (error) {
    next(error);
  }
};

module.exports = getCheapest;
