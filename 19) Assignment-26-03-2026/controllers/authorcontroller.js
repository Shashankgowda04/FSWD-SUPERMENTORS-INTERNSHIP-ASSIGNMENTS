const Author = require('../models/author');
exports.getAuthors = async (req, res) => {
    const authors = await Author.find();
    res.status(200).json({ success: true, data: authors });
};
exports.createAuthor = async (req, res) => {
    const author = await Author.create(req.body);
    res.status(201).json({ success: true, data: author });
};