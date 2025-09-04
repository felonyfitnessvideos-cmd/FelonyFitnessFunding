// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Strength, Resilience, and Second Chances
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Felony Fitness empowers justice-impacted individuals through fitness, mentorship,
              and community. Together, we’re breaking barriers and building healthier futures.
            </p>
            {/* FIXED BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition w-full sm:w-auto text-center"
              >
                Learn More
              </Link>
              <Link
                to="/support"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition w-full sm:w-auto text-center"
              >
                Support the Mission
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={logo}
              alt="Felony Fitness Logo"
              className="max-h-80 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section id="impact" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact Goals</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Felony Fitness isn’t just about workouts — it’s about transformation. 
          These are the first three steps toward rewriting what’s possible for justice-impacted lives:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Phase 1</h3>
            <p className="text-gray-400">
              Launch our pilot program, serving 100 justice-impacted clients with structured fitness and mentorship. 
              This phase proves that second chances build real strength.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Phase 2</h3>
            <p className="text-gray-400">
              Expand to reach 500 community members, adding group training and peer-led mentorship. 
              Together, we’ll multiply the impact and create a support network that lasts.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Phase 3</h3>
            <p className="text-gray-400">
              Change 1,000 lives through health, wellness, and community. 
              With our dedicated facility established, fitness becomes the foundation for lasting transformation.
            </p>
          </div>
        </div>
        <Link
          to="/impact"
          className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Learn More
        </Link>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          Felony Fitness began with a simple belief: no one should be defined only by their past. 
          What started as a grassroots effort to bring structure and discipline through fitness 
          has grown into a movement of accountability, mentorship, and second chances.
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          Our journey is just getting started. Today, we’re building programs that serve 
          justice-impacted individuals, and tomorrow, we envision community centers, 
          dedicated training facilities, and a network of support that transforms lives 
          across the nation.
        </p>
        <Link
          to="/about"
          className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Learn More
        </Link>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Programs</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          From structured fitness routines to mentorship and life skills, our programs
          provide a foundation for long-term success. We also host group fitness classes 
          and community events that bring people together and build lasting connections.
        </p>
        {/* FIXED BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/join-programs"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition w-full sm:w-auto text-center"
          >
            Join Our Programs
          </Link>
          <Link
            to="/programs"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
          <Link
            to="/events"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition w-full sm:w-auto text-center"
          >
            Upcoming Events
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="signup" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Real change takes a community. Every dollar donated, every hour volunteered, 
          and every sponsorship fuels opportunities for justice-impacted individuals to 
          rebuild stronger, healthier futures.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Donate / Invest</h3>
            <p className="text-gray-400 mb-4 flex-1">
              Support our mission directly. Donations fund fitness programs, mentorship, 
              and scholarships for those re-entering society.
            </p>
            <Link
              to="/support"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition w-full text-center"
            >
              Give Today
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Sponsor a Citizen</h3>
            <p className="text-gray-400 mb-4 flex-1">
              Directly impact one life. Cover program costs for a participant and walk 
              alongside them in their journey of transformation.
            </p>
            <Link
              to="/sponsor"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition w-full text-center"
            >
              Sponsor Now
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
            <p className="text-gray-400 mb-4 flex-1">
              Become a mentor, coach, or community advocate. Your time and skills 
              create opportunities and accountability for those who need it most.
            </p>
            <Link
              to="/volunteerform"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition w-full text-center"
            >
              Volunteer
            </Link>
          </div>
        </div>
        <Link
          to="/support"
          className="inline-block mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold shadow transition"
        >
          Learn More About How Your Support Helps
        </Link>
      </section>

      {/* BUSINESS PLAN */}
      <section id="business" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Business Plan</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Learn how Felony Fitness will scale its impact through sustainable, socially impactful business models.
        </p>
        <a
          href="/businessplan"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          View Business Plan
        </a>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
