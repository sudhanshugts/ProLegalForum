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
            Pro Legal Institutional Arbitration Forum is supported by a
            carefully curated panel of arbitrators distinguished by their
            experience in adjudicating disputes, deep familiarity with legal
            process, and demonstrated commitment to neutrality and fairness.
          </p>

          <p className="fade-subtitle">
            The Forum’s panel brings together professionals who have spent
            significant portions of their careers evaluating evidence, applying
            legal principles, and delivering reasoned outcomes in complex
            matters. This collective experience ensures that disputes are
            approached with judicial discipline, procedural balance, and an
            acute understanding of what constitutes a fair and enforceable
            resolution.
          </p>
          <p className="fade-subtitle">
            <span style={{ fontWeight: "bold" }}>The Panel Comprises:</span>{" "}
            <br />
            <span style={{fontStyle:"italic"}}>
              • Individuals who have served in judicial and quasi-judicial
              capacities, contributing years of experience in the structured
              determination of disputes
            </span>
            <br />
          <span style={{fontStyle:"italic"}}>
              • Senior legal professionals with extensive exposure to
              decision-making roles across civil, commercial, and financial
              matters
            </span>
            <br />
           <span style={{fontStyle:"italic"}}>
              • Academicians and scholars whose work reflects deep engagement
              with adjudicatory principles and legal reasoning
            </span>
            <br />
             <span style={{fontStyle:"italic"}}>
              {" "}
              • Practitioners with substantial professional experience, known
              for their analytical rigor and balanced approach
            </span>
            <br />
          </p>

          <p className="fade-subtitle fade-step delay-2">
            Every arbitrator empanelled with the Forum is selected through an
            institutional process that places emphasis on independence,
            integrity, and proven decision-making ability, rather than advocacy
            alone.
          </p>
          <p className="fade-subtitle fade-step delay-2">
            The Forum does not promote or nominate arbitrators on the basis of
            affiliation or visibility. Appointments are administered through
            neutral, panel-based mechanisms designed to ensure suitability,
            impartiality, and confidence in the arbitral process.
          </p>
          <p className="fade-subtitle fade-step delay-2">
            The arbitrators associated with the Forum bring to each proceeding a
            mindset shaped by years of structured dispute resolution, ensuring
            that proceedings are conducted with fairness, clarity, and respect
            for due process, and that outcomes reflect careful consideration
            rather than expediency.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Transition(Arbitrators);
