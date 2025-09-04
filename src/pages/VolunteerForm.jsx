// src/pages/VolunteerForm.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";

export default function VolunteerForm() {
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
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gray-800 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer Interest Form</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Fill out the form below, and our team will get back to you with next steps 
          on how you can get involved with Felony Fitness.
        </p>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form
          action="https://formcarry.com/s/eO0JqPtHbM0"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Area of Interest</label>
            <select
              name="interest"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Coaching</option>
              <option>Mentorship</option>
              <option>Community Support</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold shadow-lg transition"
          >
            Submit
          </button>
        </form>
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
