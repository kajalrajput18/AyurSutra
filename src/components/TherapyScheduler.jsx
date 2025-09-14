// src/pages/TherapyScheduler.jsx
import React, { useState } from "react";

const TherapyScheduler = () => {
  const [formData, setFormData] = useState({
    therapyType: "",
    doctor: "",
    date: "",
    time: "",
    frequency: "daily",
  });

  const [sessions, setSessions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    setSessions([...sessions, formData]);
    setFormData({
      therapyType: "",
      doctor: "",
      date: "",
      time: "",
      frequency: "daily",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Scheduler Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Therapy Scheduler
          </h2>

          <form onSubmit={handleSchedule} className="space-y-6">
            {/* Therapy Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Therapy Type
              </label>
              <select
                name="therapyType"
                value={formData.therapyType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              >
                <option value="">Select Therapy</option>
                <option value="Abhyanga">Abhyanga (Oil Massage)</option>
                <option value="Shirodhara">Shirodhara</option>
                <option value="Basti">Basti</option>
                <option value="Virechana">Virechana</option>
                <option value="Nasya">Nasya</option>
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Sharma">Dr. Sharma</option>
                <option value="Dr. Iyer">Dr. Iyer</option>
                <option value="Dr. Mehta">Dr. Mehta</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Frequency
              </label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Schedule Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Schedule Therapy
            </button>
          </form>
        </div>

        {/* Scheduled Sessions */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Scheduled Sessions
          </h2>
          {sessions.length === 0 ? (
            <p className="text-gray-600">No sessions scheduled yet.</p>
          ) : (
            <ul className="space-y-4">
              {sessions.map((s, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:justify-between md:items-center"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {s.therapyType}
                    </p>
                    <p className="text-sm text-gray-600">
                      Doctor: {s.doctor} | {s.date} at {s.time}
                    </p>
                  </div>
                  <span className="text-green-600 font-semibold mt-2 md:mt-0">
                    {s.frequency}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TherapyScheduler;
