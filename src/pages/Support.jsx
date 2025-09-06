// src/pages/Support.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Support() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      {/* GLOBAL NAV */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Support the Mission</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Every contribution fuels transformation. Whether you give financially, 
          sponsor a participant, or volunteer your time, you’re helping justice-impacted 
          individuals build strength, resilience, and a new future.
        </p>
      </section>

      {/* CROWD FUNDING LINKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contribute Through Our Campaigns</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://gofund.me/8c796497"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
          >
            GoFundMe
          </a>
          <a
            href="https://patreon.com/cw/FelonyFitness"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold shadow transition"
          >
            Patreon
          </a>
          <a
            href="#indiegogo"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold shadow transition"
          >
            Indiegogo (Coming Soon)
          </a>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Donate</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Your contribution helps fund fitness programs, mentorship, and community 
          resources for justice-impacted individuals. Every dollar goes directly 
          toward creating second chances.
        </p>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=D4X3D493UC4LA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Donate Securely
        </a>
      </section>

      {/* SPONSOR */}
      <section id="sponsor" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sponsor a Citizen</h2>
        <p className="text-gray-300 mb-6">
          Cover the cost of program participation for one or more individuals. 
          Your sponsorship makes second chances possible.
        </p>
        <Link
          to="/sponsor"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Sponsor Now
        </Link>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Volunteer</h2>
        <p className="text-gray-300 mb-6">
          Share your skills and time as a coach, mentor, or advocate. 
          Volunteers are the backbone of building lasting impact.
        </p>
        <Link
          to="/volunteer"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Get Involved
        </Link>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
