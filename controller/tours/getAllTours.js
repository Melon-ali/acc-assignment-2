const Tours = require("../../models/Tours");

const getAllTours = async (req, res, next) => {
  try {
    const fields = req.query?.fields?.split(",")?.join(" ") || "";
    const sort = req.query?.sort?.split(",")?.join(" ") || "";
    const { page = 1, limit = 0 } = req.query;

    const tours = await Tours.find()
      .select(fields)
      .skip((+page - 1) * +limit)
      .limit(+limit)
      .sort(sort);
    if (!tours) {
      res.status(400).json({ success: false, message: "something is wrong" });
    }
    res
      .status(200)
      .json({ success: true, message: "get all tours", data: tours });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllTours;
