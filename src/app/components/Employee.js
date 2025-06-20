'use client';

import Image from "next/image";

export default function Employee({
  title = "I&apos;m an Employer!",
  description = "Looking for talented candidates for my company.",
  buttonText = "Post a job",
  imageSrc = "/emp.png",
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-3 md:p-10 rounded-lg shadow-md">
      
      {/* Image Section */}
      <div className="mb-6 md:mb-0 md:mr-2">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src={imageSrc}
            alt="Employer Illustration"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-md pl-1">
        <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
