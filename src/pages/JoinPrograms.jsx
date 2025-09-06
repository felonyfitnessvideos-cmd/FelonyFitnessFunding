// src/pages/JoinPrograms.jsx
import React from "react";
import { Link } from "react-router-dom";
import { User, Heart, Gift } from "lucide-react"; // Icons
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinPrograms() {
  const programOptions = [
    {
      icon: <User className="w-12 h-12 mx-auto mb-4 text-orange-500" />,
      title: "Volunteer / Mentorship",
      desc: "Help with events, community outreach, coaching, or mentorship. Your time and guidance make a real impact.",
      link: "/volunteerform",
      linkText: "Sign Up",
    },
    {
      icon: <Heart className="w-12 h-12 mx-auto mb-4 text-orange-500" />,
      title: "Programs",
      desc: "Participate in fitness, wellness, and life skills programs designed for the community.",
      link: "/waitlist",
      linkText: "Join Waitlist",
    },
    {
      icon: <Gift className="w-12 h-12 mx-auto mb-4 text-orange-500" />,
      title: "Donate / Support",
      desc: "Contribute financially to help us expand our programs and support our mission.",
      link: "/support",
      linkText: "Support Us",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO */}
        <section className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-lg text-gray-300">
            Join Felony Fitness and make a difference. Choose the way you want to contribute to our mission and help justice-impacted individuals thrive.
          </p>
        </section>

        {/* ICON-BASED CARDS */}
<section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
  {programOptions.map((option, i) => (
    <div
      key={i}
      className="bg-gray-800 p-6 rounded-lg shadow text-center flex flex-col hover:scale-105 transition transform"
    >
      {option.icon}
      <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{option.desc}</p>
      <Link
        to={option.link}
        className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition mt-auto"
      >
        {option.linkText}
      </Link>
    </div>
  ))}
</section>


        {/* WAITLIST / STAY UPDATED */}
        <section className="py-16 px-6 max-w-lg mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Our programs are launching soon — sign up now to get updates and reserve your spot!
            </p>
            <Link
              to="/waitlist"
              className="block w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
