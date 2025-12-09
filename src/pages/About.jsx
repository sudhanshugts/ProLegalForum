import Layout from "../components/Layout";
import "../styles/about.css";
import Transition from "../Transition";

function About() {
  return (
    <Layout>
      <div className="about-page">
        <div className="about-container fade-up">
          <h1>About Pro Legal Institutional Arbitration Forum</h1>

          <p className="delay-1">
            Pro Legal Institutional Arbitration Forum is envisioned as one of India’s most 
            reliable, neutral, and professionally managed platforms for arbitration-based dispute resolution.
          </p>

          <p className="delay-2">
            With a strong focus on procedural efficiency and transparency, Pro Legal Institutional Arbitration Forum is designed to meet 
            the expectations of banks, NBFCs, corporates, MSMEs, and individuals seeking fast, fair, 
            and enforceable outcomes.
          </p>

          <p className="delay-3">
            Our mission is to eliminate delays and uncertainties common in traditional dispute 
            mechanisms by introducing structured timelines, expert arbitrators, and digital workflow 
            integration.
          </p>

          <p className="delay-4">
            At Pro Legal Institutional Arbitration Forum, every case is handled with professional integrity, technologically assisted 
            processes, and compliance-driven operations—ensuring a reliable and future-ready dispute 
            resolution ecosystem for India.
          </p>
        </div>
      </div>
    </Layout>
  );
}
export default Transition(About);