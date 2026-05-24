import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hire8.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[999]">

      {/* Navbar Container */}
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 py-4">

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-md px-8 py-4 shadow-2xl">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-4"
            onClick={() => setMenuOpen(false)}
          >

            <img
              src={logo}
              alt="Hire8 Logo"
              className="h-12 w-auto"
            />

            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-blue-400">Hire</span>
                <span className="text-orange-400">8</span>
              </h1>

              <p className="text-sm text-slate-400">
                Global Staffing Services
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link
              to="/"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/industries"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Industries
            </Link>

            <Link
              to="/careers"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Careers
            </Link>

            <Link
              to="/join-talent-network"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Join Talent Network
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-orange-400 transition duration-300"
            >
              Contact
            </Link>

          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-105"
          >
            Hire Talent
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl md:hidden">

          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Hire8 Logo"
                className="h-10"
              />

              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-blue-400">Hire</span>
                  <span className="text-orange-400">8</span>
                </h2>

                <p className="text-xs text-slate-400">
                  Global Staffing Services
                </p>
              </div>

            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              <FaTimes />
            </button>

          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-8 px-8 py-10 text-white text-xl">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link to="/industries" onClick={() => setMenuOpen(false)}>
              Industries
            </Link>

            <Link to="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>

            <Link
              to="/join-talent-network"
              onClick={() => setMenuOpen(false)}
            >
              Join Talent Network
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-center py-4 rounded-xl font-semibold transition"
            >
              Hire Talent
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;