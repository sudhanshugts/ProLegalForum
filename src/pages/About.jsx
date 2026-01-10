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
            Pro Legal Institutional Arbitration Forum is a professionally
            managed arbitration institution created to offer parties a reliable
            and credible forum for resolving disputes. The focus of the Forum is
            not just on arbitration as a process, but on providing an
            institutional environment where proceedings are conducted with
            structure, neutrality, and confidence. <br /> <br /> The Forum is guided by
            retired Judges of High Courts who have served with distinction and
            bring with them decades of judicial experience. Their background in
            handling complex commercial, financial, and civil disputes shapes
            the way Pro Legal functions, ensuring fairness, independence, and
            strong institutional oversight. <br /> <br /> Pro Legal was set up to
            overcome the practical difficulties often seen in ad-hoc
            arbitrations. As a forum, it provides a structured system for the
            appointment of arbitrators, uniform procedures, and transparent case
            administration. While the Forum does not decide disputes, it plays a
            vital role in managing arbitral proceedings efficiently and
            impartially, allowing tribunals to function independently. <br /> <br />{" "}
            The Forum serves banks, financial institutions, corporates, MSMEs,
            and individuals who are looking for a dependable and time-bound
            dispute resolution forum. Its processes are designed to support
            procedural discipline, compliance, and enforceable outcomes. <br /> <br />{" "}
            Each arbitration administered by Pro Legal benefits from clear
            timelines, access to a carefully selected panel of arbitrators, and
            technology-driven case management systems. The Forum’s involvement
            is limited to administration and oversight, ensuring smooth conduct
            of proceedings without interfering with the tribunal’s
            decision-making. <br /> <br /> The Forum seeks to align arbitration
            practice with the expectations of courts, parties, and the evolving
            jurisprudence on institutional arbitration in India.
          </p>
        </div>
      </div>
    </Layout>
  );
}
export default Transition(About);
