'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Page Not Found</h2>
      <p className="text-xl text-blue-900 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link 
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
      >
        Go Home
      </Link>
    </div>
  );
}