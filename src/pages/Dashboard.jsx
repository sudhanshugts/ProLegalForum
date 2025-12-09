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
            Welcome to Pro Legal Institutional Arbitration Forum
          </h1>

          <p className="fade-up delay-1">
            India’s modern institutional arbitration platform designed for
            fairness, transparency, and efficient dispute resolution across
            commercial, banking, and corporate sectors.
          </p>

          <p className="fade-up delay-2">
          Pro Legal Institutional Arbitration Forum aims to bring global-standard processes with structured
            timelines, expert arbitrators, and seamless digital case management.
          </p>

          <Link className="hero-btn fade-up delay-3" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default Transition(Dashboard);