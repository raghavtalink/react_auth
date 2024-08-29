require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = process.env.DB_URI;
mongoose.connect(db);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});