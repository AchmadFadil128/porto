'use client';

import { User, Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "RESTful APIs",
    "Git & GitHub",
    "Responsive Design"
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developing modern web applications using React and Next.js with a focus on performance and user experience."
    },
    {
      role: "Junior Web Developer",
      company: "Digital Creations LLC",
      period: "2020 - 2022",
      description: "Built responsive websites for clients across various industries using HTML, CSS, and JavaScript."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2016 - 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-dark-text-primary mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            Get to know more about my journey, skills, and experiences in web development.
          </p>
        </div>
        
        {/* Profile Summary Section */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Profile Picture */}
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="relative group">
                <div className="backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl p-6 shadow-xl">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-48 h-48 flex items-center justify-center">
                    <User className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Content */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">Professional Summary</h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-dark-text-secondary leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 4 years of experience creating modern, 
                  responsive web applications. I specialize in React and Next.js ecosystems, with a strong 
                  focus on delivering exceptional user experiences.
                </p>
                <p>
                  My approach combines technical expertise with an eye for design, ensuring that the 
                  applications I build are not only functional but also visually appealing and intuitive 
                  to use.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open 
                  source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">Work Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="group backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap gap-4 mt-3 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                  <span className="text-gray-500 dark:text-dark-text-secondary">•</span>
                  <span className="text-gray-600 dark:text-dark-text-secondary">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed">{exp.description}</p>
                
                {/* Bottom border animation */}
                <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">Education</h2>
          </div>
          
          <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-8">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary">{edu.degree}</h3>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{edu.school}</span>
                  <span className="text-gray-500 dark:text-dark-text-secondary">•</span>
                  <span className="text-gray-600 dark:text-dark-text-secondary">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical Skills Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">Technical Skills</h2>
          </div>
          
          <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="group px-5 py-3 backdrop-blur-sm bg-blue-50/80 dark:bg-dark-bg/80 border border-blue-200/50 dark:border-dark-bg/50 text-gray-900 dark:text-dark-text-primary rounded-xl font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}