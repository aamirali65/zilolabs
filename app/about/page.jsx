'use client'
import React from 'react';
import { Users2, BarChart2, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { Testimonials } from '../components/testimonial';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="pt-16">
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're a team of passionate software engineers, designers, and product managers dedicated to building innovative digital solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users2,
                  title: "Expert Team",
                  description: "Our team brings years of experience in software development and digital transformation."
                },
                {
                  icon: BarChart2,
                  title: "Data-Driven",
                  description: "We make decisions based on real data and measurable results."
                },
                {
                  icon: MessageSquare,
                  title: "Agile Development",
                  description: "We follow agile methodologies to deliver high-quality software efficiently."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

     <Testimonials/>
      </main>
   
    </div>
  );
};

export default About; 