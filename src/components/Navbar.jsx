// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase">
          <Link to="/impact" className="hover:text-orange-400">Impact</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/programs" className="hover:text-orange-400">Programs</Link>
          <Link to="/join-programs" className="hover:text-orange-400">Sign Up</Link>
          <Link to="/sponsor" className="hover:text-orange-400">Sponsor</Link>
          <Link to="/events" className="hover:text-orange-400">Events</Link>
          <Link to="/businessplan" className="hover:text-orange-400">Business Plan</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-sm uppercase">
          <Link to="/impact" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Impact</Link>
          <Link to="/about" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/programs" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Programs</Link>
          <Link to="/join-programs" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          <Link to="/sponsor" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Sponsor</Link>
          <Link to="/events" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/businessplan" className="block hover:text-orange-400" onClick={() => setMenuOpen(false)}>Business Plan</Link>
        </div>
      )}
    </nav>
  );
}
