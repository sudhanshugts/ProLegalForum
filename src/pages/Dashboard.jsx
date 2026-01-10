import "../styles/dashboard.css";
import Layout from "../components/Layout";
import Transition from "../Transition";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-page">
        <div className="hero-content">
          <h1 className="fade-up">
            Institutional Arbitration. Administered with Neutrality.
          </h1>

          <p className="fade-up delay-1">
            A professionally governed arbitration institution administering
            proceedings through neutral appointments and structured case
            management.
          </p>

          {/* <p className="fade-up delay-2">
          Pro Legal Institutional Arbitration Forum aims to bring global-standard processes with structured
            timelines, expert arbitrators, and seamless digital case management.
          </p> */}

          <Link className="hero-btn fade-up delay-3" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default Transition(Dashboard);
