const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

const app = express();

// Body parser (to read JSON data)
app.use(express.json());

// Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('Connection Error:', err));

// Mount routers
app.use('/api/books', require('./routes/bookroutes'));
app.use('/api/authors', require('./routes/authorRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
