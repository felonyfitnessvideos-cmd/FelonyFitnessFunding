import React from "react";
      import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer,
} from "recharts";
// Placeholder components for charts
const PnlChart = () => <div className="mb-6 p-4 bg-gray-800 rounded">[12-Month Profit & Loss Chart]</div>;
const CashFlowChart = () => <div className="mb-6 p-4 bg-gray-800 rounded">[Cash Flow Forecast Chart]</div>;
const BalanceSheet = () => <div className="mb-6 p-4 bg-gray-800 rounded">[Projected Balance Sheet Chart]</div>;
const BreakEvenChart = () => <div className="mb-6 p-4 bg-gray-800 rounded">[Break-Even Analysis Chart]</div>;

  const profitLossData = [
    { month: "Jan", revenue: 2500, expenses: 3000 },
    { month: "Feb", revenue: 3000, expenses: 3000 },
    { month: "Mar", revenue: 3500, expenses: 3200 },
    { month: "Apr", revenue: 4000, expenses: 3200 },
    { month: "May", revenue: 4500, expenses: 3300 },
    { month: "Jun", revenue: 5000, expenses: 3300 },
    { month: "Jul", revenue: 5500, expenses: 3400 },
    { month: "Aug", revenue: 6000, expenses: 3400 },
    { month: "Sep", revenue: 6500, expenses: 3500 },
    { month: "Oct", revenue: 7000, expenses: 3500 },
    { month: "Nov", revenue: 7500, expenses: 3600 },
    { month: "Dec", revenue: 8000, expenses: 3600 },
  ];

  const cashFlowData = [
    { month: "Jan", starting: 20000, inflow: 2500, outflow: 3000, ending: 19500 },
    { month: "Feb", starting: 19500, inflow: 3000, outflow: 3000, ending: 19500 },
    { month: "Mar", starting: 19500, inflow: 3500, outflow: 3200, ending: 19800 },
    { month: "Apr", starting: 19800, inflow: 4000, outflow: 3200, ending: 20600 },
    { month: "May", starting: 20600, inflow: 4500, outflow: 3300, ending: 21800 },
    { month: "Jun", starting: 21800, inflow: 5000, outflow: 3300, ending: 23500 },
    { month: "Jul", starting: 23500, inflow: 5500, outflow: 3400, ending: 25600 },
    { month: "Aug", starting: 25600, inflow: 6000, outflow: 3400, ending: 28200 },
    { month: "Sep", starting: 28200, inflow: 6500, outflow: 3500, ending: 31200 },
    { month: "Oct", starting: 31200, inflow: 7000, outflow: 3500, ending: 34700 },
    { month: "Nov", starting: 34700, inflow: 7500, outflow: 3600, ending: 38600 },
    { month: "Dec", starting: 38600, inflow: 8000, outflow: 3600, ending: 43000 },
  ];

  const breakEvenPoint = 35; // participants per month
  const breakEvenData = [
    { month: "Jan", participants: 30, threshold: breakEvenPoint  },
    { month: "Feb", participants: 32, threshold: breakEvenPoint  },
    { month: "Mar", participants: 33, threshold: breakEvenPoint  },
    { month: "Apr", participants: 35, threshold: breakEvenPoint  },
    { month: "May", participants: 36, threshold: breakEvenPoint  },
    { month: "Jun", participants: 38, threshold: breakEvenPoint  },
    { month: "Jul", participants: 40, threshold: breakEvenPoint  },
    { month: "Aug", participants: 42, threshold: breakEvenPoint  },
    { month: "Sep", participants: 45, threshold: breakEvenPoint  },
    { month: "Oct", participants: 48, threshold: breakEvenPoint  },
    { month: "Nov", participants: 50, threshold: breakEvenPoint  },
    { month: "Dec", participants: 52, threshold: breakEvenPoint  },
  ];

  const useOfCapital = [
    { category: "Licensing & Legal", amount: 2500 },
    { category: "Certifications", amount: 3000 },
    { category: "Brand & Marketing", amount: 4000 },
    { category: "Equipment", amount: 4500 },
    { category: "Program Development", amount: 3500 },
    { category: "Community Events", amount: 2500 },
    { category: "Merchandise", amount: 3000 },
    { category: "Contingency", amount: 3500 },
  ];

function Financials() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans p-6">
      <h2 className="text-2xl font-bold mb-4">Financials</h2>

      {/* Phase One */}
      <h3 className="text-xl font-semibold mb-2">Phase One – Startup Year (Months 0–12)</h3>
      <p className="mb-2">One-Time Startup Costs: $18,000 – $33,500</p>
      <ul className="list-disc list-inside mb-4">
        <li>Licensing & Legal: $2,000 – $3,500</li>
        <li>Certifications (CPR, PT): $2,500 – $4,000</li>
        <li>Brand & Marketing Setup: $3,000 – $5,000</li>
        <li>Portable Equipment: $3,500 – $6,000</li>
        <li>Community Events (Launch): $2,000 – $3,000</li>
        <li>Program Development: $2,500 – $4,000</li>
        <li>Initial Merchandise Run: $2,000 – $4,000</li>
        <li>Contingency Reserve: $2,500 – $4,000</li>
      </ul>
      <p className="mb-2">Recurring Monthly Costs: $18,000 – $30,000 annually</p>
      <ul className="list-disc list-inside mb-4">
        <li>Insurance: $200 – $300 / month</li>
        <li>Marketing & Digital: $400 – $600 / month</li>
        <li>Trainer/Peer Leader Stipends: $600 – $1,000 / month</li>
        <li>Community Event Budget: $200 – $400 / month</li>
        <li>Equipment Maintenance: $100 – $200 / month</li>
      </ul>
      <p className="mb-4 font-semibold">Phase One Total (Startup Year): $36,000 – $63,500</p>

      {/* Phase Two */}
      <h3 className="text-xl font-semibold mb-2">Phase Two – Expansion & Community Base (Years 1–3)</h3>
      <p className="mb-2">One-Time Expansion Costs: $58,000 – $100,000</p>
      <p className="mb-2">Annual Recurring Costs: $127,000 – $235,000</p>
      <p className="mb-4 font-semibold">Phase Two Total (Years 1–3): $185,000 – $335,000</p>

      {/* Phase Three */}
      <h3 className="text-xl font-semibold mb-2">Phase Three – Sustainability & Statewide Model (Years 3–5)</h3>
      <p className="mb-2">One-Time Growth Costs: $240,000 – $450,000</p>
      <p className="mb-2">Annual Recurring Costs: $450,000 – $780,000</p>
      <p className="mb-4 font-semibold">Phase Three Total (Years 3–5): $690,000 – $1,230,000</p>

      {/* Funding Sources */}
      <h3 className="text-xl font-semibold mb-2">Funding Sources & Use of Capital</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Crowdfunding & Micro-Grants: Early-stage proof-of-concept and outreach</li>
        <li>Foundations & Government Grants: Program expansion, staffing, community hubs</li>
        <li>Corporate Partnerships & Sponsorships: DEI initiatives, workshops, merchandise support</li>
        <li>Merchandise Sales & Digital Programs: Revenue for sustainability and scaling</li>
        <li>Founder Contribution: Time, labor, and expertise invested to launch and guide programs</li>
      </ul>
      <p className="mb-4">
        Use of Capital: Funds will be allocated to startup costs, program development, marketing, equipment, and contingency reserves to ensure a smooth launch and sustainable growth.
      </p>

     {/* Charts */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">12-Month Profit & Loss Projection</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={profitLossData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#00FF00" name="Revenue" />
            <Line type="monotone" dataKey="expenses" stroke="#FF4136" name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Cash Flow Forecast</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="starting" stroke="#8884d8" name="Starting Cash"/>
            <Line type="monotone" dataKey="inflow" stroke="#00FF00" name="Cash Inflow"/>
            <Line type="monotone" dataKey="outflow" stroke="#FF4136" name="Cash Outflow"/>
            <Line type="monotone" dataKey="ending" stroke="#FFD700" name="Ending Cash"/>
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Break-Even Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={breakEvenData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="participants" fill="#00FF00" name="Active Participants" />
            <Bar dataKey="threshold" fill="#FF4136" name="Break-Even Threshold" />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-2 text-gray-400">
          Break-even requires ~35 participants per month to cover recurring costs.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Use of Capital – Phase One</h3>
        <table className="min-w-full bg-gray-800 rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">Category</th>
              <th className="px-4 py-2 border-b border-gray-700">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {useOfCapital.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-700">
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.amount.toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2 font-bold">
                {useOfCapital.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default Financials;
