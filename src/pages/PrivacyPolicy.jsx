// src/pages/PrivacyPolicy.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-500 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p>
                At Felony Fitness, we are committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, and safeguard your personal information when you visit 
                our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Demographic information</li>
                <li>Information you provide through forms and surveys</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about programs and events</li>
                <li>Send newsletters and marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information, 
                please contact us at{' '}
                <a href="mailto:felonyfitness@email.com" className="text-orange-500 hover:text-orange-400">
                  felonyfitness@email.com
                </a>
              </p>
            </section>

            <section className="text-sm text-gray-400 pt-8 border-t border-gray-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">
                This is a placeholder privacy policy. A comprehensive policy will be finalized 
                before the official launch of Felony Fitness.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
