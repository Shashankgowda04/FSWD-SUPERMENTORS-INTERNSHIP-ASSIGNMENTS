const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Please add a book title'] 
    },
    author: { 
        type: String, 
        required: [true, 'Please add an author'] 
    },
    genre: String,
    year: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);