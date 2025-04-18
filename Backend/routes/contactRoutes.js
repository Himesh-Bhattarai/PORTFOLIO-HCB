const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// POST request to handle form submission
router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        // Save the contact data into the database
        await newContact.save();

        // Send a success response
        res.status(200).json({ message: 'Your message has been saved successfully.' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Failed to save message. Please try again later.' });
    }
});

module.exports = router;
