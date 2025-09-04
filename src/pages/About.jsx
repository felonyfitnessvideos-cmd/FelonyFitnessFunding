// src/pages/About.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Instagram, Music2, Mail, Youtube, Phone } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import TeamCard from "../components/TeamCard";

export default function About() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">

      {/* STICKY NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Felony Fitness Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            <a href="#mission" className="hover:text-orange-400">Mission</a>
            <a href="#story" className="hover:text-orange-400">Our Story</a>
            <a href="#bio" className="hover:text-orange-400">Founder Bio</a>
            <a href="#values" className="hover:text-orange-400">Philosophy & Values</a>
            <a href="#team" className="hover:text-orange-400">Our Team</a>
            <a href="#vision" className="hover:text-orange-400">Vision</a>
          </div>
        </div>
      </nav>

      {/* HERO / MISSION */}
      <SectionWrapper id="mission" className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          At Felony Fitness, our mission is to bridge the gap between justice-impacted lives 
          and optimal health outcomes. We educate, inspire, and empower individuals who 
          are ready to reclaim their strength—physically, mentally, and socially. 
          Through accessible wellness education, practical instruction, and community-driven 
          support, we help build a path toward lasting change, self-respect, and a healthier future.
        </p>
      </SectionWrapper>

      {/* OUR STORY */}
      <SectionWrapper id="story" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          Felony Fitness began with the belief that fitness can be a vehicle for transformation. 
          From humble beginnings to an ambitious vision, we’ve worked to create opportunities 
          where justice-impacted individuals can rebuild their lives through strength, wellness, 
          and accountability. Our journey is just beginning — and every step forward brings us 
          closer to a healthier, more connected community.
        </p>
      </SectionWrapper>

      {/* FOUNDER BIO */}
      <SectionWrapper id="bio" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Founder Bio</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          David Jason Sharp is the founder of Felony Fitness, a platform dedicated to empowering 
          justice-impacted individuals through fitness, mentorship, and community. Drawing on 
          his own lived experiences, David understands the challenges faced by those re-entering 
          society and has turned his personal journey of transformation into a mission to help 
          others reclaim their strength—physically, mentally, and socially.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          After navigating a turbulent youth marked by system involvement and personal hardship, 
          David committed himself to education and self-improvement. He earned a degree in Social 
          and Behavioral Science and a transfer degree in Sociology, and he plans to pursue a 
          Master’s in Social Journalism at the University of California, Irvine. His vision is to 
          amplify the voices of those who have been overlooked, create sustainable programs, 
          and provide tools for lasting personal and community change.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Under David’s leadership, Felony Fitness has become more than a fitness brand—it’s 
          a movement that combines wellness, accountability, and opportunity to transform lives 
          and foster resilience across Southern California.
        </p>
      </SectionWrapper>

      {/* PHILOSOPHY & VALUES */}
      <SectionWrapper id="values" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Philosophy & Values</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          At Felony Fitness, we believe that health is a human right—not a privilege reserved for the few. 
          Our philosophy is rooted in the belief that every person, regardless of their past, deserves the 
          opportunity to take control of their health and build a stronger, more empowered future. We recognize 
          the unique barriers faced by justice-impacted individuals, and we exist to break them down through 
          inclusive education, practical instruction, and powerful storytelling.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Core Values</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li><strong>Empowerment Over Judgment:</strong> We meet people where they are—without shame, stigma, or assumption.</li>
              <li><strong>Respect and Dignity:</strong> Every person has inherent worth, regardless of background.</li>
              <li><strong>Accountability and Integrity:</strong> Growth requires honesty. Progress over perfection.</li>
              <li><strong>Accessibility:</strong> Wellness is designed to be financially, culturally, and physically reachable.</li>
              <li><strong>Community First:</strong> Healing happens in community. We celebrate every small win together.</li>
              <li><strong>Consistency and Grit:</strong> Real change is built one step at a time.</li>
              <li><strong>Transformation Through Education:</strong> We teach skills that last a lifetime.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Company Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              We approach health and wellness as a transformative force—one that builds discipline, restores dignity, 
              and fuels purpose. We don't just train bodies; we rebuild lives from the inside out. Our commitment is 
              to walk beside our community, not ahead of it, fostering resilience, accountability, and hope.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* TEAM */}
      <SectionWrapper id="team" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamCard
            img="https://via.placeholder.com/150"
            name="David Sharp"
            role="Founder & Visionary"
            bio="David’s journey through personal adversity inspired the creation of Felony Fitness. His leadership ensures the mission remains rooted in resilience, empowerment, and community impact."
          />
          <TeamCard
            img="https://via.placeholder.com/150"
            name="Jordan Lee"
            role="Program Coordinator"
            bio="Jordan brings expertise in community engagement and fitness program management to ensure participants get the best guidance and support."
          />
          <TeamCard
            img="https://via.placeholder.com/150"
            name="Alex Martinez"
            role="Mentorship Lead"
            bio="Alex specializes in mentorship and life coaching, helping participants navigate challenges and stay accountable to their goals."
          />
          <TeamCard
            img="https://via.placeholder.com/150"
            name="Taylor Nguyen"
            role="Nutrition Specialist"
            bio="Taylor guides participants through healthy nutrition practices, making wellness accessible and achievable for everyone."
          />
        </div>
      </SectionWrapper>

      {/* VISION */}
      <SectionWrapper id="vision" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We envision a future where justice-impacted individuals are empowered by their progress, not defined 
          by their past. Wellness is a shared right—accessible in every neighborhood, reentry center, 
          and underserved community throughout Southern California.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Gyms become sanctuaries of transformation. Workouts build not just strength, but self-respect. 
          Nutrition programs feed not just bodies, but futures. Formerly incarcerated individuals step into 
          roles as mentors, trainers, entrepreneurs, and community leaders—proof that discipline, resilience, 
          and support can turn struggle into success.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition"
        >
          Join Us
        </a>
      </SectionWrapper>

      {/* CONTACT FOOTER */}
      <footer className="bg-gray-800 py-12 text-center text-gray-300 text-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="https://www.instagram.com/davefelonyfitness/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition">
              <Instagram className="w-5 h-5" /> @davefelonyfitness
            </a>
            <a href="https://www.tiktok.com/@felonyfitness.tiktok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition">
              <Music2 className="w-5 h-5" /> @felonyfitness.tiktok
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
        <p className="text-gray-500 mt-6">
          © {new Date().getFullYear()} Felony Fitness. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
