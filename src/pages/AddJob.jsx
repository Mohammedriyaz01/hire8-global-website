import { useState } from "react";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    location: "",
    experience: "",
    salary: "",
    type: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Job Published Successfully ✅");

    setJob({
      title: "",
      location: "",
      experience: "",
      salary: "",
      type: "",
      skills: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Add New Job
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="experience"
            value={job.experience}
            onChange={handleChange}
            placeholder="Experience (e.g. 2-5 Years)"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            placeholder="Salary Range"
            className="w-full border p-4 rounded-xl"
          />

          <select
            name="type"
            value={job.type}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          >
            <option value="">
              Select Employment Type
            </option>

            <option value="Full Time">
              Full Time
            </option>

            <option value="Part Time">
              Part Time
            </option>

            <option value="Contract">
              Contract
            </option>

            <option value="Remote">
              Remote
            </option>
          </select>

          <input
            type="text"
            name="skills"
            value={job.skills}
            onChange={handleChange}
            placeholder="Required Skills"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="6"
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Publish Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddJob;