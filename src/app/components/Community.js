import Image from "next/image";

export default function CommunitySection() {
  return (
    <div className="text-center px-4 py-10 max-w-6xl mx-auto">
      {/* Logo Image */}
      <div className="flex justify-center mb-4">
        <Image src="/logo1.png" alt="Growvy Logo" width={120} height={120} />
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
        Join Growvy&apos;s 50M+ Job Seeker Community &amp; Get Hired Faster!
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Build your profile, get noticed by top employers, and access exclusive job
        opportunities tailored to your skills. Your next career move starts here!
      </p>

      {/* CTA Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mb-12">
        Sign In
      </button>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
        {/* Testimonial Card */}
        {[1, 2].map((card) => (
          <div
            key={card}
            className="relative border-2 border-green-300 rounded-xl px-6 pt-12 pb-4 max-w-sm w-full"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src="/user.png"
                alt="User"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <p className="text-black font-medium mb-2 mt-12">
              Excellent Experience with Growvy.
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center gap-1 mt-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 4 ? "bg-green-600" : "bg-green-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
