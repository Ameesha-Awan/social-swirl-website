'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-2 border-black rounded-full px-6 py-3 w-fit mx-auto mt-6 bg-white shadow-sm">
      <ul className="flex space-x-6 font-bold text-black">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/Success">Success</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        <li>
          <Link href="/Pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
}
