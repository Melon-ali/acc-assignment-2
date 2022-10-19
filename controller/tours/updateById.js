const { isValidObjectId } = require("mongoose");
const Tours = require("../../models/Tours");

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await Tours.updateOne(
      { _id: id },
      { $set: data },
      {
        runValidators: true,
      }
    );
    if (!result.acknowledged || !isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "No Data Updated" });
    }
    res.status(200).json({ success: true, message: "Tour Updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
