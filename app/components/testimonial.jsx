'use client'
import React from 'react'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import {ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "CTO at TechCorp",
        content:
          "We needed a fast, secure backend for our CRM. Their team delivered it ahead of schedule and supported us post-launch without issues.",
       
      },
      {
        name: "Ravi Mehta",
        role: "Founder at Mehta Retail",
        content:
          "Got my ecommerce site revamped with custom features. The site runs faster, and my sales have noticeably improved. Highly professional and polite.",
      
      },
      {
        name: "Michael Chen",
        role: "Product Manager at InnovateTech",
        content:
          "They handled our app's entire frontend and API integration. Solid communication, daily updates, and clean work. Definitely bringing them on again.",
       
      },
      {
        name: "Priya Sharma",
        role: "Freelance Designer",
        content:
          "They turned my Figma designs into pixel-perfect React components. Super cooperative and always open to feedback. Really helped me meet my client deadline.",
      
      },
      {
        name: "Emma Williams",
        role: "CEO at StartupX",
        content:
          "They built our MVP in under 3 weeks with full auth, dashboard, and clean UI. Even helped us deploy to Vercel. Great experience.",
       
      },
      {
        name: "Karan Patel",
        role: "Shop Owner – Patel Electronics",
        content:
          "I wanted a simple website to showcase my products. They explained everything clearly and made it mobile-friendly. Now customers find me online easily.",
       
      },
      {
        name: "Jessica Lee",
        role: "Marketing Lead at BrightAds",
        content:
          "From landing pages to analytics setup, everything was handled smoothly. They worked well with our internal team and hit every milestone we set.",
       
      },
      {
        name: "Ankit Verma",
        role: "WordPress Freelancer",
        content:
          "I often need help with custom functionality in my projects. These guys have been reliable and quick to deliver even complex backend logic.",
        
      },
      {
        name: "Rachel Adams",
        role: "Etsy Seller – HandmadeCo",
        content:
          "They helped me launch a Shopify store that looks beautiful and converts better than my old setup. Great design sense and easy to work with.",
       
      },
      {
        name: "Neha Gupta",
        role: "UI/UX Consultant",
        content:
          "I’ve worked with many devs but their attention to design detail stood out. They actually read the brief and followed design systems properly.",
        
      }
    ];
    
      
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-6 mb-8">
            
            <div>
              <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
              <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 italic">"{testimonials[currentTestimonial].content}"</p>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
