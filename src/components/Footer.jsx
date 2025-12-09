import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-social">
          <Link href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="#" aria-label="Facebook">
            <FaFacebook />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pro Legal Institutional Arbitration Forum. All Rights Reserved.
      </div>
    </footer>
  );
}
