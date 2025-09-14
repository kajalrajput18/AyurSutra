import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    sessionDate: "",
    experience: "",
    symptoms: "",
    improvements: "",
    sideEffects: "",
    rating: 3,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Therapy Feedback Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Session Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Session Date</label>
            <input
              type="date"
              name="sessionDate"
              value={formData.sessionDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Overall Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Share your experience..."
              rows="3"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Symptoms (if any)</label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Mention any symptoms..."
              rows="2"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* Improvements */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Improvements Noticed</label>
            <textarea
              name="improvements"
              value={formData.improvements}
              onChange={handleChange}
              placeholder="What improvements did you feel?"
              rows="2"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* Side Effects */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Side Effects (if any)</label>
            <textarea
              name="sideEffects"
              value={formData.sideEffects}
              onChange={handleChange}
              placeholder="Mention any side effects..."
              rows="2"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rate Your Session</label>
            <input
              type="range"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="w-full accent-green-600"
            />
            <p className="text-sm text-gray-600">Rating: {formData.rating}/5</p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
