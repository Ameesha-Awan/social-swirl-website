'use client';

import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import RecruitmentPlans from '../components/Recuirement';
import GrowvyFooter from '../components/Footer';

function Page() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className="bg-[#e6f7e6] text-center py-12 mt-2 px-4 rounded-b-[100px] mx-auto shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Pricing</h2>
        <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base">
          &quot;Discover flexible pricing plans tailored to your needs—start growing with us today!&quot;
        </p>
      </div>

      {/* Recruitment Solution */}
      <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image src="/per.png" alt="Recruitment" width={96} height={96} />
        </div>
        <h2 className="text-4xl font-bold mb-4">Recruitment Solution</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          &quot;Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!&quot;
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
      </div>

      <RecruitmentPlans />

      {/* E-commerce Solutions */}
      <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image src="/phone1.png" alt="E-commerce" width={96} height={96} />
        </div>
        <h2 className="text-4xl font-bold mb-4">E-commerce Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          &quot;Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!&quot;
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
      </div>

      <RecruitmentPlans />

      {/* Business Solutions */}
      <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image src="/bui.png" alt="Business" width={96} height={96} />
        </div>
        <h2 className="text-4xl font-bold mb-4">Business Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          &quot;Boost your operations with our Business Plans—affordable pricing crafted to scale your company effortlessly!&quot;
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
      </div>

      <RecruitmentPlans />

      {/* Schedule Call Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/man.png" alt="Schedule Call" width={400} height={300} />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mb-4">
            Schedule Call Now
          </button>
          <p className="text-gray-700">
            Let&apos;s connect and explore how Growvy&apos;s solutions can scale your business with tailored strategies and expert support.
          </p>
        </div>
      </div>

      {/* Footer */}
      <GrowvyFooter />
    </div>
  );
}

export default Page;
