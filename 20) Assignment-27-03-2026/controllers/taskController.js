const Task = require('../models/Task');

// CREATE: Add a task
exports.createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
};

// READ: Get all tasks
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
};

// UPDATE: Update task by ID
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
};

// DELETE: Remove task by ID
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task Deleted" });
};