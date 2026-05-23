import { FaUsers, FaBriefcase, FaSearch } from "react-icons/fa";

function ServicesPreview() {
  const services = [
    {
      icon: <FaUsers />,
      title: "Permanent Staffing",
      desc: "Hire skilled professionals for long-term business growth.",
    },
    {
      icon: <FaBriefcase />,
      title: "Contract Hiring",
      desc: "Flexible workforce solutions for projects and short-term needs.",
    },
    {
      icon: <FaSearch />,
      title: "Executive Search",
      desc: "Find leadership talent and senior-level professionals.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-800 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Recruitment solutions tailored for every business need.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
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

      </div>
    </section>
  );
}

export default ServicesPreview;