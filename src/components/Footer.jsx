import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      
      {/* Footer */}
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
              with future-ready organizations through professional
              recruitment and workforce solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                IT Recruitment
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                AI Hiring
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                Healthcare
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                Finance
              </span>

            </div>

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

              <Link
                to="/industries"
                className="hover:text-orange-400 transition"
              >
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
                Permanent Hiring
              </Link>

              <Link to="/services" className="hover:text-orange-400 transition">
                Contract Staffing
              </Link>

              <Link to="/services" className="hover:text-orange-400 transition">
                Executive Search
              </Link>

              <Link to="/services" className="hover:text-orange-400 transition">
                IT Recruitment
              </Link>

              <Link to="/services" className="hover:text-orange-400 transition">
                Career Services
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

              <div className="flex items-center gap-3">
                <FaGlobe className="text-orange-400" />

                <a
                  href="https://hire8-global-website-thny.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Visit Website
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

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://www.linkedin.com/company/117764571"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/hire8global/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 hover:-translate-y-1 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919363527858"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 hover:-translate-y-1 transition duration-300"
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

          <p>
            © 2026 Hire8 Global Staffing Services. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Connecting Exceptional Talent With Future-Ready Organizations.
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;