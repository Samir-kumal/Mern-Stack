const asyncHandler = require("express-async-handler");
// @ desc Get goals function
// @route  GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

// @ desc Set goals function
// @route  POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  const data = req.body.header;
  if (!data) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  console.log(data);
  res.status(200).json({
    message: "Set Goal",
  });
});

// @ desc Update goals function
// @route  PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goals ${req.params.id}`,
  });
});

// @ desc Delete goals function
// @route  DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete goals ${req.params.id}`,
  });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
