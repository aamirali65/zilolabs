'use client';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '../lib/servicesData';

const ServicesPage = () => {
  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Your Vision with Tailored Digital Solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110 rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-200"></p>
                <Link
                  href={`/service/${service.id}`}
                  className="mt-4 bg-white text-primary px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 flex items-center gap-2 w-fit"
                >
                  Learn More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
