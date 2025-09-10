import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Sponsor() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      {/* GLOBAL NAV */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-24 px-6 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sponsor a Citizen</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Your sponsorship provides justice-impacted individuals with access to 
          fitness programs, mentorship, and community support. Together, we can 
          turn second chances into lasting transformations.
        </p>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Impact of Sponsorship</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Every contribution makes a measurable difference. Sponsorship helps 
          cover program costs, ensures access to professional coaching, and 
          builds a supportive community.
        </p>

       {/* Responsive Images */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-12">
  <img src="/sponsor1.jpg"
    alt="Felony Fitness participant training"
    className="w-full h-56 object-cover rounded-xl shadow-lg"
  />
  <img src="/sponsor2.jpg" 
    alt="Mentorship session"
    className="w-full h-56 object-cover rounded-xl shadow-lg"
  />
   <img src="/sponsor3.jpg" 
    alt="Mentorship session"
    className="w-full h-56 object-cover rounded-xl shadow-lg"
  />
</div>




        {/* Sponsor CTA */}
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=D4X3D493UC4LA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition"
        >
          Sponsor a Citizen
        </a>

        {/* Mentor CTA */}
        <div className="mt-8">
          <Link
            to="/volunteerform"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-lg transition"
          >
            Become a Mentor
          </Link>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
