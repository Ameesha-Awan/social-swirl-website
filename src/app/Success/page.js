import React from "react";
import Image from "next/image";
import CommunitySection from "../components/Community";
import GrowvyFooter from "../components/Footer";

function Page() {
  return (
    <div>
      <div className="bg-[#e6f7e6] text-center py-12 px-4 rounded-b-[100px] mx-auto shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Success</h2>
        <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base">
          "Discover inspiring Success Stories—see how our solutions empower businesses to thrive!"
        </p>
      </div>

      <div className="text-center px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Join over 10k Clients worldwide
        </h2>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mb-10">
          View Pricing
        </button>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <Image src="/echo.png" alt="Echonet" width={200} height={60} />
          <Image src="/easypaisa.png" alt="E Logo" width={100} height={50} />
          <Image src="/bird.png" alt="Bird Logo" width={100} height={50} />
          <Image src="/motive.png" alt="Motive" width={100} height={80} />
        </div>
      </div>

      <div>
        <CommunitySection />
      </div>
      <GrowvyFooter />
    </div>
  );
}

export default Page;
