import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStar } from "react-icons/fa";

export default function GrowvyFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 border-t border-gray-200">
      {/* Left Section */}
      <div className="flex flex-col items-start max-w-sm text-center md:text-left">
        <h1 className="text-3xl font-bold text-black mb-2">Growvy</h1>
        <p className="text-gray-700 mb-4">
          Optimize your business with smart asset management, growth strategies,
          and cutting-edge solutions to boost sales and efficiency with Growvy!
        </p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="text-blue-600 text-2xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="text-pink-500 text-2xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="text-blue-700 text-2xl hover:scale-110 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center md:text-left">
        <ul className="space-y-2 text-black font-medium">
          <li>• About Us</li>
          <li>• Services</li>
          <li>• <span className="font-bold">Plans & Pricing</span></li>
          <li>• <span className="font-bold">Business Solutions</span></li>
          <li>• Success Stories</li>
          <li>• Jobs</li>
        </ul>
        <div className="flex mt-4 justify-center md:justify-start text-green-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>

      {/* Right Section – Green Line Graph */}
      <div className="mt-4 md:mt-0">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path
            d="M10 90 L40 50 L60 65 L85 30"
            stroke="#00C400"
            strokeWidth="8"
            fill="none"
          />
          <polygon points="85,30 92,38 88,22" fill="#00C400" />
        </svg>
      </div>
    </footer>
  );
}
