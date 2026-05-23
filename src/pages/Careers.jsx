import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Careers() {
  const jobs = [
    {
      title: "AI Engineer",
      location: "Chennai",
      experience: "1-3 Years",
    },
    {
      title: "Data Analyst",
      location: "Coimbatore",
      experience: "0-2 Years",
    },
    {
      title: "Full Stack Developer",
      location: "Bangalore",
      experience: "2-5 Years",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-800">
            Join Our Talent Network
          </h1>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore exciting career opportunities and connect
            with leading organizations through Hire8 Global
            Staffing Services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <h2 className="text-2xl font-bold text-blue-800">
                  {job.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  📍 {job.location}
                </p>

                <p className="mt-2 text-gray-600">
                  💼 {job.experience}
                </p>

                <Link
                  to="/join-talent-network"
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Careers;