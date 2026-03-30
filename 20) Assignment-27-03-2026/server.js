const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected for Task API"))
    .catch(err => console.log(err));

app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));