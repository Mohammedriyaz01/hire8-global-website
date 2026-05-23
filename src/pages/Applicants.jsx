import { FaEye, FaDownload } from "react-icons/fa";

function Applicants() {
  const applicants = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      phone: "+91 9876543210",
      role: "AI Engineer",
      status: "New",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "+91 9123456789",
      role: "Data Analyst",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      phone: "+91 9988776655",
      role: "Full Stack Developer",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Applicants
      </h1>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4 text-left">Candidate Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Applied Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {applicants.map((applicant) => (
              <tr
                key={applicant.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {applicant.name}
                </td>

                <td className="p-4">
                  {applicant.email}
                </td>

                <td className="p-4">
                  {applicant.phone}
                </td>

                <td className="p-4">
                  {applicant.role}
                </td>

                {/* Status Dropdown */}
                <td className="p-4">
                  <select
                    defaultValue={applicant.status}
                    className="border rounded-lg p-2"
                  >
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="p-4">

                  <div className="flex gap-3">

                    <button
                      onClick={() =>
                        alert(
                          `Name: ${applicant.name}
Role: ${applicant.role}
Email: ${applicant.email}
Phone: ${applicant.phone}`
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() =>
                        alert("Resume download feature will be added later.")
                      }
                      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition"
                    >
                      <FaDownload />
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

export default Applicants;