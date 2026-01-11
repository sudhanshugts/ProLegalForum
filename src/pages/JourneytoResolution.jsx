import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/journeytoresolution.css";
import wip_IMG from "../assets/arbitration-flowchart-updated.png";
import Transition from "../Transition";

function JourneytoResolution() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Layout>
      <div className="journey-page">
        <div className="journey-container">
          <h1 className="journey-title">Journey to Resolution</h1>

          <p className="journey-description delay-1">
            Pro Legal Institutional Arbitration Forum administers arbitral
            proceedings through a structured, transparent and time-bound
            process designed to ensure procedural fairness, neutrality and
            efficient resolution of disputes.
          </p>

          <p className="journey-description delay-2">
            The Forum’s role throughout the arbitral lifecycle is strictly
            administrative. It facilitates each stage of the proceedings in
            accordance with its Rules, while the arbitral tribunal independently
            conducts the adjudication.
          </p>
          <div className="journey-structured delay-2">
            <h3>A Structured Pathway from Commencement to Award</h3>

            <p>
              The arbitration process under the Forum is designed to provide
              clarity and predictability at every stage—beginning with
              commencement of proceedings and concluding with the delivery of a
              reasoned arbitral award. Each step is governed by defined
              timelines, institutional oversight and technology-assisted case
              management to ensure efficiency without compromising fairness or
              due process.
            </p>

            <ol className="journey-steps">
              <li>
                <strong>Commencement of Arbitration</strong>
                <span>
                  Arbitration is initiated by filing a request in accordance
                  with the Forum’s Rules. Upon receipt, the Forum registers the
                  case, issues notices and assigns a unique case reference
                  number.
                </span>
              </li>

              <li>
                <strong>Neutral Appointment of Arbitrator(s)</strong>
                <span>
                  Arbitrator(s) are appointed through the Forum’s institutional,
                  panel-based mechanism ensuring neutrality, suitability and
                  independence.
                </span>
              </li>

              <li>
                <strong>Preliminary Conference & Procedural Framework</strong>
                <span>
                  A preliminary conference may be conducted to establish
                  procedural timelines, hearing formats and administrative
                  arrangements.
                </span>
              </li>

              <li>
                <strong>Submissions & Hearings</strong>
                <span>
                  Parties file submissions as per schedule. Hearings may be
                  physical, virtual, or hybrid, supported by secure document
                  handling.
                </span>
              </li>

              <li>
                <strong>Closure of Proceedings & Award</strong>
                <span>
                  Upon closure, the arbitral tribunal independently deliberates
                  and renders a reasoned arbitral award.
                </span>
              </li>

              <li>
                <strong>Post-Award Administration</strong>
                <span>
                  The Forum facilitates administrative closure and maintains
                  institutional records in accordance with applicable
                  procedures.
                </span>
              </li>
            </ol>

            <div className="journey-principles">
              <h4>Principles Underlying the Process</h4>
              <ul>
                <li>Neutrality in appointments and administration</li>
                <li>Procedural discipline and defined timelines</li>
                <li>Transparency in process and communication</li>
                <li>Respect for due process and enforceability</li>
              </ul>
            </div>
          </div>

          {/* Clickable Image */}
          {/* <img
            src={wip_IMG}
            alt="Work in Progress"
            className="journey-wip-image zoomable"
            onClick={() => setIsOpen(true)}
          /> */}

          {/* <div className="journey-wip-card delay-3">
            <h3>Work in Progress.....</h3>
            <p>
              This feature is currently being curated and will be available
              soon. Stay tuned for an enhanced, informative, and streamlined
              experience.
            </p>
          </div> */}
        </div>
      </div>

      {/* IMAGE MODAL */}
      {isOpen && (
        <div className="image-modal">
          <div className="image-modal-content" ref={modalRef}>
            <img src={wip_IMG} alt="Expanded View" />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Transition(JourneytoResolution);
