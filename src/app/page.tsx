'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Settings } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: Code, title: "Web Development", description: "Creating responsive and interactive websites using modern frameworks like React and Next.js." },
    { icon: Palette, title: "UI/UX Design", description: "Designing intuitive user interfaces with a focus on user experience and accessibility." },
    { icon: Settings, title: "API Integration", description: "Building and integrating with RESTful APIs to create dynamic web applications." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`flex flex-col lg:flex-row items-center min-h-[80vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Section */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1">
                <div className="bg-slate-900 rounded-full p-8 w-64 h-64 flex items-center justify-center">
                  <div className="text-6xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                    DEV
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 group">
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-pink-600 rounded-full transition-all duration-300 hover:scale-110 group">
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 lg:pl-16 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Hello, I'm a
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  DevOps Engginer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Welcome to my digital universe! I craft beautiful, functional web applications 
                using cutting-edge technologies. Let's build something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    View My Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === index;
              
              return (
                <div 
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onMouseEnter={() => setActiveSkill(index)}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl blur opacity-25 transition-opacity duration-500 ${
                    isActive ? 'opacity-75' : 'group-hover:opacity-50'
                  }`}></div>
                  
                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                    <div className={`text-5xl mb-6 transition-all duration-500 ${
                      isActive ? 'text-purple-400 scale-110' : 'text-gray-400 group-hover:text-cyan-400'
                    }`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {skill.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                    
                    <div className={`mt-4 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded transition-all duration-500 ${
                      isActive ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-50'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-slate-800 px-12 py-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with innovative solutions and cutting-edge technology.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}