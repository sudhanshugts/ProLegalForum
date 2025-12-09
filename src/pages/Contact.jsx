import Layout from "../components/Layout";
import "../styles/contact.css";

import Transition from "../Transition";

function Contact() {
  return (
    <Layout>
      <div className="contact-page">
        <div className="contact-container">
          <h1>Contact Us</h1>

          <p className="intro-text">
            For inquiries related to arbitration, case filing, scheduling, or
            institutional support, you may reach out to us through the following
            communication channels.
          </p>

          <div className="contact-info">
            <p className="contact-item">
              <span className="label">Email:</span> Prolegal@pliaf.com
            </p>

            {/* <p className="contact-item">
              <span className="label">Phone:</span> +91 9876543210
            </p> */}

            <p className="contact-item">
              <span className="label">Address:</span> 202-203 Sarthik 2, Opp.
              Rajpath Club, S.G. Highway, Satellite, Ahmedabad-380054
            </p>
          </div>

          <p className="small-note">
            Our support team is available Monday to Saturday, 10:00 AM to 6:00
            PM.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Contact);
