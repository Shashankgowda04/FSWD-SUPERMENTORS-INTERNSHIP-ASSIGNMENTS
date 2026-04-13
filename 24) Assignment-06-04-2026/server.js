require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Use your db.js from Assignment 23

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT, () => console.log(`Auth Server running on ${process.env.PORT}`));