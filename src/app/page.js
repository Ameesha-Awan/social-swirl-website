// app/page.jsx or pages/index.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import JobSeekerCard from './components/Jobseeker';
import Employee from './components/Employee';
import GrowvyFooter from './components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-6">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
              Maximize <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-black font-extrabold text-4xl md:text-6xl px-2">
                  business
                </span>
                <svg
                  className="absolute inset-0 w-full h-full -z-10"
                  viewBox="0 0 220 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="110" cy="30" rx="100" ry="25" stroke="#00C800" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <span className="text-green-600 text-base font-bold"> with</span> efficiency
            </h1>

            <h2 className="text-green-600 text-4xl md:text-5xl font-bold mt-4">Growvy</h2>
            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Scale your company with tailored strategies, market insights, and expert consulting.
            </p>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
              Start Today
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/gro.png" alt="Growth Arrow" width={400} height={300} />
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-10">
          &quot;Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven
          ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly.&quot;
        </p>
      </section>

      {/* Cards Section */}
      <section className="px-4 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          <JobSeekerCard
            title="I&apos;m a Job Seeker!"
            description="Looking for job according to my skills and requirements."
            buttonText="Jobs"
            imageSrc="/job.png"
          />
          <Employee
            title="I&apos;m an Employer!"
            description="Looking for talented candidates for my company."
            buttonText="Post a job"
            imageSrc="/emp.png"
          />
          <JobSeekerCard
            title="I&apos;m a E-commerce Store!"
            description="Looking for potential sales data for sales campaign."
            buttonText="Sales Data"
            imageSrc="/store.png"
          />
          <Employee
            title="I&apos;m Business!"
            description="Looking for CRM or Data resources to boost my business."
            buttonText="Business Plans"
            imageSrc="/bui.png"
          />
        </div>

        {/* Join Community */}
        <div className="flex flex-col items-center text-center max-w-lg mx-auto mt-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            Join Growvy&apos;s 50M+ Job Seeker Community &amp; Get Hired Faster!
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-8 leading-relaxed">
            Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills.
            Your next career move starts here!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
            Sign In
          </button>
        </div>
      </section>

      {/* E-commerce CTA */}
      <section className="px-4 py-16">
        <JobSeekerCard
          title="E-commerce Owner?"
          description="Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!"
          buttonText="Plans"
          imageSrc="/e.png"
        />
      </section>

      {/* Schedule Call Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 bg-white">
        <Image src="/man.png" alt="Schedule Call" width={400} height={300} />
        <div className="text-center md:text-left max-w-md">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mb-4">
            Schedule Call Now
          </button>
          <p className="text-gray-700 text-base md:text-lg">
            Let&apos;s connect and discover how Growvy can scale your company through our personalized solutions and data-driven strategies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <GrowvyFooter />
    </div>
  );
}
