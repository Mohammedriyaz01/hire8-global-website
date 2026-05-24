import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm">
             Global Staffing & Recruitment Solutions
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold leading-[1.1] max-w-2xl">
            Connecting
            <span className="text-orange-400">
              {" "}Exceptional Talent
            </span>

            <br />

            For
            <span className="text-blue-400">
              {" "}Future-Ready Organizations
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-8">
            Hire8 Global Staffing Services connects businesses with
            exceptional talent across Information Technology,
            AI & Data Science, Healthcare, and Finance & Banking
            industries through strategic recruitment and workforce solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-105"
            >
              Hire Talent
            </Link>

            <Link
              to="/careers"
              className="border border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition duration-300"
            >
              Join Talent Network
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-orange-400">
                1+
              </h3>
              <p className="text-slate-300 text-sm">
                Partner Client
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-orange-400">
                1+
              </h3>
              <p className="text-slate-300 text-sm">
                Placement
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-orange-400">
                4
              </h3>
              <p className="text-slate-300 text-sm">
                Industries
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="relative flex justify-center items-center"
        >

          {/* Floating Card Top */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white shadow-xl z-20"
          >
            <h4 className="font-semibold">
              Talent Network
            </h4>

            <p className="text-sm text-slate-300">
              Growing Every Day
            </p>
          </motion.div>

          <img
            src={heroImage}
            alt="Hire8 Team"
            className="w-full max-w-[650px] rounded-3xl shadow-2xl border border-white/10 object-cover"
          />

          {/* Floating Card Bottom */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white shadow-xl z-20"
          >
            <h4 className="font-semibold">
              IT, AI & Healthcare
            </h4>

            <p className="text-sm text-slate-300">
              Recruitment Solutions
            </p>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}

export default Hero;