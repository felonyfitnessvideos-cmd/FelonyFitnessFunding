// src/pages/Volunteer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";

export default function Volunteer() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
          </Link>
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

      {/* SIGNUP CALL */}
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
