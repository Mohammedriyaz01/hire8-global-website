function Stats() {
  const stats = [
    { number: "1+", label: "Hiring Partner" },
    { number: "1+", label: "Active Placement" },
    { number: "IT & Non-IT", label: "Recruitment Solutions" },
    { number: "24/7", label: "Recruitment Support" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
          >
            <h2 className="text-5xl font-bold text-orange-500">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;