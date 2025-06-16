import React from 'react'
import ServicesSection from '../components/Sevice1'
import JobSeekerCard from '../components/Jobseeker'
import Employee from '../components/Employee'
import GrowvyFooter from '../components/Footer'
function Service() {
  return (
    <div>
        <ServicesSection />
        <div className="text-center">
  <h2 className="text-4xl font-extrabold mb-4">
    Join over 10k users worldwide
  </h2>
  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
    View Pricing
  </button>
</div>
<JobSeekerCard
          title="Problems in Hiring"
          description="Companies spend high $$$ budgets
          on job portals like Indeed and
          LinkedIn, only to receive low-quality
          CVs and irrelevant applicants,
          making hiring slow and inefficient."
          buttonText="Start now"
          imageSrc="/woman.png"
        />
        <Employee
        title="With Growvy Solution"
        description="With Growvy Solution
        With Growvy, businesses can access a
        database of active job seekers who
        have recently joined for job search.
        Use advanced filters to find the right
        candidates quickly and at a fraction of
        the cost—no wasted budget, just
        quality hires!"
        buttonText="Start now"
        imageSrc="/the.png"
      />
      <JobSeekerCard
          title="E-commerce
          Business"
          description="E-commerce businesses struggle
          with high marketing costs,
          inefficient operations, and slow
          growth, making it difficult to scale
          and maximize profits."
          buttonText="Start now"
          imageSrc="/tri.png"
        />
        <Employee
        title="With Growvy Solution"
        description="Growvy helps e-commerce
        businesses streamline operations,
        manage assets, and implement smart
        growth strategies to boost sales and
        efficiency—all at a low cost with
        proven results."
        buttonText="Start now"
        imageSrc="/grow.png"
      />
     <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      {/* Image on the left */}
      <div style={{ flex: '0 0 auto' }}>
      <img
            src="man.png"
            alt="Growth Arrow"
            className="w-[500px] md:w-[400px] h-auto m-2"
          />
      </div>

      {/* Text on the right */}
      <div className='text-center md:text-left max-w-md ml-28'>
      <button className="mt-0 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
            Schedule Call Now
          </button>
        <p>
          Here is some descriptive text that appears on the right side of the image.
          You can customize this text as needed.
        </p>
      </div>
    </div>
    <GrowvyFooter />
    </div>
  )
}

export default Service