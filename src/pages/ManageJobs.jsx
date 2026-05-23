import { FaEdit, FaTrash } from "react-icons/fa";

function ManageJobs() {
  const jobs = [
    {
      id: 1,
      title: "AI Engineer",
      location: "Chennai",
      experience: "1-3 Years",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Analyst",
      location: "Coimbatore",
      experience: "0-2 Years",
      status: "Active",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      location: "Bangalore",
      experience: "2-5 Years",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Manage Jobs
      </h1>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4 text-left">
                Job Title
              </th>

              <th className="p-4 text-left">
                Location
              </th>

              <th className="p-4 text-left">
                Experience
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {job.title}
                </td>

                <td className="p-4">
                  {job.location}
                </td>

                <td className="p-4">
                  {job.experience}
                </td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {job.status}
                  </span>
                </td>

                <td className="p-4">

                  <div className="flex gap-3">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition">
                      <FaEdit />
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition">
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageJobs;