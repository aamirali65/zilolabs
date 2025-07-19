'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image src="/assets/logo-web.png" width={1000} height={1000} alt="ZiloDigital Logo" className="h-10 w-auto" priority />
            <span className="text-xl font-bold text-primary">ZiloDigital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link href="/service" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            {/* <Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link> */}
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary transition duration-300">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="md:hidden text-gray-600 hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={{ x: isDrawerOpen ? 0 : '-100%' }}
        className="fixed top-0 left-0 h-screen w-screen bg-white z-[60] md:hidden"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/logo-web.png" width={35} height={32} alt="ZiloDigital Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-primary">ZiloDigital</span>
            </Link>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 flex-1">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-primary transition-colors text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-primary transition-colors text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-primary transition-colors text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              Services
            </Link>
            {/* <Link 
              href="/pricing" 
              className="text-gray-600 hover:text-primary transition-colors text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              Pricing
            </Link> */}
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-primary transition-colors text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-2xl hover:bg-[#d41248] transition duration-300 text-lg mt-auto"
              onClick={() => setIsDrawerOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header; 