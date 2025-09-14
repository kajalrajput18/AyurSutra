import React from "react";
import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";

const Notifications = () => {
  // Dummy notifications (replace with API data later)
  const notifications = [
    {
      id: 1,
      type: "pre",
      message: "Drink warm water before your Vamana therapy tomorrow.",
      time: "14 Sep 2025, 8:00 PM",
    },
    {
      id: 2,
      type: "post",
      message: "Avoid spicy food for 2 days after Basti therapy.",
      time: "12 Sep 2025, 5:30 PM",
    },
    {
      id: 3,
      type: "general",
      message: "Your next therapy session is scheduled on 15 Sep at 10:00 AM.",
      time: "12 Sep 2025, 10:00 AM",
    },
  ];

  // Function to return icons & colors by type
  const getTypeStyles = (type) => {
    switch (type) {
      case "pre":
        return { icon: <AlertTriangle className="text-yellow-500 w-5 h-5" />, bg: "bg-yellow-50 border-yellow-300" };
      case "post":
        return { icon: <CheckCircle className="text-green-500 w-5 h-5" />, bg: "bg-green-50 border-green-300" };
      case "general":
      default:
        return { icon: <Info className="text-blue-500 w-5 h-5" />, bg: "bg-blue-50 border-blue-300" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Bell className="w-7 h-7 text-green-600" />
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((note) => {
          const { icon, bg } = getTypeStyles(note.type);
          return (
            <div
              key={note.id}
              className={`p-4 rounded-xl border shadow-sm flex items-start gap-3 ${bg}`}
            >
              {icon}
              <div>
                <p className="text-gray-800">{note.message}</p>
                <p className="text-xs text-gray-500 mt-1">{note.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
