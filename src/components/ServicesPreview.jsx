import {
  FaUsers,
  FaBriefcase,
  FaSearch,
  FaLaptopCode,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";

function ServicesPreview() {
  const services = [
    {
      icon: <FaUsers />,
      title: "Recruitment & Staffing",
      desc: "Permanent hiring, contract staffing, bulk recruitment, and executive search solutions.",
    },
    {
      icon: <FaLaptopCode />,
      title: "IT Recruitment",
      desc: "Software Developers, AI/ML Engineers, Data Analysts, Cloud & DevOps professionals.",
    },
    {
      icon: <FaBriefcase />,
      title: "Non-IT Recruitment",
      desc: "HR, Sales & Marketing, Finance, Operations, Administration, and Customer Support roles.",
    },
    {
      icon: <FaFileAlt />,
      title: "Career Services",
      desc: "Resume building, interview preparation, LinkedIn optimization, and career guidance.",
    },
    {
      icon: <FaHandshake />,
      title: "Workforce Solutions",
      desc: "Talent acquisition consulting, RPO services, employer branding, and hiring strategy.",
    },
    {
      icon: <FaSearch />,
      title: "Executive Search",
      desc: "Identifying and recruiting senior leadership and high-impact professionals.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-blue-800 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Comprehensive recruitment and workforce solutions designed to help
          organizations hire exceptional talent and professionals achieve their
          career goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl text-orange-500 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;