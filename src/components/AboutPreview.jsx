import { Link } from "react-router-dom";
import {
  FaUsers,
  FaHandshake,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

function AboutPreview() {
  const highlights = [
    {
      icon: <FaUsers />,
      title: "Talent Network",
      desc: "Access to skilled professionals across multiple industries.",
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Partnerships",
      desc: "Building long-term relationships with clients and candidates.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      desc: "Supporting recruitment needs locally and internationally.",
    },
    {
      icon: <FaAward />,
      title: "Quality Hiring",
      desc: "Focused on delivering the right talent for every role.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt="About Hire8"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            About Hire8 Global
          </span>

          <h2 className="text-5xl font-bold text-blue-800 mt-4 leading-tight">
            Connecting Talent With Opportunity
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Hire8 Global Staffing Services helps organizations find exceptional
            talent and professionals discover meaningful career opportunities.
            We provide recruitment, staffing, and workforce solutions tailored
            to the evolving needs of modern businesses.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            From IT and Non-IT hiring to strategic workforce consulting,
            we are committed to delivering quality, reliability, and
            long-term hiring success.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-5 rounded-2xl"
              >
                <div className="text-orange-500 text-2xl mb-3">
                  {item.icon}
                </div>

                <h3 className="font-bold text-blue-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;