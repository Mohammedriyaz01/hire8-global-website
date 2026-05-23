function Process() {
  const steps = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Understand client hiring needs and job requirements.",
    },
    {
      step: "02",
      title: "Talent Sourcing",
      desc: "Identify and attract qualified candidates from our network.",
    },
    {
      step: "03",
      title: "Screening & Evaluation",
      desc: "Assess candidate skills, experience and suitability.",
    },
    {
      step: "04",
      title: "Interview Coordination",
      desc: "Schedule and manage interviews with shortlisted candidates.",
    },
    {
      step: "05",
      title: "Selection & Offer",
      desc: "Support hiring decisions and offer management.",
    },
    {
      step: "06",
      title: "Successful Placement",
      desc: "Ensure smooth onboarding and placement success.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-blue-800 mb-4">
          Our Recruitment Process
        </h2>

        <p className="text-center text-gray-600 mb-14">
          A structured hiring process designed to deliver quality talent.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="text-orange-500 text-4xl font-bold mb-4">
                {item.step}
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;