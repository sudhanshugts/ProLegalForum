import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Arbitrators from "./pages/Arbitrators";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";
import JourneytoResolution from "./pages/JourneytoResolution";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
   <AnimatePresence mode="wait">
     <Routes location={location} key={location.pathname}>
      <Route index element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/arbitrators" element={<Arbitrators />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/journey-to-resolution" element={<JourneytoResolution />} />
    </Routes>
   </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
        <AnimatedRoutes />
    </Router>
  );
}



