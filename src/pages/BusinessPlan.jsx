import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Financials from "../components/Financials"; // adjust path as needed


export default function BusinessPlan() {
  const [agreed, setAgreed] = useState(false);
  const [activeTab, setActiveTab] = useState("executive");

  const handleAgree = () => setAgreed(true);
  const handleDecline = () => {
    alert("You must agree to access this business plan.");
    // optional redirect: window.location.href = "/";
  };

  const tabs = [
    { id: "executive", label: "Executive Summary" },
    { id: "company", label: "Company Description" },
    { id: "goals", label: "Goals & Milestones" },
    { id: "target", label: "Target Market" },
    { id: "competitors", label: "Industry/Competitors" },
    { id: "products", label: "Products & Services" },
    { id: "limits", label: "Limits & Liabilities" },
    { id: "marketing", label: "Marketing Plan" },
    { id: "financials", label: "Financials" },
  ];

  // Show modal if user hasn’t agreed
  if (!agreed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Confidentiality Agreement</h2>
          <p className="mb-4">
  The reader acknowledges that any information provided by David Sharp in this business plan, other than information that is publicly available, is confidential. Any disclosure or use of this information without express written permission from David Sharp may cause harm or damage. By clicking "Agree," the reader agrees not to share, distribute, or reproduce any confidential content. Upon request, the reader will promptly return or delete any copies of this business plan.
</p>
<p className="mb-6">
  This business plan is for informational purposes only and does not imply an offering of securities.
</p>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleDecline}
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Decline
            </button>
            <button
              onClick={handleAgree}
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  }

  

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
       <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8"> {/* added mt-6 for spacing */}
  {tabs.map((tab) => (
    <button
      key={tab.id}
      className={`px-6 py-2 rounded-lg font-semibold transition 
        ${activeTab === tab.id 
          ? "bg-orange-500 text-white shadow-md" // add slight shadow for contrast
          : "bg-gray-700 text-gray-200 hover:bg-gray-600"} // slightly lighter hover and text
      `}
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
      Felony Fitness is a mission-driven, Southern California-based fitness and wellness startup dedicated to empowering justice-impacted individuals through structured, trauma-informed health programs. We blend physical fitness, mental resilience, and life skills training to provide formerly incarcerated men and women with the tools they need to rebuild their lives, reclaim their health, and re-enter society with confidence and purpose.
    </p>
    <p className="mb-4">
      Our core offerings include reentry-focused fitness classes, trauma-informed health coaching, nutrition education tailored for underserved communities, and a peer-led trainer certification pathway that equips participants to become mentors and fitness professionals. Felony Fitness offers trauma-informed fitness programming with a tiered membership model that ensures justice-impacted individuals receive free access for their first 90 days post-release, followed by low-income support and affordable public options. These programs are delivered through mobile units, partner facilities, and eventually, our flagship community gym and digital platform.
    </p>
    <p className="mb-4">
      Felony Fitness addresses a unique and underserved population facing multiple barriers to wellness: limited access to fitness resources, high rates of chronic illness, systemic stigma, and the psychological effects of incarceration. We meet these challenges head-on with accessible, community-rooted programming that reframes fitness as a vehicle for redemption, structure, and opportunity.
    </p>
    <p className="mb-4">
      Over the next five years, our goal is to scale regionally and statewide, transforming Felony Fitness into a replicable model of health equity and reentry support. Within one year, we aim to serve over 100 justice-impacted clients and establish key partnerships with reentry centers, nonprofits, and public agencies. By year three, we plan to operate a dedicated wellness hub and serve over 1,000 clients across Southern California. By year five, we will license our curriculum, certify peer trainers statewide, and influence health and criminal justice policy through data-backed advocacy.
    </p>
    <p className="mb-4">
      Felony Fitness is uniquely positioned at the intersection of wellness, social justice, and workforce development. Our competitors—such as ARC, Defy Ventures, and Fit2Serve—focus on broader reentry services or limited wellness offerings. In contrast, our holistic, fitness-first approach and peer-led coaching pipeline make us the only brand that fully integrates health transformation with vocational empowerment for this population.
    </p>
    <p className="mb-4">
      The management team is led by founder David Sharp, supported by mentors, advisors, and staff with lived experience. Our organizational structure allows for early LLC operation with plans to evolve into a hybrid nonprofit/public funding model. Initial funding will come from grants, sponsorships, and crowdfunding, with long-term revenue supported by program licensing, merchandise, and speaking engagements.
    </p>
    <p>
      Felony Fitness is more than a gym—it’s a movement. We are redefining what it means to be strong after incarceration. Our brand signals transformation, not punishment. And our mission is clear: to build stronger communities by rebuilding the individuals society has left behind—one rep, one meal, one mindset at a time.
    </p>
  </div>
)}



          {activeTab === "company" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Company Description & Philosophy</h2>

    <h3 className="text-xl font-semibold mb-2">Mission</h3>
    <p className="mb-4">
      At Felony Fitness, our mission is to bridge the gap between justice-impacted lives and optimal health outcomes. 
      We educate, inspire, and empower individuals who are ready to reclaim their strength—physically, mentally, and socially. 
      Through accessible wellness education, practical instruction, and community-driven support, we help build a path toward lasting change, self-respect, and a healthier future.
    </p>

    <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
    <p className="mb-4">
      At Felony Fitness, we believe that health is a human right—not a privilege reserved for the few. Our philosophy is rooted in the belief that every person, regardless of their past, deserves the opportunity to take control of their health and build a stronger, more empowered future. 
      We recognize the unique barriers faced by justice-impacted individuals, and we exist to break them down through inclusive education, practical instruction, and powerful storytelling.
    </p>
    <p className="mb-4">
      We approach health and wellness as a transformative force—one that builds discipline, restores dignity, and fuels purpose. We don't just train bodies; we rebuild lives from the inside out. Our commitment is to walk beside our community—not ahead of it—as we build a culture of resilience, accountability, and hope.
    </p>

    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Empowerment Over Judgment:</strong> We meet people where they are—without shame, stigma, or assumption. We empower through education, not correction.</li>
      <li><strong>Respect and Dignity:</strong> Every person has inherent worth. We treat all individuals with the same respect we’d want for ourselves, regardless of background or circumstance.</li>
      <li><strong>Accountability and Integrity:</strong> Growth requires honesty. We hold ourselves and our participants to a high standard—not perfection, but progress.</li>
      <li><strong>Accessibility:</strong> Wellness should never be out of reach. We design our programs to be financially, culturally, and physically accessible to those often left behind.</li>
      <li><strong>Community First:</strong> Healing happens in community. We foster supportive networks that uplift each other and celebrate every small win along the way.</li>
      <li><strong>Consistency and Grit:</strong> Real change is built one rep, one meal, one day at a time. We encourage relentless perseverance, even when the path is hard.</li>
      <li><strong>Transformation Through Education:</strong> We teach skills that last a lifetime—from fitness and nutrition to mindset and motivation—because knowledge is a key that unlocks freedom.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Vision</h3>
    <p>
      We envision a future where justice-impacted men and women are no longer defined by their past, but empowered by their progress. 
      Wellness becomes a shared right—accessible in every neighborhood, prison reentry center, and underserved community throughout Southern California. In this vision, prosperity is redefined—not simply as wealth, but as health, dignity, self-sufficiency, and purpose.
    </p>
    <p>
      We see gyms turned into sanctuaries of transformation. Workouts that build not just strength, but self-respect. Nutrition programs that feed not just bodies, but futures. Formerly incarcerated individuals stepping into roles as mentors, trainers, entrepreneurs, and community leaders—proof that discipline, resilience, and support can turn struggle into success.
    </p>
    <p>
      For our participants, prosperity means freedom—freedom from chronic illness, shame, limiting beliefs, and the cycle of recidivism. For our coaches and staff, it means meaningful careers driven by purpose. For our partners and supporters, it means measurable impact. For our communities, it means revitalization—fewer hospital visits, stronger families, safer streets, and an empowered culture of wellness and self-reliance.
    </p>
    <p>
      Felony Fitness will be a model of what’s possible when society stops throwing people away and starts building them up. We aim to spark a movement that shifts the narrative around health, healing, and justice—one rep, one meal, one conversation at a time.
    </p>
  </div>
)}


          {activeTab === "goals" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Goals & Milestones</h2>

    <h3 className="text-xl font-semibold mt-4 mb-2">6-Month Milestones (Foundation Phase)</h3>
    <p className="mb-2"><strong>Primary Goal:</strong> Establish brand identity, secure community trust, and begin serving clients.</p>
    <ul className="list-disc list-inside mb-4">
      <li>Finalize brand mission, philosophy, values, and visual identity</li>
      <li>Launch website and basic social media presence with storytelling content</li>
      <li>Develop 2–3 flagship fitness/wellness programs tailored for justice-impacted clients (e.g., reentry fitness bootcamp, trauma-informed coaching)</li>
      <li>Partner with 2–3 reentry organizations, halfway houses, or parole programs</li>
      <li>Host first in-person or virtual fitness events or workshops</li>
      <li>Secure initial funding (grants, donations, crowdfunding, local sponsors)</li>
      <li>Begin collecting testimonials and early impact metrics</li>
      <li>Recruit 1–2 certified trainers or mentors with lived experience</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">1-Year Milestones (Validation & Expansion Phase)</h3>
    <p className="mb-2"><strong>Primary Goal:</strong> Grow reach, validate impact, and refine operations.</p>
    <ul className="list-disc list-inside mb-4">
      <li>Serve at least 100 justice-impacted clients through regular programming</li>
      <li>Build and refine systems for intake, tracking, and feedback</li>
      <li>Expand partner network to include local nonprofits, legal aid orgs, and health clinics</li>
      <li>Develop a scalable nutrition and fitness curriculum with print and digital options</li>
      <li>Offer paid speaking/workshop engagements to reframe narratives around reentry and wellness</li>
      <li>Begin a certification or internship track for clients to become coaches/mentors</li>
      <li>Apply for larger-scale public or private grants</li>
      <li>Launch a branded merchandise line or fundraising products to support operations</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">3-Year Milestones (Sustainability & Scaling Phase)</h3>
    <p className="mb-2"><strong>Primary Goal:</strong> Deepen impact, build infrastructure, and prepare to scale regionally.</p>
    <ul className="list-disc list-inside mb-4">
      <li>Secure a dedicated training facility or wellness hub in a central SoCal location</li>
      <li>Hire full-time program staff (admin, outreach, nutritionist, certified trainers)</li>
      <li>Serve 1,000+ clients cumulatively across Los Angeles, Inland Empire, and San Diego counties</li>
      <li>Develop and publish an open-source or paid online curriculum for partner organizations</li>
      <li>Host annual Felony Fitness Conference or Wellness Summit</li>
      <li>Establish a reentry wellness coalition with other orgs, funders, and local governments</li>
      <li>Pilot programs inside county jails, reentry centers, or drug courts</li>
      <li>Begin documenting long-term health outcomes, recidivism reduction, and employment impact</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">5-Year Milestones (Legacy Phase)</h3>
    <p className="mb-2"><strong>Primary Goal:</strong> Cement Felony Fitness as a statewide model for reentry wellness.</p>
    <ul className="list-disc list-inside">
      <li>Expand to other urban centers (Bay Area, Central Valley, or Los Angeles for potential next sites)</li>
      <li>Create a licensed Felony Fitness certification program for former inmates to become coaches</li>
      <li>Secure multi-year funding from public health agencies or national foundations</li>
      <li>Publish an impact report showing long-term success rates, employment stats, and health outcomes</li>
      <li>Influence public health and criminal justice policy with data-driven advocacy</li>
      <li>Be featured in a national media outlet, health equity journal, or documentary</li>
    </ul>
  </div>
)}

          {activeTab === "target" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Target Market</h2>

    <h3 className="text-xl font-semibold mb-2">Primary Audience</h3>
    <p className="mb-4">
      Justice-impacted adults—men and women who have been incarcerated, are currently on probation or parole, or are transitioning through reentry programs—primarily across Southern California. These individuals often face systemic barriers to health, including lack of access to fitness facilities or nutrition education, high rates of chronic health conditions (e.g., hypertension, diabetes, obesity), limited income and unstable housing, trauma, mental health struggles, and disconnection from community support systems.
    </p>

    <h3 className="text-xl font-semibold mb-2">Key Characteristics</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Age Range: 18–50 (primary), with some engagement up to age 60</li>
      <li>Income Level: Low-income or underemployed</li>
      <li>Education Level: Varies; many have not completed high school or have limited access to higher education</li>
      <li>Geography: Urban and underserved neighborhoods across Los Angeles, Riverside, San Bernardino, San Diego, and Orange counties</li>
      <li>Mindset: Ready for change, seeking structure, motivation, and a chance to rebuild physically and emotionally</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Behavioral Traits</h3>
    <ul className="list-disc list-inside mb-4">
      <li>High resilience and adaptability</li>
      <li>Often distrustful of traditional institutions</li>
      <li>Respond well to peer-led, relatable instruction</li>
      <li>Motivated by discipline, loyalty, and visible progress</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Secondary Audiences (Influencers & Allies)</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Reentry and Rehabilitation Organizations: Halfway houses, parole support programs, and reentry centers; likely partners for program referrals, space sharing, or joint grants</li>
      <li>Families of Justice-Impacted Individuals: Mothers, partners, or siblings seeking support for loved ones’ health journeys</li>
      <li>Employers and Trade Programs: Workforces open to hiring formerly incarcerated individuals pursuing a structured, healthy lifestyle</li>
      <li>Health & Wellness Advocates: Public health organizations, social justice nonprofits, or city health departments interested in health equity and recidivism reduction</li>
      <li>Justice-Impacted Coaches & Mentors: Former inmates who want to lead, inspire, and give back through health coaching or fitness instruction</li>
    </ul>
  </div>
)}

          {activeTab === "competitors" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Industry / Competitors</h2>

    <h3 className="text-xl font-semibold mb-2">1. The Anti-Recidivism Coalition (ARC)</h3>
    <p className="mb-2">Los Angeles, CA — <a href="https://antirecidivism.org" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">antirecidivism.org</a></p>
    <p className="mb-2"><strong>Why they’re relevant:</strong> ARC is one of the largest and most influential reentry organizations in California. While not specifically a fitness brand, they offer holistic support to formerly incarcerated individuals—including mental health services, education, and workforce development. They’ve begun integrating wellness and healing-focused programming, including physical fitness, yoga, and trauma-informed practices.</p>
    <p className="mb-4"><strong>Competitive Edge:</strong> Strong political partnerships and public visibility; access to funding and legislative influence; large network of reentry participants.</p>

    <h3 className="text-xl font-semibold mb-2">2. Defy Ventures – Southern California</h3>
    <p className="mb-2">Southern California chapter — <a href="https://defyventures.org" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">defyventures.org</a></p>
    <p className="mb-2"><strong>Why they’re relevant:</strong> Defy Ventures focuses on entrepreneurship and personal development for people with criminal histories. While their core isn’t fitness, they incorporate physical discipline and mindset training as part of their curriculum—similar in tone to Felony Fitness’ emphasis on grit, accountability, and self-transformation.</p>
    <p className="mb-4"><strong>Competitive Edge:</strong> National brand with SoCal roots; structured reentry-to-career pipeline; strong corporate and philanthropic backing.</p>

    <h3 className="text-xl font-semibold mb-2">3. Fit2Serve (Emerging/Local)</h3>
    <p className="mb-2">Various reentry programs and county jail partnerships (SoCal)</p>
    <p className="mb-2"><strong>Why they’re relevant:</strong> Smaller-scale, hyper-local wellness programs are popping up in jails and reentry centers—like Fit2Serve, Prison Yoga Project, and county-led fitness initiatives targeting justice-impacted populations. Though often fragmented, they pose potential competition for program partnerships and grant funding.</p>
    <p className="mb-4"><strong>Competitive Edge:</strong> Direct access to incarcerated populations; existing contracts with county/state agencies; low-cost, often volunteer-based structures.</p>

    <h3 className="text-xl font-semibold mb-2">Summary of Competitive Landscape</h3>
    <table className="table-auto border-collapse border border-gray-700 w-full text-left mb-4">
      <thead>
        <tr>
          <th className="border border-gray-700 px-2 py-1">Competitor</th>
          <th className="border border-gray-700 px-2 py-1">Strengths</th>
          <th className="border border-gray-700 px-2 py-1">Gaps Felony Fitness Can Fill</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-700 px-2 py-1">ARC</td>
          <td className="border border-gray-700 px-2 py-1">Scale, reputation, wraparound services</td>
          <td className="border border-gray-700 px-2 py-1">Specialized, scalable fitness/wellness focus</td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-2 py-1">Defy Ventures</td>
          <td className="border border-gray-700 px-2 py-1">Entrepreneurial support, funding</td>
          <td className="border border-gray-700 px-2 py-1">Physical transformation and health-centric model</td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-2 py-1">Fit2Serve/Others</td>
          <td className="border border-gray-700 px-2 py-1">Jail access, grassroots reach</td>
          <td className="border border-gray-700 px-2 py-1">Branded, mission-driven, post-release continuity</td>
        </tr>
      </tbody>
    </table>

  </div>
)}


          {activeTab === "products" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Products & Services</h2>
    <p className="mb-4">
      Felony Fitness offers mission-driven programs and social enterprise services designed to educate, instruct, and empower justice-impacted individuals.
    </p>

    <h3 className="text-xl font-semibold mb-2">Core Services (Mission-Driven)</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Reentry Fitness & Wellness Programs</strong>: Group-based fitness classes and workshops tailored for individuals recently released from incarceration. Includes strength training, functional fitness, breathwork, flexibility, and injury prevention. Delivered in reentry centers, halfway houses, shelters, mobile gyms, or virtually. Free 90-day enrollment post-release, low-income membership support, or $100 lifetime/$10 monthly options.
      </li>
      <li>
        <strong>Trauma-Informed Health Coaching</strong>: 1-on-1 or small group coaching addressing fitness, nutrition, mental resilience, and behavior change. Personalized plans for high-risk clients navigating systemic barriers.
      </li>
      <li>
        <strong>Nutrition & Lifestyle Education</strong>: Workshops, meal-prep guides, PDFs, videos, and live demos. Focused on SNAP budgets, shared kitchens, energy optimization, gut health, hydration, and avoiding relapse triggers.
      </li>
      <li>
        <strong>Train the Trainer / Peer Coach Certification (Future Offering)</strong>: Mentorship-based track that trains formerly incarcerated individuals to become certified Felony Fitness coaches, creating pathways to employment, leadership, and peer influence.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Revenue-Generating Services (Social Enterprise)</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Branded Apparel & Gear</strong>: Shirts, hoodies, resistance bands, water bottles, duffel bags, journals. Audience: alumni, supporters, community allies.
      </li>
      <li>
        <strong>Paid Speaking Engagements & Workshops</strong>: Topics like "Fitness as a Path to Redemption," "Rebuilding Discipline and Purpose After Incarceration," and "Breaking the Cycle: Health, Trauma, and Justice." Audience: schools, universities, youth programs, workforce orgs, DEI-focused companies.
      </li>
      <li>
        <strong>Fitness Challenges & Events</strong>: Examples include “The Comeback Classic,” “100 Reps for Recovery,” and alumni obstacle courses. Benefits: brand visibility, revenue, community-building.
      </li>
      <li>
        <strong>Digital Coaching Platform (Long-Term Goal)</strong>: App or membership site offering video workouts, meal plans, daily check-ins, and motivational content. Free tier for basic tools; paid tier for custom coaching, live calls, and additional resources.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Community & Partnership Services</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Program Licensing</strong>: Package Felony Fitness curriculum as a toolkit for nonprofits and reentry centers, including training materials, workouts, nutrition guides, and branding support. Revenue via subscription, licensing fees, or institutional contracts.
      </li>
      <li>
        <strong>Corporate or Public Partnerships</strong>: Workforce readiness and wellness programs with social impact, including employer wellness initiatives, community trust-building, and fitness-based engagement for law enforcement or public programs.
      </li>
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
    <p className="mb-4">
      Felony Fitness recognizes potential legal, financial, operational, and brand risks and has structured plans to mitigate them.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Legal Liabilities</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Premises Liability:</strong> Injury on-site due to unsafe conditions (wet floors, faulty equipment) requires risk management policies, inspections, and liability insurance.
      </li>
      <li>
        <strong>Personal Trainer Liability:</strong> Injuries caused by poor instruction or negligence mandate certified trainers, proper screening, client waivers, and trainer insurance.
      </li>
      <li>
        <strong>Employee Conduct & Background:</strong> Employing formerly incarcerated individuals requires careful onboarding, clear codes of conduct, and monitoring to mitigate risk.
      </li>
      <li>
        <strong>Data Privacy & Confidentiality:</strong> Client data (payment info, health records, personal history) must comply with privacy laws (HIPAA, CCPA) to avoid penalties.
      </li>
      <li>
        <strong>Independent Contractor vs. Employee Misclassification:</strong> Proper worker classification and contracts prevent IRS or Department of Labor penalties.
      </li>
      <li>
        <strong>ADA Compliance:</strong> Ensuring facility accessibility to individuals with disabilities is critical to avoid legal action and fines.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">2. Business / Financial Limits</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Funding Limitations:</strong> Traditional investors may hesitate; reliance on grants, impact investors, and public funding is required.</li>
      <li><strong>Scaling Challenges:</strong> Nonprofit or state-funded operations may slow scalability due to bureaucracy, compliance, and funding cycles.</li>
      <li><strong>Insurance & Bonding Requirements:</strong> Backgrounds of staff may limit access or increase premiums; some states require bonding for certain programs.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. Brand Risk & Public Perception</h3>
    <p className="mb-4">
      Misunderstanding the mission (e.g., stigma around hiring formerly incarcerated individuals) can limit growth. Mitigated through proactive PR, outreach, and partnerships.
    </p>

    <h3 className="text-xl font-semibold mb-2">4. Operational Liabilities</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Program Safety:</strong> Structured rehabilitation or training programs must be professionally developed to avoid physical or psychological harm. Waivers, accreditation, and expert oversight are essential.
      </li>
      <li>
        <strong>Facility & Equipment Maintenance:</strong> Logs, inspections, and timely repairs reduce risk of injury and operational shutdowns.
      </li>
      <li>
        <strong>Injury & Worker’s Compensation:</strong> Staff or clients injured during sessions require workers’ comp coverage and adherence to OSHA standards.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">5. Limits on Market Access or Partnerships</h3>
    <p className="mb-4">
      Some institutions may restrict working with organizations led by or employing formerly incarcerated individuals. Exceptions or waivers may be necessary to access schools, city contracts, or health partnerships.
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Intellectual Property & Branding</h3>
    <p>
      As the Felony Fitness brand grows (merchandise, online courses, etc.), trademarks and IP must be legally protected to prevent infringement and maintain brand integrity.
    </p>
  </div>
)}


{activeTab === "marketing" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Marketing Plan</h2>

    <h3 className="text-xl font-semibold mb-2">SWOT Overview</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Strengths:</strong> Mission-driven brand, peer-led coaching, low overhead, scalable outreach, strong redemption narrative.</li>
      <li><strong>Weaknesses:</strong> Limited initial capital and infrastructure, niche perception, early staff experience variability.</li>
      <li><strong>Opportunities:</strong> Digital/online training, expansion into prisons and reentry centers, social impact partnerships, certification programs.</li>
      <li><strong>Threats:</strong> Public stigma, liability risks, imitation by competitors, regulatory or licensing barriers.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Target Market & Positioning</h3>
    <p className="mb-4">
      Felony Fitness occupies a unique niche at the intersection of fitness, reentry support, and trauma-informed wellness. Our peer-led, low-cost programs prioritize healing, empowerment, and vocational growth. Unlike traditional gyms or broader reentry organizations, we are designed by and for justice-impacted individuals, offering culturally relevant coaching, structured certification pathways, and a bold, authentic brand.
    </p>

    <h3 className="text-xl font-semibold mb-2">Competitive Positioning</h3>
    <p className="mb-4">
      While ARC and Defy Ventures offer structured programming and strong reputations, they often lack the physical wellness component or accessible, low-cost programs. Fit2Serve is locally relevant but still emerging. Felony Fitness differentiates through peer-led coaching, trauma-informed services, vocational pathways, and a powerful mission-driven narrative.
    </p>

    <h3 className="text-xl font-semibold mb-2">Startup Phase Marketing Strategy (Months 0–12)</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Brand Storytelling:</strong> “Fitness as Redemption. Strength as Empowerment.” Use client transformation stories in social media and video content.</li>
      <li><strong>Product Launch:</strong> Apparel and merch with bold designs; QR codes link to mission content.</li>
      <li><strong>Service Promotion:</strong> Free bootcamps/workshops in reentry centers; “Sponsor a Spot” model for allies to fund participants.</li>
      <li><strong>Digital Presence:</strong> Mobile-friendly website with client intake, donations, newsletter, and merch store; targeted social ads.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Ongoing Marketing Strategy (Year 1–5)</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Product Strategy:</strong> Certification curriculum, branded training kits, licensing to nonprofits and institutions.</li>
      <li><strong>Service Strategy:</strong> Hybrid programs (in-person + virtual), corporate DEI workshops, mobile app with workouts and reentry resources.</li>
      <li><strong>Content & Advocacy:</strong> Publish annual impact reports, webinars, media outreach, thought leadership on health equity and justice reform.</li>
      <li><strong>Community Engagement:</strong> Ambassador program with trainers, alumni, and allies; influencer partnerships; annual fitness festivals.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">Strategic Positioning Summary</h3>
    <p className="mb-4">
      Felony Fitness focuses on low-cost accessibility, mission-aligned expertise, and peer-led, trauma-informed programming. Marketing channels include social media, local outreach, events, PR, partnerships, and digital advertising. By year 5, the goal is to operate both physical and digital programs across multiple cities, employ certified justice-impacted trainers, and serve as a national model for reentry through fitness and empowerment.
    </p>
  </div>
)}


{activeTab === "financials" && <Financials />}
</div>

{/* REQUEST FORM */}
<section className="bg-gray-800 px-6 py-12 sm:py-16 text-center mb-8 sm:mb-16">
  <h2 className="text-3xl font-bold mb-4">Request Full Business Plan</h2>
  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
    Interested in viewing the complete business plan? Fill out the form
    below to request access.
  </p>
  <form
    action="https://formcarry.com/s/yw8yXQxWraS"
    method="POST"
    className="max-w-lg mx-auto space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100"
    />
    <textarea
      name="message"
      placeholder="Your Message (optional)"
      className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100"
    />
    <input
      type="hidden"
      name="requestType"
      value="Requesting a Business Plan"
    />
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-colors"
    >
      Submit Request
    </button>
  </form>
</section>


        
      </section>

      <Footer />
    </div>
  );
}
