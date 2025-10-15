'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Settings, Folder } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [recentProjects, setRecentProjects] = useState<any[]>([]);
  const [loadingRecent, setLoadingRecent] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // List of roles to cycle through
  const roles = [
    "DevOps Engineer",
    "AIOps Engineer",
    "Automation Engineer"
  ];
  
  // Create duplicated projects array for infinite scrolling
  const duplicatedProjects = recentProjects.length > 0 
    ? [...recentProjects, ...recentProjects] // Duplicate the projects to ensure seamless infinite scroll
    : [];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for roles
  useEffect(() => {
    const handleTyping = () => {
      const currentRoleText = roles[currentRole];
      
      if (isDeleting) {
        // Delete text
        setCurrentText(currentRoleText.substring(0, currentText.length - 1));
        setTypingSpeed(100);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      } else {
        // Type text
        setCurrentText(currentRoleText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === currentRoleText) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentRole, roles]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setRecentProjects(Array.isArray(data) ? data.slice(0, 4) : []);
      } catch (e) {
        setRecentProjects([]);
      } finally {
        setLoadingRecent(false);
      }
    };
    fetchRecent();
  }, []);

  // Auto-scroll effect for infinite carousel with seamless looping
  useEffect(() => {
    if (recentProjects.length === 0) return;

    const container = carouselRef.current;
    if (!container) return;

    let scrollInterval: ReturnType<typeof setInterval>;

    // Function to handle auto-scrolling with seamless loop
    const autoScroll = () => {
      if (isPaused) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const originalProjectsWidth = (scrollWidth / 2); // Since we duplicated the projects
      
      if (scrollLeft >= originalProjectsWidth) {
        container.scrollTo({
          left: 0,
          behavior: 'auto'
        });
      } else {
        container.scrollBy({
          left: 250, // Scroll by a fixed amount
          behavior: 'smooth'
        });
      }
    };

    scrollInterval = setInterval(autoScroll, 3000); // Auto scroll every 3 seconds

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [recentProjects, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = 400; // Fixed scroll amount for consistency
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const originalProjectsWidth = (scrollWidth / 2); // Width of original projects set
    
    if (direction === 'right' && scrollLeft >= originalProjectsWidth) {
      // If we're past the original projects set, reset to the beginning
      container.scrollTo({
        left: 0,
        behavior: 'auto'
      });
    } else {
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const skills = [
    { icon: Code, title: "DevOps Engineer", description: "Integrates Development (Dev) and Operations (Ops) to accelerate the delivery of reliable, high-quality software through CI/CD automation." },
    { icon: Palette, title: "AIOps Engineer", description: "Applies Artificial Intelligence (AI) and Machine Learning to operational data to detect anomalies, predict incidents, and automate system responses." },
    { icon: Settings, title: "Automation Integration", description: "Designs and implements automated integration solutions to connect various systems and services, ensuring seamless and efficient data workflows." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-28 lg:pt-20 pb-20">
        {/* Hero Section */}
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 min-h-[85vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Profile Section */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-center space-y-8">
            <div className="relative group flex justify-center">
              {/* Glass effect profile container */}
              <div className="relative backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <img src="/Profile.png" alt="profile" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Social Links with glass effect */}
            <div className="w-full text-center lg:justify-start">
              <div className="inline-flex space-x-4">
                <a href="https://github.com/AchmadFadil128" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Github className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/achmad-fadil-nur-ramdhani/" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="mailto:me@achmad128.my.id" className="group p-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 hover:bg-blue-50/80 dark:hover:bg-dark-bg/80 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <Mail className="w-6 h-6 text-gray-600 dark:text-dark-text-secondary group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-dark-text-primary">
                Hello, I'm a
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {currentText}
                  <span className="ml-1 animate-ping">|</span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-dark-text-secondary leading-relaxed max-w-2xl">
                Welcome to Achmad world! I create microservices applications and also ensure that applications run smoothly through scaling. I also have an interest in writing and video editing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link href="/projects">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="flex items-center justify-center">
                      View My Projects
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    Let's Connect
                  </button>
                </Link>
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

        {/* Latest Projects Carousel */}
        <div className="mb-8 p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text-primary">Latest Projects</h2>
            <Link href="/projects" className="hidden sm:inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline">See all</Link>
          </div>

          {loadingRecent ? (
            <div className="flex gap-6 overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="min-w-[80%] sm:min-w-[55%] md:min-w-[45%] lg:min-w-[32%] backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-gray-200 dark:bg-dark-bg h-56 w-full animate-pulse"></div>
                  <div className="p-8">
                    <div className="h-7 bg-gray-200 dark:bg-dark-bg rounded-xl w-3/4 mb-4 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-dark-bg rounded-lg w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-dark-bg rounded-lg w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="flex items-center gap-6">
                <button
                  aria-label="Previous"
                  onClick={() => scrollCarousel('left')}
                  className="hidden md:flex flex-shrink-0 p-3 rounded-xl backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-bg/80 transition-all duration-200 shadow-sm z-20"
                >
                  ‹
                </button>

                {/* Carousel container with proper overflow handling */}
                <div className="flex-1 overflow-hidden">
                  <div className="py-6">
                    <div
                      ref={carouselRef}
                      className="flex gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth px-6"
                      style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <style jsx>{`
                        div::-webkit-scrollbar {
                          display: none;
                        }
                      `}</style>
                      {duplicatedProjects.map((project, index) => (
                        <Link
                          key={`${project.id}-${index}`}
                          href={`/projects/${project.slug}`}
                          className="group relative hover:z-10 snap-start flex-shrink-0 w-[85%] sm:w-[60%] md:w-[48%] lg:w-[32%] backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                          <div className="relative overflow-hidden bg-gray-100 dark:bg-dark-bg h-56">
                            {project.image_url ? (
                              <>
                                <img
                                  src={`http://localhost:3001${project.image_url}`}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = '/placeholder-image.svg';
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              </>
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-dark-text-secondary">
                                <Folder className="w-16 h-16 mb-2" />
                                <span className="text-sm">No Image</span>
                              </div>
                            )}

                            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                          </div>

                          <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed line-clamp-2">
                              {project.short_description}
                            </p>
                            <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => scrollCarousel('right')}
                  className="hidden md:flex flex-shrink-0 p-3 rounded-xl backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-bg/80 transition-all duration-200 shadow-sm z-20"
                >
                  ›
                </button>
              </div>
            </div>
          )}
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
              <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}