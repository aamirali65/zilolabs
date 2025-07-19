'use client'
import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center text-2xl font-bold mb-6">
              <Image src="/assets/logo-white.png" className='w-auto h-10' width={1000} height={1000} alt="ZiloDigital Logo" />
              ZiloDigital
            </div>
            <p className="text-gray-400">
            At Zilo Labs, we specialize in Web Development, Social Media Marketing, and Video Editing to help brands thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Services</Link></li>
              {/* <li><Link href="/pricing" className="text-gray-400 hover:text-primary transition">Pricing</Link></li> */}
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94107</li>
              <li>contact@zilodigital.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tech insights and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary transition duration-300 flex items-center justify-between"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">&copy; 2025 ZiloDigital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/digitalzilo/" target='_blank' className="text-gray-400 hover:text-primary transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/zilodigital" target='_blank' className="text-gray-400 hover:text-primary transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/digial_zilo/" target='_blank' className="text-gray-400 hover:text-primary transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/zilodigital-official/" target='_blank' className="text-gray-400 hover:text-primary transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 