import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JoinTalentNetwork() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-white p-10 rounded-3xl shadow-xl">

            <h1 className="text-5xl font-bold text-center text-blue-800">
              Join Hire8 Talent Network
            </h1>

            <p className="text-center text-gray-600 mt-4">
              Upload your resume and connect with exciting career opportunities
              through Hire8 Global Staffing Services.
            </p>

            <form
              action="https://formsubmit.co/hire8global@gmail.com"
              method="POST"
              encType="multipart/form-data"
              className="mt-10 space-y-6"
            >

              {/* Hidden Fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Resume Submission - Hire8"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173"
              />

              {/* Full Name */}
              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-xl"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="Phone"
                placeholder="Phone Number"
                className="w-full border p-4 rounded-xl"
                required
              />

              {/* Location */}
              <input
                type="text"
                name="Location"
                placeholder="Current Location"
                className="w-full border p-4 rounded-xl"
              />

              {/* Experience */}
              <input
                type="number"
                name="Experience"
                placeholder="Years of Experience"
                className="w-full border p-4 rounded-xl"
              />

              {/* Preferred Role */}
              <input
                type="text"
                name="Preferred Role"
                placeholder="Preferred Job Role"
                className="w-full border p-4 rounded-xl"
              />

              {/* LinkedIn */}
              <input
                type="url"
                name="LinkedIn"
                placeholder="LinkedIn Profile (Optional)"
                className="w-full border p-4 rounded-xl"
              />

              {/* Resume Upload */}
              <div className="border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:bg-orange-50 transition">

                <div className="text-5xl mb-3">
                  📄
                </div>

                <p className="font-semibold text-lg">
                  Upload Your Resume
                </p>

                <p className="text-sm text-gray-500 mt-2 mb-4">
                  PDF, DOC, DOCX (Max 5MB)
                </p>

                <input
                  type="file"
                  name="Resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full"
                  required
                />

              </div>

              {/* Additional Info */}
              <textarea
                rows="5"
                name="Additional Information"
                placeholder="Additional Information"
                className="w-full border p-4 rounded-xl"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
              >
                Join Talent Network
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default JoinTalentNetwork;