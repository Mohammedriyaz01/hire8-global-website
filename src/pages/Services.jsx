import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaBriefcase,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaUsers size={40} />,
      title: "Permanent Staffing",
      desc: "Find highly qualified professionals tailored to your business needs.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Contract Hiring",
      desc: "Flexible workforce solutions for temporary and project-based staffing.",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Recruitment",
      desc: "Access top international talent through our global hiring network.",
    },
    {
      icon: <FaSearch size={40} />,
      title: "Executive Search",
      desc: "Recruit experienced leaders and senior professionals for critical roles.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white text-center">

        <h1 className="text-5xl md:text-7xl font-bold">
          Our Services
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Comprehensive recruitment and staffing solutions
          designed to help organizations build exceptional teams.
        </p>

      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Services;