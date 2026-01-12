import Layout from "../components/Layout";
import "../styles/contact.css";
import Transition from "../Transition";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Form Data:", formData);
  };

  return (
    <Layout>
      <div className="contact-page fadeup">
        <div className="contact-container">
          <h1>Contact Us</h1>

          <p className="intro-text">
            For inquiries related to arbitration, case filing, scheduling, or
            institutional support, you may reach out to us through the following
            communication channels.
          </p>

          <div className="contact-info">
            <p className="contact-item">
              <span className="label">Email:</span> Registrar@prolegalforum.com
            </p>

            <p className="contact-item">
              <span className="label">Mobile:</span>
              +91 9978787878
            </p>

            <p className="contact-item">
              <span className="label">Address:</span> 202-203 Sarthik 2, Opp.
              Rajpath Club, S.G. Highway, Satellite, Ahmedabad-380054
            </p>
          </div>

          <p className="small-note">
            Our support team is available Monday to Saturday, 10:00 AM to 6:00
            PM.
          </p>

          {/* Inquiry Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Inquiry Form</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Contact);
