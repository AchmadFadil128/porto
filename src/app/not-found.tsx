'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-3xl shadow-lg p-12">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or may have been moved.
            </p>
            <Link 
              href="/"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}