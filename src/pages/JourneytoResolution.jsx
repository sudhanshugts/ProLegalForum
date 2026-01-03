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
            The Pro Legal Institutional Arbitration Forum is committed to
            offering a structured, transparent, and efficient pathway to
            resolving disputes with professionalism and judicial integrity.
          </p>

          <p className="journey-description delay-2">
            Our upcoming <strong>Journey to Resolution</strong> section will
            present a complete step-by-step guide that simplifies the entire
            arbitration lifecycle — from filing to award delivery — designed for
            clarity, fairness, and ease of use.
          </p>

          {/* Clickable Image */}
          <img
            src={wip_IMG}
            alt="Work in Progress"
            className="journey-wip-image zoomable"
            onClick={() => setIsOpen(true)}
          />

          <div className="journey-wip-card delay-3">
            <h3>Work in Progress.....</h3>
            <p>
              This feature is currently being curated and will be available
              soon. Stay tuned for an enhanced, informative, and streamlined
              experience.
            </p>
          </div>
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
