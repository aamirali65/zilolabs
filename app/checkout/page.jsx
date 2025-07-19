'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CreditCard,
  Lock,
  CheckCircle2,
  Shield,
  Clock,
  Package
} from 'lucide-react';
import Link from 'next/link';

const Checkout = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || 'Basic';
  const price = parseFloat(searchParams.get('price')) || 999;
  const description = searchParams.get('description') || '';
  const features = searchParams.get('features') ? JSON.parse(searchParams.get('features')) : [];

  const selectedPlan = { name, price, features };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    country: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setCurrentStep(3);
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Order Details', icon: Package },
    { number: 2, title: 'Payment', icon: CreditCard },
    { number: 3, title: 'Confirmation', icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center relative z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        currentStep >= step.number ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-primary' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-1 mx-4 relative">
                        <div className="absolute inset-0 bg-gray-200 rounded-full" />
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: currentStep > step.number ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="bg-green-100 rounded-full p-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </motion.div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your purchase. We've sent a confirmation email to {formData.email}
                </p>
                <Link
                  href="/"
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary transition duration-300"
                >
                  Return to Home
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Plan</span>
                      <span className="font-semibold">{selectedPlan.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price</span>
                      <span className="font-semibold">${selectedPlan.price}</span>
                    </div>
                    {selectedPlan.features && (
                      <div className="border-t pt-6">
                        <h3 className="font-semibold mb-4">Included Features:</h3>
                        <ul className="space-y-2">
                          {selectedPlan.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total</span>
                        <span className="text-2xl font-bold text-primary">${selectedPlan.price}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Payment Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border rounded-lg pl-12"
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Billing Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        <span>256-bit SSL</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Instant Confirmation</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-primary text-white py-3 rounded-full hover:bg-primary transition disabled:opacity-50 flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Processing...
                        </>
                      ) : (
                        `Pay $${selectedPlan.price}`
                      )}
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
