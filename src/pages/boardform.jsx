import React from "react";

export default function BoardForm() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* HERO */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Board Member Interest Form</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Thank you for your interest in joining the Felony Fitness Founding
          Board of Directors. Please fill out the form below to let us know more
          about your background, skills, and motivation.  
          <br />
          <span className="text-indigo-400 font-semibold">
            Submissions will be tagged as “Potential Board Member.”
          </span>
        </p>
      </section>

      {/* FORM */}
      <section className="py-12 px-6 max-w-2xl mx-auto">
        <form
          action="https://formcarry.com/s/yw8yXQxWraS"
          method="POST"
          className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          {/* Hidden field to tag submissions */}
          <input
            type="hidden"
            name="source"
            value="Potential Board Member"
          />

          <div>
            <label className="block text-left mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-left mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-left mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
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

          <div>
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

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            Submit Interest
          </button>
        </form>
      </section>
    </div>
  );
}
