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
            Pro Legal Institutional Arbitration Forum provides structured,
            rules-based arbitration administration through a neutral
            institutional framework designed to ensure procedural fairness,
            efficiency and reliability in dispute resolution.
          </p>

          <p className="delay-2">
            The Forum supports arbitral proceedings from commencement to
            conclusion through transparent processes, predictable timelines and
            professionally governed case management—suited for commercial,
            corporate and financial disputes.
          </p>
          <p className="delay-2">
            The Forum’s role is strictly administrative, ensuring neutrality and
            procedural discipline without interfering in the decision-making
            authority of the arbitral tribunal.
          </p>

          <div className="card-wrapper">
            <div className="card fade-up">
              <h3>Institutional Arbitration</h3>
              <p>
                Arbitrations administered under the Forum’s Rules through a
                neutral, institutionally governed process. The Forum ensures
                structured procedure, consistency and fairness, while the
                arbitral tribunal independently adjudicates the dispute.
              </p>
            </div>

            <div className="card fade-up">
              <h3>Arbitrator Appointment System</h3>
              <p>
                A transparent, panel-based arbitrator appointment mechanism
                administered by the Forum to ensure neutrality, independence
                and suitability of appointments, eliminating unilateral or
                biased selection processes.
              </p>
            </div>

            <div className="card fade-up ">
              <h3>Hybrid & Online Hearings</h3>
              <p>
                Administrative support for physical, virtual and hybrid
                hearings, including secure digital document handling, scheduling
                coordination and procedural assistance to ensure smooth conduct
                of proceedings.
              </p>
            </div>

            <div className="card fade-up ">
              <h3>Case Management System</h3>
              <p>
                End-to-end administrative support including filing, notices,
                scheduling, submissions, procedural timelines and document
                management—enabled through structured digital workflows for
                accuracy and efficiency.
              </p>
            </div>
            <div></div>

            <div className="card fade-up ">
              <h3>Compliance & Process Governance</h3>
              <p>
                Institutional oversight to ensure adherence to procedural rules,
                timelines and reporting requirements, reinforcing the
                integrity, transparency and reliability of the arbitral
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Services);
