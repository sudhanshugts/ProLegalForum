import Layout from "../components/Layout";
import "../styles/services.css";
import Transition from "../Transition";

function Services() {
  return (
    <Layout>
      <div className="services-page">
        <div className="services-container fade-up">

          <h1>Our Services</h1>

          <p className="delay-1">
            Pro Legal Institutional Arbitration Forum offers structured, rules-based, 
            and technology-enabled arbitration services designed to bring efficiency, 
            transparency, and neutrality in commercial, corporate, and financial disputes.
          </p>

          <p className="delay-2">
            Our platform ensures predictable timelines, digital case management, expert 
            arbitrator support, and fully compliant workflows built for modern dispute 
            resolution needs.
          </p>

          <div className="card-wrapper">

            <div className="card fade-up delay-3">
              <h3>Institutional Arbitration</h3>
              <p>
                Neutral, rules-driven arbitration conducted under structured procedures, 
                ensuring fairness, efficiency, and enforceability for all parties.
              </p>
            </div>

            <div className="card fade-up delay-4">
              <h3>Arbitrator Appointment System</h3>
              <p>
                A clear and transparent panel-based selection process with automated 
                allocation to eliminate bias and ensure expert handling of disputes.
              </p>
            </div>

            <div className="card fade-up delay-5">
              <h3>Hybrid & Online Hearings</h3>
              <p>
                Seamless online and hybrid hearings supported by secure digital evidence 
                management, real-time documentation and smooth virtual coordination.
              </p>
            </div>

            <div className="card fade-up delay-6">
              <h3>Case Management System</h3>
              <p>
                End-to-end scheduling, notice generation, submissions, timelines and 
                document tracking—fully digitized for speed and accuracy.
              </p>
            </div>

            <div className="card fade-up delay-7">
              <h3>Compliance & Process Governance</h3>
              <p>
                Strong adherence to procedural rules, transparent reporting, and 
                governance-driven frameworks for safe, reliable arbitration proceedings.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Services);