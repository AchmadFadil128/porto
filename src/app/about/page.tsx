'use client';

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">About Me</h1>
      
      <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 mb-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center text-gray-500">
              Profile Picture
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Professional Summary</h2>
            <p className="text-blue-900 mb-4">
              I'm a passionate frontend developer with over 4 years of experience creating modern, 
              responsive web applications. I specialize in React and Next.js ecosystems, with a strong 
              focus on delivering exceptional user experiences.
            </p>
            <p className="text-blue-900 mb-4">
              My approach combines technical expertise with an eye for design, ensuring that the 
              applications I build are not only functional but also visually appealing and intuitive 
              to use.
            </p>
            <p className="text-blue-900">
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
              <h3 className="text-xl font-bold text-blue-800">{exp.role}</h3>
              <div className="flex flex-wrap justify-between mb-2">
                <span className="text-blue-600 font-medium">{exp.company}</span>
                <span className="text-blue-900">{exp.period}</span>
              </div>
              <p className="text-blue-900">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Education</h2>
        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-blue-800">{edu.degree}</h3>
              <div className="flex flex-wrap justify-between mb-2">
                <span className="text-blue-600 font-medium">{edu.school}</span>
                <span className="text-blue-900">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Technical Skills</h2>
        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}