'use client'
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Pricing = () => {
  const router = useRouter();

  const features = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "DevOps & CI/CD",
    "24/7 Support",
    "Project Management"
  ];

  const plans = [
    {
      name: "Basic",
      price: 799,
      description: "Perfect for small projects and startups",
      features: [0, 1, 2, 3], // Indexes of features included
      popular: false
    },
    {
      name: "Professional",
      price: 1699,
      description: "Ideal for growing businesses",
      features: [0, 1, 2, 3, 4, 5], // Indexes of features included
      popular: true
    },
    {
      name: "Enterprise",
      price: 2599,
      description: "For large-scale projects",
      features: [0, 1, 2, 3, 4, 5, 6, 7], // All features included
      popular: false
    }
  ];

  const handleGetStarted = (plan) => {
    // Transform feature indices to actual feature names
    const planWithFeatureNames = {
      ...plan,
      features: plan.features.map(index => features[index])
    };
    router.push({
      pathname: '/checkout',
      query: { plan: JSON.stringify(planWithFeatureNames) }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center">
                    {plan.features.includes(featureIndex) ? (
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-gray-300 mr-2" />
                    )}
                    <span className={plan.features.includes(featureIndex) ? "text-gray-900" : "text-gray-400"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted(plan)}
                className={`w-full py-3 rounded-full transition duration-300 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button
            onClick={() => router.push('/contact')}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default Pricing; 