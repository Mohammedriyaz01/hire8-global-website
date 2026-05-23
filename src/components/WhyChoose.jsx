import {
  FaClock,
  FaUserCheck,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaClock />,
      title: "Faster Hiring",
      desc: "Reduce hiring time with our streamlined recruitment process.",
    },
    {
      icon: <FaUserCheck />,
      title: "Verified Candidates",
      desc: "Every profile is carefully screened and evaluated.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Talent Network",
      desc: "Access professionals from diverse industries and locations.",
    },
    {
      icon: <FaHandshake />,
      title: "Dedicated Support",
      desc: "Our recruitment experts support you throughout the hiring journey.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-800 mb-4">
          Why Choose Hire8?
        </h2>

        <p className="text-center text-gray-600 mb-14">
          We help businesses build stronger teams through reliable recruitment solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-orange-500 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;