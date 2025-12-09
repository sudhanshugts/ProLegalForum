import Layout from "../components/Layout";
import "../styles/arbitrators.css";
import Transition from "../Transition";

function Arbitrators() {
  return (
    <Layout>
      <div className="process-page">
        <div className="process-container fade-container">

          <h1 className="fade-title">Arbitrators</h1>

          <p className="fade-subtitle">
            At the Pro Legal Institutional Arbitration Forum, we are privileged to be guided 
            by a highly respected panel of arbitrators comprising:
          </p>

          <ul className="arbitrators-list fade-step delay-1">
            <li>Former Judges of High Courts</li>
            <li>Former District Court Judges and Judicial Officers</li>
            <li>Senior Legal Academics and Scholars</li>
            <li>Seasoned Advocates with over 10 years of professional experience</li>
          </ul>

          <p className="fade-subtitle fade-step delay-2">
            Our arbitrators are esteemed legal professionals recognized for their judicial temperament, 
            neutrality, integrity, and deep expertise across diverse areas of law. Their unwavering 
            commitment to fairness and efficiency ensures that every dispute is handled with the 
            highest standards of justice and professionalism.
          </p>

        </div>
      </div>
    </Layout>
  );
}

export default Transition(Arbitrators);
