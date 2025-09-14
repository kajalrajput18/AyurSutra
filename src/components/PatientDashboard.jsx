import React from "react";
import { Bell, Calendar, Activity, MessageCircle } from "lucide-react";

const PatientDashboard = () => {
  // Dummy data (later connect with backend / API)
  const upcomingTherapies = [
    { id: 1, therapy: "Vamana (Detox)", date: "15 Sep 2025", time: "10:00 AM" },
    { id: 2, therapy: "Basti (Rejuvenation)", date: "18 Sep 2025", time: "02:30 PM" },
  ];

  const notifications = [
    "Drink warm water before tomorrow's session.",
    "Avoid heavy meals today as per pre-procedure advice.",
    "Provide feedback for your last therapy session.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Patient Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Upcoming Therapy Sessions */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-green-500" />
            Upcoming Therapy Sessions
          </h2>
          <ul className="space-y-3">
            {upcomingTherapies.map((session) => (
              <li
                key={session.id}
                className="p-4 border rounded-xl hover:bg-green-50 transition"
              >
                <p className="font-semibold">{session.therapy}</p>
                <p className="text-sm text-gray-600">
                  {session.date} - {session.time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Therapy Progress */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-green-500" />
            Therapy Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "60%" }} // dynamically update from DB
            ></div>
          </div>
          <p className="text-sm text-gray-700">60% treatment completed</p>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-green-500" />
            Notifications
          </h2>
          <ul className="space-y-2">
            {notifications.map((note, index) => (
              <li
                key={index}
                className="p-3 border rounded-xl text-gray-700 hover:bg-green-50 transition"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-green-500" />
            Provide Feedback
          </h2>
          <textarea
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            rows="3"
            placeholder="Share your experience after therapy..."
          ></textarea>
          <button className="mt-3 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
