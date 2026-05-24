import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaUniversity,
  FaRobot,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Information Technology",
      desc: "Software Developers, Full Stack Engineers, Cloud Professionals, DevOps Engineers, QA Specialists, and Cybersecurity Experts.",
    },
    {
      icon: <FaRobot size={40} />,
      title: "AI & Data Science",
      desc: "Data Analysts, Data Scientists, Machine Learning Engineers, AI Engineers, NLP Specialists, and Business Intelligence Professionals.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Healthcare",
      desc: "Doctors, Nurses, Medical Coders, Healthcare Administrators, Clinical Researchers, and Healthcare Support Professionals.",
    },
    {
      icon: <FaUniversity size={40} />,
      title: "Finance & Banking",
      desc: "Accountants, Financial Analysts, Auditors, Banking Professionals, Investment Specialists, and Risk Management Experts.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Industries We Serve
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Specialized recruitment solutions for Information Technology,
            AI & Data Science, Healthcare, and Finance & Banking industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-800">
              Our Industry Expertise
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We connect organizations with highly qualified professionals
              across some of the world's fastest-growing and most competitive
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="text-orange-500 mb-5">
                  {industry.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Why Industry-Focused Recruitment?
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-8">
            At Hire8 Global, we focus on industries experiencing rapid growth
            and evolving talent demands. Our specialized recruitment approach
            helps organizations identify qualified professionals faster while
            ensuring the right skills, experience, and cultural fit.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-blue-800">
                Specialized Talent Pools
              </h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-blue-800">
                Faster Candidate Screening
              </h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-blue-800">
                Industry Expertise
              </h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-blue-800">
                Quality Hiring Outcomes
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Recruit */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Roles We Recruit For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                IT
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>• Software Developers</li>
                <li>• Full Stack Engineers</li>
                <li>• Cloud Engineers</li>
                <li>• DevOps Engineers</li>
                <li>• QA Engineers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                AI & Data Science
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>• Data Analysts</li>
                <li>• Data Scientists</li>
                <li>• ML Engineers</li>
                <li>• AI Engineers</li>
                <li>• BI Analysts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Healthcare
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>• Doctors</li>
                <li>• Nurses</li>
                <li>• Medical Coders</li>
                <li>• Lab Technicians</li>
                <li>• Healthcare Admins</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Finance & Banking
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>• Accountants</li>
                <li>• Financial Analysts</li>
                <li>• Auditors</li>
                <li>• Banking Professionals</li>
                <li>• Risk Analysts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Looking for Industry-Specific Talent?
          </h2>

          <p className="text-lg mb-8">
            Partner with Hire8 Global Staffing Services to connect with
            qualified professionals across Information Technology,
            AI & Data Science, Healthcare, and Finance & Banking.
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

export default Industries;