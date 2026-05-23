import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import Applicants from "./pages/Applicants";
import ContactLeads from "./pages/ContactLeads";
import JoinTalentNetwork from "./pages/JoinTalentNetwork";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/join-talent-network" element={<JoinTalentNetwork />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/contact-leads" element={<ContactLeads />} />

        <Route path="/success" element={<Success />} />

      </Routes>

      <a
        href="https://wa.me/919363527858"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <FaWhatsapp size={30} />
      </a>

    </BrowserRouter>
  );
}

export default App;