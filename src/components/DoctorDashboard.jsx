import React from "react";
import { Calendar, ClipboardList, User, MessageSquare } from "lucide-react";

const DoctorDashboard= () => {
  // Dummy data (replace with API later)
  const patients = [
    { id: 1, name: "Rahul Sharma", therapy: "Vamana", nextSession: "15 Sep, 10:00 AM" },
    { id: 2, name: "Priya Singh", therapy: "Basti", nextSession: "16 Sep, 11:30 AM" },
    { id: 3, name: "Amit Patel", therapy: "Nasya", nextSession: "17 Sep, 9:00 AM" },
  ];

  const feedbacks = [
    { id: 1, patient: "Rahul Sharma", rating: 4, comment: "Felt lighter and relaxed." },
    { id: 2, patient: "Priya Singh", rating: 5, comment: "Huge improvement in digestion." },
    { id: 3, patient: "Amit Patel", rating: 3, comment: "Mild headache after session." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <ClipboardList className="w-7 h-7 text-green-600" />
        Doctor Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Patients List */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-green-600" /> My Patients
          </h2>
          <ul className="space-y-3">
            {patients.map((p) => (
              <li key={p.id} className="p-3 bg-green-50 rounded-lg border flex justify-between">
                <div>
                  <p className="font-medium text-gray-800">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.therapy} Therapy</p>
                </div>
                <span className="text-xs text-gray-500">{p.nextSession}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-green-600" /> Upcoming Sessions
          </h2>
          <ul className="space-y-3">
            {patients.map((p) => (
              <li key={p.id} className="p-3 bg-blue-50 rounded-lg border">
                <p className="font-medium text-gray-800">{p.name}</p>
                <p className="text-sm text-gray-600">Next: {p.nextSession}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-2xl shadow-md p-5 col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-green-600" /> Recent Feedback
          </h2>
          <ul className="space-y-3">
            {feedbacks.map((f) => (
              <li key={f.id} className="p-3 bg-yellow-50 rounded-lg border">
                <p className="font-medium text-gray-800">{f.patient}</p>
                <p className="text-sm text-gray-600">⭐ {f.rating}/5</p>
                <p className="text-xs text-gray-500 italic">"{f.comment}"</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
