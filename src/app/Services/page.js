import React from 'react';
import ServicesSection from '../components/Sevice1';
import JobSeekerCard from '../components/Jobseeker';
import Employee from '../components/Employee';
import GrowvyFooter from '../components/Footer';

function Service() {
  return (
    <div>
      <ServicesSection />

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-extrabold mb-4">Join over 10k users worldwide</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
          View Pricing
        </button>
      </div>

      {/* Hiring Problem */}
      <JobSeekerCard
        title="Problems in Hiring"
        description="Companies spend high $$$ budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient."
        buttonText="Start now"
        imageSrc="/woman.png"
      />

      {/* Growvy Hiring Solution */}
      <Employee
        title="With Growvy Solution"
        description="With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!"
        buttonText="Start now"
        imageSrc="/the.png"
      />

      {/* E-commerce Problem */}
      <JobSeekerCard
        title="E-commerce Business"
        description="E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits."
        buttonText="Start now"
        imageSrc="/tri.png"
      />

      {/* Growvy E-commerce Solution */}
      <Employee
        title="With Growvy Solution"
        description="Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results."
        buttonText="Start now"
        imageSrc="/grow.png"
      />

      {/* Call to Action Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12">
        {/* Image */}
        <div>
          <img
            src="/man.png"
            alt="Growth Arrow"
            className="w-[400px] h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-md">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mb-4">
            Schedule Call Now
          </button>
          <p className="text-gray-700">
            Let's connect and explore how Growvy can solve your hiring and business challenges. Our team is ready to help you scale.
          </p>
        </div>
      </div>

      <GrowvyFooter />
    </div>
  );
}

export default Service;
