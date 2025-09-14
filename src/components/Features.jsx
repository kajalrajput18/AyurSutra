export default function Features() {
  const features = [
    { title: "AI Dosha Prediction", desc: "AI analyzes symptoms to suggest therapy plans." },
    { title: "Doctor Verification", desc: "Doctors review & approve AI-generated plans." },
    { title: "Smart Scheduling", desc: "Automated therapy session planning & reminders." },
    { title: "Real-Time Tracking", desc: "Monitor therapy progress & patient feedback." },
  ];

  return (
    <section className="py-16 bg-white">
      <h3 className="text-3xl font-semibold text-center text-green-800 mb-8">Core Features</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-green-700">{f.title}</h4>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
