import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl">

        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-600">
          Thank You!
        </h1>

        <p className="mt-4 text-gray-600">
          Your resume has been submitted successfully.
          Our recruitment team will review your profile and
          contact you if a suitable opportunity matches your skills.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
}

export default Success;