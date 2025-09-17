import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TherapyScheduler from "./components/TherapyScheduler";
import PatientDashboard from "./components/PatientDashboard";
import Notifications from "./components/Notifications";
import FeedbackForm from "./components/FeedbackForm";
import DoctorDashboard from "./components/DoctorDashboard";
import Navbar from "./components/Navbar";
// Layout Components
import Footer from "./components/Footer";
import AyurvedicChatbot from "./components/AyurvedicChatbot";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#242424]">
        {/* Header/Navbar - optional */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/therapy-scheduler" element={<TherapyScheduler />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/ai" element={<AyurvedicChatbot />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
