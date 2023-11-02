const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
// @ desc Get goals function
// @route  GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @ desc Set goals function
// @route  POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  const data = req.body.text;
  if (!data) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: data,
  });
  res.status(200).json(goal);
});

// @ desc Update goals function
// @route  PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not Found")
    } 
    const updatedGoal  = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
  res.status(200).json(updatedGoal);
});

// @ desc Delete goals function
// @route  DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400) 
        throw new Error("Goal not found")
    }
    await goal.remove
  res.status(200).json(`Goal with id: ${req.params.id} deleted`);
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
