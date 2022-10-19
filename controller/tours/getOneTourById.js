const { isValidObjectId } = require("mongoose");
const Tours = require("../../models/Tours");

const getOneTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Tours.findById(id);
    const incViewCount = await Tours.updateOne(
      { _id: id },
      { $inc: { viewCount: 1 } }
    );
    if (!result || !isValidObjectId(id) || !incViewCount.acknowledged) {
      return res.status(400).json({ success: false, message: "No Data Found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Get Tour By Id", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getOneTourById;
