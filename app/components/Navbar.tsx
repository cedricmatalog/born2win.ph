"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-black">
              B
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Born2WinPh</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/free-webinar" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Free Webinar
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/global" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Global Students
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/free-webinar"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-yellow-500 px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
          >
            Register Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/free-webinar" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              Free Webinar
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              About
            </Link>
            <Link 
              href="/features" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/global" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md transition-colors"
            >
              Global Students
            </Link>
            <Link
              href="/free-webinar"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-base font-bold text-black hover:bg-yellow-400 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
