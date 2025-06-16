'use client';
import React from 'react';

const plans = [
  {
    title: "Basic CV Service",
    description: `Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.`,
    cost: `Price 30$ (9797 PKR) Discount 20$ (6000 PKR) Monthly`,
    benefits: [
      "Companies can access the database with monthly 200 searches",
      "Manage Filters like Skills, Cities, Experience etc",
      "Live chat experts help"
    ]
  },
  {
    title: "Lead Generating",
    description: `Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate's approach.`,
    cost: `Price 50$ (9798 PKR) — 50$ will apply per 20 Candidates`,
    benefits: [
      "Companies can create a job post on Growvy",
      "Manage Filters like Skills, Cities, Experience etc",
      "Guide our team to shortlist best candidates",
      "Live chat experts help"
    ]
  },
  {
    title: "Recruitment Service",
    description: `Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.`,
    cost: `Price 40% of first Salary (For Experienced)\n(Can avail this package after one subscription)`,
    benefits: [
      "Client can create a job post",
      "Filters like Skills, Cities, Exp etc",
      "Minor screening interview",
      "WhatsApp group with Team",
      "Complete A–Z hiring solution"
    ]
  }
];

export default function RecruitmentPlans() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-center">
      {/* Header */}

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6 text-left mt-0">
        {plans.map((plan, index) => (
          <div key={index} className="border border-b-amber-400 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-gray-700 mb-3 whitespace-pre-line">{plan.description}</p>
            <p className="text-black font-semibold mb-3 whitespace-pre-line">Service Cost:<br />{plan.cost}</p>
            <h4 className="font-semibold mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              {plan.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full">
              Start Today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
