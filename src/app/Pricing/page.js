import React from 'react'
import RecruitmentPlans from '../components/Recuirement'
import GrowvyFooter from '../components/Footer'

function page() {
  return (
    <div>
        <div className="bg-[#e6f7e6] text-center py-12 px-4 rounded-b-[100px] mx-auto shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Pricing</h2>
        <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base">
          ""Discover flexible pricing plans tailored to your needs—start growing with us today!""
        </p>
      </div>
      <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
      <div className="flex justify-center mb-4">
  <img
    src="/per.png" // use relative or public path
    alt="Growth Arrow"
    className="w-24 md:w-32 h-auto"
  />
</div>
<div >
        <h2 className="text-4xl font-bold mb-4">Recruitment Solution</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          "Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
        </div>
      </div>
      <RecruitmentPlans />
      <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
      <div className="flex justify-center mb-4">
  <img
    src="/phone1.png" // use relative or public path
    alt="Growth Arrow"
    className="w-24 md:w-32 h-auto"
  />
</div>
<div >
        <h2 className="text-4xl font-bold mb-4">E-commerce Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        "Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"  </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
        </div>
        </div>
        <RecruitmentPlans />
        <div className="mb-10 px-4 py-12 max-w-7xl mx-auto text-center">
      <div className="flex justify-center mb-4">
  <img
    src="/bui.png" // use relative or public path
    alt="Growth Arrow"
    className="w-24 md:w-32 h-auto"
  />
</div>
<div >
        <h2 className="text-4xl font-bold mb-4">Business Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        "Boost your online store with our E-commerce Plans—affordable pricing crafted to scale
your business effortlessly!</p>  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Plans
        </button>
        </div>
        </div>
        <RecruitmentPlans />
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
    <div>
      {/* Other page content */}
      <GrowvyFooter />
    </div>
    </div>
  )
}

export default page