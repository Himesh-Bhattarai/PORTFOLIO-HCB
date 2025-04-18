const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// MongoDB URI (ensure it's correctly being fetched from the environment variables)
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async () => {
    try {
        if (!mongoURI) {
            // Ensure the URI is available before attempting the connection
            console.error('MongoDB URI is missing!');
            process.exit(1); // Stop the app if URI is missing
        }
        // Establish MongoDB connection
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process if unable to connect
    }
};

module.exports = connectDB;
