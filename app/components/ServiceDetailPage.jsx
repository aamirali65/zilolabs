'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft, Code, Layout, Smartphone, Shield, Zap, Palette,
  Cloud, GitBranch, Bell, CloudOff, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code, Layout, Smartphone, Shield, Zap,
  Palette, Cloud, GitBranch, Bell, CloudOff,
};

export default function ServiceDetailPage({ service }) {
  const router = useRouter();

  if (!service) {
    return <div className="text-center py-20 text-2xl">Service Not Found</div>;
  }

  return (
    <main className="min-h-screen px-4 py-8 mt-14 container mx-auto">
      <button
        onClick={() => router.push('/service')}
        className="flex items-center text-gray-600 hover:text-primary mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Services
      </button>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
            <p className="text-gray-600 text-lg my-4">{service.description}</p>
            <button
              onClick={() => router.push('/contact')}
              className="cursor-pointer bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition duration-300"
            >
              Get Started
            </button>
          </div>
          <div className="h-64 md:h-auto relative">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      {service.features && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature, index) => {
              const Icon = iconMap[feature.iconName] || Code;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow">
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <div className="bg-white p-8 rounded-xl shadow">
            <ul className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
