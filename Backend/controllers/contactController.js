const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');  // Import the Contact model

const sendContactEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Save the contact message to MongoDB
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Set up the email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,  // Use SSL/TLS
        });


        // Set up the email options
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,  // Your email address
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent and data saved successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Failed to send email or save data' });
    }
};

module.exports = { sendContactEmail };
