// src/components/Footer.jsx
import React from "react";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-center text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="https://www.instagram.com/davefelonyfitness/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Instagram className="w-5 h-5" /> @davefelonyfitness
          </a>
          <a href="https://www.tiktok.com/@felonyfitness.tiktok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition">
            <TikTokIcon className="w-5 h-5" /> @felonyfitness.tiktok
          </a>
          <a href="mailto:felonyfitness@email.com" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Mail className="w-5 h-5" /> felonyfitness@email.com
          </a>
          <a href="mailto:felony.fitness.videos@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Youtube className="w-5 h-5" /> felony.fitness.videos@gmail.com
          </a>
          <a href="tel:+19513324841" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Phone className="w-5 h-5" /> (951) 332-4841
          </a>
        </div>
      </div>
      <div className="text-gray-500 mt-6 space-y-2">
        <p>© {new Date().getFullYear()} Felony Fitness. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="/privacy-policy" className="hover:text-orange-400 transition">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms-of-use" className="hover:text-orange-400 transition">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
