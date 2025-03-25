const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new task
router.post("/tasks", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Task text is required" });
  }

  try {
    const newTask = new Task({ text, completed: false });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update task status (toggle completed)
router.put("/tasks/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { completed } = req.body;
  
      // Update the task in MongoDB
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { completed },  // Update only the completed field
        { new: true }   // Return the updated document
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.json(updatedTask);  // Send back updated task
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
// Delete a task
router.delete("/tasks/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;

