// src/pages/Home.jsx

import { Link } from "react-router-dom";
import { FaBrain, FaUserMd, FaSpa, FaHeartbeat } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-6 md:px-20 text-center md:text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              AyurSutra 🌿 <br /> Personalized Ayurveda with AI
            </h1>
            <p className="text-lg text-gray-100">
              Discover your unique dosha balance, get AI-driven Ayurvedic
              insights, and connect with trusted Ayurveda doctors.
            </p>
            <Link
              to="/dashboard"
              className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
              alt="Ayurveda Illustration"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why Choose <span className="text-green-600">AyurSutra?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <FaBrain className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">AI Dosha Prediction</h3>
            <p className="text-gray-600 text-sm mt-2">
              Analyze your body-mind type with AI for accurate dosha insights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <FaHeartbeat className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Personalized Therapy</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get lifestyle, yoga, and herbal therapy recommendations tailored
              to you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <FaUserMd className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Doctor Consultation</h3>
            <p className="text-gray-600 text-sm mt-2">
              Connect with certified Ayurveda doctors for expert guidance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <FaSpa className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Holistic Wellness</h3>
            <p className="text-gray-600 text-sm mt-2">
              Experience Ayurveda’s power in daily health, stress relief, and
              balance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-green-600 to-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Begin Your Wellness Journey</h2>
        <p className="text-lg mb-6">
          Join AyurSutra today and let AI-powered Ayurveda transform your
          health.
        </p>
        <Link
          to="/dashboard"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Explore Dashboard
        </Link>
      </section>
    </div>
  );
};

export default Home;
