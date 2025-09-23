'use client';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center text-gray-500">
            Profile Picture
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Hello, I'm a Developer</h1>
          <p className="text-lg text-blue-900 mb-6">
            Welcome to my portfolio website! I specialize in creating beautiful, functional web applications 
            using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-blue-800 mb-8">
            Take a look at my projects, learn more about my experience, and feel free to get in touch if 
            you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              View My Projects
            </a>
            <a 
              href="/contact" 
              className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="text-4xl text-blue-600 mb-4">💻</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Web Development</h3>
            <p className="text-blue-900">
              Creating responsive and interactive websites using modern frameworks like React and Next.js.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="text-4xl text-blue-600 mb-4">🎨</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">UI/UX Design</h3>
            <p className="text-blue-900">
              Designing intuitive user interfaces with a focus on user experience and accessibility.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="text-4xl text-blue-600 mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">API Integration</h3>
            <p className="text-blue-900">
              Building and integrating with RESTful APIs to create dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}