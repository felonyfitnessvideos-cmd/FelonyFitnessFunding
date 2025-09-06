// src/pages/Board.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Board() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      {/* STICKY NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-32 px-6 text-center flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Join Our Founding Board of Directors</h1>
          <p className="text-gray-300 text-lg">
            Felony Fitness is on a mission to empower justice-impacted individuals
            through health, fitness, and mentorship. We are forming our Founding
            Board of Directors as we incorporate as a California nonprofit and
            apply for 501(c)(3) status.
          </p>
        </div>
      </section>

      {/* ABOUT BOARD */}
      <section className="py-16 px-6 max-w-4xl mx-auto flex flex-col gap-12 flex-grow">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Why a Board Matters</h2>
          <p className="text-gray-300">
            Our Board of Directors will guide Felony Fitness as we launch,
            helping shape strategy, provide governance, and build credibility
            with the community. Founding board members are the backbone of our
            future growth.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">What We’re Looking For</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Community leaders passionate about second chances</li>
            <li>Fitness professionals who believe in wellness for all</li>
            <li>Advisors with nonprofit, legal, or financial expertise</li>
            <li>Anyone who wants to help justice-impacted people thrive</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">What’s Expected of Board Members</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Attend 2–4 board meetings per year (virtual or in person)</li>
            <li>Offer guidance and feedback on strategy and programs</li>
            <li>Be listed as a founding director in nonprofit filings</li>
            <li>Advocate for our mission in your community</li>
          </ul>
          <p className="text-gray-400 text-sm mt-2">
            *At this early stage, there is no fundraising or financial
            requirement to join.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl font-semibold">Apply to Join</h2>
          <p className="text-gray-300 max-w-lg">
            If you believe in our mission and want to help us build a strong
            foundation, apply today to join our Founding Board of Directors.
          </p>
          <Link
            to="/boardform"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
