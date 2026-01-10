import Layout from "../components/Layout";
import "../styles/cases.css";
import Transition from "../Transition";

function Cases() {
  return (
    <Layout>
      <div className="cases-page">
        <div className="cases-container">
          <h1>Cases</h1>

          <p>
            Arbitrations administered by Pro Legal Institutional Arbitration
            Forum are registered, categorised, and monitored through a
            structured institutional framework designed to ensure
            confidentiality, procedural integrity, and transparency.
          </p>

          <p>
            In keeping with best practices in institutional arbitration, the
            Forum maintains detailed internal records of all matters
            administered under its Rules. Case-specific information is disclosed
            only in an anonymised and compliant manner, having due regard to
            confidentiality obligations and applicable legal standards.
          </p>
          <p>
            This section will, in due course, provide access to anonymised case
            references, broad dispute categories, and procedural status
            indicators, without disclosing the identity of parties or sensitive
            information.
          </p>
          <p>
            Until such time, all case administration continues to be conducted
            through secure institutional systems in accordance with the Forum’s
            Rules and governance framework.
          </p>
          <p>
            Confidentiality of proceedings remains central to the arbitral
            process administered by the Forum.
          </p>

          <div className="placeholder-box">
            <h2>Case Listings.....</h2>
            <p>
              Anonymised case information will be published in accordance with
              institutional policy and applicable confidentiality requirements.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Cases);
