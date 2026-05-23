import { Link } from "react-router-dom";

function CurrentOpenings() {
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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-800 mb-4">
          Current Openings
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Explore exciting opportunities and join our talent network.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800">
                {job.title}
              </h3>

              <p className="mt-4 text-gray-600">
                📍 {job.location}
              </p>

              <p className="mt-2 text-gray-600">
                💼 {job.experience}
              </p>

              <Link
                to="/careers"
                className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600"
              >
                Apply Now
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CurrentOpenings;