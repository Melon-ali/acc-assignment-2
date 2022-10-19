const Tours = require("../../models/Tours");

const getTrending = async (req, res, next) => {
  try {
    const trending = await Tours.find({}).sort("-viewCount").limit(3);
    if (!trending || trending.length == 0) {
      return res.status(400).json({ success: false, message: "no data found" });
    }
    res
      .status(200)
      .json({ success: true, message: "trending tours", data: trending });
  } catch (error) {
    next(error);
  }
};

module.exports = getTrending;
