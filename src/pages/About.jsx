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
            We connect businesses with exceptional talent through innovative
            recruitment strategies, workforce solutions, and global hiring
            expertise.
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
              Hire8 Global Staffing Services is a professional recruitment and
              workforce solutions company helping organizations hire top talent
              across IT and Non-IT industries.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              We specialize in connecting skilled professionals with
              forward-thinking organizations through strategic hiring solutions,
              personalized support, and industry-focused recruitment expertise.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our mission is to bridge the gap between businesses and
              exceptional professionals while creating opportunities that drive
              long-term success for both employers and candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To bridge the gap between talented professionals and
              organizations by delivering innovative, reliable, and
              people-focused recruitment solutions that create long-term value.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To become a trusted global staffing partner recognized for
              excellence, integrity, innovation, and commitment to talent
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Delivering exceptional recruitment solutions with quality,
                professionalism, and consistency.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                Building trust through transparency, honesty, and ethical
                recruitment practices.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Leveraging modern technology and recruitment strategies to
                identify top talent.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Commitment
              </h3>
              <p className="text-gray-600">
                Supporting businesses and professionals throughout their growth
                and success journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Why Choose Hire8 Global?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Industry-focused recruitment expertise",
              "Access to qualified talent pools",
              "Fast and efficient hiring process",
              "Global recruitment capabilities",
              "Customized workforce solutions",
              "Dedicated client and candidate support",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  ✓ {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Our Recruitment Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Requirement Analysis",
              "Talent Sourcing",
              "Candidate Screening",
              "Interview Coordination",
              "Final Selection",
              "Onboarding Support",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-slate-50 p-8 rounded-3xl shadow-md text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="font-bold text-xl text-blue-800">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>

          <p className="text-lg mb-8">
            Whether you're hiring top talent or searching for your next career
            opportunity, Hire8 Global is here to support your journey.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;