'use client';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div className="pb-12">
      {/* Blue curved Services header */}
      <div className="relative">
        <div className="bg-[#e6f7e6] text-center py-12 px-4 rounded-b-[100px] mx-auto shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Services</h2>
          <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base">
            At Growvy, we provide innovative, cost-effective solutions to help businesses and professionals thrive.
          </p>
        </div>
      </div>

      {/* Service Cards with buttons below */}
      <div className="mt-16 px-4 md:px-20 flex flex-col md:flex-row justify-center gap-10">
        {/* Hiring Card */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-black text-center shadow-md max-w-xs w-full">
            <div className="w-20 h-20 mx-auto mb-3 relative">
              <Image src="/per.png" alt="Hiring" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-black mb-2 text-lg">Hiring</h3>
            <p className="text-gray-700 mb-2 text-sm">
              Access a vast talent pool to hire the right candidates quickly and affordably.
            </p>
          </div>
          <button className="mt-3 bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold hover:bg-green-600 transition">
            Plans
          </button>
        </div>

        {/* E-commerce Card */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-black text-center shadow-md max-w-xs w-full">
            <div className="w-20 h-20 mx-auto mb-3 relative">
              <Image src="/phone1.png" alt="E-commerce" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-black mb-2 text-lg">E-commerce</h3>
            <p className="text-gray-700 mb-2 text-sm">
              Drive expansion with targeted strategies and market-driven solutions.
            </p>
          </div>
          <button className="mt-3 bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold hover:bg-green-600 transition">
            Plans
          </button>
        </div>

        {/* Business Card */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-black text-center shadow-md max-w-xs w-full">
            <div className="w-20 h-20 mx-auto mb-3 relative">
              <Image src="/bui.png" alt="Business" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-black mb-2 text-lg">Business</h3>
            <p className="text-gray-700 mb-2 text-sm">
              Optimize and manage business resources with data-backed insights.
            </p>
          </div>
          <button className="mt-3 bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold hover:bg-green-600 transition">
            Plans
          </button>
        </div>
      </div>
    </div>
  );
}
