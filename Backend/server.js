const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const contactRoutes = require('./routes/contactRoutes'); // Import the contact routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config(); // Load environment variables

// Connect to MongoDB
connectDB();

// Use the contact route for POST request
app.use('/api', contactRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
