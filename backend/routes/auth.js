const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 
const authMiddleware = require('../middleware/authMiddleware');


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: `User ${username} already exists` });


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: `User ${username} registered successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.get('/username', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('username');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ username: user.username });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;