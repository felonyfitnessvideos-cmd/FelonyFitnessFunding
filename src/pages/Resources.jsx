// src/pages/Resources.jsx
import React from "react";
import { ExternalLink } from "lucide-react"; // <-- import icon
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  const partners = [
    {
      name: "Starting Over, Inc.",
      link: "https://www.startingoverinc.org/",
      desc: "A grassroots nonprofit in Southern California providing transitional housing, reentry services, and advocacy for formerly incarcerated individuals.",
      icon: "🏠", // optional emoji icon
    },
    {
      name: "Homeboy Industries",
      link: "https://homeboyindustries.org/",
      desc: "The largest gang intervention, rehabilitation, and re-entry program in the world.",
      icon: "🤝",
    },
    {
      name: "Anti-Recidivism Coalition (ARC)",
      link: "https://antirecidivism.org/",
      desc: "Supports formerly incarcerated people through housing, mentoring, and advocacy.",
      icon: "🎓",
    },
    {
      name: "Defy Ventures",
      link: "https://www.defyventures.org/",
      desc: "Entrepreneurship, leadership, and career-readiness training for people with criminal histories.",
      icon: "🚀",
    },
    {
      name: "The Last Mile",
      link: "https://thelastmile.org/",
      desc: "Provides coding, technology, and career training to justice-impacted individuals.",
      icon: "💻",
    },
    {
      name: "Prison to Employment Connection",
      link: "https://www.prisontoemploymentconnection.org/",
      desc: "Bridges the gap between employers and formerly incarcerated job seekers.",
      icon: "📈",
    },
    {
      name: "Felony Fitness",
      link: "/programs",
      desc: "Community-based fitness, mentorship, and personal development programs.",
      icon: "💪",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      {/* GLOBAL NAV */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Resources</h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            We believe in the power of community. Explore our trusted partners and 
            resources that provide support, mentorship, and opportunities for justice-impacted individuals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{partner.icon}</span>
                  <h2 className="text-xl font-semibold">{partner.name}</h2>
                </div>
                <p className="text-gray-400 mb-4">{partner.desc}</p>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
                >
                  Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* GLOBAL FOOTER */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
