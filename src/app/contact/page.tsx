'use client';

import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const contactMethods = [
    {
      name: "Email",
      value: "hello@example.com",
      icon: Mail,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      value: "github.com/username",
      icon: Github,
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/username",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Twitter",
      value: "@username",
      icon: Twitter,
      color: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm currently available for freelance work and open to new opportunities. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Feel free to reach out if you'd like to collaborate on a project or just want to connect!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div 
                    key={index} 
                    className="group backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${method.color} rounded-xl shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                          {method.name}
                        </h3>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
            <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-3xl shadow-lg p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900"
                  placeholder="What's this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}