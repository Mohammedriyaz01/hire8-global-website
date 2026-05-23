import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-center text-white">
      <h2 className="text-5xl md:text-7xl font-bold">
        Ready To Build Your Dream Team?
      </h2>

      <p className="mt-6 text-xl">
        Partner with Hire8 Global Staffing Services today.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
      >
        Contact Us
      </Link>
    </section>
  );
}

export default CTA;