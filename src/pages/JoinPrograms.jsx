// src/pages/JoinPrograms.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";

export default function JoinPrograms() {
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

      {/* HERO / JOIN SECTION */}
      <div className="max-w-4xl mx-auto text-center pt-32 px-6">
        <h1 className="text-4xl font-bold mb-6">Join Our Programs</h1>
        <p className="text-gray-300 mb-12">
          Be part of the movement. Our programs are launching soon — sign up now 
          to get updates and reserve your spot. Together, we’ll build strength, 
          resilience, and community.
        </p>

        {/* Interest Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Group Fitness", desc: "Bootcamps, strength training, and community workouts." },
            { title: "Mentorship", desc: "Guidance from peers and leaders who’ve walked the path." },
            { title: "Community Events", desc: "Workshops, outreach, and fitness events in the community." },
          ].map((program, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-3">{program.title}</h2>
              <p className="text-gray-400 mb-4">{program.desc}</p>
              <Link
                to="/waitlist"
                className="block w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-center font-semibold transition"
              >
                I’m Interested
              </Link>
            </div>
          ))}
        </div>

        {/* Signup Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <Link
            to="/waitlist"
            className="block w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>

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
