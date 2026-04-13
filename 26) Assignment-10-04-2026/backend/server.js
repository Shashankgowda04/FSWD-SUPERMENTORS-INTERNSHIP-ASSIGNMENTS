require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// 1. Connect to Database
connectDB();

// 2. Middleware
app.use(cors()); // Critical for the 26th assignment connection
app.use(express.json());

// 3. Debug Logs (After initialization)
console.log("--- Server Debugging ---");
console.log("authRoutes status:", typeof authRoutes); 

// 4. Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Backend API is running for Assignment 26...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});