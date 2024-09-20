// Set up environment variables
require('dotenv').config(); 

// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Set up express
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Parse JSON in the request body
app.use(express.json());

// Connect to MongoDB
const db = process.env.DB_URI;
mongoose.connect(db);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (error) => {
    console.log('Error connecting to MongoDB:', error);
});

// Set up routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
