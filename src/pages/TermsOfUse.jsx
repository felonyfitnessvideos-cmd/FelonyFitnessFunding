// src/pages/TermsOfUse.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-500 mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the Felony Fitness website and services, you agree to be bound 
                by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Use of Services</h2>
              <p className="mb-3">When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Respect the rights of other users</li>
                <li>Not engage in any harmful or illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the 
                property of Felony Fitness and protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                Felony Fitness provides fitness and wellness information for educational purposes. 
                We are not liable for any injuries or damages resulting from participation in our 
                programs. Always consult with a healthcare professional before beginning any exercise program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Program Participation</h2>
              <p className="mb-3">By participating in Felony Fitness programs, you acknowledge that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Physical activity involves inherent risks</li>
                <li>You are physically capable of participating</li>
                <li>You will follow all safety guidelines and instructions</li>
                <li>You assume responsibility for your own safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be 
                effective immediately upon posting. Your continued use of our services constitutes 
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Use, please contact us at{' '}
                <a href="mailto:felonyfitness@email.com" className="text-orange-500 hover:text-orange-400">
                  felonyfitness@email.com
                </a>
              </p>
            </section>

            <section className="text-sm text-gray-400 pt-8 border-t border-gray-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">
                These are placeholder terms of use. Comprehensive terms will be finalized with legal 
                counsel before the official launch of Felony Fitness.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
