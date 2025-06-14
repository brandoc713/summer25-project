// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Basic test route
// Simple GET route
app.get('/', (req,res) => {
    res.json({ message: "Thessi Platform Backend Running!"});
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});