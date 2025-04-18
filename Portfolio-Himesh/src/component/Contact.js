import React, { useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Contact({ profileImage, intervalforpp }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData); // Corrected URL here
      setStatus('Your message has been sent. Thank you!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form fields
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="whole-container" style={{ display: "flex" }}>
      {/* Left-side menu */}
      <div className="menu-container">
        <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
      </div>
      {/* Main content area */}
      <div className="content-container">
        <section id="contact" className="contact section dark-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>If you have any questions or need further information, feel free to reach out to me through any of the methods below.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">
                  {/* Add any info here (like address, email, phone, etc.) */}
                </div>
              </div>

              <div className="col-lg-7">
                <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email-field"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject-field"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">Message</label>
                      <textarea
                        name="message"
                        rows="10"
                        id="message-field"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      {status && <p>{status}</p>}
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <Link to="/" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
              <i className="bi bi-arrow-up-short"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
