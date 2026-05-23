import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt="About Hire8"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>

          <span className="text-orange-500 font-semibold uppercase">
            About Hire8
          </span>

          <h2 className="text-5xl font-bold text-blue-800 mt-4">
            Building Strong Teams Through Smart Hiring
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Hire8 Global Staffing Services specializes in connecting
            organizations with qualified professionals across IT and
            Non-IT sectors. We focus on quality recruitment,
            personalized support, and long-term hiring success.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-50 p-5 rounded-2xl">
              <h3 className="font-bold text-blue-800">
                Our Mission
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Deliver quality recruitment solutions.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <h3 className="font-bold text-blue-800">
                Our Vision
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Become a trusted staffing partner globally.
              </p>
            </div>

          </div>

          <Link
            to="/about"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;