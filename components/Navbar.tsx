"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg py-4 px-6 text-2xl font-ubuntu fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">DevXperts</h1>
        </Link>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-blue-600  font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600 transition duration-300">Services</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 transition duration-300">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700 text-xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 text-center">
          <li className="py-2">
            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="py-2">
            <Link href="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="py-2">
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li className="py-2">
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
