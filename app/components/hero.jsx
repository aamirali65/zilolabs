'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Send} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
       
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="hero-title text-4xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold leading-tight bg-clip-text text-transparent text-primary">
              Not Just Services Digital Magic That Works.
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl lg:text-1xl text-gray-600">
              At Zilo Labs, we specialize in Web Development, Social Media Marketing, and Video Editing to help brands thrive in the digital age. We don't just build we elevate.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="bg-primary text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full hover:bg-primary/90 transition duration-300 text-xl sm:text-xl  shadow flex items-center gap-2">
                <Send className="h-5 w-5" />
                Book Free Session
                </Link>
                <Link href="/about" className="border border-primary text-primary bg-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-primary hover:text-white transition duration-300 text-base sm:text-lg shadow">
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative hero-image">
              <div className="relative w-full h-80 md:h-96">
                <video
                  src="/assets/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection