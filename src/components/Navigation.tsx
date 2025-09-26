'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-xl' 
        : 'bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/30'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`relative py-2 px-4 font-medium transition-all duration-300 group ${
                    pathname === item.path
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  {pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-400/30"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    pathname === item.path ? 'hidden' : ''
                  }`}></div>
                  
                  {/* Bottom border animation */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                    pathname === item.path 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 border border-purple-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-medium text-white text-center transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}