// src/pages/Support.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";

export default function Support() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* STICKY NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            <a href="#donate" className="hover:text-orange-400">Donate</a>
            <a href="#sponsor" className="hover:text-orange-400">Sponsor</a>
            <a href="#volunteer" className="hover:text-orange-400">Volunteer</a>
          </div>
        </div>
      </nav>

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
        <a
          href="/sponsor"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Sponsor Now
        </a>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Volunteer</h2>
        <p className="text-gray-300 mb-6">
          Share your skills and time as a coach, mentor, or advocate. 
          Volunteers are the backbone of building lasting impact.
        </p>
        <a
          href="/volunteer"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Get Involved
        </a>
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
