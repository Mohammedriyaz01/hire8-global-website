import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold">
            About Hire8 Global
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            We connect businesses with exceptional talent through
            innovative recruitment strategies, workforce solutions,
            and global hiring expertise.
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt="About Hire8"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              Hire8 Global Staffing Services is a professional
              recruitment and workforce solutions company helping
              organizations hire top talent across IT and Non-IT
              industries.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our mission is to bridge the gap between businesses
              and exceptional professionals through innovative
              hiring solutions and personalized support.
            </p>

          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To empower organizations by providing access
              to high-quality talent and innovative workforce
              solutions.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a globally trusted staffing partner
              recognized for excellence, integrity, and innovation.
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;