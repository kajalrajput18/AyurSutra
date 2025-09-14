import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", symptoms: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Booking request sent! AI will generate your therapy plan.");
  };

  return (
    <section className="py-12 bg-green-50">
      <h3 className="text-2xl font-semibold text-center text-green-800 mb-6">Book Your Therapy</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
        <input 
          type="text" name="name" placeholder="Full Name"
          value={formData.name} onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input 
          type="email" name="email" placeholder="Email Address"
          value={formData.email} onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea 
          name="symptoms" placeholder="Describe your symptoms"
          value={formData.symptoms} onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button className="w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
          Submit Booking
        </button>
      </form>
    </section>
  );
}
