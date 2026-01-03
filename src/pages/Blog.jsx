import Layout from "../components/Layout";
import '../styles/blog.css'
import Transition from "../Transition";

function Blog() {
  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-container fade-up">
          <h1>Our Blog</h1>

          <h2 className="delay-1">How ADR Streamlines Litigation</h2>

          <p className="delay-2">
            Litigation continues to be the primary method of resolving legal disputes. However,
            increasing caseloads, procedural complexity, and extended timelines have placed
            consistent pressure on courts. As a result, the need for structured mechanisms that
            support litigation has become increasingly important.
          </p>

          <p className="delay-3">
            Alternative Dispute Resolution (ADR) addresses this need by working alongside the
            judicial process. Mechanisms such as arbitration and mediation operate within a legally
            recognised framework and are regularly supported by courts through referrals,
            enforcement of awards, and recognition of settlements.
          </p>

          <p className="delay-4">
            One of the key contributions of ADR is the reduction of procedural burden. Commercial,
            contractual, and institutional disputes that are suitable for structured resolution can
            be addressed outside the courtroom, allowing litigation to focus on matters requiring
            formal adjudication.
          </p>

          <p className="delay-4">
            ADR also improves procedural efficiency. Defined timelines, limited hearings, and
            issue-focused proceedings reduce delays while maintaining legal integrity. In addition,
            the ability to appoint subject-matter experts ensures informed decision-making and
            avoids prolonged evidentiary stages.
          </p>

          <p className="delay-4">
            Another significant advantage of ADR is finality. Arbitral awards and mediated
            settlements are legally enforceable and supported by judicial oversight. Confidential
            proceedings further protect sensitive information and institutional interests.
          </p>

          <p className="delay-4">
            In a modern dispute resolution framework, ADR does not replace litigation. Instead, it
            strengthens it by reducing procedural strain and ensuring that disputes are resolved in
            a timely and structured manner.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Blog);
