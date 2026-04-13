require('dotenv').config(); // Add this at the very top
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // This will help us debug. If it prints "undefined", the file isn't found.
        console.log("Checking URI:", process.env.MONGO_URI); 

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;