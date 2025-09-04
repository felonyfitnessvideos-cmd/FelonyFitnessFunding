// src/pages/Impact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impact() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <Navbar />

      {/* HERO / PAGE TITLE */}
      <section className="bg-gray-800 py-24 px-6 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Quarterly Impact Reports</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          See how Felony Fitness is transforming lives each quarter. These reports provide
          insights into program outcomes, community engagement, and success stories.
        </p>
      </section>

      {/* IMPACT REPORTS */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Q1 2025</h2>
          <p className="text-gray-400 mb-4">
            Highlights, outcomes, and stories from our first quarter programs.
          </p>
          <a
            href="/pdfs/impact-report-q1-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            View Report
          </a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Q2 2025</h2>
          <p className="text-gray-400 mb-4">
            Highlights, outcomes, and stories from our second quarter programs.
          </p>
          <a
            href="/pdfs/impact-report-q2-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            View Report
          </a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Q3 2025</h2>
          <p className="text-gray-400 mb-4">
            Highlights, outcomes, and stories from our third quarter programs.
          </p>
          <a
            href="/pdfs/impact-report-q3-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            View Report
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
