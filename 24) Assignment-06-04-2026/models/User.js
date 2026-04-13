const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// MODERN ASYNC HOOK (No 'next' used)
userSchema.pre('save', async function () {
    // Only hash if password is new or changed
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    // In modern Mongoose async hooks, you don't need to call next()
    // Returning or finishing the function is enough.
});

module.exports = mongoose.model('User', userSchema);