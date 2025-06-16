import React from 'react';
import JobSeekerCard from '../components/Jobseeker';
import GrowvyFooter from '../components/Footer';
function Page() {
  const jobs = [
    "Business Developer",
    "Finance Manager",
    "Human Resource Manager",
    "Software Engineer",
    "Web Developer",
    "Graphic Designer / Ui / Ux",
    "SEO Expert",
    "Android Developer",
    "Floor Manager",
     'Sales Representative',
     'Data Entry Operator',
     'Deliver man',
     'Urdu / English Call Center Agent',
     'Morning Shift Jobs for Females',
     'Accountant'

  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-[#e6f7e6] text-center py-12 px-4 rounded-b-[100px] mx-auto shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Jobs</h2>
        <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base">
          "Join our team and shape the future—explore exciting career opportunities today!"
        </p>
      </div>

      {/* Top Buttons */}
      <div className="flex justify-center gap-8 mt-10">
        <button className="hover:bg-green-700 bg-white border border-black font-semibold py-2 px-6 rounded-full transition">
          Tech
        </button>
        <button className="bg-white border hover:bg-green-700 border-black font-semibold py-2 px-6 rounded-full transition">
          Management
        </button>
        <button className="bg-white border hover:bg-green-700 border-black font-semibold py-2 px-6 rounded-full transition">
          Human Resource
        </button>
      </div>

      {/* Secondary Buttons */}
      <div className="flex justify-center gap-8 mt-6">
        <button className="bg-white border hover:bg-green-700 border-black font-semibold py-2 px-6 rounded-full transition">
          Marketing & Sales
        </button>
        <button className="bg-white border hover:bg-green-700 border-black font-semibold py-2 px-6 rounded-full transition">
          Account & Finance
        </button>
        <button className="bg-white border hover:bg-green-700 border-black font-semibold py-2 px-6 rounded-full transition">
          Customer Services
        </button>
      </div>

      {/* Sign In Section */}
      <div className="flex flex-col items-center text-center max-w-lg mx-auto pt-16 px-4">
        <h2 className="font-bold text-4xl mb-4">
          Join Growvy’s 50M+ Job Seeker Community & Get Hired Faster!
        </h2>
        <p className="text-lg text-gray-700 mt-2 mb-8 leading-relaxed">
          Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!
        </p>
        <button className="mt-0 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
          Sign in
        </button>
      </div>

      {/* Top Jobs Section */}
      <div className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Top Jobs</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-black px-4 py-3 rounded-full"
            >
              <span className="font-semibold">{job}</span>
              <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <JobSeekerCard
          title="I’m a Job Seeker!"
          description="Looking for job according to my skills and requirements."
          buttonText="Jobs"
          imageSrc="/job.png"
        />
        <div>
      {/* Other page content */}
      <GrowvyFooter />
    </div>
      </div>
  );
}

export default Page;
