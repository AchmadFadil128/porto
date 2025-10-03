'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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
        ? 'backdrop-blur-md bg-white/80 dark:bg-dark-bg-secondary/80 border-b border-gray-200/50 dark:border-dark-bg/50 shadow-lg' 
        : 'backdrop-blur-sm bg-white/60 dark:bg-dark-bg-secondary/60 border-b border-gray-100/50 dark:border-dark-bg/50'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="rounded-xl transition-all duration-300">
                <img src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} alt="profile" className="w-10 h-10 text-white rounded-xl" />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-dark-text-primary group-hover:text-blue-600 transition-colors duration-300">
              Achmad Fadil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`relative py-2.5 px-5 font-medium transition-all duration-300 rounded-xl ${
                    pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-dark-bg/50'
                      : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-bg/30'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Bottom border animation for active */}
                  {pathname === item.path && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
            
            {/* Theme Toggle */}
          </ul>

          {/* CTA Button and Theme Toggle for mobile */}
          <div className="flex items-center space-x-2">
            
            {/* Theme Toggle for desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl backdrop-blur-md bg-white/60 dark:bg-dark-bg-secondary/60 border border-gray-200/50 dark:border-dark-bg/50 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-bg/80 transition-all duration-200 shadow-sm"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? 'bg-blue-50 dark:bg-dark-bg/50 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-dark-bg/50'
                    : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-bg/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold text-white text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              Let's Talk
            </Link>
            
            {/* Mobile Theme Toggle */}
            <div className="px-5 py-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}