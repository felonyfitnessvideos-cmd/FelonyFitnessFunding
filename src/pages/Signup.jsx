// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { User, Heart, Gift } from "lucide-react"; // Example icons
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react"; // Contact icons

export default function Signup() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            <Link to="/about" className="hover:text-orange-400">About</Link>
            <Link to="/programs" className="hover:text-orange-400">Programs</Link>
            <Link to="/support" className="hover:text-orange-400">Support</Link>
            <Link to="/sponsor" className="hover:text-orange-400">Sponsor</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
        <p className="text-lg text-gray-300">
          Join Felony Fitness and make a difference. Choose the way you want to contribute to our mission and help justice-impacted individuals thrive.
        </p>
      </section>

      {/* SIGNUP OPTIONS */}
      <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center hover:scale-105 transition transform">
          <User className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-4">Volunteer / Mentorship</h3>
          <p className="text-gray-300 mb-4">
            Help us with events, community outreach, coaching, or mentorship. Your time and guidance make a real impact.
          </p>
          <Link
            to="/volunteerform"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow text-center hover:scale-105 transition transform">
          <Heart className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-4">Programs</h3>
          <p className="text-gray-300 mb-4">
            Participate in fitness, wellness, and life skills programs designed for the community.
          </p>
          <Link
            to="/programs"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
          >
            Explore Programs
          </Link>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow text-center hover:scale-105 transition transform">
          <Gift className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-4">Donate / Support</h3>
          <p className="text-gray-300 mb-4">
            Contribute financially to help us expand our programs and support our mission.
          </p>
          <Link
            to="/support"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
          >
            Support Us
          </Link>
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <footer className="bg-gray-800 py-12 text-center text-gray-300 text-sm">
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
