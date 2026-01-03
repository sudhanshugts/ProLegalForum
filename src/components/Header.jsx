import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo-area">
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/arbitrators">Arbitrators</NavLink></li>
          <li><NavLink to="/journey-to-resolution">Journey to Resolution</NavLink></li>
          <li><NavLink to="/cases">Cases</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
