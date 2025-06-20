'use client';
import React from 'react';

const plans = [
  {
    title: "Basic CV Service",
    description:
      "Companies' HR teams looking for a candidate pool can access our database with advanced filters, reducing the need to post on multiple job portals.",
    cost: "Price: 30$ (9797 PKR) — Discounted: 20$ (6000 PKR) Monthly",
    benefits: [
      "200 monthly candidate searches",
      "Filter by skills, cities, experience, etc.",
      "Live chat support from experts",
    ],
  },
  {
    title: "Lead Generating",
    description:
      "Get direct qualifying candidate responses via chat. You schedule interviews — we charge only per valid approach.",
    cost: "Price: 50$ (9798 PKR) — Applies per 20 candidates",
    benefits: [
      "Post jobs directly on Growvy",
      "Filter by skills, cities, experience",
      "Guide our team to shortlist best-fit candidates",
      "Live chat support",
    ],
  },
  {
    title: "Recruitment Service",
    description:
      "Work with our recruitment specialists and your HR to plan and execute fast and effective hiring strategies.",
    cost:
      "Service Cost: 40% of first salary (for experienced candidates)\n*Only available after one subscription*",
    benefits: [
      "Post jobs freely",
      "Use filters for accurate results",
      "Initial screening interviews",
      "Direct WhatsApp coordination group",
      "Full end-to-end hiring support",
    ],
  },
];

export default function RecruitmentPlans() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-center">
      <div className="grid md:grid-cols-3 gap-6 text-left mt-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-amber-400 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-gray-700 mb-3">{plan.description}</p>
            <p className="text-black font-semibold mb-3 whitespace-pre-line">
              {plan.cost}
            </p>
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
