import Layout from "../components/Layout";
import "../styles/blog.css";
import Transition from "../Transition";

function Blog() {
  return (
    <Layout>
      <div className="blog-page fadeup">
        <div className="blog-container">

          <h1 className="blog-title">Our Blog</h1>

          {/* SECTION 1 */}
          <div className="blog-section">
            <h2 style={{textAlign:"center"}}>How ADR Strengthens the Litigation Framework</h2>

            <p>
              Litigation remains the cornerstone of dispute resolution.
              However, increasing caseloads and procedural complexity have
              placed sustained pressure on courts and litigants alike.
            </p>

            <ul className="blog-list">
              <li>ADR operates within a legally recognised judicial framework</li>
              <li>Courts support ADR through referrals and enforcement</li>
              <li>Arbitration enables courts to focus on adjudicatory matters</li>
              <li>Defined timelines ensure procedural efficiency</li>
              <li>Subject-matter expertise improves outcome quality</li>
            </ul>

            <p>
              ADR does not replace litigation. It complements the judicial
              process by reducing procedural burden while maintaining legal
              rigour and enforceability.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="blog-section">
            <h2 style={{textAlign:"center"}}>ADR as a Complement to the Judicial Process</h2>

            <p>
              The effectiveness of dispute resolution depends on structured
              mechanisms that support judicial efficiency.
            </p>

            <ol className="blog-steps">
              <li>
                <strong>Institutional Framework</strong>
                <span>
                  Arbitration and mediation operate under court-recognised
                  legal structures.
                </span>
              </li>

              <li>
                <strong>Procedural Discipline</strong>
                <span>
                  Focused hearings, timelines and neutral decision-making
                  reduce delays.
                </span>
              </li>

              <li>
                <strong>Finality & Enforceability</strong>
                <span>
                  Awards and settlements are legally enforceable and subject
                  to judicial oversight.
                </span>
              </li>

              <li>
                <strong>Confidentiality</strong>
                <span>
                  Sensitive commercial interests remain protected.
                </span>
              </li>
            </ol>
          </div>

          {/* SECTION 3 */}
          <div className="blog-section">
            <h2 style={{textAlign:"center"}}>Why ADR Matters in Modern Dispute Resolution</h2>

            <ul className="blog-list">
              <li>Reduces procedural burden on courts</li>
              <li>Ensures time-bound and structured outcomes</li>
              <li>Preserves confidentiality</li>
              <li>Maintains fairness and neutrality</li>
              <li>Strengthens enforceability of outcomes</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="blog-section">
            <h2 style={{textAlign:"center"}}>Judicial Trends & Section 89 CPC</h2>

            <p>
              Section 89 of the Code of Civil Procedure reflects legislative
              intent to institutionalise ADR within the justice system.
            </p>

            <div className="blog-highlight-box">
              <h4>Judicial Emphasis on Institutional ADR</h4>
              <ul>
                <li>Transparent appointment mechanisms</li>
                <li>Procedural consistency</li>
                <li>Neutral administrative oversight</li>
              </ul>
            </div>

            <p>
              Courts have consistently clarified that ADR does not dilute
              judicial authority but operates under judicial supervision.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div className="blog-disclaimer">
            <strong>Disclaimer:</strong> This article is intended for general
            informational purposes only and does not constitute legal advice.
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Transition(Blog);
