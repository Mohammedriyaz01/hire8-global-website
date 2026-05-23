import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaUniversity,
  FaIndustry,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "IT & Software",
      desc: "Software Development, Cloud Computing, Cyber Security and IT Support.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Healthcare",
      desc: "Doctors, Nurses, Healthcare Administrators and Medical Professionals.",
    },
    {
      icon: <FaUniversity size={40} />,
      title: "Finance & Banking",
      desc: "Financial Analysts, Accountants, Banking and Investment Experts.",
    },
    {
      icon: <FaIndustry size={40} />,
      title: "Manufacturing",
      desc: "Production, Quality Control and Engineering Professionals.",
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: "Retail & E-Commerce",
      desc: "Sales, Customer Service and Retail Operations Experts.",
    },
    {
      icon: <FaTruck size={40} />,
      title: "Logistics",
      desc: "Supply Chain, Warehouse and Logistics Specialists.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Industries We Serve
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Delivering recruitment solutions across multiple industries
          with specialized expertise.
        </p>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-orange-500 mb-4">
                  {industry.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {industry.title}
                </h3>

                <p className="text-gray-600">
                  {industry.desc}
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

export default Industries;