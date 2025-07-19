'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Target, Rocket, Users2, BarChart2, Sparkles, Zap, Brain, CheckCircle2, Send, MessageSquare, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceComponent from '../components/serviceComponent';
import HeroSection from '../components/hero';
import { ProjectSection } from '../components/project';
import { Testimonials } from '../components/testimonial';
import Chatbot from '../components/chatbot';


const Home = () => {
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [countedStats, setCountedStats] = useState({
    projects: 0,
    satisfaction: 0,
    developers: 0,
    years: 0
  });
  const statsRef = useRef(null);

  

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Users2, target: 150 },
    { number: "95%", label: "Client Satisfaction", icon: Trophy, target: 95 },
    { number: "50+", label: "Expert Developers", icon: Target, target: 50 },
    { number: "10+", label: "Years Experience", icon: Rocket, target: 10 }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (statsInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const interval = duration / steps;

      const counters = {
        projects: setInterval(() => {
          setCountedStats(prev => ({
            ...prev,
            projects: Math.min(prev.projects + Math.ceil(150 / steps), 150)
          }));
        }, interval),
        satisfaction: setInterval(() => {
          setCountedStats(prev => ({
            ...prev,
            satisfaction: Math.min(prev.satisfaction + Math.ceil(95 / steps), 95)
          }));
        }, interval),
        developers: setInterval(() => {
          setCountedStats(prev => ({
            ...prev,
            developers: Math.min(prev.developers + Math.ceil(50 / steps), 50)
          }));
        }, interval),
        years: setInterval(() => {
          setCountedStats(prev => ({
            ...prev,
            years: Math.min(prev.years + Math.ceil(10 / steps), 10)
          }));
        }, interval)
      };

      // Clear intervals after animation completes
      setTimeout(() => {
        Object.values(counters).forEach(interval => clearInterval(interval));
      }, duration);

      return () => {
        Object.values(counters).forEach(interval => clearInterval(interval));
      };
    }
  }, [statsInView]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection/>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12" />
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {index === 0 && `${countedStats.projects}+`}
                  {index === 1 && `${countedStats.satisfaction}%`}
                  {index === 2 && `${countedStats.developers}+`}
                  {index === 3 && `${countedStats.years}+`}
                </h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {service section} */}
      {/* Services Section */}
  <ServiceComponent/>

      {/* Projects Section */}
    <ProjectSection/>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity with data-driven strategies to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Innovative Solutions",
                description: "Cutting-edge strategies that set you apart from the competition."
              },
              {
                icon: Zap,
                title: "Fast Results",
                description: "Quick implementation and measurable outcomes for your business."
              },
              {
                icon: Brain,
                title: "Expert Team",
                description: "Dedicated professionals with years of industry experience."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="">
       
         {/* About Section */}
         <section className="py-20 bg-gray-50">
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
      </main>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
          <Link href="/contact"> Contact Us </Link>
          </button>
        </div>
      </section>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your booking request. Our team will contact you shortly to confirm your consultation.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Help Center Chat Bot */}
      <Chatbot />
    
    </>
  );
};

export default Home; 