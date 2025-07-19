'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Mail, X, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Dialog = ({ isOpen, onClose, title, message, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        {/* Dialog */}
        <div
          className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4"
              style={{ backgroundColor: type === 'success' ? '#E81451' : '#EF4444' }}>
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{message}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={onClose}
              className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'Custom Software Development'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialog, setDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendAdminEmail = async (formData) => {
    try {
      await emailjs.send(
        'service_qqtcamx',
        'template_1qamfuk',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
          to_name: 'Admin',
          reply_to: formData.email,
        },
        'fwlI6YsY3P7ho3ZUc'
      );
    } catch (error) {
      console.error('Error sending admin email:', error);
      throw error;
    }
  };

  const sendUserEmail = async (formData) => {
    try {
      await emailjs.send(
        'service_qqtcamx',
        'template_5ij7f65',
        {
          name: formData.name,
          email: formData.email,
        },
        'fwlI6YsY3P7ho3ZUc'
      );
    } catch (error) {
      console.error('Error sending user email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendAdminEmail(formData);
      await sendUserEmail(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: 'Custom Software Development'
      });
      setDialog({
        isOpen: true,
        title: 'Message Sent Successfully!',
        message: 'Thank you for contacting us. We will get back to you soon.',
        type: 'success'
      });
    } catch (error) {
      setDialog({
        isOpen: true,
        title: 'Error Sending Message',
        message: 'Sorry, there was an error sending your message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Dialog
        isOpen={dialog.isOpen}
        onClose={() => setDialog(prev => ({ ...prev, isOpen: false }))}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
      />
      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get in touch with us to discuss your project requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-600">123 Tech Street, San Francisco, CA 94107</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a className="text-gray-600" href="mailto:contact.zilodigital@gmail.com">contact.zilodigital@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option>Custom Software Development</option>
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>Cloud Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300 flex items-center justify-between cursor-pointer gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact; 