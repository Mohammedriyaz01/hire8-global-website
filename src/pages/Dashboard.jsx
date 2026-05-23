import AnalyticsChart from "../components/AnalyticsChart";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUsers,
  FaClipboardList,
  FaEnvelope,
  FaSignOutAlt,
  FaPlusCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-6 shadow-2xl">

        <h1 className="text-3xl font-bold mb-10">
          Hire8 Admin
        </h1>

        <div className="flex flex-col gap-4">

          <Link
            to="/dashboard"
            className="bg-orange-500 px-4 py-3 rounded-xl"
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/add-job"
            className="hover:bg-slate-800 px-4 py-3 rounded-xl transition"
          >
            ➕ Add Job
          </Link>

          <Link
            to="/manage-jobs"
            className="hover:bg-slate-800 px-4 py-3 rounded-xl transition"
          >
            📋 Manage Jobs
          </Link>

          <Link
            to="/applicants"
            className="hover:bg-slate-800 px-4 py-3 rounded-xl transition"
          >
            👥 Applicants
          </Link>

          <Link
            to="/contact-leads"
            className="hover:bg-slate-800 px-4 py-3 rounded-xl transition"
          >
            📩 Contact Leads
          </Link>

          <Link
            to="/admin"
            className="mt-8 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-xl text-center transition"
          >
            🚪 Logout
          </Link>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Dashboard Overview
        </h2>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <FaBriefcase className="text-orange-500 text-3xl mb-4" />
            <h3 className="text-gray-500">
              Total Jobs
            </h3>
            <p className="text-4xl font-bold">
              5
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <FaUsers className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-gray-500">
              Applicants
            </h3>
            <p className="text-4xl font-bold">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <FaClipboardList className="text-green-500 text-3xl mb-4" />
            <h3 className="text-gray-500">
              Active Openings
            </h3>
            <p className="text-4xl font-bold">
              5
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <FaEnvelope className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-gray-500">
              Contact Leads
            </h3>
            <p className="text-4xl font-bold">
              8
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-2xl font-bold mb-6">
            Quick Actions
          </h3>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/add-job"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaPlusCircle />
              Add New Job
            </Link>

            <Link
              to="/manage-jobs"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Manage Jobs
            </Link>

            <Link
              to="/applicants"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              View Applicants
            </Link>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-2xl font-bold mb-6">
            Recent Applications
          </h3>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    Candidate
                  </th>

                  <th className="text-left py-3">
                    Position
                  </th>

                  <th className="text-left py-3">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-3">
                    Ravi Kumar
                  </td>

                  <td>
                    AI Engineer
                  </td>

                  <td>
                    Today
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-3">
                    Priya Sharma
                  </td>

                  <td>
                    Data Analyst
                  </td>

                  <td>
                    Yesterday
                  </td>
                </tr>

                <tr>
                  <td className="py-3">
                    Arun Kumar
                  </td>

                  <td>
                    Full Stack Developer
                  </td>

                  <td>
                    2 Days Ago
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        <AnalyticsChart />

      </main>

    </div>
  );
}

export default Dashboard;