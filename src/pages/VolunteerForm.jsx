// src/pages/VolunteerForm.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VolunteerForm() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      {/* GLOBAL NAV */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-gray-800 py-24 px-6 text-center mt-16">
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
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
