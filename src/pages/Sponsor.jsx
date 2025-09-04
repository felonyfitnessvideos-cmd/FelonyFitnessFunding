// src/pages/Sponsor.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";

export default function Sponsor() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-sm uppercase">
            <Link to="/about" className="hover:text-orange-400">About</Link>
            <Link to="/programs" className="hover:text-orange-400">Programs</Link>
            <Link to="/support" className="hover:text-orange-400">Support</Link>
            <Link to="/sponsor" className="hover:text-orange-400">Sponsor</Link>
            <Link to="/volunteer" className="hover:text-orange-400">Volunteer</Link>
            <Link to="/business-plan" className="hover:text-orange-400">Business Plan</Link>
          </div>
        </div>
      </nav>

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

        {/* Placeholder for future images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
          <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
          <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
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

      {/* CONTACT FOOTER */}
      <footer className="bg-gray-800 py-12 text-center text-gray-300 text-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/davefelonyfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Instagram className="w-5 h-5" /> @davefelonyfitness
            </a>
            <a
              href="https://www.tiktok.com/@felonyfitness.tiktok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Music2 className="w-5 h-5" /> @felonyfitness.tiktok
            </a>
            <a
              href="mailto:felonyfitness@email.com"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Mail className="w-5 h-5" /> felonyfitness@email.com
            </a>
            <a
              href="mailto:felony.fitness.videos@gmail.com"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Youtube className="w-5 h-5" /> felony.fitness.videos@gmail.com
            </a>
            <a
              href="tel:+19513324841"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <Phone className="w-5 h-5" /> (951) 332-4841
            </a>
          </div>
        </div>
        <p className="text-gray-500 mt-6">
          © {new Date().getFullYear()} Felony Fitness. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
