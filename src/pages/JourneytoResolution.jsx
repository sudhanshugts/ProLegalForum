import Layout from "../components/Layout";
import "../styles/journeytoresolution.css";
import Transition from "../Transition";

function JourneytoResolution() {
  return (
    <Layout>
      <div className="journey-page">
        <div className="journey-container">

          <h1 className="journey-title">Journey to Resolution</h1>

          <p className="journey-description delay-1">
            The Pro Legal Institutional Arbitration Forum is committed to offering a
            structured, transparent, and efficient pathway to resolving disputes
            with professionalism and judicial integrity.
          </p>

          <p className="journey-description delay-2">
            Our upcoming **Journey to Resolution** section will present a complete
            step-by-step guide that simplifies the entire arbitration lifecycle —
            from filing to award delivery — designed for clarity, fairness, and ease of use.
          </p>

          {/* Work in Progress Card */}
          <div className="journey-wip-card delay-3">
            <h3>Work in Progress.....</h3>
            <p>
              This feature is currently being curated and will be available soon.
              Stay tuned for an enhanced, informative, and streamlined experience.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Transition(JourneytoResolution);
