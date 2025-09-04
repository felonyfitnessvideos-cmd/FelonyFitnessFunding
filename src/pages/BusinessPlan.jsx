// src/pages/BusinessPlan.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BusinessPlan() {
  const [activeTab, setActiveTab] = useState("executive");

  const tabs = [
  { id: "executive", label: "Executive Summary" },
  { id: "company", label: "Company Description" },
  { id: "goals", label: "Goals & Milestones" },
  { id: "target", label: "Target Market" },
  { id: "competitors", label: "Industry/Competitors" },
  { id: "products", label: "Products & Services" },
  { id: "limits", label: "Limits & Liabilities" },
  { id: "marketing", label: "Marketing Plan" },        // <- added
  { id: "financials", label: "Financials" },          // <- added
];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-800 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Felony Fitness Business Plan</h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Explore our mission, programs, target market, and roadmap to empower justice-impacted individuals through fitness, wellness, and community support.
        </p>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="bg-gray-800 p-8 rounded-lg shadow mb-12 space-y-6 overflow-y-auto max-h-[80vh]">
          {activeTab === "executive" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
              <p className="mb-4">
                Felony Fitness is a Southern California-based fitness and wellness startup
                empowering justice-impacted individuals through structured, trauma-informed health programs.
              </p>
              <p className="mb-4">
                Programs include reentry-focused fitness classes, trauma-informed health coaching, nutrition education, and peer-led trainer certification. Free or low-cost access ensures inclusivity.
              </p>
              <p>
                Our 5-year goal: serve 1,000+ clients, operate wellness hubs, license curriculum statewide, and influence policy through data-backed advocacy.
              </p>
            </div>
          )}

          {activeTab === "company" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Company Description & Philosophy</h2>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="mb-4">
                Bridge the gap between justice-impacted lives and optimal health outcomes, empowering individuals physically, mentally, and socially.
              </p>
              <h3 className="text-xl font-semibold mb-2">Core Values</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Empowerment Over Judgment</li>
                <li>Respect and Dignity</li>
                <li>Accountability and Integrity</li>
                <li>Accessibility</li>
                <li>Community First</li>
                <li>Consistency and Grit</li>
                <li>Transformation Through Education</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p>
                A future where justice-impacted individuals are empowered by progress, wellness is accessible to all, and communities are revitalized through health and opportunity.
              </p>
            </div>
          )}

          {activeTab === "goals" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Goals & Milestones</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">6-Month Milestones</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Finalize brand mission, philosophy, and visual identity</li>
                <li>Launch website & social media</li>
                <li>Develop flagship programs for justice-impacted clients</li>
                <li>Partner with reentry organizations</li>
                <li>Host first fitness events/workshops</li>
                <li>Secure initial funding</li>
                <li>Recruit certified trainers with lived experience</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">1-Year Milestones</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Serve 100+ clients</li>
                <li>Refine operations, tracking, feedback</li>
                <li>Expand partner network</li>
                <li>Offer speaking engagements</li>
                <li>Begin certification track for client coaches</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">3-Year Milestones</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Secure dedicated wellness hub</li>
                <li>Hire full-time staff</li>
                <li>Serve 1,000+ clients across SoCal</li>
                <li>Develop online curriculum for partners</li>
                <li>Host annual Felony Fitness Conference</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">5-Year Milestones</h3>
              <ul className="list-disc list-inside">
                <li>Expand to other urban centers</li>
                <li>Create licensed Felony Fitness certification program</li>
                <li>Secure multi-year funding</li>
                <li>Publish long-term impact reports</li>
                <li>Influence policy with data-driven advocacy</li>
              </ul>
            </div>
          )}

          {activeTab === "target" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Target Market</h2>
              <h3 className="text-xl font-semibold mb-2">Primary Audience</h3>
              <p className="mb-4">
                Justice-impacted adults (men & women) in Southern California facing systemic barriers to health: lack of access to fitness, chronic health conditions, low income, trauma, mental health struggles, and disconnection from community support.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key Characteristics</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Age 18–50 (some up to 60)</li>
                <li>Low-income or underemployed</li>
                <li>Varied education levels</li>
                <li>Urban & underserved neighborhoods</li>
                <li>Ready for change, seeking structure & motivation</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Behavioral Traits</h3>
              <ul className="list-disc list-inside mb-4">
                <li>High resilience & adaptability</li>
                <li>Distrust of traditional institutions</li>
                <li>Respond well to peer-led instruction</li>
                <li>Motivated by discipline, loyalty & visible progress</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Secondary Audiences</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Reentry & rehabilitation organizations</li>
                <li>Families of justice-impacted individuals</li>
                <li>Employers & trade programs</li>
                <li>Health & wellness advocates</li>
                <li>Justice-impacted coaches & mentors</li>
              </ul>
            </div>
          )}

          {activeTab === "competitors" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Industry / Competitors</h2>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>ARC</strong>: Large reentry org; strong partnerships & funding; gap: specialized fitness/wellness focus
                </li>
                <li>
                  <strong>Defy Ventures</strong>: Entrepreneurship focus, structured pipeline; gap: physical transformation & health focus
                </li>
                <li>
                  <strong>Fit2Serve</strong>: Jail access, grassroots reach; gap: branded, mission-driven post-release continuity
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Legal Structure / Ownership</h3>
              <ul className="list-disc list-inside">
                <li>Phase 1 (0-12 months): LLC</li>
                <li>Phase 2 (12-24 months): 501(c)(3) nonprofit arm</li>
                <li>Phase 3 (3–5 years): Scale with public & state funding</li>
              </ul>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Products & Services</h2>
              <p className="mb-4">Felony Fitness offers mission-driven programs and social enterprise services:</p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Reentry Fitness & Wellness Programs</strong>: Group fitness tailored to recently incarcerated, free/low-income options.</li>
                <li><strong>Trauma-Informed Health Coaching</strong>: Personalized fitness, nutrition, and habit guidance.</li>
                <li><strong>Nutrition & Lifestyle Education</strong>: Budget-friendly, practical workshops & guides.</li>
                <li><strong>Train the Trainer / Peer Coach Certification</strong>: Employment & mentorship pathway.</li>
                <li><strong>Branded Apparel & Gear</strong>: Revenue & community visibility.</li>
                <li><strong>Paid Speaking Engagements & Workshops</strong>: Schools, companies, youth programs.</li>
                <li><strong>Fitness Challenges & Events</strong>: Community-building and fundraising.</li>
                <li><strong>Digital Coaching Platform (Long-Term)</strong>: Free & paid tiers, app-based workouts.</li>
                <li><strong>Program Licensing</strong>: Tools for other nonprofits and reentry centers.</li>
                <li><strong>Corporate / Public Partnerships</strong>: Workforce & wellness programs with social impact.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Unique Features & Benefits</h3>
              <ul className="list-disc list-inside">
                <li>Justice-impacted design, built by and for participants</li>
                <li>Mobile & modular program delivery</li>
                <li>“Rebuild Mode” training framework</li>
                <li>Whole-person wellness with street credibility</li>
                <li>Peer-led coaching pipeline</li>
              </ul>
            </div>
          )}

         {activeTab === "limits" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Limits & Liabilities</h2>
    <p className="mb-4">Felony Fitness recognizes potential legal, financial, operational, and brand risks:</p>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Legal</strong>: Premises liability, trainer liability, employee conduct, data privacy, ADA compliance, contractor misclassification.</li>
      <li><strong>Business/Financial</strong>: Funding limitations, scaling challenges, insurance & bonding requirements.</li>
      <li><strong>Brand Risk & Public Perception</strong>: Misunderstanding of mission, stigma.</li>
      <li><strong>Operational</strong>: Program safety, facility/equipment maintenance, worker injuries.</li>
      <li><strong>Market Access</strong>: Restrictions from institutions or government agencies.</li>
      <li><strong>Intellectual Property</strong>: Trademark & branding protection.</li>
    </ul>
  </div>
)}

{activeTab === "marketing" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Marketing Plan (Placeholder)</h2>
    <p className="text-gray-300">
      The Marketing Plan will be added here. You can outline strategies for outreach, social media, partnerships, community engagement, and promotions.
    </p>
  </div>
)}

{activeTab === "financials" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Financials (Placeholder)</h2>
    <p className="text-gray-300">
      The Financials section will be added here. Include revenue streams, pricing models, projected income, expenses, funding needs, and growth forecasts.
    </p>
  </div>
)}


          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
