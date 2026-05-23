import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400">Hire</span>
            <span className="text-orange-400">8</span>
          </h2>

          <p className="mt-4 text-slate-400 leading-7">
            Hire8 Global Staffing Services connects exceptional talent
            with future-ready organizations through innovative
            recruitment and workforce solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">

            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-400 transition">
              About
            </Link>

            <Link to="/services" className="hover:text-orange-400 transition">
              Services
            </Link>

            <Link to="/industries" className="hover:text-orange-400 transition">
              Industries
            </Link>

            <Link to="/careers" className="hover:text-orange-400 transition">
              Careers
            </Link>

            <Link to="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>

          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">

            <Link to="/services" className="hover:text-orange-400 transition">
              IT Recruitment
            </Link>

            <Link to="/services" className="hover:text-orange-400 transition">
              Non-IT Recruitment
            </Link>

            <Link to="/services" className="hover:text-orange-400 transition">
              Talent Acquisition
            </Link>

            <Link to="/services" className="hover:text-orange-400 transition">
              Staffing Solutions
            </Link>

            <Link to="/services" className="hover:text-orange-400 transition">
              Executive Hiring
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-4 text-slate-400">

            <div className="flex items-center gap-3">
              <FaPhone className="text-orange-400" />
              <a
                href="tel:+919363527858"
                className="hover:text-white transition"
              >
                +91 93635 27858
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <a
                href="mailto:hire8global@gmail.com"
                className="hover:text-white transition break-all"
              >
                hire8global@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <span>
                Chennai, Tamil Nadu, India
              </span>
            </div>

          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <a
              href="https://www.linkedin.com/company/117764571"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/hire8global/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919363527858"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>

          </div>

          <p className="mt-6 text-slate-400 leading-7">
            Headquartered in Chennai, Tamil Nadu
            <br />
            Serving Clients Across India
          </p>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-slate-500">

        © 2026 Hire8 Global Staffing Services. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;