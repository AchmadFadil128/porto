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
    <div className="min-h-screen bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        {/* Hero Section */}
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 min-h-[85vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Profile Section */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-center space-y-8">
              <div className="relative group flex justify-center">
                {/* Glass effect profile container */}
                <div className="relative backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <div className="text-5xl font-bold text-white">
                    DEV
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with glass effect */}
            <div className="w-full text-center lg:justify-start">
              <div className="inline-flex space-x-4">
                <a href="#" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Github className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="#" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="#" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Mail className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-dark-text-primary">
                Hello, I'm a
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  DevOps Engineer
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary leading-relaxed max-w-2xl">
                Welcome to my digital universe! I craft beautiful, functional web applications 
                using cutting-edge technologies. Let's build something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center">
                    View My Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-8 py-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-dark-text-primary">
            What I Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === index;
              
              return (
                <div 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${isActive ? 'scale-105' : 'hover:scale-105'}`}
                  onMouseEnter={() => setActiveSkill(index)}
                >
                  {/* Glass effect card */}
                  <div className={`backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${isActive ? 'border-blue-500/50 shadow-xl' : ''}`}>
                    <div className={`mb-6 transition-all duration-500 ${isActive ? 'text-blue-600 scale-110' : 'text-gray-400 dark:text-dark-text-secondary group-hover:text-blue-500'}`}>
                      <Icon className="w-14 h-14" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-4 group-hover:text-blue-600 transition-colors">
                      {skill.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                    
                    <div className={`mt-6 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action with Glass Effect */}
        <div className="mt-32 mb-20 flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 px-12 py-12 lg:py-16 rounded-3xl shadow-xl text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate and bring your vision to life with innovative solutions and cutting-edge technology.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}