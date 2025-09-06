// src/pages/Waitlist.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FORM_URL = "https://formcarry.com/s/yw8yXQxWraS"; // Formcarry endpoint

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestType: "Event",
    itemName: "",
    notes: "",
  });

  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          interestType: "Event",
          itemName: "",
          notes: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Waitlist</h1>
          <p className="text-gray-300 mb-12">
            Fill out the form below to secure your spot for upcoming events, programs, or volunteer opportunities. We’ll notify you when new opportunities are available.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow max-w-xl mx-auto flex flex-col gap-4"
          >
            <label className="text-left">
              Name <span className="text-orange-500">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>

            <label className="text-left">
              Email <span className="text-orange-500">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>

            <label className="text-left">
              Interest Type <span className="text-orange-500">*</span>
              <select
                name="interestType"
                value={formData.interestType}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Event">Event</option>
                <option value="Program">Program</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </label>

            <label className="text-left">
              Specific Event / Program (optional)
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                placeholder="Name of the event or program"
                className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>

            <label className="text-left">
              Notes / Questions
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Optional"
                className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 inline-block px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl mt-4"
            >
              Join Waitlist
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-2" aria-live="polite">
                Thank you! You’ve been added to the waitlist.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2" aria-live="polite">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
