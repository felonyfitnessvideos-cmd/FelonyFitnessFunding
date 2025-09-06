import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      {/* GLOBAL NAV */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-20 px-6 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer With Us</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Volunteers are the backbone of Felony Fitness. Whether you’re leading workouts, 
          mentoring participants, or lending your skills behind the scenes, your time and 
          energy make transformation possible.
        </p>
      </section>

      {/* OPPORTUNITIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Coaching</h2>
          <p className="text-gray-400">
            Help lead fitness classes and teach healthy living habits that empower our participants.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mentorship</h2>
          <p className="text-gray-400">
            Provide guidance, accountability, and encouragement to justice-impacted individuals.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Community Support</h2>
          <p className="text-gray-400">
            Assist with events, outreach, and operations to keep our programs running strong.
          </p>
        </div>
      </section>

      {/* GETINVOLVED CALL */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started</h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          Ready to make a difference? Fill out our volunteer interest form and we’ll reach out with next steps.
        </p>
        <Link
          to="/volunteerform"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Volunteer Today
        </Link>
      </section>


{/* CTA BoardOfDirectors */}
<section className="bg-gray-900 py-16 px-6 text-center">
  <h2 className="text-2xl font-bold mb-4">Join Our Board of Directors</h2>
  <p className="text-gray-300 max-w-2xl mx-auto mb-6">
    Felony Fitness is in the process of becoming a California nonprofit 
    corporation. We're looking for passionate, mission-driven leaders 
    to serve on our Founding Board of Directors. 
    If you believe in second chances, community wellness, and the power 
    of fitness, we’d love to hear from you.
  </p>
  <Link
    to="/board"
    className="inline-block bg-indigo-600 hover:bg-indigo-700 
               text-white font-semibold py-3 px-6 rounded-2xl shadow-lg"
  >
    Learn More & Apply
  </Link>
</section>


       {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}