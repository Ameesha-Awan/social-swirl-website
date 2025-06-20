'use client';

import Image from 'next/image';

export default function JobSeekerCard({
  title = "I'm a Job Seeker!",
  description = 'Looking for a job according to my skills and requirements.',
  buttonText = 'Jobs',
  imageSrc = '/job.png',
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 rounded-lg shadow-md md:gap-4">
      {/* Text Content */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0">
        <Image
          src={imageSrc}
          alt="Job Seeker Illustration"
          width={400}
          height={250}
          className="h-44 object-contain"
        />
      </div>
    </div>
  );
}
