// src/pages/BoardForm.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BoardForm() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      {/* STICKY NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-32 px-6 text-center flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Board Member Interest Form</h1>
          <p className="text-gray-300 text-lg">
            Thank you for your interest in joining the Felony Fitness Founding
            Board of Directors. Please fill out the form below to let us know more
            about your background, skills, and motivation.
            <br />
            <span className="text-indigo-400 font-semibold">
              Submissions will be tagged as “Potential Board Member.”
            </span>
          </p>
        </div>
      </section>

     {/* FORM */}
<section className="py-12 px-6">
  <div className="max-w-4xl mx-auto"> {/* wider max width for desktop */}
    <form
      action="https://formcarry.com/s/yw8yXQxWraS"
      method="POST"
      className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg"
    >
      {/* Hidden field to tag submissions */}
      <input type="hidden" name="source" value="Potential Board Member" />

      <div className="grid gap-6 md:grid-cols-2"> {/* two-column layout on medium+ screens */}
        <div>
          <label className="block text-left mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-left mb-2 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-left mb-2 font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-left mb-2 font-medium">
            Relevant Skills / Experience
          </label>
          <textarea
            name="skills"
            rows="4"
            placeholder="Tell us about your background, expertise, or experience that could support Felony Fitness."
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-left mb-2 font-medium">
            Why are you interested in joining the Board?
          </label>
          <textarea
            name="interest"
            rows="4"
            placeholder="Share why this mission resonates with you."
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
      >
        Submit Interest
      </button>
    </form>
  </div>
</section>


      {/* FOOTER */}
      <Footer />
    </div>
  );
}
