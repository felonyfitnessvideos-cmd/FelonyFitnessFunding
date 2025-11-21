// src/components/Footer.jsx
import React from "react";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";

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
            @felonyfitness.tiktok
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
