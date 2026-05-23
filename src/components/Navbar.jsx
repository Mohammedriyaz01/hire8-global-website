import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hire8.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[999]">

      {/* Glass Navbar */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-3 shadow-2xl">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >

            <img
              src={logo}
              alt="Hire8 Logo"
              className="h-12 w-auto"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-blue-400">Hire</span>
                <span className="text-orange-400">8</span>
              </h1>

              <p className="text-xs text-slate-300">
                Global Staffing Services
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">

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

            <Link
              to="/join-talent-network"
              className="hover:text-orange-400 transition"
            >
              Join Talent Network
            </Link>

            <Link to="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>

          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300 hover:scale-105"
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

          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Hire8 Logo"
                className="h-10"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
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

          {/* Menu Links */}
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
              className="bg-orange-500 text-center py-4 rounded-xl font-semibold"
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