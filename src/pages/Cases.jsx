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
            The Pro Legal Institutional Arbitration Forum (PLIAF) is currently
            in the process of registering, categorising, and systemising all
            arbitration matters handled under the institution.
          </p>

          <p>
            As part of our commitment to transparency and procedural integrity,
            a structured case-listing interface will be released soon. This
            section will display anonymised case summaries, categories, and
            status updates in a compliant and secure manner.
          </p>

          <div className="placeholder-box">
            <h2>Work in Progress.....</h2>
            <p>
              Case information will be made available here shortly.  
              Our team is actively updating the system.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Transition(Cases);
