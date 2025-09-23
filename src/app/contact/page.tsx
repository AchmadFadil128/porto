'use client';

export default function ContactPage() {
  const contactMethods = [
    {
      name: "Email",
      value: "hello@example.com",
      icon: "✉️"
    },
    {
      name: "GitHub",
      value: "github.com/username",
      icon: "💻"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/username",
      icon: "💼"
    },
    {
      name: "Twitter",
      value: "@username",
      icon: "🐦"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Get In Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h2>
          <p className="text-blue-900 mb-8">
            I'm currently available for freelance work and open to new opportunities. 
            Feel free to reach out if you'd like to collaborate on a project or just want to connect!
          </p>
          
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start">
                <span className="text-2xl mr-4">{method.icon}</span>
                <div>
                  <h3 className="font-bold text-blue-800">{method.name}</h3>
                  <p className="text-blue-900">{method.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Me a Message</h2>
          <form className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-blue-800 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-blue-800 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-blue-800 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this regarding?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-blue-800 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}