require('dotenv').config(); // Load variables FIRST
const express = require('express');
const connectDB = require('./config/db'); // Now it can see the variables

const app = express();
app.use(express.json());

// Connect to Database
connectDB();

app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));