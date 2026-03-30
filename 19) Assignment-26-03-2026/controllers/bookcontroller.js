const Book = require('../models/book');

// @desc    Get all books
// @route   GET /api/books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, count: books.length, data: books });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Create new book
// @route   POST /api/books
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, data: book });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};