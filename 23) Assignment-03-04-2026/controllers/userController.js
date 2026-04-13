const User = require('../models/User');

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ message: "User Added", newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted" });
};