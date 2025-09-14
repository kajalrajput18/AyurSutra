// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center ">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            About AyurSutra
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            AyurSutra is a modern platform that blends the **ancient wisdom of
            Ayurveda** with **cutting-edge technology**. We simplify Panchakarma
            treatment scheduling, patient management, and therapy tracking while
            staying true to Ayurveda’s authenticity.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-white leading-relaxed">
              To make Ayurvedic therapies accessible, efficient, and reliable by
              building a **digital-first Panchakarma management system**. We
              empower doctors, clinics, and patients with tools for better
              scheduling, treatment consistency, and real-time progress
              tracking.
            </p>
            <ul className="mt-6 space-y-2 text-white">
              <li>✅ Authentic Ayurvedic treatment plans</li>
              <li>✅ AI-powered Dosha prediction & therapy suggestions</li>
              <li>✅ End-to-end patient & doctor therapy tracking</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/ayurveda-concept-illustration_23-2148483044.jpg"
              alt="Ayurveda Illustration"
              className="rounded-2xl shadow-lg w-80"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
            Why Choose AyurSutra?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="font-bold text-lg text-green-600 mb-2">
                🌿 Traditional + Modern
              </h3>
              <p className="text-white">
                We combine classical Ayurvedic principles with AI-driven
                technology for effective treatments.
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-green-600 mb-2">
                ⏱ Seamless Scheduling
              </h3>
              <p className="text-white">
                Automated scheduling and notifications ensure no session is
                missed.
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-green-600 mb-2">
                📊 Real-time Tracking
              </h3>
              <p className="text-white">
                Patients and doctors can monitor therapy progress, feedback, and
                outcomes at every step.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
