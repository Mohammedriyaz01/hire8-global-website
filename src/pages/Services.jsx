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
      title: "Recruitment & Staffing",
      desc: "Customized hiring solutions to help organizations attract and retain top talent.",
      items: [
        "Permanent Hiring",
        "Contract Staffing",
        "Bulk Hiring",
        "Overseas Recruitment",
        "Executive Search",
      ],
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "IT Recruitment",
      desc: "Connecting businesses with skilled technology professionals across multiple domains.",
      items: [
        "Software Developers",
        "Data Analysts",
        "AI/ML Engineers",
        "Full Stack Developers",
        "Cloud Engineers",
        "DevOps Engineers",
      ],
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Non-IT Recruitment",
      desc: "Finding qualified professionals for essential business functions and operations.",
      items: [
        "HR Professionals",
        "Sales & Marketing",
        "Finance & Accounts",
        "Operations & Administration",
        "Customer Support",
      ],
    },
    {
      icon: <FaSearch size={40} />,
      title: "Career Services",
      desc: "Helping job seekers improve their profiles and increase career opportunities.",
      items: [
        "Resume Review",
        "Resume Building",
        "Interview Preparation",
        "LinkedIn Profile Optimization",
        "Career Guidance",
      ],
    },
    {
      icon: <FaUsers size={40} />,
      title: "Workforce Solutions",
      desc: "Strategic workforce planning and recruitment consulting for business growth.",
      items: [
        "Talent Acquisition Consulting",
        "Recruitment Process Outsourcing (RPO)",
        "Employer Branding Support",
        "Hiring Strategy Consultation",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            From recruitment and staffing solutions to career development
            and workforce consulting, Hire8 Global helps businesses build
            exceptional teams and professionals achieve their career goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-900">
              Comprehensive Talent Solutions
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end recruitment and workforce solutions
              tailored to meet the evolving needs of organizations and
              professionals across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="text-orange-500 mb-5">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {service.desc}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-orange-500 mr-2 font-bold">
                        ✔
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-24 bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
              Why Choose Hire8 Global?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Industry Expertise
                </h3>
                <p className="text-gray-600 mt-2">
                  Deep understanding of IT and non-IT recruitment across
                  multiple industries.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Quality Talent Pool
                </h3>
                <p className="text-gray-600 mt-2">
                  Access to skilled professionals and pre-screened candidates.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Fast Hiring Process
                </h3>
                <p className="text-gray-600 mt-2">
                  Efficient recruitment strategies that reduce hiring time.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Global Reach
                </h3>
                <p className="text-gray-600 mt-2">
                  Recruitment support for local and international talent needs.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Personalized Solutions
                </h3>
                <p className="text-gray-600 mt-2">
                  Customized hiring strategies based on business requirements.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-bold text-lg text-blue-800">
                  Dedicated Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Professional guidance throughout the recruitment journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;