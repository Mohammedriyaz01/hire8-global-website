import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function AnalyticsChart() {
  const data = [
    { month: "Jan", applicants: 12 },
    { month: "Feb", applicants: 20 },
    { month: "Mar", applicants: 15 },
    { month: "Apr", applicants: 28 },
    { month: "May", applicants: 22 },
    { month: "Jun", applicants: 35 },
  ];

  return (
    <div
      className="
      mt-10
      bg-white/80
      backdrop-blur-xl
      p-8
      rounded-3xl
      shadow-xl
      border
      border-slate-200
    "
    >
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Monthly Applicant Growth
          </h2>

          <p className="text-slate-500 mt-2">
            Applicant performance across the last 6 months
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
          +35%
        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="applicants"
            fill="#2563eb"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;