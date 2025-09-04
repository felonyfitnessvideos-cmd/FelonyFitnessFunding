// src/pages/Programs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Programs() {
  const programs = [
    {
      title: "Group Fitness Classes",
      description:
        "Structured classes that build strength, resilience, and accountability in a supportive group environment.",
    },
    {
      title: "Outdoor Experiences",
      description:
        "Trail runs, 5/10ks, beach outings, and community sports leagues that promote fitness and connection.",
    },
    {
      title: "Nutrition Counseling",
      description:
        "Personalized coaching on healthy eating, meal prep, and building sustainable nutrition habits.",
    },
    {
      title: "Personal Training",
      description:
        "One-on-one sessions tailored to fitness goals and unique reentry challenges.",
    },
    {
      title: "Certification Pathways",
      description:
        "Pathways for participants to become certified fitness instructors and leaders in their communities.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 pt-24 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Felony Fitness will soon launch programs designed to build strength,
          resilience, and opportunity. While these are not active yet, you can
          join our waitlist today and be among the first to participate.
        </p>
      </section>

      {/* PROGRAM TILES */}
      <section className="flex-1 py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3">{program.title}</h2>
              <p className="text-gray-400 mb-6">{program.description}</p>
            </div>
            <Button
              to="/waitlist"
              className="w-full bg-orange-500 hover:bg-orange-600 mt-auto"
            >
              Join Waitlist
            </Button>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
